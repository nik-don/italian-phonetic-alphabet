import Image from "next/image";
import { PhoneticConverter } from "../components/phonetic-converter";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center text-center sm:text-left max-w-2xl">
        {/* Phonetic Converter Component */}
        <PhoneticConverter />

        <p className="text-md sm:text-lg text-gray-700 dark:text-gray-300 mt-4">
          Simply enter your text above, and see how each letter translates to a
          city name in the Italian phonetic alphabet!
        </p>
      </main>

      <footer className="mt-12 flex gap-6 items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Next.js
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/vercel.svg"
            alt="Vercel logomark"
            width={16}
            height={16}
          />
          Vercel
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
          href="https://github.com/yourusername/italian-phonetic-alphabet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="GitHub icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
      </footer>
    </div>
  );
}
