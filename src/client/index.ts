import { HasLife, Planet } from "../../proto/schema/ts/planets_pb";
import createPlanets from "./create-planet";
import getAllPlanets from "./get-all-planets";

async function run() {
    // Fetch sample planets from the RPC server
    const planets = await getAllPlanets();
    console.log("planets: ", planets);

    // Get one of the planets
    const planet = planets[0];
    console.log("planet: ", planet.getName());

    // Create a new planet
    const newPlanet = new Planet();
    newPlanet.setId(planets.length + 1);
    newPlanet.setName("Andromeda");
    newPlanet.setHaslife(HasLife.YES);
    newPlanet.setOrderfromthesun(16)
    createPlanets([newPlanet]);
    console.log("new planet created: ", newPlanet.getName());

    // List all planets again
    const updatedPlanets = await getAllPlanets();
    console.log("updated planets: ", updatedPlanets.map((planet) => planet.getName()));

}