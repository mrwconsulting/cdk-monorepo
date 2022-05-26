import { GitHubSourceProps, Project } from "aws-cdk-lib/aws-codebuild";
import { Role } from "aws-cdk-lib/aws-iam";

export interface DeliveryProps {
    role?: Role
}
