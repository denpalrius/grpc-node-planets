// package: planets
// file: planets.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Planet extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getOrderfromthesun(): number;
  setOrderfromthesun(value: number): void;

  getHaslife(): HasLifeMap[keyof HasLifeMap];
  setHaslife(value: HasLifeMap[keyof HasLifeMap]): void;

  getMotherstar(): string;
  setMotherstar(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Planet.AsObject;
  static toObject(includeInstance: boolean, msg: Planet): Planet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Planet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Planet;
  static deserializeBinaryFromReader(message: Planet, reader: jspb.BinaryReader): Planet;
}

export namespace Planet {
  export type AsObject = {
    id: number,
    name: string,
    orderfromthesun: number,
    haslife: HasLifeMap[keyof HasLifeMap],
    motherstar: string,
  }
}

export class PlanetsList extends jspb.Message {
  clearPlanetsList(): void;
  getPlanetsList(): Array<Planet>;
  setPlanetsList(value: Array<Planet>): void;
  addPlanets(value?: Planet, index?: number): Planet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanetsList.AsObject;
  static toObject(includeInstance: boolean, msg: PlanetsList): PlanetsList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanetsList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanetsList;
  static deserializeBinaryFromReader(message: PlanetsList, reader: jspb.BinaryReader): PlanetsList;
}

export namespace PlanetsList {
  export type AsObject = {
    planetsList: Array<Planet.AsObject>,
  }
}

export class GetPlanetRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlanetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlanetRequest): GetPlanetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPlanetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlanetRequest;
  static deserializeBinaryFromReader(message: GetPlanetRequest, reader: jspb.BinaryReader): GetPlanetRequest;
}

export namespace GetPlanetRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetPlanetResponse extends jspb.Message {
  hasPlanet(): boolean;
  clearPlanet(): void;
  getPlanet(): Planet | undefined;
  setPlanet(value?: Planet): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlanetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlanetResponse): GetPlanetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPlanetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlanetResponse;
  static deserializeBinaryFromReader(message: GetPlanetResponse, reader: jspb.BinaryReader): GetPlanetResponse;
}

export namespace GetPlanetResponse {
  export type AsObject = {
    planet?: Planet.AsObject,
  }
}

export interface HasLifeMap {
  YES: 0;
  NO: 1;
  UNKNOWN: 2;
}

export const HasLife: HasLifeMap;

