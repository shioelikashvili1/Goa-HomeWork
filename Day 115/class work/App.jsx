import React, { useEffect, useState } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') // URL, რომლიდანაც მონაცემებს მოვიტანთ
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map(post => (
            <li key={post.id}>{post.title}</li> // მონაცემების გამოსახვა (title ველი)
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataFetchingComponent;