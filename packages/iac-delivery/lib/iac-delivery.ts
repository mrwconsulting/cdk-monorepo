import { Construct } from "constructs";
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import { DeliveryProps } from "./delivery-props";

export class IACDelivery extends Construct {
  scope: Construct
  props: DeliveryProps
  constructor(scope: Construct, id: string, props: DeliveryProps = {}) {
    super(scope, id);
    props = {
      ...props
    }
    this.props = props
  }

  public delivery(scope: Construct = this.scope,props: DeliveryProps = this.props) {
    new codebuild.Project(scope, 'delivery', {
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
