.DEFAULT_GOAL := help

.PHONY: test
test: ## Tests lambda
	cd "./lambdas/mparticle-firehose-handler/" && yarn test --silent

.PHONY: init
init: ## inits the terraform, downloads provider plugins etc
	terraform init
	cd "./lambdas/mparticle-firehose-handler/" && yarn install

.PHONY: build
build: ## Builds lambda package
	cd "./lambdas/mparticle-firehose-handler/" && serverless package

.PHONY: invoke
invoke: ## Invokes lambda function
	aws lambda invoke --function-name 'arn:aws:lambda:eu-central-1:171025702017:function:mparticle-firehose-handler' /dev/stdout

.PHONY: plan
plan: ## shows the calculated changes between local state and the infrastructure
	terraform plan

.PHONY: deploy
deploy: ## deploys the firehose, bucket, lambda and everything necessary on the AWS. Operation is idempodent
	terraform apply -auto-approve

.PHONY: destroy
destroy: ## removes everything what was created by deploy
	terraform destroy

.PHONY: help
help: ## Displays this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'
