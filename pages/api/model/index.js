import mongoose from 'mongoose';

export const dbConnect = () =>
  mongoose.connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
