export const signUp = async (req, res) => {
    try {
        res.status(200).json({message: "User created"})
    } catch (err) {
        res.status(500).json({error: err})
    }
}