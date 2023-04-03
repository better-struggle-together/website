import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import localFont from '@next/font/local'
import Head from 'next/head'
import Image from 'next/image'

library.add(faAsterisk)
config.autoAddCss = false

const grotesque = localFont({ src: './fonts/SportingGrotesque-Regular.otf' })
const grotesqueBold = localFont({ src: './fonts/SportingGrotesque-Bold.otf' })
const syne = localFont({ src: './fonts/Syne-Regular.otf' })

export default function Home() {
    return (
        <>
            <Head>
                <title>Better to Struggle Together</title>
                <meta name="description" content="Better to Struggle Together" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
            </Head>
            <div className="flex flex-col md:flex-row justify-center items-center h-[220px] md:h-[120px] p-10 border-b-[3px] border-[#141414] bg-[#ffffff]">
                <Image
                    src="/logo.svg"
                    height={92}
                    width={157}
                    alt="Better to Struggle Together logo"
                    style={{}}
                />
                <div className="flex flex-grow justify-center items-center" />
                <a href="https://discord.gg/UmQkMtNh2m">
                    <Image
                        src="/join-the-community.svg"
                        height={64}
                        width={285}
                        alt="Join the community"
                        className="md:mt-0 mt-4"
                        style={{
                            cursor: 'pointer',
                        }}
                        priority
                    />
                </a>
            </div>

            <main
                className="flex flex-row justify-center items-center"
                style={{
                    minHeight: 'calc(100vh - 120px - 16px)',
                    background:
                        'linear-gradient(243.19deg, #56D6FF -5%, #FFC28A 56.51%, #FF9191 103.87%)',
                }}
            >
                <div
                    className="flex flex-col justify-center items-center"
                    style={{
                        zIndex: 1,
                    }}
                >
                    <div className="flex flex-row justify-top items-center">
                        <Image
                            src="/sad-face.svg"
                            height={120}
                            width={120}
                            style={{
                                transform: 'translate(20px, -60px)',
                            }}
                            alt="Sad face"
                        />

                        <div className="flex flex-col justify-center items-left mt-[100px] md:mt-0">
                            <p
                                className={grotesque.className}
                                style={{
                                    fontSize: '24px',
                                    lineHeight: '40px',
                                }}
                            >
                                struggling alone? don't.
                            </p>
                            <p
                                className={grotesqueBold.className}
                                style={{
                                    fontSize: '48px',
                                    lineHeight: '79px',
                                    textShadow: '2px 3px rgba(255,255,255)',
                                }}
                            >
                                better to struggle
                            </p>
                            <div className="flex flex-col md:flex-row justify-end items-center lg:items-start">
                                <div className="flex flex-grow" />
                                <Image
                                    src="/asterisk-1.svg"
                                    className="hidden md:block"
                                    height={40}
                                    width={40}
                                    style={{
                                        paddingTop: '1.2rem',
                                        rotate: '9deg',
                                    }}
                                    alt="asterisk"
                                />
                                <div style={{ width: '3rem' }} />
                                <Image src="/together.svg" height={85} width={251} alt="together" />
                                <div
                                    className="flex flex-row justify-items-center items-center"
                                    style={{
                                        height: 100,
                                    }}
                                >
                                    <Image
                                        src="https://avatars.githubusercontent.com/u/20950876?v=4"
                                        height={120}
                                        width={120}
                                        className="rounded-full h-[52px] w-[52px] border-[2px] border-[#141414]"
                                        style={{
                                            boxShadow: '3px 3px #FE6B6B',
                                        }}
                                        alt="avatar"
                                    />
                                    <Image
                                        src="/avatar2.png"
                                        height={120}
                                        width={120}
                                        className="rounded-full h-[52px] w-[52px] border-[2px] border-[#141414]"
                                        style={{
                                            boxShadow: '3px 3px #FE6B6B',
                                            marginLeft: '-0.5rem',
                                        }}
                                        alt="avatar"
                                    />
                                    <Image
                                        src="/avatar1.png"
                                        height={120}
                                        width={120}
                                        className="rounded-full h-[52px] w-[52px] border-[2px] border-[#141414]"
                                        style={{
                                            marginLeft: '-0.5rem',
                                            boxShadow: '3px 3px #FE6B6B',
                                        }}
                                        alt="avatar"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="hidden md:flex flex-col justify-end items-center"
                            style={{
                                marginTop: '6rem',
                                marginLeft: '3rem',
                            }}
                        >
                            <Image
                                src="/star.svg"
                                height={65}
                                width={65}
                                style={{
                                    paddingTop: '1.2rem',
                                }}
                                alt="star"
                            />
                            <div
                                className="flex flex-row justify-center items-center"
                                style={{ marginTop: '1rem' }}
                            >
                                <Image
                                    src="/star.svg"
                                    height={40}
                                    width={40}
                                    style={{
                                        rotate: '-9deg',
                                    }}
                                    alt="asterisk"
                                />
                                <div style={{ width: '2rem' }} />
                                <Image
                                    src="/asterisk-1.svg"
                                    height={25}
                                    width={25}
                                    style={{
                                        rotate: '9deg',
                                    }}
                                    alt="asterisk"
                                />
                            </div>
                        </div>
                    </div>
                    <Image
                        src="/asterisk-2.svg"
                        height={23}
                        width={23}
                        style={{
                            position: 'absolute',
                            left: '3rem',
                            rotate: '-9deg',
                        }}
                        alt="sparkles"
                    />
                    <div className="p-[1rem] md:w-[30rem] md:p-0 xl:w-[40rem] xl:p-0">
                        <p
                            className={syne.className}
                            style={{
                                fontSize: '18px',
                                textAlign: 'center',
                                marginTop: '2rem',
                            }}
                        >
                            Welcome to our free Discord community for new and seasoned developers.
                            This community is designed to be a friendly place to learn, grow and
                            struggle, together.
                        </p>
                    </div>
                    <a href="https://discord.gg/UmQkMtNh2m">
                        <Image
                            src="/check-it-out.svg"
                            width={200}
                            height={50}
                            alt="Check it out"
                            className="md:mt-0 mt-4"
                            style={{
                                margin: '1rem',
                                cursor: 'pointer',
                            }}
                            priority
                        />
                    </a>
                    <div
                        className="hidden md:flex flex-row justify-start items-start"
                        style={{ minWidth: '25rem' }}
                    >
                        <Image
                            src="/sparkles.svg"
                            height={43}
                            width={43}
                            style={{
                                marginLeft: '6rem',
                                rotate: '-9deg',
                            }}
                            alt="sparkles"
                        />
                        <div style={{ width: '10rem' }} />
                        <Image
                            src="/asterisk-2.svg"
                            height={23}
                            width={23}
                            style={{
                                marginLeft: '15rem',
                                rotate: '-9deg',
                            }}
                            alt="sparkles"
                        />
                    </div>
                </div>
            </main>
            <div
                className="hidden lg:block"
                style={{
                    position: 'fixed',
                    left: '-120px',
                    bottom: '-2px',
                    backgroundImage: 'url(/bam.svg)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '500px',
                    height: '300px',
                    transform: 'rotate(-7.03deg)',
                }}
            />
            <div className="h-[16px] bg-[#FE6B6B]" />
        </>
    )
}
