import { credentials } from "@grpc/grpc-js";
import { PlanetsClient } from "../../proto/schema/ts/planets_grpc_pb";

const port = 3000;
const host = `localhost:${port}`;

export const client = new PlanetsClient(host, credentials.createInsecure());

export const noop = () => {};