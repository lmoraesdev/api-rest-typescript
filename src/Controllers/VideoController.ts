import { videoRepository } from "./../repositories/videoRepository";
import { Request, Response } from "express";

export class VideoController {
	async create(req: Request, res: Response) {
		const { name } = req.body;

		if (!name) {
			return res.status(400).json({ mensagem: "o nome é obrigatorio" });
		}

		try {
			const newVideo = videoRepository.create({ });

			await videoRepository.save(newVideo);

			return res.status(201).json(newVideo);
		} catch (error) {
			console.log(error);
			return res.status(500).json({ message: "Internal Server Error" });
		}
	}
}
