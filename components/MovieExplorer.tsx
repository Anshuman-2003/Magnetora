import { Movie } from '@/types';
import React from 'react'
import MovieCard from './MovieCard';


type Props = {
    title?:string;
    movray:Movie[];
    isVertical?:string;
}

function MovieExplorer({title, movray, isVertical } : Props) {
  if(isVertical === undefined) return (
    <>
    <h2 className='text-2xl font-semibold m-3'>{title}</h2>
    <div className='flex overflow-x-auto gap-4 pb-4 scrollbar-hidden'>
    {movray.map( (item:Movie) => (
      <MovieCard key={item.id} mov={item}/>
    ))}
    </div>
    </>
  )
}

export default MovieExplorer