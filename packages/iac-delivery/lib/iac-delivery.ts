import { Construct } from "constructs";
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import { DeliveryProps } from "./delivery-props";

export class IacDelivery extends Construct {
  constructor(scope: Construct, id: string, props: DeliveryProps = {}) {
    super(scope, id);
  }

  public delivery() {
    new codebuild.Project(this, 'delivery', {
      buildSpec: codebuild.BuildSpec.fromObject({
        version: '0.2',
        phases: {
          build: {
            commands: [
              'echo "Hello, CodeBuild!"',
            ],
          },
        },
      }),
    });
  }
}
