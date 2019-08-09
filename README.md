# Overview

This is an example implementation of mparticle firehose consumer lambda written in node. 

This project includes the implementation of the Lambda function itself, as well as Terraform configuration to set this all up from scratch.

Folder `lambdas/mparticle-firehose-handler/src` contains an example minimum implementation of the mparticle firehose consumer. You may as well refer to `lambdas/mparticle-firehose-handler/tests` folder for expected example request/responses. 

## Prerequisites

You need those tolls already setup on your machine in order to setup this project

- terraform (in order to bootstrap this on AWS)
- serverless (in order to package the Lambda properly)
- yarn (in order to fetch all node dependencies)

## Usage

All commands in order to use this project can be found inside `Makefile`. They are pretty self-explanatory. In order to see the list of available commands simply write `make` inside the project root folder.

In order to bootstrap terraform and fetch node dependencies execute 

    make init

To build the labmda function 

    make build

To setup the lambda on AWS and grant all required permissions 

    make deploy

From this moment you may try sending requests against the lambda and its going to respond with mparticle-conform responses. 

## Cleanup

If you would like to destroy all created by terraform AWS resources, execute `make destroy`


## Contribution

All Comments/Issues/Freature/Pull requests are very welcome! 