import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

const PORT = process.env.PORT || 5000;
const DB_URL = 'mongodb+srv://almarkiz777:4OertsoRGv1WHmkK@forbeginner.3otyofw.mongodb.net/?retryWrites=true&w=majority&appName=ForBeginner';

const app = express();

app.use(express.json());
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (e) {
        console.error(e);
    }
}

startApp();

