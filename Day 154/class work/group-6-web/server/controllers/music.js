export const getMusics = async (req, res) => {
    try {
        const MUSIC = {
            name: "Link park",
            song: "Crawling",
            time: "3:28"
        }
        res.status(200).json(MUSIC)
    } catch (err) {
        res.status(500).json({error: err})
    }
}