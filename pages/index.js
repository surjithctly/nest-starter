import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Nest Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold">
          Nest{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Starter
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Pre-configured Starter with TailwindCSS &amp; Next.js.{" "}
          <br />
          <br /> Get started by editing{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.tsx
          </code>
        </p>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://web3templates.com"
          target="_blank"
          rel="noopener noreferrer">
          Powered by Web3Templates
        </a>
      </footer>
    </div>
  );
}
