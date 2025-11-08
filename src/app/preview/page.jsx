'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import Stepper from '../../app/components/Stepper'

export default function Preview() {
  const router = useRouter()
  const sp = useSearchParams()
  const data = {
    postcode: sp.get('postcode') || '',
    firstName: sp.get('firstName') || '',
    lastName: sp.get('lastName') || '',
    email: sp.get('email') || '',
    message: sp.get('message') || ''
  }

  function send() {
    router.push('/sent')
  }

  return (
    <div className="w-full max-w-3xl">
      <div className="bg-white rounded-lg shadow p-8">
        <Stepper step={3} />
        <h2 className="text-lg font-semibold">Preview Message</h2>
        <div className="mt-4 border rounded p-4 bg-gray-50">
          <p className="text-sm"><strong>To (MP):</strong> [MP for {data.postcode || 'your area'}]</p>
          <p className="mt-3 whitespace-pre-line">{data.message}</p>
          <p className="mt-3 text-sm text-gray-600">From: {data.firstName} {data.lastName} — {data.email}</p>
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={()=>router.back()} className="mr-2 px-4 py-2 border rounded">Back</button>
          <button onClick={send} className="px-4 py-2 bg-pink-500 text-white rounded">Send Message</button>
        </div>
      </div>
    </div>
  )
}
