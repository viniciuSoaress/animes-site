import { AnosList } from "./ui/AnosList"

export default function Home() {
  return (
    <main
    className="flex min-h-screen flex-col md:flex-row items-center p-2"
    >
      <h1>home</h1>
      <hr />
      <div className="w-[90vw] p-3">
        <h2>Ano</h2>
        <AnosList />
      </div>
    </main>
  )
}
