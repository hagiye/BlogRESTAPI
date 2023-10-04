const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const articlesInfo = {
    "learn-node":{
        comments: []
    },
    "learn-mongoDB":{
        comments: []
    },
    "my toughts on learning-node":{
        comments: []
    }
}

app.post('/api/articles/:name/add-comments', (req, res) =>{
    const {username, text} = req.body;
    const articleName = req.params.name;
    articlesInfo[articleName].comments.push({username, text});
    res.status(200).send(articlesInfo[articleName]);
});

app.get("/", (req, res) => res.send("Thank you, for the Misery!"));

app.listen(PORT, () => console.log("Server is runing on port ", PORT));


app.use(express.json({ extended: false}));
app.get("/", (req, res) => res.send("Hello, Beyonders! "));

app.post("/", (req, res) => res.send(`Hello ${req.body.name}`));