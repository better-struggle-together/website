import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Better to Struggle Together</title>
        <meta name="description" content="Better to Struggle Together" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="prose w-full max-w-2xl mx-auto mt-8 px-4 md:px-0">
        <h1>Better to Struggle Together</h1>
      </main>
    </>
  );
}
