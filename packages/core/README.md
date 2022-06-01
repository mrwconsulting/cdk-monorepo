### AWS CDK L2 Constructs

L2 constructs provide common boilerplates and glue logic. These will come with convenient defaults and reduce the amount of knowledge you need to know about them. They will typically encapsulate their corresponding L1 modules. A good example is s3.Bucket. This class will create an Amazon S3 bucket with default properties and methods such as bucket.addLifeCycleRule(), which adds a lifecycle rule to the bucket.
