import SchemaBuilder from '@pothos/core';
import { IBoat } from '../types';
import getBoats from '../src/getBoats';
export const builder = new SchemaBuilder({});

const IBoatGQL = builder.objectRef<IBoat>('IBoat');
IBoatGQL.implement({
  fields: (t) => ({
    boat_id: t.exposeString('boat_id'),
  }),
});
builder.queryType({
  fields: (t) => ({
    getBoats: t.field({
      description: 'Get Baots',
      type: [IBoatGQL],
      resolve: () => getBoats(),
    }),
  }),
});
// builder.mutationType({});
