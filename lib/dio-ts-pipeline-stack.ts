import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, CodeBuildStep, ShellStep } from 'aws-cdk-lib/pipelines';

export class DioTsPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {

      pipelineName: "dio-development-pipeline",
			synth: new CodeBuildStep("SynthStep", {
				input: CodePipelineSource.connection(
					"brentgfoxaws/dio-ts-pipeline",
					"master",
					{
						connectionArn:
							"arn:aws:codestar-connections:us-west-2:492199546644:connection/5054d256-4253-4d4b-aeed-3828a581ffba"
					}
				),
				installCommands: ["npm install -g aws-cdk"],
				commands: ["npm ci", "npm run build", "npx cdk synth"]
			})
      /*
      pipelineName: 'MyPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('OWNER/REPO', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })*/
    });
  }
}
