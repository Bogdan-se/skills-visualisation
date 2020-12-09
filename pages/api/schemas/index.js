import { gql } from 'apollo-server-micro';
import {
  type as skillType,
  query as skillQuery,
  mutation as skillMutation,
} from './skill';

export const typeDefs = gql`
  ${skillType}

  type Query {
    ${skillQuery}
  }
  
  type Mutation {
    ${skillMutation}
  }
`;
