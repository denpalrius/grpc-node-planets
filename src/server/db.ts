import {  Planet, HasLife  } from '../../proto/schema/planets_pb'
import { sunPlanets } from '../shared/data';

export function planetToClass({ id, name, orderfromthesun, haslife, motherstar }: Planet.AsObject): Planet {
    const planet = new Planet();
    planet.setId(id);
    planet.setName(name);
    planet.setOrderfromthesun(orderfromthesun);
    planet.setHaslife(haslife);
    planet.setMotherstar(motherstar);
    
    return planet;
}

export const planets: Planet[] = sunPlanets.map(planetToClass);