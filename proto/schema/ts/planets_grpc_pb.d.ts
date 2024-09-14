// GENERATED CODE -- DO NOT EDIT!

// package: planets
// file: planets.proto

import * as planets_pb from "./planets_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface IPlanetsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getPlanet: grpc.MethodDefinition<planets_pb.GetPlanetRequest, planets_pb.GetPlanetResponse>;
  getPlanets: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, planets_pb.Planet>;
  createPlanet: grpc.MethodDefinition<planets_pb.Planet, planets_pb.GetPlanetResponse>;
}

export const PlanetsService: IPlanetsService;

export interface IPlanetsServer extends grpc.UntypedServiceImplementation {
  getPlanet: grpc.handleUnaryCall<planets_pb.GetPlanetRequest, planets_pb.GetPlanetResponse>;
  getPlanets: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, planets_pb.Planet>;
  createPlanet: grpc.handleClientStreamingCall<planets_pb.Planet, planets_pb.GetPlanetResponse>;
}

export class PlanetsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getPlanet(argument: planets_pb.GetPlanetRequest, callback: grpc.requestCallback<planets_pb.GetPlanetResponse>): grpc.ClientUnaryCall;
  getPlanet(argument: planets_pb.GetPlanetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<planets_pb.GetPlanetResponse>): grpc.ClientUnaryCall;
  getPlanet(argument: planets_pb.GetPlanetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<planets_pb.GetPlanetResponse>): grpc.ClientUnaryCall;
  getPlanets(argument: google_protobuf_empty_pb.Empty, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<planets_pb.Planet>;
  getPlanets(argument: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<planets_pb.Planet>;
  createPlanet(callback: grpc.requestCallback<planets_pb.GetPlanetResponse>): grpc.ClientWritableStream<planets_pb.Planet>;
  createPlanet(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<planets_pb.GetPlanetResponse>): grpc.ClientWritableStream<planets_pb.Planet>;
  createPlanet(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<planets_pb.GetPlanetResponse>): grpc.ClientWritableStream<planets_pb.Planet>;
}
