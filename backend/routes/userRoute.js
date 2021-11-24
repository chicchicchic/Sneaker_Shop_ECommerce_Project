import express from 'express';
import User from '../models/userModel';

const router = express.Router();

router.get("/createadmin", async (req, res) => {
    try {
        const user = new User({
            name: 'Khanh',
            email: 'chickenhello48@gmail.com',
            password: '5678',
            isAdmin: true
        });
        const newUser = await user.save();
        res.send(newUser);
    } catch (error) {
        res.send({ message: error.message });
    }
});

export default router;