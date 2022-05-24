#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { HelloWorldStack } from '../lib/helloworld-stack'

const app = new cdk.App()
new HelloWorldStack(app, 'HelloWorldStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
})
