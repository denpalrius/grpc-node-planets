import { Server, ServerCredentials } from "@grpc/grpc-js";
import { PlanetsServer } from "./services";
import { PlanetsService } from "../../proto/schema/planets_grpc_pb";

const server = new Server();
server.addService(PlanetsService, new PlanetsServer());

const port = 3000;
const uri = `localhost:${port}`;

console.log(`Starting RPC server on ${uri}`);

// Bind the server to the port and start it
server.bindAsync(
  uri,
  ServerCredentials.createInsecure(),
  (error, boundPort) => {
    if (error) {
      console.error(`Server error: ${error.message}`);
      return;
    }
    console.log(`Server running at http://${uri}`);
  }
);
