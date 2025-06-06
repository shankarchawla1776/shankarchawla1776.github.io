import './globals.css'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/computer-modern-font@1.0.1/fonts/Serif/cmun-serif.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
        />
      </head>
      <body>
        <div className="max-w-2xl mx-auto px-4 py-8">
          <header className="mb-12 text-center">
            <Link href="/">
              <h1 className="text-3xl font-bold hover:cursor-pointer">Indefeasible</h1>
            </Link>
          </header>
          <main>{children}</main>
          <footer className="mt-12 pt-8 border-t text-right">
            <Link href="/" className="text-blue-600 hover:underline">Indefeasible</Link>
            {' ⋄ '}
            <Link href="/about" className="text-blue-600 hover:underline">About</Link>
            {' ⋄ '}
            <Link href="https://github.com/yourusername" className="text-blue-600 hover:underline">Xitter</Link>
          </footer>
        </div>
      </body>
    </html>
  )
}
