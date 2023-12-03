import Link from "next/link"
import { animesList } from "../utils/animesList"

export function Animes() {
  return (
    <ul className="grid grid-cols-3 gap-5 mt-3 border-b border-neutral-800 py-2">
      {animesList.map(anime => (
        <li
          key={anime.id}
          className=""
        >
          <Link href={`${anime.id}`}>
            <img
              src={anime.avatar_url}
              alt={anime.nome}
              className="rounded-2xl w-56 h-40 mb-2 hover:opacity-75"
            />
            <h2 className="hover:text-red-500 transition-colors font-medium">{anime.nome}</h2>
          </Link>
        </li>
      ))}
    </ul>
  )
}