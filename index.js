const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const openAIRoute = require('./routes/openaiRoutes');
const path = require('path');

const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// Use static Folder
app.use(express.static(path.join(__dirname,'public')))

app.use('/openai', openAIRoute)

app.listen(port, ()=> console.log(`Server started on port ${port}`));