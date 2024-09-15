import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { Planet } from "../../proto/schema/planets_pb";
import { client } from "./utils";

export default function getAllPlanets(): Promise<Planet[]> {
  return new Promise<Planet[]>((resolve, reject) => {
    const stream = client.getPlanets(new Empty());
    const planets: Planet[] = [];

    stream.on("data", (planet) => planets.push(planet));

    stream.on("error", reject);

    stream.on("end", () => resolve(planets));
  });
}
