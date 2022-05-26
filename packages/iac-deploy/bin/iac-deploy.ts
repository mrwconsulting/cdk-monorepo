#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { IacDeploy } from '../lib/iac-deploy';

const app = new cdk.App();
const stack = new cdk.Stack(app, "IACDeployStack", {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION
    }
})
new IacDeploy(stack, 'IacDeployStack', {});