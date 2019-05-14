resource "aws_lambda_function" "mparticle-firehose-handler" {
  filename      = "lambdas/mparticle-firehose-handler/.serverless/mparticle-firehose-handler.zip"
  source_code_hash = "${base64sha256(file("lambdas/mparticle-firehose-handler/.serverless/mparticle-firehose-handler.zip"))}"
  function_name = "mparticle-firehose-handler"
  role          = "${aws_iam_role.mparticle-firehose-lambda-iam.arn}"
  handler       = "src/handler.handle"
  runtime       = "nodejs8.10"
  timeout       = 60
  publish       = true

  environment {
    variables = {
      FOO = "bar"
    }
  }

  tags = "${local.common_tags}"
}

resource "aws_cloudwatch_log_group" "mparticle-firehose-handler" {
  name              = "/aws/lambda/${aws_lambda_function.mparticle-firehose-handler.function_name}"
  retention_in_days = 14
}


resource "aws_iam_role" "mparticle-firehose-lambda-iam" {
  name = "mparticle-firehose-lambda-iam"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
  tags = "${local.common_tags}"
}

resource "aws_iam_policy" "mparticle-firehose-lambda-logging" {
  name = "mparticla-firehose-lambda-logging"
  path = "/"
  description = "IAM policy for logging from a lambda"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "arn:aws:logs:*:*:*",
      "Effect": "Allow"
    }
  ]
}
EOF
}

resource "aws_lambda_permission" "allow_mparticle_1" {
  statement_id  = "AllowExecutionFromMparticle1"
  action        = "lambda:InvokeFunction"
  function_name = "${aws_lambda_function.mparticle-firehose-handler.function_name}"
  principal     = "338661164609"
}

resource "aws_lambda_permission" "allow_mparticle_2" {
  statement_id  = "AllowExecutionFromMparticle2"
  action        = "lambda:InvokeFunction"
  function_name = "${aws_lambda_function.mparticle-firehose-handler.function_name}"
  principal     = "457804467337"
}

resource "aws_iam_role_policy_attachment" "mparticle-firehose-lambda-logging" {
  role = "${aws_iam_role.mparticle-firehose-lambda-iam.name}"
  policy_arn = "${aws_iam_policy.mparticle-firehose-lambda-logging.arn}"
}


output "mparticle-firehose-lambda-arn" {
  value = "${aws_lambda_function.mparticle-firehose-handler.arn}:$LATEST"
}
