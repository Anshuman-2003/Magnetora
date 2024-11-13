import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
params : {
    item : string;
};
};

function SearchPage({params : {item}} : Props) {
    if(!item) notFound();
    const term = decodeURI(item);
  return (
    <div>{term}</div>
  )
}

export default SearchPage