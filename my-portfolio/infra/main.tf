# DynamoDB Table with hash key 'id'
resource "aws_dynamodb_table" "VisitorCount" {
  name           = "VisitorCount"
  billing_mode   = "PROVISIONED"
  read_capacity  = 10
  write_capacity = 10
  hash_key       = "id"

  attribute {
    name = "id"
    type = "S"
  }
}

# Lambda Role
resource "aws_iam_role" "lambda_role" {
  name               = "iam_role_lambda_function"
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
}

# Policy to grant Lambda function logging permissions
resource "aws_iam_policy" "lambda_logging" {
  name        = "iam_policy_lambda_logging_function"
  path        = "/"
  description = "IAM policy for logging from a lambda"
  policy      = <<EOF
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

# Policy attachment on role
resource "aws_iam_role_policy_attachment" "policy_attach_logging" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = aws_iam_policy.lambda_logging.arn
}

# Policy to grant Lambda function permissions to update and read DynamoDB table
resource "aws_iam_policy" "lambda_dynamoDB" {
  name        = "iam_policy_lambda_update_dynamoDB"
  path        = "/"
  description = "IAM policy for updating DynamoDB table"
  policy      = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "dynamodb:GetItem",
        "dynamodb:UpdateItem",
        "dynamodb:PutItem"
      ],
      "Resource": "${aws_dynamodb_table.VisitorCount.arn}",
      "Effect": "Allow"
    }
  ]
}
EOF
}

# Policy attachment on role
resource "aws_iam_role_policy_attachment" "policy_attach_dynamoDB" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = aws_iam_policy.lambda_dynamoDB.arn
}

# Create Lambda function
resource "aws_lambda_function" "incrementFunction" {
  filename      = "/Users/juanviljoen/Source/cloud-resume/my-portfolio/lambda/function.zip"
  function_name = "incrementFunction"
  role          = aws_iam_role.lambda_role.arn
  handler       = "index.lambda_handler"
  runtime       = "python3.8"
  depends_on = [
    aws_iam_role_policy_attachment.policy_attach_logging,
    aws_iam_role_policy_attachment.policy_attach_dynamoDB
  ]
}

# Enable Lambda Function URL
resource "aws_lambda_function_url" "increment_function_url" {
  function_name      = aws_lambda_function.incrementFunction.function_name
  authorization_type = "NONE" # Change to "AWS_IAM" if you want to use IAM authentication
}

# Grant public invocation permissions for the Lambda Function URL
resource "aws_lambda_permission" "allow_function_url" {
  statement_id           = "AllowFunctionURL"
  action                 = "lambda:InvokeFunctionUrl"
  function_name          = aws_lambda_function.incrementFunction.function_name
  principal              = "*"
  function_url_auth_type = "NONE"
}

# Optional: CloudWatch Log Group for Lambda
resource "aws_cloudwatch_log_group" "lambda_log_group" {
  name              = "/aws/lambda/${aws_lambda_function.incrementFunction.function_name}"
  retention_in_days = 30
}
