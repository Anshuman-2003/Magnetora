import MovieBanner from "@/components/MovieBanner";
import MovieExplorer from "@/components/MovieExplorer";
import { popular, topRated, trending, upcoming } from "@/lib/script";



export default async function Home() {
  const upC = await upcoming();
  const topR = await topRated();
  const pop = await popular();
  const trend = (await trending()).slice(0,50);
  return (
    <>
    <MovieBanner movies={trend}/>
    <MovieExplorer title={"Upcoming"} movray={upC}/>
    <MovieExplorer title={"Top Rated"} movray={topR}/>
    <MovieExplorer title={"Popular"} movray={pop}/>
    </>
  );
}
