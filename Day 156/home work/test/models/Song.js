import mongoose from "mongoose";

const SongSchema = new mongoose.Schema({
    filename: {
      type: String,
      required: true
    },
    contentType: {
      type: String,
      required: true
    },
    length: Number,
    uploadDate: {
      type: Date,
      default: Date.now
    },
    metadata: {
      artist: String,
      title: String,
      album: String,
      year: Number
    }
  }, { collection: 'music.files' });
  
  // ვირტუალური ველი დაკავშირებული chunks კოლექციასთან
  SongSchema.virtual('chunks', {
    ref: 'music.chunks',
    localField: '_id',
    foreignField: 'files_id',
    justOne: false
  });
  
  module.exports = mongoose.model('music', SongSchema);