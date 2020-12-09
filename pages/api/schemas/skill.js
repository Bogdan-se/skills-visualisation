export const type = `
  type Skill {
    id: ID!
    name: String!
    rating: Int!
  }
`;

export const query = `
  getSkills: [Skill]
  getSkill(id: ID!): Skill!
`;

export const mutation = `
  createSkill(name: String!, rating: Int!): Skill
  updateSkill(id: ID!, name: String, rating: Int): Skill
  deleteSkill(id: ID!): Skill
`;
