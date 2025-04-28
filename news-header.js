const apiKey = 'af4028c9edeb4644a9f947084a09212b';
const apiURL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    const articles = data.articles;

    // Main article (first one)
    if (articles.length > 0) {
      document.getElementById("header-img").src = articles[0].urlToImage || "";
      document.getElementById("header-article").textContent = articles[0].title;
      document.getElementById("header-article").href = articles[0].url;
      document.getElementById("header-desc").textContent = articles[0].description || "";
    }

    // Loop through next 4 articles (if available)
    for (let i = 1; i <= 4 && i < articles.length; i++) {
      const article = articles[i];
      document.getElementById(`article-img-${i}`).src = article.urlToImage || "";
      document.getElementById(`article-link-${i}`).textContent = article.title;
      document.getElementById(`article-link-${i}`).href = article.url;
      document.getElementById(`article-desc-${i}`).textContent = article.description || "";
    }
  })
  .catch(error => {
    console.error("Error fetching news:", error);
  })