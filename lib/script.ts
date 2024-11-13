import { Res } from "@/types";


export async function fetchMovie(url : URL, cacheTime? : number){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        next:{
          revalidate: cacheTime || 60*60*24,
        }
      };
    const response = await fetch(url,options);
    const data = await response.json() as Res;
    return data.results;
};



export async function trending(){
    const url = new URL('https://api.themoviedb.org/3/trending/movie/day?language=en-US');
    const data = await fetchMovie(url);
    console.log(data);
    return data;
}

export async function popular(){
    const url = new URL('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
    const data = await fetchMovie(url);
    return data;
}

export async function topRated(){
    const url = new URL('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1');
    const data = await fetchMovie(url);
    return data;
}

export async function upcoming(){
    const url = new URL('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1');
    const data = await fetchMovie(url);
    return data;
}

export async function getMovie(id? : string, keyword?:string){
    const url = new URL(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`);
    if(keyword !== undefined) url.searchParams.set("with_keywords", keyword);
    if(id !== undefined) url.searchParams.set("with_genres", id);
    const data = await fetchMovie(url);
    return data;
}

export async function getSearchedMovie(term : string){
    const url = new URL('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1');
    url.searchParams.set("query", term);
    const data = await fetchMovie(url);
    return data;
}