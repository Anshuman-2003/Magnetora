import { Movie } from '@/types'
import React from 'react'
import Image from "next/image";

type Props = {
    mov:Movie;
}

function newPath(path : string, size : string){
    return `https://image.tmdb.org/t/p/${size}/${path}`
}
//newPath(mov.backdrop_path,"original")
function MovieCard({mov} : Props) {
  return (
    <div className="relative w-48 md:w-60 lg:w-80 h-40 rounded-lg overflow-hidden shadow-lg dark:bg-zinc-900 flex-shrink-0 ransform transition-transform duration-300 hover:scale-105">
      {/* Image with gradient overlay */}
      <div className="relative w-full h-full">
        <Image
          src={newPath(mov.backdrop_path,"original")}
          alt={mov.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        {/* Gradient with theme inversion for light mode */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-transparent dark:bg-gradient-to-r dark:from-zinc-900 dark:via-transparent dark:to-transparent light:bg-gradient-to-r light:from-transparent light:via-transparent light:to-zinc-900" />
      </div>

      {/* Movie title at bottom-left with high transparency */}
      <div className="absolute bottom-4 left-4 p-2 bg-black bg-opacity-50 rounded-md">
        <h3 className="text-white text-xs font-semibold">{mov.title}</h3>
      </div>
    </div>
  )
}

export default MovieCard