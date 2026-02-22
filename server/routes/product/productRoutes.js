import express from "express";

const router = express.Router();

router.get("/", getProducts);
router.get("/:slug", getProductBySlug);

router.post("/", admin, createProduct);
router.put("/:id", admin, updateProduct);
router.delete("/:id", admin, deleteProduct);

router.post("/:id/reviews", addReview);

export default router;