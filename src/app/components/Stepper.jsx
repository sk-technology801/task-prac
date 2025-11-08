'use client'
export default function Stepper({ step = 1 }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-4">
        {[1,2,3].map((s)=>(
          <div key={s} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${s <= step ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600'}`}>{s}</div>
            {s < 3 && <div className={`w-20 h-1 ${s < step ? 'bg-pink-500' : 'bg-gray-200'}`}></div>}
          </div>
        ))}
      </div>
    </div>
  )
}
