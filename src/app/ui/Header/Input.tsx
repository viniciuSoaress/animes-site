'use client'

import { useState } from 'react'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export function Input() {

  const [isSearch, setIsSearch] = useState(false)

  function handleSearch() {
    setIsSearch(is => !is)
  }

  return (
    <div className='flex flex-col'>
      <label
        id="search"
        className="flex justify-center bg-stone-700 p-2 rounded-lg text-white w-9 md:w-full"
      >
        <input
          id="search"
          type="text"
          placeholder="Buscar..."
          className="bg-transparent text-white outline-none hidden md:block"
        />
        {isSearch ? (
          <button onClick={() => handleSearch()}>
            X
          </button>
        ) : (

          <button onClick={() => handleSearch()}>
            <MagnifyingGlassIcon className='w-5' />
          </button>
        )}


      </label>
      {isSearch && (
        <div className='absolute top-14 right-3'>
          <label
            id="search"
            className="flex bg-stone-700 p-2 rounded-lg text-white "
          >
            <input
              id="search"
              type="text"
              placeholder="Buscar..."
              className="bg-transparent text-white outline-none md:hidden"
            />

            <button>
              <MagnifyingGlassIcon className='w-5' />
            </button>

          </label>
        </div>
      )}
    </div>
  )
}