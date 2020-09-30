import React from "react";

interface MovieCardProps {
  title: string;
  path: string;
  summary: string;
  rating: number;
  releaseDate: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  title,
  path,
  summary,
  rating,
  releaseDate,
}) => {
  return (
    <div className="movie-card">
      <img className="movie-image" src={path} alt={title} />
      <h5 className="card-title">{title}</h5>
      <p className="movie-summary">{summary}</p>
      <p>
        <small>Release Date:&nbsp;{releaseDate}</small>
      </p>
      <p>
        <small>Rating:&nbsp;{rating}</small>
      </p>
    </div>
  );
};
