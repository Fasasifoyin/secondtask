import { Router } from "express";
import { createUser, deleteUser, getUser, updateUser } from "../controller/user.js";

const router = Router();

router.post("/create", createUser);
router.delete("/delete/:name", deleteUser);
router.get("/get/:name", getUser);
router.patch("/update/:oldName", updateUser)

export default router;
