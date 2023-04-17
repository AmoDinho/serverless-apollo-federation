import { StackContext } from 'sst/constructs';
import BoatsResourcesAPI from './api';

const BoatsStack = ({ stack }: StackContext) => {
  const boatsResourcesAPI = BoatsResourcesAPI(stack);
  return {
    boatsResourcesAPI,
  };
};
export default BoatsStack;
