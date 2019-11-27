import bcrypt from 'bcrypt';
import * as Yup from 'yup';
import db from '../database';

class SignUpController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            pass: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation Fails' });
        }
        try {
            const { name, email, pass } = req.body;

            const userExists = await db('users')
                .where({ email })
                .returning('email');

            if (userExists.length >= 1) {
                return res.status(400).json({ error: 'email already exists' });
            }

            const password_hash = await bcrypt.hash(pass, 8);

            const user = await db('users')
                .returning(['id', 'name', 'email'])
                .insert({
                    name,
                    email,
                    password_hash,
                });

            return res.json(user);
        } catch (err) {
            return res.status(500).json({ error: 'Conection Failured' });
        }
    }
}

export default new SignUpController();
