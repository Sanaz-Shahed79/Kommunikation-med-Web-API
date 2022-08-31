import express from "express";
import fetch from 'node-fetch'
import cors from 'cors';



const app = express()
const port = 5013
const apiKey = '5b069832543f4054a3c1a5fe2a205243'


app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

//  get(route,callback function);
app.get("/api", (req, res) => {
    res.send("Articles")
})

// GET all articles
app.get("/api/articles", async (req, res) => {
    let response = await fetch(`https://630bd252ed18e8251659652a.mockapi.io/home`)
    let articles = await response.json();
    res.json(articles)
})

// GET an articles
app.get("/api/articles/:id", async (req, res) => {
    let response = await fetch(`https://630bd252ed18e8251659652a.mockapi.io/home/${req.params.id}`)
    let articles = await response.json();
    res.json(articles)
})

// Create an article
app.post("/api/articles/add", async (req, res) => {
    
    let sendArticle = await fetch('https://630bd252ed18e8251659652a.mockapi.io/home', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: req.body.title,
          description: req.body.description,
        })
      })
      let newArticle = await sendArticle.json();
    res.json(newArticle)
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
