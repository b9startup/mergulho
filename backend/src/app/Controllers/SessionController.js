import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import database from '../../database';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    try {
      const user = await database('users')
        .where({ email })
        .first();

      if (!user)
        return res.status(401).json({ error: 'Credenciais inválidas.' });

      if (!(await bcrypt.compare(password, user.password_hash)))
        return res.status(401).json({ error: 'Credenciais inválidas.' });

      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
      };

      const token = await jwt.sign(payload, '123456', { expiresIn: '1d' });

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export default new SessionController();
