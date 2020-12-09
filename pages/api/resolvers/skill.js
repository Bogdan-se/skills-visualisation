import { SkillDao } from '../dao/skill';

export const query = {
  getSkills: () => {
    return SkillDao.list();
  },
  getSkill: (_, { id }) => {
    return SkillDao.retrieve({ id });
  },
};

export const mutation = {
  createSkill: async (_, { name, rating }) => {
    console.log({ name, rating });
    return SkillDao.create({ name, rating });
  },
  updateSkill: (_, { id, name, rating }) => {
    return SkillDao.update({ id, name, rating });
  },
  deleteSkill: (_, { id }) => {
    return SkillDao.delete({ id });
  },
};
