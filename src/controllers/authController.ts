import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const token = await this.authService.login(email, password);
      res.status(200).json({ token });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      res.status(401).json({ message });
    }
  }

  public async signup(req: Request, res: Response): Promise<void> {
    try {
      const userData = req.body;
      const newUser = await this.authService.signup(userData);
      res.status(201).json(newUser);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      res.status(400).json({ message });
    }
  }

  public async verify(req: Request, res: Response): Promise<void> {
    try {
      const { token } = req.body;
      const verifiedUser = await this.authService.verify(token);
      res.status(200).json(verifiedUser);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      res.status(400).json({ message });
    }
  }

  public async resetPassword(req: Request, res: Response): Promise<void> {
    try {
      const { email, newPassword } = req.body;
      await this.authService.resetPassword(email, newPassword);
      res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      res.status(400).json({ message });
    }
  }
}

const authController = new AuthController();
export default authController;
