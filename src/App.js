import React from "react";
import MovieCard from "./components/MovieCard";

const App = () => {
  const movies = [
    {
      title: "Inception",
      year: 2010,
      rating: 8.8,
      poster: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg",
    },
    {
      title: "Interstellar",
      year: 2014,
      rating: 8.6,
      poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
    },
    {
      title: "The Dark Knight",
      year: 2008,
      rating: 9.0,
      poster:
        "https://tse1.mm.bing.net/th/id/OIP.lCYQZpdqe5UK_DBQgWGfkQHaJ4?pid=Api&P=0&h=180",
    },
    {
      title: "Avatar2",
      year: 2022,
      rating: 7.5,
      poster:
        "https://tse4.mm.bing.net/th/id/OIP.rRJAdJZGssHexEBYRDBz7AHaG6?pid=Api&P=0&h=180",
    },
    {
      title: "kiss",
      year: 2025,
      rating: 8.6,
      poster:
        "https://static.digit.in/product/tr:n-ott_home_crousel/predator-b6aad40ec3.jpeg",
    },
    {
      title: "The Fantastic Four",
      year: 2025,
      rating: 7.0,
      poster:
        "https://static.digit.in/product/tr:n-ott_home_crousel/fantastic-four-2aa663e424.jpeg",
    },
    {
      title: "digitbinge",
      year: 2025,
      rating: 7.1,
      poster:
        "https://static.digit.in/digit_assets/images/digit_binge_small.jpg",
    },
    {
      title: "Strange",
      year: 2025,
      rating: 8.2,
      poster: "https://static.digit.in/OTT/v2/images/strange-1366604.jpg",
    },
    {
      title: "Sleepless",
      year: 2020,
      rating: 5.6,
      poster:
        "https://tse1.mm.bing.net/th/id/OIP.cB4wk7YciHnCj3aN9ZHLYgHaKu?pid=Api&P=0&h=180",
    },
    {
      title: "THE MARKER",
      year: 2020,
      rating: 5.5,
      poster:
        "https://static.digit.in/OTT/poster/the-marker-5f023c4b21ed109c79fc3263.jpg",
    },
    {
      title: "Offline",
      year: 2019,
      rating: 8.6,
      poster: "https://static.digit.in/OTT/v2/images/offline-995154.jpg",
    },
    {
      title: "The Rewrite",
      year: 2019,
      rating: 6.3,
      poster:
        "https://static.digit.in/OTT/poster/the-rewrite-5f02b72121ed109c79fedd01.jpg",
    },
    {
      title: "Take One",
      year: 2019,
      rating: 8.5,
      poster: "https://static.digit.in/OTT/v2/images/take-one-488816.jpg",
    },
    {
      title: "Silver Lining Playbook",
      year: 2019,
      rating: 7.7,
      poster:
        "https://static.digit.in/OTT/poster/silver-linings-playbook-5f02b4b021ed109c79fed603.jpg",
    },
    {
      title: "First Reformed",
      year: 2019,
      rating: 7.1,
      poster:
        "https://static.digit.in/OTT/poster/first-reformed-5fb528796734603ebee3e2cc.jpg",
    },
    {
      title: "Bahubali: The Epic",
      year: 2025,
      rating: 8.8,
      poster:
        "https://static.digit.in/product/tr:n-ott_home_crousel/bahubali-the-epic-e81edb1edf.jpeg",
    },
    {
      title: "LOKAH",
      year: 2025,
      rating: 7.6,
      poster:
        "https://static.digit.in/product/tr:n-ott_home_crousel/lokah-280cea79cf.jpeg",
    },
    {
      title: "Sarileru Neekevvaru",
      year: 2020,
      rating: 9.0,
      poster:
        "https://files.prokerala.com/movies/pics/300x360/telugu-movie-sarileru-neekevvaru-releasing-date-poster-111445.webp",
    },
    {
      title: "Ala Vaikunthapuram",
      year: 2020,
      rating: 7.8,
      poster:
        "https://files.prokerala.com/movies/pics/300x360/ala-vaikuntapuramlo-1st-look-poster-106982.webp",
    },
    {
      title: "Khaidi No.150",
      year: 2017,
      rating: 9.0,
      poster:
        "https://files.prokerala.com/movies/pics/300x360/khaidi-release-date-posters-65120.webp",
    },
    {
      title: "Yamudu 3",
      year: 2017,
      rating: 7.2,
      poster:
        "https://files.prokerala.com/movies/pics/300x360/suriya-s-singam-3-poster-65671.webp",
    },
    {
      title: "Inception",
      year: 2010,
      rating: 8.8,
      poster: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg",
    },
    {
      title: "Ghazi",
      year: 2017,
      rating: 7.1,
      poster:
        "https://files.prokerala.com/movies/pics/300x360/republic-day-poster-65637.webp",
    },
    {
      title: "Nannaku Prematho",
      year: 2016,
      rating: 9.0,
      poster:
        "https://files.prokerala.com/movies/pics/300x360/nannaku-prematho-wallpaper-53486.webp",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">🎬Movie List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            poster={movie.poster}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
