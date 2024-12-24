import axios from 'axios';

// Fetch a random article
export const fetchRandomArticle = async () => {
    const endpoint = `https://en.wikipedia.org/w/api.php`;
    const params = {
        action: 'query',
        format: 'json',
        list: 'random',
        rnnamespace: 0,
        rnlimit: 1,
        origin: '*',
    };

    try {
        const response = await axios.get(endpoint, { params });
        const article = response.data.query.random[0];
        return {
            title: article.title,
            pageId: article.id,
            url: `https://en.wikipedia.org/wiki/${encodeURIComponent(article.title)}`,
        };
    } catch (error) {
        console.error('Error fetching article:', error);
        throw new Error('Failed to fetch article');
    }
};

export const fetchArticleContent = async (title) => {
    const endpoint = `https://en.wikipedia.org/w/api.php`;
    const params = {
        action: 'query',
        prop: 'extracts',
        exintro: false,
        explaintext: true,
        titles: title,
        format: 'json',
        origin: '*',
    };

    try {
        const response = await axios.get(endpoint, { params });
        const pages = response.data.query.pages;
        const page = Object.values(pages)[0];
        return page.extract;
    } catch (error) {
        console.error('Error fetching content:', error);
        throw new Error('Failed to fetch article content');
    }
};