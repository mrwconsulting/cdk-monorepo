import { Construct } from "constructs";
import { DeployProps } from "./iac-props";

export class IacDeploy extends Construct {
  constructor(scope: Construct, id: string, props: DeployProps = {}) {
    super(scope, id);
  }
}
