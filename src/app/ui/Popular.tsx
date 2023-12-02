import Link from "next/link"
type Props = {
  anime: {
    id: number,
    nome: string,
    descricao: string,
    avatar_url: string,
    ano: number,
    nota: number
  }
}

export function Popular({
  anime
}: Props) {

  return (
    <Link href={String(anime.id)}>
      <div className="flex w-full justify-between hover:cursor-pointer hover:opacity-80 transition-colors">
        <img src={anime.avatar_url} alt={anime.nome}
          className="w-28 h-32 object-top"
        />
        <div className="bg-neutral-900 flex-1 p-3">
          <h3 className="text-xl">{anime.nome}</h3>
          <p className="text-gray-300 text-lg">{anime.ano}</p>
          <p>{anime.nota}</p>
        </div>
      </div>
    </Link>
  )

}