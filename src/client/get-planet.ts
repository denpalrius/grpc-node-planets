import { GetPlanetRequest, Planet } from "../../proto/schema/ts/planets_pb";
import { client } from "./utils";

export default function getPlanet(id: number): Promise<Planet> {
  return new Promise<Planet>((resolve, reject) => {
    const request = new GetPlanetRequest();
    request.setId(id);
    
    client.getPlanet(request, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res?.getPlanet()!);
      }
    });
  });
}