import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as cdk from 'aws-cdk-lib'
import * as sqs from 'aws-cdk-lib/aws-sqs'

export class HelloWorldStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)
    const queue = new sqs.Queue(this, 'HelloWorldQueue', {
      visibilityTimeout: cdk.Duration.seconds(300),
    })
  }
}
