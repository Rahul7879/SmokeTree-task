import * as express from "express";
import { getData, registerData } from "../controller/index.js";
const router = express.Router();

router.get('/get' , getData);
router.post('/register', registerData)

export default router;

