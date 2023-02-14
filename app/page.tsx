import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            <Head>
                <title>Better to Struggle Together</title>
                <meta name="description" content="Better to Struggle Together" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="prose prose-headings:font-headings w-full max-w-2xl mx-auto mt-8 px-4 md:px-0">
                <Image
                    src="/this-is-fine-square.jpeg"
                    height={200}
                    width={200}
                    className="rounded-full h-40 w-40"
                    alt="This is fine meme zoomed in"
                />
                <h1>Better to Struggle Together</h1>
                <p>A place to learn and grow</p>
                <a className="text-[#5B65EA]" href="https://discord.gg/UmQkMtNh2m">
                    Join the gang on discord
                </a>
            </main>
        </>
    )
}
