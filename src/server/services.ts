import { Status } from "@grpc/grpc-js/build/src/constants";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import {
  Metadata,
  sendUnaryData,
  ServerReadableStream,
  ServerUnaryCall,
  ServerWritableStream,
  ServiceError,
} from "@grpc/grpc-js";
import {
  GetPlanetRequest,
  GetPlanetResponse,
  Planet,
} from "../../proto/schema/planets_pb";
import { IPlanetsServer } from "../../proto/schema/planets_grpc_pb";
import { planets } from "./db";

export class PlanetsServer implements IPlanetsServer {
  [name: string]: import("@grpc/grpc-js").UntypedHandleCall;

  getPlanet(
    call: ServerUnaryCall<GetPlanetRequest, GetPlanetResponse>,
    callback: sendUnaryData<GetPlanetResponse>
  ) {
    console.log("\n/getPlanet");

    const planetId = call.request.getId();
    const planet = planets.find((p) => p.getId() === planetId);

    if (!planet) {
      const error: ServiceError = {
        name: "PlanetNotFound",
        message: `Planet with id ${planetId} not found`,
        code: Status.NOT_FOUND,
        details: `Planet with id ${planetId} not found`,
        metadata: new Metadata(),
      };

      callback(error, null);
      return;
    }

    console.log(
      `getPlanet: returning planet ${planet.getName()} with ID ${planet.getId()}`
    );
    const response = new GetPlanetResponse();
    response.setPlanet(planet);

    callback(null, response);
  }

  getPlanets(call: ServerWritableStream<Empty, Planet>) {
    console.log("\ngetPlanets: streaming planets.");

    try {
      for (const planet of planets) {
        call.write(planet);
      }
      call.end(); // End the stream once all planets are sent
    } catch (err) {
      console.error(`getPlanets: error streaming planets - ${(err as Error).message}`);

      call.destroy({
        name: "InternalError",
        message: "Error streaming planets",
      });
    }
  }

  createPlanet(
    call: ServerReadableStream<Planet, GetPlanetResponse>,
    callback: sendUnaryData<GetPlanetResponse>
  ) {
    console.log("\ncreatePlanet: creating a new planet from stream.");

    let newPlanet: Planet | null = null;

    call.on("data", async (planet) => {
      try {
        newPlanet = new Planet();
        newPlanet.setId(planets.length + 1);
        newPlanet.setName(planet.getName());
        newPlanet.setOrderfromthesun(planet.getOrderfromthesun());
        newPlanet.setHaslife(planet.getHaslife());

        planets.push(newPlanet);
      } catch (err) {
        console.error(
          `createPlanet: error processing planet - ${(err as Error).message}`
        );
        const error: ServiceError = {
          name: "InternalError",
          message: "Error processing planet",
          code: Status.INTERNAL,
          details: "Error processing planet",
          metadata: new Metadata(),
        };
        callback(error, null);
        call.destroy(); // End the stream on error
      }
    });

    call.on("error", (err) => {
      console.error(`createPlanet: stream error - ${err.message}`);
      callback(
        {
          code: Status.INTERNAL,
          message: "Error processing planet stream",
        },
        null
      );
    });

    call.on("end", () => {
      if (newPlanet) {
        const response = new GetPlanetResponse();
        response.setPlanet(newPlanet);
        console.log(
          `createPlanet: created planet ${newPlanet.getName()} with ID ${newPlanet.getId()}`
        );
        callback(null, response);
      } else {
        callback(
          {
            code: Status.INVALID_ARGUMENT,
            message: "No planet data received",
          },
          null
        );
      }
    });
  }
}
