'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Stepper from '../../app/components/Stepper'

export default function EnterDetails() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const postcode = searchParams.get('postcode') || ''

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('I am concerned about the Employment Rights Bill...')

  function goNext() {
    const data = { firstName, lastName, email, message, postcode }
    const q = new URLSearchParams(data).toString()
    router.push(`/preview?${q}`)
  }

  return (
    <div className="w-full max-w-3xl">
      <div className="bg-white rounded-lg shadow p-8">
        <Stepper step={2} />
        <h2 className="text-lg font-semibold">Enter Your Details</h2>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First name" className="col-span-1 border rounded px-3 py-2"/>
          <input value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last name" className="col-span-1 border rounded px-3 py-2"/>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="col-span-2 border rounded px-3 py-2"/>
        </div>
        <label className="block mt-4 text-sm">Message</label>
        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className="w-full border rounded p-3 h-36"></textarea>

        <div className="mt-4 flex justify-end">
          <button onClick={()=>router.back()} className="mr-2 px-4 py-2 border rounded">Back</button>
          <button onClick={goNext} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
        </div>
      </div>
    </div>
  )
}
