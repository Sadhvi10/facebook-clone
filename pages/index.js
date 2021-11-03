import { getSession } from "next-auth/client";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export default function Home({ session, posts }) {
  if (!session) return <Login />;
  return (
    <>
      <div className='h-screen overflow-hidden bg-gray-100'>
        <Head>
          <title>Facebook</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Header />

        <main className='flex'>
          <Sidebar />
          <Feed />
          <Widgets />
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

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  return {
    props: {
      session,
      posts: docs,
    },
  };
}
