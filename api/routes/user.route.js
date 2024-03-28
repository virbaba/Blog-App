import express from "express";
import { updateUser, deleteUser, getUsers, signout } from "../controllers/user.controller.js";
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);
router.get('/getusers', verifyToken, getUsers);


router.post("/signout", signout);

export default router;
