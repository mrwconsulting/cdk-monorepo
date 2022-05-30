import { Construct } from 'constructs'
import { DeliveryProps } from './delivery-props'
export declare class IACDelivery extends Construct {
  constructor(scope: Construct, id: string, props?: DeliveryProps)
  delivery(): void
}
