import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from '../database';
import 'dotenv/config';

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

            const { id, name } = userExists;
            const payload = {
                id,
                name,
                email,
            };

            const token = await jwt.sign(payload, process.env.AUTH_SECRET, {
                expiresIn: process.env.AUTH_EXPIRE_IN,
            });

            return res.json({ id, token, name, email });
        } catch (err) {
            return res.status(500).json({ error: 'Connection Failured' });
        }
    }
}

export default new SignInController();
