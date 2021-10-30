import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Facebook</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='font-semibold text-center text-4xl'>
        Let's build Facebook with next.js and TailwindCSS
      </h1>
    </div>
  );
}
