import SchemaBuilder from '@pothos/core';
import { IBoat } from '../types';
export const builder = new SchemaBuilder({});

const IBoatGQL = builder.objectRef<IBoat>('IBoat');
IBoatGQL.implement({
  fields: (t) => ({
    boat_id: t.exposeString('boat_id'),
  }),
});
builder.queryType({});
builder.mutationType({});
