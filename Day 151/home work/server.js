
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3001;

// MongoDB კავშირი
mongoose.connect('mongodb://localhost:27017/georgianWordle', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// სიტყვის სქემა
const WordSchema = new mongoose.Schema({
  word: { type: String, required: true, unique: true },
  length: { type: Number, required: true }
});

const Word = mongoose.model('Word', WordSchema);

// დღის სიტყვის სქემა
const DailyWordSchema = new mongoose.Schema({
  date: { type: Date, required: true, unique: true, default: Date.now },
  wordId: { type: mongoose.Schema.Types.ObjectId, ref: 'Word' }
});

const DailyWord = mongoose.model('DailyWord', DailyWordSchema);

// Middleware
app.use(cors());
app.use(express.json());

// API endpoints
app.get('/api/daily-word', async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let dailyWord = await DailyWord.findOne({ date: today }).populate('wordId');
    
    if (!dailyWord) {
      // აირჩიე შემთხვევითი სიტყვა თუ დღის სიტყვა არ არის დაყენებული
      const count = await Word.countDocuments({ length: 5 });
      const random = Math.floor(Math.random() * count);
      const word = await Word.findOne({ length: 5 }).skip(random);
      
      dailyWord = new DailyWord({
        date: today,
        wordId: word._id
      });
      await dailyWord.save();
    }
    
    res.json({ word: dailyWord.wordId.word });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/validate-word', async (req, res) => {
  try {
    const { word } = req.body;
    const exists = await Word.findOne({ word });
    res.json({ valid: !!exists });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// დაწყებისას ჩავსვათ რამდენიმე ქართული სიტყვა
async function initializeDatabase() {
  const count = await Word.countDocuments();
  if (count === 0) {
    const words = [
      'აბაზი', 'ბალაი', 'გამან', 'დარია', 'ევრო', 
      'ვარდი', 'ზედა', 'თხილი', 'იარკი', 'კაბა',
      'ლამპა', 'მანანი', 'ნაში', 'ობობა', 'პატარ',
      'ჟამი', 'რაღა', 'სახლი', 'ტიტა', 'უახლო',
      'ფანი', 'ქალა', 'ღამი', 'ყანა', 'შანი',
      'ჩირი', 'ცხვარ', 'ძროხა', 'წიგნი', 'ჭიკი',
      'ხანი', 'ჯული', 'ჰაერი'
    ];
    
    await Word.insertMany(words.map(word => ({ word, length: word.length })));
    console.log('Database initialized with Georgian words');
  }
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  initializeDatabase();
});