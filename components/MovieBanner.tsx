"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Movie } from "@/types";

function newPath(path: string, size: string) {
  return `https://image.tmdb.org/t/p/${size}/${path}`;
}

const truncateOverview = (overview: string, wordLimit: number = 30): string => {
  const words = overview.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return overview;
};

function MovieBanner({ movies }: { movies: Movie[] }) {
  const [currIdx, setCurrIdx] = useState(0);

  // Update the current movie index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIdx((prevIdx) => (prevIdx + 1) % movies.length);
    }, 7000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [movies.length]);

  const mov = movies[currIdx];

  return (
    <>
      <div className="w-full h-[50vh] lg:h-[70vh] md:h-[45vh] sm:h-[40vh] relative">
        <Image
          src={newPath(mov.backdrop_path, "original")}
          alt={mov.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-700 to-transparent dark:from-black dark:via-zinc-900 dark:to-transparent opacity-60"></div>
        
        {/* Title and Overview */}
        <div className="absolute bottom-4 left-4 z-20 text-white p-4">
          <h2 className="text-xl lg:text-4xl font-semibold my-1">{mov.title}</h2>
          <p className="text-sm sm:text-xs lg:text-lg">{truncateOverview(mov.overview)}</p>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#121212]"/>
      </div>
    </>
  );
}

export default MovieBanner;
