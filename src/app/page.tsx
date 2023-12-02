import { AnosList } from "./ui/AnosList"
import { Popular } from "./ui/Popular"
import { animesList } from "./utils/animesList"
import { Root } from "./ui/Root"
import { Carrossel } from "./ui/Carrossel"

export function getProjects() {
  return animesList
}

export default async function Home() {

  const animes = getProjects()
  return (
    <main
      className="flex min-h-screen flex-col md:flex-row  p-2"
    >
      <Root maior>

        <h1 className="text-2xl">Destaques</h1>
        <Carrossel />
      </Root>

      <Root>
        <div className="mt-6 flex flex-col gap-3">
        <h1 className="text-2xl">Populares</h1>

          {animes.map(anime => (

            <Popular anime={anime} key={anime.id} />
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3">
        <h1 className="text-2xl">Anos</h1>

          <AnosList />
        </div>
      </Root>
    </main>
  )
}
