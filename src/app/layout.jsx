import './globals.css'

export const metadata = {
  title: 'SaveBritishBusiness - Demo',
  description: 'Multi-step form UI demo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <main className="min-h-screen flex items-center justify-center p-6">
          {children}
        </main>
      </body>
    </html>
  )
}
