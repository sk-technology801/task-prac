"use client";
import Image from "next/image";
import Link from "next/link";

export default function SelectTopic() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/bg-select-topic.jpg"
        alt="Select Topic Background"
        fill
        className="object-cover blur-sm brightness-75 -z-10"
        priority
      />

      <div className="bg-white/90 rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Select Topic</h1>
        <p className="text-gray-600 mb-6">
          Please choose a topic you’d like to discuss with your MP.
        </p>

        <div className="flex flex-col space-y-3">
          {["Environment", "Healthcare", "Education", "Transport"].map((topic) => (
            <button
              key={topic}
              className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition"
            >
              {topic}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <Link href="/draft">
            <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Next
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 text-white text-sm tracking-wide">
        Step 3 of 4 — Select Topic
      </div>
    </div>
  );
}
