
type CharProps = {
  chars: string[]
}

export function CharList({ chars }: CharProps) {
  return (
    <nav className=" overflow-x-scroll bg-neutral-800">
      <ul className="flex w-[1660px] justify-between p-4">
        {chars.map(char => (
          <Char key={char} char={char} />
        ))}
      </ul>
    </ nav>
  )
}

function Char({ char }: { char: string }) {
  return (
    <li className="hover:text-red-500 w-10">{char}</li>
  )
}