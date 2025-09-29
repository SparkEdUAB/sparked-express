import mongoose from 'mongoose';
import environment from './environment';

const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(environment.databaseUrl);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

export default connectToDatabase;
