import { animesList } from "../utils/animesList";
import Image from "next/image";

export async function genereteStaticParams() {
  return animesList.map((a) => ({
    params: {
      id: a.id
    }
  }))
}

async function getProjects({ id }: { id: string }) {
  return animesList[Number(id)]
}


export default async function Anime({ params }: { params: { id: string } }) {

  const anime = await getProjects(params)

  return (
    <main className=" flex flex-col gap-1 min-h-screen md:flex-row bg-neutral-700">

      <div
        className="flex gap-5 bg-black p-5"
      >

        <img
          src={anime.avatar_url}
          alt={anime.nome}
          className="w-64"
        />

        <div className="flex flex-col flex-1 gap-6">

          <section>
            <h3 className="text-4xl">{anime.nome}</h3>
            <p className="text-gray-300 text-lg">{anime.ano}</p>
          </section>

          <section className="border-y py-4 w-full border-neutral-700">
            <p className=" text-lg border border-neutral-700  w-min px-6 py-3">⭐{anime.nota}</p>
          </section>

          <section className="flex flex-wrap gap-3">
            {anime.categorias.map(ct => (
              <p key={ct} className="text-gray-400 bg-neutral-800 text-lg border border-neutral-700  w-min py-1 px-3 hover:text-red-500">{ct}</p>
            ))}
          </section>

        </div>

      </div>

      <div className="bg-black p-5 h-[410px]">
        <p className="text-gray-300 text-lg">
          {anime.descricao}
        </p>
      </div>

    </main>
  )
}