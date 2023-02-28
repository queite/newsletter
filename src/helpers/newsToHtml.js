function createHTMLNews(notSentNews) {
  let HTML = '';

  notSentNews.forEach((news) => {
    HTML += `
    <h3><a href=${news.link} >${news.title}</a>.</h3>
    <p>${news.description}</p>`;
  });

  return HTML;
}

module.exports = createHTMLNews;
