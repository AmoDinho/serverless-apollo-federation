import { Api, use } from 'sst/constructs';
import { Construct } from 'constructs';
export interface IBoatsAPIResource {
  BoatsAPI: Api;
}

const BoatsAPI = (Stack: Construct): Api => {
  const boatsAPI = new Api(Stack, `boats-stack-apio`, {
    routes: {
      'POST /boats-graphql': {
        function: 'packages/boats/__graphql/index.handler',
      },
    },
  });
};

const BoatsResourcesAPI = (stack: Construct): IBoatsAPIResource => {
  return {
    BoatsAPI: BoatsAPI,
  };
};

export default BoatsResourcesAPI;
