import { Genres } from '@/types';
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

async function GenreSelector() {


const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
const options: RequestInit = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`
  },
  next:{
    revalidate: 60*60*24,//Cache a request for 24 hours so that multiple request do not create traffic 
  }
};
  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;
  return (
    <DropdownMenu>
  <DropdownMenuTrigger><div className='flex'>Category <ChevronDown /></div></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Select your Option</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {data.genres.map((genre) => (
      <DropdownMenuItem key={genre.id}><Link href={`genre/${genre.id}?genre=${genre.name}`}>{genre.name}</Link></DropdownMenuItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default GenreSelector