#!/bin/bash

# Check if protoc is installed
if ! command -v protoc &> /dev/null
then
    echo "protoc is not installed. Please install Protocol Buffers compiler."
    exit 1
fi

# Check if grpc_tools_node_protoc_plugin is installed
if ! command -v grpc_tools_node_protoc_plugin &> /dev/null
then
    echo "grpc_tools_node_protoc_plugin is not installed. Installing required packages..."
    npm install -g grpc-tools
fi

# Check if protoc-gen-ts is installed
if ! command -v protoc-gen-ts &> /dev/null
then
    echo "protoc-gen-ts is not installed. Installing it now..."
    npm install -g protoc-gen-ts
fi

# Set variables
PROTO_FILE="./proto/planets.proto"
OUTPUT_DIR="./proto/schema"
JS_OUT_DIR="$OUTPUT_DIR/js"
TS_OUT_DIR="$OUTPUT_DIR/ts"

# Create output directories if they don't exist
mkdir -p "$JS_OUT_DIR"
mkdir -p "$TS_OUT_DIR"

# Generate JavaScript code
protoc \
    --js_out=import_style=commonjs,binary:$JS_OUT_DIR \
    --grpc_out=grpc_js:$JS_OUT_DIR \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    --proto_path=$(dirname $PROTO_FILE) \
    $PROTO_FILE

# Generate TypeScript code
protoc \
    --plugin=protoc-gen-ts=$(which protoc-gen-ts) \
    --ts_out="service=grpc-node,mode=grpc-js:$TS_OUT_DIR" \
    --proto_path=$(dirname $PROTO_FILE) \
    $PROTO_FILE

echo "Protobuf schemas generated successfully!"
