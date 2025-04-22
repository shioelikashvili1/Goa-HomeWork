import express from 'express';
import {signUp} from "../controllers/authentication.collections.js";

const authRoutes = express.Router()

authRoutes.get('/register', signUp)

export {authRoutes};