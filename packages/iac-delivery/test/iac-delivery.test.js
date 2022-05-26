"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const assertions_1 = require("aws-cdk-lib/assertions");
const iac_delivery_1 = require("../lib/iac-delivery");
describe("IACDelivery", () => {
    test("IACDelivery Test Stack", () => {
        const app = new cdk.App();
        const stack = new cdk.Stack(app, "IACDeliveryStack", {
            env: {
                account: process.env.CDK_DEFAULT_ACCOUNT,
                region: process.env.CDK_DEFAULT_REGION,
            },
        });
        new iac_delivery_1.IacDelivery(stack, "IacDelivery");
        const template = assertions_1.Template.fromStack(stack);
        expect(template).toMatchSnapshot();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWFjLWRlbGl2ZXJ5LnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpYWMtZGVsaXZlcnkudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUNuQyx1REFBa0Q7QUFDbEQsc0RBQWtEO0FBRWxELFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzNCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEVBQUU7UUFDbEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxrQkFBa0IsRUFBRTtZQUNuRCxHQUFHLEVBQUU7Z0JBQ0gsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CO2dCQUN4QyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0I7YUFDdkM7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLDBCQUFXLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sUUFBUSxHQUFHLHFCQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gXCJhd3MtY2RrLWxpYlwiO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tIFwiYXdzLWNkay1saWIvYXNzZXJ0aW9uc1wiO1xuaW1wb3J0IHsgSWFjRGVsaXZlcnkgfSBmcm9tIFwiLi4vbGliL2lhYy1kZWxpdmVyeVwiO1xuXG5kZXNjcmliZShcIklBQ0RlbGl2ZXJ5XCIsICgpID0+IHtcbiAgdGVzdChcIklBQ0RlbGl2ZXJ5IFRlc3QgU3RhY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG4gICAgY29uc3Qgc3RhY2sgPSBuZXcgY2RrLlN0YWNrKGFwcCwgXCJJQUNEZWxpdmVyeVN0YWNrXCIsIHtcbiAgICAgIGVudjoge1xuICAgICAgICBhY2NvdW50OiBwcm9jZXNzLmVudi5DREtfREVGQVVMVF9BQ0NPVU5ULFxuICAgICAgICByZWdpb246IHByb2Nlc3MuZW52LkNES19ERUZBVUxUX1JFR0lPTixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgbmV3IElhY0RlbGl2ZXJ5KHN0YWNrLCBcIklhY0RlbGl2ZXJ5XCIpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gVGVtcGxhdGUuZnJvbVN0YWNrKHN0YWNrKTtcbiAgICBleHBlY3QodGVtcGxhdGUpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuICB9KTtcbn0pO1xuIl19