import User from '../models/User';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import environment from '../config/environment';

export class AuthService {
  async login(email: string, password: string): Promise<string> {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const isValidPassword = await bcryptjs.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, environment.jwtSecret, { expiresIn: '1h' });

    return token;
  }

  async signup(userData: any): Promise<any> {
    const { email, password, username } = userData;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists');
    }

    // Hash password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword,
      username,
    });

    return await newUser.save();
  }

  async verify(token: string): Promise<any> {
    try {
      const decoded = jwt.verify(token, environment.jwtSecret);
      return decoded;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  async resetPassword(email: string, newPassword: string): Promise<void> {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const hashedPassword = await bcryptjs.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
  }

  async getUserById(id: string): Promise<any> {
    return await User.findById(id);
  }

  async updateUser(id: string, updateData: any): Promise<any> {
    return await User.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteUser(id: string): Promise<any> {
    return await User.findByIdAndDelete(id);
  }
}
