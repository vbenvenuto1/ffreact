const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  res.end();
});

const url = `https://content.guardianapis.com/search?&api-key=c78d3ee2-a1b2-43f4-9d66-ac228f6b6a0d`;

app.get("/ticker", async (req, res) => {
  let { data } = await axios.get(url).catch(err => console.log(err));

  res.send(data);
});

let breaking = 'https://content.guardianapis.com/search?q=breaking&api-key=c78d3ee2-a1b2-43f4-9d66-ac228f6b6a0d';

app.get("/breaking", async (req, res) => {
    ({ data } = await axios.get(breaking).catch(err => console.log(err)));

    res.send(data);
  });

  let cat; 

app.get("/upper/:tagId", async (req, res) => {
   cat = (`https://content.guardianapis.com/search?q=${req.params.tagId}&api-key=c78d3ee2-a1b2-43f4-9d66-ac228f6b6a0d`);

    ({ data } = await axios.get(cat).catch(err => console.log(err)));

    res.send(data);
  });

  
  app.get("/upper/:tagId/:cat", async (req, res) => {
    ucat = (`https://newsapi.org/v2/${req.params.tagId}?sources=${req.params.tagId}&apiKey=09ef819989214e788bd5c136781c8b90`);
 
     ({ data } = await axios.get(ucat).catch(err => console.log(err)));
 
     res.send(data);
   });



   app.get("/lower/card/:cat", async (req, res) => {
    ucat = (`https://newsapi.org/v2/everything?q=${req.params.cat},relevancy&language=en&apiKey=09ef819989214e788bd5c136781c8b90`);
 
     ({ data } = await axios.get(ucat).catch(err => console.log(err)));
 
     res.send(data);
   });
  


app.listen(5000, () => console.log("Listening on port 5000"));