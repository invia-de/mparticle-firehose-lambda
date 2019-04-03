## Overview

This is AWS Kinesis Firehose processing lambda. Firehose processes audiences.

## Prerequisites

- Node (v8)
- yarn
- Serverless
- aws-cli (with the rights to deploy a Lambda, ask Ops)

## Usage

- `make init` will load all project dependencies
- `make test` unit tests. Please maintain tests during the development
- `make build` will package the lambda for deployment
- `make deploy` will update the lambda code on the AWS

## Trigger

This lambda is triggered by KinesisFirehose.
