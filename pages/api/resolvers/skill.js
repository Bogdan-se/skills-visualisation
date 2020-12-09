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
  createSkill: async (_, { name, strength }) => {
    return SkillDao.create({ name, strength });
  },
  updateSkill: (_, { id, name, strength }) => {
    return SkillDao.update({ id, name, strength });
  },
  deleteSkill: (_, { id }) => {
    return SkillDao.delete({ id });
  },
};
