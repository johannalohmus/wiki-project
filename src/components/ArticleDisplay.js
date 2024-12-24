import React from "react";
import { fetchRandomArticle, fetchArticleContent } from "../services/wikiService";

const getArticleData = async () => {
    const article = await fetchRandomArticle();
    const content = await fetchArticleContent(article.title);
    console.log({ ...article, content });
};

//getArticleData();

function ArticleDisplay() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    RabbitHole
                </p>
                <button onClick={getArticleData}>Click</button>
            </header>
        </div>
    );
};

export default ArticleDisplay;
