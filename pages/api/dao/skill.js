import { SkillModel } from '../model/skill';

export const SkillDao = {
  list: () => {
    return SkillModel.find().exec();
  },
  retrieve: ({ id }) => {
    return SkillModel.findById(id).exec();
  },
  create: ({ name, strength }) => {
    const skill = new SkillModel({ name, strength });

    return skill.save();
  },
  update: ({ id, name, strength }) => {
    const update = {};
    if (name) update.name = name;
    if (strength) update.strength = strength;

    return SkillModel.findByIdAndUpdate(id, update);
  },
  delete: ({ id }) => {
    return SkillModel.findByIdAndRemove(id);
  },
};
