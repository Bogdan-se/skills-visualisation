export const type = `
  type Skill {
    id: ID!
    name: String!
    strength: Int!
  }
`;

export const query = `
  getSkills: [Skill]
  getSkill(id: ID!): Skill!
`;

export const mutation = `
  createSkill(name: String!, strength: Int!): Skill
  updateSkill(id: ID!, name: String, strength: Int): Skill
  deleteSkill(id: ID!): Skill
`;
