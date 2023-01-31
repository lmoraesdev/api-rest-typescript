import { Router } from "express";
import { RoomController } from "../Controllers/RoomController";

const router = Router();

router.post("/room", new RoomController().create);

export default router
