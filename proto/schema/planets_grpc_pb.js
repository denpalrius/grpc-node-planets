// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var planets_pb = require('./planets_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_planets_GetPlanetRequest(arg) {
  if (!(arg instanceof planets_pb.GetPlanetRequest)) {
    throw new Error('Expected argument of type planets.GetPlanetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_planets_GetPlanetRequest(buffer_arg) {
  return planets_pb.GetPlanetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_planets_GetPlanetResponse(arg) {
  if (!(arg instanceof planets_pb.GetPlanetResponse)) {
    throw new Error('Expected argument of type planets.GetPlanetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_planets_GetPlanetResponse(buffer_arg) {
  return planets_pb.GetPlanetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_planets_Planet(arg) {
  if (!(arg instanceof planets_pb.Planet)) {
    throw new Error('Expected argument of type planets.Planet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_planets_Planet(buffer_arg) {
  return planets_pb.Planet.deserializeBinary(new Uint8Array(buffer_arg));
}


var PlanetsService = exports.PlanetsService = {
  getPlanet: {
    path: '/planets.Planets/GetPlanet',
    requestStream: false,
    responseStream: false,
    requestType: planets_pb.GetPlanetRequest,
    responseType: planets_pb.GetPlanetResponse,
    requestSerialize: serialize_planets_GetPlanetRequest,
    requestDeserialize: deserialize_planets_GetPlanetRequest,
    responseSerialize: serialize_planets_GetPlanetResponse,
    responseDeserialize: deserialize_planets_GetPlanetResponse,
  },
  getPlanets: {
    path: '/planets.Planets/GetPlanets',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: planets_pb.Planet,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_planets_Planet,
    responseDeserialize: deserialize_planets_Planet,
  },
  createPlanet: {
    path: '/planets.Planets/CreatePlanet',
    requestStream: true,
    responseStream: false,
    requestType: planets_pb.Planet,
    responseType: planets_pb.GetPlanetResponse,
    requestSerialize: serialize_planets_Planet,
    requestDeserialize: deserialize_planets_Planet,
    responseSerialize: serialize_planets_GetPlanetResponse,
    responseDeserialize: deserialize_planets_GetPlanetResponse,
  },
};

exports.PlanetsClient = grpc.makeGenericClientConstructor(PlanetsService);
