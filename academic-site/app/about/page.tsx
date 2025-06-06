import Link from 'next/link'

export default function About() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-2xl mb-4">About Me</h1>
      <p className="mb-4">
          I am a high school student interested in research in mathematical physics and computer science. I'm trying to
          use numerical and analytical methods to address a variety of problems accross different fields. Currently, I'm interning
          with a nationally funded lab in New York working with time series produced by neural oscillations.
      </p>
      <p className="mb-4">
          In the past, I worked with a local lab to track animal behaviors with machine learning where we produced one paper.
          In 2025, I'm submitting to IEEE EMBS and I'll be on campus at CMU to work on tensor imaging.
      </p>
      <h1 className="text-2xl mb-4">Interests</h1>
      <h6 className="mb-4 text-center">Constrained Eigenproblems</h6>
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">← Back to home</Link>
      </div>
    </div>
  )
}
