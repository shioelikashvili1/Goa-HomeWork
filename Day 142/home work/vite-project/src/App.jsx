import { useState, useEffect } from "react";

export default function NewsApp() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY")
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
        ახალი ამბები
      </h1>
      {articles.length > 0 ? (
        <div className="grid gap-6">
          {articles.map((article, index) => (
            <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">
                {article.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-500 hover:underline"
              >
                სრულად ნახვა
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">იტვირთება...</p>
      )}
    </div>
  );
}