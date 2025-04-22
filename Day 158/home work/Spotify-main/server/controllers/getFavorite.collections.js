export const geFavorites = async (req, res) => {
    try {
        res.status(200).json([
            {name: "Linkin Pakr", song: "Crawling", time: "3:28"},
            {name: "Gunns N' Roses", song: "November rain", time: "8:56"}

        ])
    } catch (err) {
        res.status(500).json({error: err})
    }
}