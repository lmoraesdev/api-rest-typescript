import { Router } from "express";
import { VideoController } from "../Controllers/VideoController";

const router = Router();

router.post("/room", new VideoController().create);

export default router;
