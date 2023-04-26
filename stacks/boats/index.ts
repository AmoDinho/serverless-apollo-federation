import { StackContext } from 'sst/constructs';
import BoatsResourcesAPI from './api';
import BoatsResoucesDynamoDB from './database';

/*
Each service needs a stack file where you combine 
various peices of infrustruce.

Infra to add:

- [ DynamoDB]
- [ S3]
- [ SQS]



*/
const BoatsStack = ({ stack }: StackContext) => {
  const boatsResourcesAPI = BoatsResourcesAPI(stack);
  const boatsResoucesDynamoDB = BoatsResoucesDynamoDB(stack);
  stack.addOutputs({
    BoatsAPIEndpoint: boatsResourcesAPI.BoatsAPI.url,
  });
  return {
    boatsResourcesAPI,
    boatsResoucesDynamoDB,
  };
};
export default BoatsStack;
