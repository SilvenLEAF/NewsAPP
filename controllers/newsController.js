const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWSAPI_API_KEY);






/* ----------------------------------------------
.             SENDING NEWS (TOP HEADLINES)
---------------------------------------------- */
module.exports.send_top_headlines = async (req, res, next)=>{
  try {
    console.log(req.body);
    let { query, category, country } = req.body;

    // if no specific information passed from the frontend, show the news of US
    if(!query && !category && !country) country = 'us';






    // ---------------SETTING OPTIONS BASED ON FRONTEND
    const options = { language: 'en', country };

    if(query) options.q = query;
    if(category) options.category = category;
    if(country) options.country = country;

    




    const response = await newsapi.v2.topHeadlines(options);
    const myServerResponse = response.articles.filter((item, index)=> item.author && item.title && item.description && item.urlToImage && item.publishedAt && item.content );

    // console.log("MY SERVER RESPONSE------", myServerResponse)
    // console.log("RESPONSE------", response)
    res.json(myServerResponse);




  } catch (err) {
    next(err, req, res);
  }
}