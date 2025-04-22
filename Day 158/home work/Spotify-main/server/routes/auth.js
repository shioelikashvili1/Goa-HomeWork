import express from 'express';
import {signUp} from "../controllers/authentication.collections.js";

const authRoutes = express.Router()

authRoutes.post('/signup', signUp)

export {authRoutes};