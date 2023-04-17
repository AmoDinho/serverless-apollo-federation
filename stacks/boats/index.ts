import { StackContext } from 'sst/constructs';
import BoatsResourcesAPI from './api';

const BoatsStack = ({ stack }: StackContext) => {
  const boatsResourcesAPI = BoatsResourcesAPI(stack);

  stack.addOutputs({
    BoatsAPIEndpoint: BoatsResourcesAPI.BoatsAPI.url,
  });
  return {
    boatsResourcesAPI,
  };
};
export default BoatsStack;
