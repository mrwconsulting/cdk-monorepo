import { GitHubSourceProps, Project } from "aws-cdk-lib/aws-codebuild";
import { IRole } from "aws-cdk-lib/aws-iam";

export interface DeliveryProps {
    role?: IRole
}
