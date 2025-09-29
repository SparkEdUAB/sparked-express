import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  db: {
    uri: process.env.DB_URI || 'mongodb://localhost:27017/sparked-backend',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  environment: process.env.NODE_ENV || 'development',
};

export default config;