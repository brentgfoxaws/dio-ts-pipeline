#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DioTsPipelineStack } from '../lib/dio-ts-pipeline-stack';

const app = new cdk.App();
new DioTsPipelineStack(app, 'DioTsPipelineStack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  env: { 
    account: '492199546644', 
    region: 'us-west-2' 
  },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});