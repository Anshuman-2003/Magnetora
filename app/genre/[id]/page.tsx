//import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
    params : {
        id : string;
    };
    searchParams: {
      genre : string
    };
};

function genrePage({params : {id}, searchParams: {genre}} : Props) {
  return (
    <div>{id} {genre}</div>
  )
}

export default genrePage