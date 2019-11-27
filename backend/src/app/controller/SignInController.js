import * as Yup from 'yup';
import bcrypt from 'bcrypt';
import db from '../database';

class SignInController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string()
                .email()
                .required(),
            pass: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation Fails' });
        }
        try {
            const { email, pass } = req.body;

            const userExists = await db('users')
                .where({
                    email,
                })
                .first();

            if (!userExists) {
                return res.status(401).json({ error: 'User not exists' });
            }

            if (!(await bcrypt.compare(pass, userExists.password_hash))) {
                return res.status(401).json({ error: 'invalid password' });
            }

            return res.json({ error: 'LOGIN' });
        } catch (err) {
            return res.status(500).json({ error: 'Connection Failured' });
        }
    }
}

export default new SignInController();
