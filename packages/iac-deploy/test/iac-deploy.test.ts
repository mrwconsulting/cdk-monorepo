import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { IacDeploy } from "../lib/iac-deploy";

describe("IACDeploy", () => {
  test("IAC Test Stack", () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "IACTestStack", {
      env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION,
      },
    });
    new IacDeploy(stack, "IacDeployStack");
    const template = Template.fromStack(stack);
    expect(template).toMatchSnapshot();
  });
});
