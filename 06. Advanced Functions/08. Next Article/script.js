function getArticleGenerator(articles) {
    const divElement = document.getElementById('content');

    function showNext() {
        if (articles.length > 0) {
            articleElement = document.createElement('article');            
            articleElement.textContent = articles.shift();
            divElement.appendChild(articleElement);
        }
    }

    return showNext;
}

