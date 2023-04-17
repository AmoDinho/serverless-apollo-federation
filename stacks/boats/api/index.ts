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
    defaults: {
      function: {
        timeout: 40,
      },
    },
  });

  return boatsAPI;
};

const BoatsResourcesAPI = (stack: Construct): IBoatsAPIResource => {
  return {
    BoatsAPI: BoatsAPI(stack),
  };
};

export default BoatsResourcesAPI;
