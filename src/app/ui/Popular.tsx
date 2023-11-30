import Link from "next/link"
type Props = {
  anime: {
    id: number,
    nome: string,
    descricao: string,
    avatar_url: string,
    ano: number
  }
}

export function Popular({
  anime
}: Props) {

  return (
    <Link href={String(anime.id)}>
      <div className="flex w-full justify-between hover:cursor-pointer mt-6">
        <img src={anime.avatar_url} alt={anime.nome}
          className="w-28 h-32"
        />
        <div className="bg-neutral-800 flex-1 p-3">
          <h3 className="text-xl">{anime.nome}</h3>
          <p className="text-gray-300 text-lg">{anime.ano}</p>
          <p>8.4</p>
        </div>
      </div>
    </Link>
  )

}