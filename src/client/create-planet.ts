import { GetPlanetRequest, Planet } from "../../proto/schema/planets_pb";
import { client, noop } from "./utils";

export default function createPlanets(planets: Planet[]) {
  const stream = client.createPlanet(noop);

  for(const planet of planets) {
    stream.write(planet);
  }

  stream.end();
}