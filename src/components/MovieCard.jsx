import React from "react";

const MovieCard = ({ poster, title, year, rating }) => {
  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img src={poster} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h2>
        <p className="text-sm text-gray-500 mb-2">Released: {year}</p>
        <div className="flex items-center">
          <span className="text-yellow-500 text-lg mr-1">⭐</span>
          <span className="text-gray-700 font-medium">{rating}</span>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
