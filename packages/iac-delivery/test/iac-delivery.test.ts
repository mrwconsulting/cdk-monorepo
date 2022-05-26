import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { IacDelivery } from "../lib/iac-delivery";

describe("IACDelivery", () => {
  test("IACDelivery Test Stack", () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "IACDeliveryStack", {
      env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION,
      },
    });
    new IacDelivery(stack, "IacDelivery");
    const template = Template.fromStack(stack);
    expect(template).toMatchSnapshot();
  });
});
