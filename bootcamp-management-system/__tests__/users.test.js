import { register } from "../controllers/user.controller"
import User from "../models/users.model"

describe('register', () => {
   it('should create a new user if the email is not registered', async () => {
      const req = {
         body: {
            name: 'Nirajan Kunwor',
            email: 'kunwor@gmail.com',
            password: 'Test4578'
         }
      }
      const res = {
         status: jest.fn().mockReturnThis(),
         json: jest.fn()
      }

      User.findOne = jest.fn().mockResolvedValue(null);
      User.prototype.save = jest.fn().mockResolvedValueOnce();

      await register(req, res);

      expect(User.findOne).toHaveBeenCalledWith({ email: req.body.email });
      expect(User.prototype.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
         status: true,
         data: expect.any(Object),
         message: 'Created successfully'
      });


   })
})