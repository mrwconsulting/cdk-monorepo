import { Role } from 'aws-cdk-lib/aws-iam'
export interface DeliveryProps {
  readonly role?: Role
}
