import dotenv from 'dotenv';

dotenv.config();

interface Environment {
  port: number;
  nodeEnv: string;
  databaseUrl: string;
  jwtSecret: string;
}

const environment: Environment = {
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017/sparked',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
};

export default environment;
