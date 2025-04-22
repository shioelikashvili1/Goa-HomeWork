import {UserModel} from "../models/user.model.js";

export const signUp = async (req, res) => {
    try {
        const {body} = req
        const signUp = await UserModel.create(body)

        res.status(201).json(signUp)
    } catch (err) {
        res.status(500).json({error: err})
    }
}