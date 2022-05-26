#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { IacDelivery } from "../lib/iac-delivery";

const app = new cdk.App();
const stack = new cdk.Stack(app, "IACDeliveryStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
const iac = new IacDelivery(stack, "IacDelivery", {});
iac.delivery()
