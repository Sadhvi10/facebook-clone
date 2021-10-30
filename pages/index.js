import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <div className=''>
        <Head>
          <title>Facebook</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Header />

        <main>
          {/* Sidebar */}
          {/* Feed */}
          {/* Widgets */}
        </main>
      </div>
      <div class='fixed z-50 bottom-2 right-2 bg-blue-100 text-blue-700 text-center font-semibold rounded-full py-2 w-20'>
        <span class='block md:hidden'>sm</span>
        <span class='hidden md:block lg:hidden'>md</span>
        <span class='hidden lg:block xl:hidden'>lg</span>
        <span class='hidden xl:block 2xl:hidden'>xl</span>
        <span class='hidden 2xl:block'>2xl</span>
      </div>
    </>
  );
}
