import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as cdk from 'aws-cdk-lib'
import * as sqs from 'aws-cdk-lib/aws-sqs'

export class HelloCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)
    const queue = new sqs.Queue(this, 'HelloCdkQueue', {
      visibilityTimeout: cdk.Duration.seconds(300),
    })
    console.log("queue name: " + queue.queueName)
  }
}
