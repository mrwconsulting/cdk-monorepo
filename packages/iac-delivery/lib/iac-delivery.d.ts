import { Construct } from "constructs";
import { DeliveryProps } from "./delivery-props";
export declare class IacDelivery extends Construct {
    constructor(scope: Construct, id: string, props?: DeliveryProps);
    delivery(): void;
}
