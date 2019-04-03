.DEFAULT_GOAL := help

.PHONY: test
test: ## Tests lambda
	yarn test

.PHONY: lint
lint: ## Lints lambda
	yarn lint


.PHONY: init
init: ## downloads dependencies
	yarn install

.PHONY: build
build: ## Builds lambda package
	serverless package

.PHONY: deploy
deploy: ## deploys the firehose, bucket, lambda and everything necessary on the AWS. Operation is idempodent
	aws lambda update-function-code --function-name mparticle-firehose-handler --zip-file "fileb://.serverless//mparticle-firehose-handler.zip"

.PHONY: help
help: ## Displays this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'
