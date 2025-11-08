'use client'
import Link from 'next/link'
import { useState } from 'react'
import Stepper from '../app/components/Stepper'

export default function Home() {
  const [postcode, setPostcode] = useState('')
  return (
    <div className="w-full max-w-3xl">
      <div className="bg-[url('/hero.jpg')] bg-cover rounded-lg shadow-lg p-12 text-center text-white">
        <h1 className="text-3xl font-bold leading-tight">Concerned About The Employment Rights Bill? Write A Professional Email To Your MP</h1>
        <p className="mt-3 text-pink-300">In less than 1 minute</p>
      </div>

      <div className="bg-white rounded-lg shadow -mt-8 p-8">
        <Stepper step={1} />
        <h2 className="text-lg font-semibold">Enter Your UK Postcode</h2>
        <p className="text-sm text-gray-500">If you don't know, use Google</p>
        <div className="mt-4 flex gap-2">
          <input value={postcode} onChange={(e)=>setPostcode(e.target.value)} placeholder="XX11 1XX" className="flex-1 border rounded px-3 py-2"/>
          <Link href={{ pathname: '/enter-details', query: { postcode }}} className="bg-blue-500 text-white px-4 py-2 rounded">Search</Link>
        </div>
      </div>

      <footer className="mt-6 text-center text-sm text-gray-500">
        SaveBritishBusiness — A demo UI
      </footer>
    </div>
  )
}
