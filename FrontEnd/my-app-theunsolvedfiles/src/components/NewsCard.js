import React from 'react';

function NewsCard({ title, description, imageUrl }) { // Recibe las props de la noticia
  return (
    <div className="news-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default NewsCard;