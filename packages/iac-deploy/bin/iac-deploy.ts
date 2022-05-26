#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { IacDeploy } from '../lib/iac-deploy';

const app = new cdk.App();
new IacDeploy(app, 'IacDeployStack', {});