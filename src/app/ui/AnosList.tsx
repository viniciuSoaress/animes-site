import { years } from "../utils/years"

export function AnosList(){
  return (
    <ul className="grid grid-cols-3 gap-2 w-full">
      {years.map(year => (
        <li key={year}
        className="bg-neutral-800 py-2 text-center hover:cursor-pointer hover:bg-red-500 transition-colors"
        >
          {year}
          </li>
      ))}
    </ul>
  )
}