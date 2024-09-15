import { HasLife } from "../../proto/schema/planets_pb";

export const sunPlanets = [
  { id: 1, name: "Mercury", orderfromthesun: 1, haslife: HasLife.NO, motherstar: "Sun" },
  { id: 2, name: "Venus", orderfromthesun: 2, haslife: HasLife.NO, motherstar: "Sun" },
  { id: 3, name: "Earth", orderfromthesun: 3, haslife: HasLife.YES, motherstar: "Sun" },
  { id: 4, name: "Mars", orderfromthesun: 4, haslife: HasLife.UNKNOWN, motherstar: "Sun" },
  { id: 5, name: "Jupiter", orderfromthesun: 5, haslife: HasLife.NO, motherstar: "Sun" },
  { id: 6, name: "Saturn", orderfromthesun: 6, haslife: HasLife.NO, motherstar: "Sun" },
  { id: 7, name: "Uranus", orderfromthesun: 7, haslife: HasLife.NO, motherstar: "Sun" },
  { id: 8, name: "Neptune", orderfromthesun: 8, haslife: HasLife.NO, motherstar: "Sun" }
];

export const exoPlanets = [
  { id: 1, name: "Kepler-452b", orderfromthesun: 1, haslife: HasLife.UNKNOWN, motherstar: "Kepler-452" },
  { id: 2, name: "Proxima Centauri b", orderfromthesun: 1, haslife: HasLife.UNKNOWN, motherstar: "Proxima Centauri" },
  { id: 3, name: "TRAPPIST-1e", orderfromthesun: 4, haslife: HasLife.UNKNOWN, motherstar: "TRAPPIST-1" },
  { id: 4, name: "HD 209458 b", orderfromthesun: 1, haslife: HasLife.NO, motherstar: "HD 209458" },
  { id: 5, name: "Gliese 581g", orderfromthesun: 3, haslife: HasLife.UNKNOWN, motherstar: "Gliese 581" },
  { id: 6, name: "55 Cancri e", orderfromthesun: 1, haslife: HasLife.NO, motherstar: "55 Cancri" },
  { id: 7, name: "WASP-12b", orderfromthesun: 1, haslife: HasLife.NO, motherstar: "WASP-12" },
  { id: 8, name: "Kepler-22b", orderfromthesun: 1, haslife: HasLife.UNKNOWN, motherstar: "Kepler-22" },
  { id: 9, name: "HD 189733 b", orderfromthesun: 1, haslife: HasLife.NO, motherstar: "HD 189733" },
  { id: 10, name: "Kepler-186f", orderfromthesun: 1, haslife: HasLife.UNKNOWN, motherstar: "Kepler-186" },
  { id: 11, name: "GJ 1214 b", orderfromthesun: 1, haslife: HasLife.UNKNOWN, motherstar: "GJ 1214" },
  { id: 12, name: "LHS 1140 b", orderfromthesun: 1, haslife: HasLife.UNKNOWN, motherstar: "LHS 1140" },
  { id: 13, name: "Tau Ceti e", orderfromthesun: 4, haslife: HasLife.UNKNOWN, motherstar: "Tau Ceti" },
  { id: 14, name: "K2-18b", orderfromthesun: 1, haslife: HasLife.UNKNOWN, motherstar: "K2-18" },
  { id: 15, name: "Gliese 667 Cc", orderfromthesun: 3, haslife: HasLife.UNKNOWN, motherstar: "Gliese 667 C" },
  { id: 16, name: "HD 40307 g", orderfromthesun: 4, haslife: HasLife.UNKNOWN, motherstar: "HD 40307" },
  { id: 17, name: "CoRoT-7b", orderfromthesun: 1, haslife: HasLife.NO, motherstar: "CoRoT-7" },
  { id: 18, name: "Kepler-10b", orderfromthesun: 1, haslife: HasLife.NO, motherstar: "Kepler-10" },
  { id: 19, name: "HAT-P-7b", orderfromthesun: 1, haslife: HasLife.NO, motherstar: "HAT-P-7" },
  { id: 20, name: "Kepler-16b", orderfromthesun: 1, haslife: HasLife.UNKNOWN, motherstar: "Kepler-16" }
];

export function getRandomExoPlanet() {
  return exoPlanets[Math.floor(Math.random() * exoPlanets.length)];
}