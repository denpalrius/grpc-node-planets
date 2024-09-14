import {  Planet, HasLife  } from '../../proto/schema/ts/planets_pb'

export function planetToClass({ id, name, orderfromthesun, haslife}: Planet.AsObject): Planet {
    const planet = new Planet();
    planet.setId(id);
    planet.setName(name);
    planet.setOrderfromthesun(orderfromthesun);
    planet.setHaslife(haslife);
    
    return planet;
}

export const planets: Planet[] = [
    { id: 1, name: 'Mercury', orderfromthesun: 1, haslife: HasLife.NO },
    { id: 2, name: 'Venus', orderfromthesun: 2, haslife: HasLife.NO },
    { id: 3, name: 'Earth', orderfromthesun: 3, haslife: HasLife.YES },
    { id: 4, name: 'Mars', orderfromthesun: 4, haslife: HasLife.UNKNOWN },
    { id: 5, name: 'Jupiter', orderfromthesun: 5, haslife: HasLife.NO },
    { id: 6, name: 'Saturn', orderfromthesun: 6, haslife: HasLife.NO },
    { id: 7, name: 'Uranus', orderfromthesun: 7, haslife: HasLife.NO },
    { id: 8, name: 'Neptune', orderfromthesun: 8, haslife: HasLife.NO },
    { id: 9, name: 'Pluto', orderfromthesun: 9, haslife: HasLife.NO }, // Pluto is now a dwarf planet
    { id: 10, name: 'Ceres', orderfromthesun: 10, haslife: HasLife.NO }, // Largest object in the asteroid belt
    { id: 11, name: 'Eris', orderfromthesun: 11, haslife: HasLife.NO }, // Largest dwarf planet in the Kuiper Belt
    { id: 12, name: 'Makemake', orderfromthesun: 12, haslife: HasLife.NO }, // Second-largest dwarf planet in the Kuiper Belt
    { id: 13, name: 'Haumea', orderfromthesun: 13, haslife: HasLife.NO }, // Third-largest dwarf planet in the Kuiper Belt
    { id: 14, name: 'Quaoar', orderfromthesun: 14, haslife: HasLife.NO }, // A large Kuiper Belt object
    { id: 15, name: 'Sedna', orderfromthesun: 15, haslife: HasLife.NO }, // A distant object in the Oort Cloud
  ].map(planetToClass);