import { planetToClass } from "../server/db";
import { getRandomExoPlanet } from "../shared/data";
import createPlanets from "./create-planet";
import getAllPlanets from "./get-all-planets";

async function run() {
    // Fetch sample planets from the RPC server
    console.log("\nFetching planets...");
    const planets = await getAllPlanets();
    console.log(`planets (${planets.length}):`, planets.map((planet) => planet.getName()).toString());

    // Get one of the planets
    console.log("\nGetting the first planet...");
    const planet = planets[0];
    console.log("planet: ", planetToClass(planet.toObject()));

    // Create a new planet
    console.log("\nAdding an exoplanet...");
    const newPlanet = planetToClass(getRandomExoPlanet());
    createPlanets([newPlanet]);
    console.log("new planet created: ", newPlanet);

    // List all planets again
    console.log("\nFetching updated planets...");
    const updatedPlanets = await getAllPlanets();
    console.log(`updated planets (${updatedPlanets.length}):`, updatedPlanets.map((p) => p.getName()));
}

run().catch((error) => {
    console.error(`Error: ${error.message}`);
});

