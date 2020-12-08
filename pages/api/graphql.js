import { ApolloServer } from 'apollo-server-micro';
import { schemas } from './schemas';
import { resolvers } from './resolvers';

const apolloServer = new ApolloServer({ schemas, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
