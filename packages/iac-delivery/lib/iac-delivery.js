"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IacDelivery = void 0;
const constructs_1 = require("constructs");
const codebuild = require("aws-cdk-lib/aws-codebuild");
class IacDelivery extends constructs_1.Construct {
    constructor(scope, id, props = {}) {
        super(scope, id);
    }
    delivery() {
        new codebuild.Project(this, 'MyProject', {
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
exports.IacDelivery = IacDelivery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWFjLWRlbGl2ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaWFjLWRlbGl2ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF1QztBQUN2Qyx1REFBdUQ7QUFHdkQsTUFBYSxXQUFZLFNBQVEsc0JBQVM7SUFDeEMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxRQUF1QixFQUFFO1FBQ2pFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUN2QyxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixLQUFLLEVBQUU7d0JBQ0wsUUFBUSxFQUFFOzRCQUNSLDBCQUEwQjt5QkFDM0I7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1NBQ0gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBbkJELGtDQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgKiBhcyBjb2RlYnVpbGQgZnJvbSAnYXdzLWNkay1saWIvYXdzLWNvZGVidWlsZCc7XG5pbXBvcnQgeyBEZWxpdmVyeVByb3BzIH0gZnJvbSBcIi4vZGVsaXZlcnktcHJvcHNcIjtcblxuZXhwb3J0IGNsYXNzIElhY0RlbGl2ZXJ5IGV4dGVuZHMgQ29uc3RydWN0IHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERlbGl2ZXJ5UHJvcHMgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gIH1cblxuICBwdWJsaWMgZGVsaXZlcnkoKSB7XG4gICAgbmV3IGNvZGVidWlsZC5Qcm9qZWN0KHRoaXMsICdNeVByb2plY3QnLCB7XG4gICAgICBidWlsZFNwZWM6IGNvZGVidWlsZC5CdWlsZFNwZWMuZnJvbU9iamVjdCh7XG4gICAgICAgIHZlcnNpb246ICcwLjInLFxuICAgICAgICBwaGFzZXM6IHtcbiAgICAgICAgICBidWlsZDoge1xuICAgICAgICAgICAgY29tbWFuZHM6IFtcbiAgICAgICAgICAgICAgJ2VjaG8gXCJIZWxsbywgQ29kZUJ1aWxkIVwiJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIH0pO1xuICB9XG59XG4iXX0=