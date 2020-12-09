import { query as skillQuery, mutation as skillMutation } from './skill';

export const resolvers = {
  Query: {
    ...skillQuery,
  },
  Mutation: {
    ...skillMutation,
  },
};
