import { animesList } from "../utils/animesList";

export async function genereteStaticParams(){
  return animesList.map((a) => ({
    params: {
      id: a.id
    }
  }))
}

async function getProjects({id}: {id: string}) {
  console.log(id)
  return animesList[Number(id)]
}


export default async function Anime({ params }: { params: { id: string } }) {

  const anime = await getProjects(params)
  const paramsId= params.id

  return (
    <div>
      {paramsId}
      {anime?.ano}
    </div>
  )
}