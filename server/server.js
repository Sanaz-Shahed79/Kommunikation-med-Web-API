import express from "express";
import fetch from 'node-fetch'
import cors from 'cors';
import fs from 'fs';
const articlesData = './articles.json'



const app = express()
const port = 3000
const apiKey = '5b069832543f4054a3c1a5fe2a205243'
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());


// GET all articles
app.get("/api/articles", async (req, res) => {
    fs.readFile(articlesData, 'utf8', (err, data) => {
        res.json(JSON.parse(data)); 
    });
})

app.get("/api/external", async (req, res) => {
    let response = await fetch(`https://630bd252ed18e8251659652a.mockapi.io/home`)
    let result = await response.json();
    fs.writeFile(articlesData, JSON.stringify(result), (err) => {
        res.json("Done");
    })
})

// GET an article
app.get("/api/articles/:id", async (req, res) => {
    const id = req.params.id
    fs.readFile(articlesData, 'utf8', (err, data) => {
        const article = JSON.parse(data).find(article => article.id == id)
        res.json(article); 
    });
})

// Create an article
app.post("/api/articles/add", async (req, res) => {
    let newArticle = {
        id : Math.round(Math.random(111111,666666) * 1000000),
        title: req.body.title,
        image : 'https://picsum.photos/600/400',
        text: req.body.description,
        created_at : new Date()
    }

    fs.readFile(articlesData, 'utf8', (err, data) => {
        let articles = JSON.parse(data);
        articles.push(newArticle);
        fs.writeFile(articlesData, JSON.stringify(articles), (err) => {
            res.json("Ny artikel sparad");
        })
    });
   

})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

/*async function getArticles(){
    fs.readFile(articlesData, 'utf8', (err, data) => {
        res.json(JSON.parse(data)); 
    });
}*/