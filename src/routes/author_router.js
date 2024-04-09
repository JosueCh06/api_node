import { Router } from "express";
import { methods as authorController } from "../controllers/author_controller";

const router = Router();

router.get("/",authorController.getAuthors )
router.get("/:id",authorController.getAuthor )   
router.post("/",authorController.addAuthor )
router.delete("/:id",authorController.deleteAuthor)
router.put("/:id", authorController.updateAuthor)

export default router;