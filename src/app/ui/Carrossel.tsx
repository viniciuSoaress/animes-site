'use client'

import { useState, useEffect } from "react";
import Link from "next/link";

import { animesList } from "../utils/animesList";



export function Carrossel() {

  const [index, setIndex] = useState(0)

  const animes = animesList.slice(0, 3)


  useEffect(() => {


    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % animes.length)
    }, 4000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const anime = animes[index]

  return (
    <Link href={`${anime.id}`}>
      <div className="flex gap-6 mt-4 md:flex-col lg:flex-row border-b border-neutral-800 h-96 md:h-auto">

        <img
          src={anime.avatar_url}
          alt={anime.nome}
          className="w-60 h-60 rounded-lg"
        />

        <div className="flex gap-3  flex-col">
          <section>
            <h3 className="text-4xl">{anime.nome}</h3>
            <p className="text-gray-300 text-lg">{anime.ano}</p>
          </section>

          <section className="border-y py-4 w-full border-neutral-700">
            <p className=" text-lg border border-neutral-700  w-min px-6 py-3">⭐{anime.nota}</p>
          </section>

          <section>
            <p className="text-xs">
              {anime.descricao}
            </p>
          </section>
        </div>
      </div>
    </Link>
  )
}