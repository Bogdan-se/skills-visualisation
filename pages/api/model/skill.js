import { Schema, model, models } from 'mongoose';

const SkillSchema = new Schema({
  name: String,
  rating: Number,
});

export const SkillModel = models.Skill || model('Skill', SkillSchema);
