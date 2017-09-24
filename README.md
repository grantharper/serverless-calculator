# Serverless Calculator

This application was created to experiment with the [serverless](https://serverless.com) framework. It is configured to deploy to AWS Lambda.

Assuming you have your AWS CLI credentials setup correctly, you can follow the steps below to deploy this function.

Deploy the function

`serverless deploy -v`

Invoke the function and view the output in the console

`serverless invoke -f calculate -p test/external/add.json`

You should see the following output

`{"statusCode": 200, "body": "{\"result\":5}"}`

The function should also be exposed via the API Gateway at a url that was provided to you during the stack creation. To invoke this endpoint, you can use the curl command below

`curl -X POST -d @test/external/api-gateway-test.json https://<your-endpoint-here>/dev/calculate --header "Content-Type:application/json"`