import { UlList } from "./Header/UlList"
import { Input } from "./Header/Input"


export function Header() {
  return (
    <header className="flex justify-between items-center p-3 text-white">

      <h1 className="text-xl">Animes Online</h1>

      <UlList />

      <Input />

    </header>
  )
}