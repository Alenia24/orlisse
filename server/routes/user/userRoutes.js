import express from "express";

const router = express.Router();

router.get("/profile", getProfile);
router.put("/profile", updateProfile);

router.post("/address", addAddress);
router.delete("/adress/:index", deleteAddress);

//Admin
router.get("/", getAllUsers);

export default router;
