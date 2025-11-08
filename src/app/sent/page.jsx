import Link from 'next/link'
export default function Sent() {
  return (
    <div className="w-full max-w-3xl">
      <div className="bg-white rounded-lg shadow p-12 text-center">
        <h2 className="text-2xl font-bold">Message Sent</h2>
        <p className="mt-3">Thank you — a respectful message has been queued to your MP (demo).</p>
        <Link href="/" className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded">Back to start</Link>
      </div>
    </div>
  )
}
