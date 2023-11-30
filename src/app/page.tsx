import { AnosList } from "./ui/AnosList"
import { Popular } from "./ui/Popular"
import { animesList } from "./utils/animesList"
import { Root } from "./ui/Root"

export function getProjects(){
  return animesList
}

export default async  function Home() {

  const animes = getProjects()
  return (
    <main
    className="flex min-h-screen flex-col md:flex-row  p-2"
    >
      <Root maior>

      <h1>home</h1>
      </Root>
      <hr />
      <Root>
        <h2>Populares</h2>
        {animes.map(anime => (

        <Popular anime={anime} key={anime.id}/>
        ))}
        <h2>Ano</h2>
        <AnosList />
      </Root>
    </main>
  )
}
