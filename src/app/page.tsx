import { AnosList } from "./ui/AnosList"
import { Popular } from "./ui/Popular"
import { animesList } from "./utils/animesList"
import { Root } from "./ui/Root"
import { Carrossel } from "./ui/Carrossel"
import { Animes } from "./ui/Animes"

 async function getPost() {
  return animesList
}

export default async function Home() {

  const animes = await getPost()

  const popularsAnimes = animes.slice(3, 7)

  return (
    <main
      className="flex min-h-screen flex-col md:flex-row p-2"
    >
      <Root maior>
        <h2 className="text-2xl border-l-4 pl-2 border-red-500">Destaques</h2>
        <Carrossel />

        <h2 className="text-2xl border-l-4 pl-2 border-red-500 mt-2">Todos</h2>
        <Animes />
      </Root>

      <Root>
        <div className="mt-6 flex flex-col gap-3">
        <h2 className="text-2xl border-l-4 pl-2 border-red-500">Populares</h2>

          {popularsAnimes.map(anime => (

            <Popular anime={anime} key={anime.id} />
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3">
        <h2 className="text-2xl border-l-4 pl-2 border-red-500">Anos</h2>

          <AnosList />
        </div>
      </Root>
    </main>
  )
}
