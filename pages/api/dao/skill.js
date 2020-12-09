import { SkillModel } from '../model/skill';

export const SkillDao = {
  list: () => {
    return SkillModel.find().exec();
  },
  retrieve: ({ id }) => {
    return SkillModel.findById(id).exec();
  },
  create: ({ name, rating }) => {
    const skill = new SkillModel({ name, rating });

    return skill.save();
  },
  update: ({ id, name, rating }) => {
    const update = {};
    if (name) update.name = name;
    if (rating) update.rating = rating;

    return SkillModel.findByIdAndUpdate(id, update);
  },
  delete: ({ id }) => {
    return SkillModel.findByIdAndRemove(id);
  },
};
