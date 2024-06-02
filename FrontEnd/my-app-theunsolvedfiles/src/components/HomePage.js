import React, { useState } from 'react';
import NewsCard from '../components/NewsCard';

function HomePage({ newsData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 10;

  // Datos quemados (hardcoded) para las tarjetas de noticias
  const hardcodedNewsData = [
    {
      title: 'Mysterious Disappearance in the Woods',
      description: 'A young hiker vanishes without a trace, leaving behind only a cryptic note.',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Unsolved Murder in a Small Town',
      description: 'A local businessman is found dead in his office, with no apparent motive.',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Cold Case Reopened After 30 Years',
      description: 'New evidence emerges in a decades-old murder case, leading to the arrest of a suspect.',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
  ];

  // Filtrar las noticias por página (usando los datos quemados)
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = hardcodedNewsData.slice(indexOfFirstNews, indexOfLastNews);

  // Calcular el número total de páginas (usando los datos quemados)
  const totalPages = Math.ceil(hardcodedNewsData.length / newsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="pagination">
        {totalPages > 0 && [...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="news-container">
        {currentNews.map((newsItem, index) => (
          <NewsCard key={index} {...newsItem} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
