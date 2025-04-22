import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minLength: 3,
        },
        surname: {
            type: String,
            required: true,
            minLength: 3,
        },
        gmail: {
            type: String,
            required: true,
            unique: true,
        },
        age: {
            type: Number,
            required: true,
            min: 1,
            max: 300,
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
        },
        role: {
            type: String,
            default: "user",
            enum: ["user", "admin", "moderator", "premium-user"],
        },
        avatar: {
            type: String,
        },
        favoriteMusics: [mongoose.Schema.Types.ObjectId],
        favoriteArtists: [mongoose.Schema.Types.ObjectId],
        favoriteAlbums: [mongoose.Schema.Types.ObjectId],
        favoritePlaylists: [mongoose.Schema.Types.ObjectId],
        favoriteGenres: [mongoose.Schema.Types.ObjectId],
        costumePlaylist: [{
            name: {
                type: String,
                // required: true,
                default: "My playlist",
            },
            songs: [mongoose.Schema.Types.ObjectId],
            cover: {
                type: String,
            },
            isPublic: {
                type: Boolean,
                default: false,
            },
            isFavorite: {
                type: Boolean,
            }
        }],
        verificationToken: String,
        expireForgotPasswordData: Date,
        verificationTokenExpireDate: Date,
        restEmailExpireDate: Date,
    },
    {
        timestamps: true,
    }
)

export const UserModel = mongoose.model("Users", UserSchema);