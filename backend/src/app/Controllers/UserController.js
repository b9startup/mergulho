import bcrypt from 'bcryptjs';

import database from '../../database';

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res
        .status(400)
        .json({ error: 'Preencha todos os campos necessários.' });

    const emailAlreadyUsed = await database
      .select()
      .table('users')
      .where({ email })
      .first();

    if (emailAlreadyUsed)
      return res
        .status(400)
        .json({ error: 'O e-mail informado já está em uso.' });

    const password_hash = await bcrypt.hash(password, 10);

    try {
      const [id] = await database('users')
        .returning('id')
        .insert({ name, email, password_hash });

      const user = await database
        .select(['id', 'name', 'email'])
        .table('users')
        .where({ id })
        .first();

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export default new UserController();
