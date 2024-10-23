import json
import boto3 

dynamodb = boto3.client('dynamodb')

def lambda_handler(event, context):
    response = dynamodb.update_item(
        TableName='VisitorCount',
        Key={
            'id': {
                'S': "count" 
            }
        },
        UpdateExpression='SET visitor_count = visitor_count + :val', 
        ExpressionAttributeValues={
            ':val': {
                'N': '1'
            }
        },
        ReturnValues="UPDATED_NEW"
    )
    responseBody = json.dumps({"count": response['Attributes']['visitor_count']['N']})
    apiResponse = {
        "isBase64Encoded": False,
        "statusCode": 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        "body": responseBody
    }

    return apiResponse