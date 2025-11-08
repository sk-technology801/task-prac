"use client";
import Image from "next/image";
import Link from "next/link";

export default function Draft() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/bg-draft.jpg"
        alt="Draft Background"
        fill
        className="object-cover blur-sm brightness-75 -z-10"
        priority
      />

      <div className="bg-white/90 rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Your Draft is Ready</h1>
        <p className="text-gray-600 mb-6">
          Review and edit your message before sending it to your MP.
        </p>

        <textarea
          className="w-full h-40 border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          defaultValue={`Dear [MP Name],\n\nI am writing to express my concerns about...`}
        />

        <div className="flex flex-col space-y-3">
          <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition">
            Copy Draft
          </button>
          <Link href="/">
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Send Message
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 text-white text-sm tracking-wide">
        Step 4 of 4 — Review Draft
      </div>
    </div>
  );
}
