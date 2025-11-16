import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Episodes from '../components/Episodes';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

export async function getStaticProps() {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;
  const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

  const [youtubeRes, instaRes] = await Promise.all([
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`),
    fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,permalink&access_token=${INSTAGRAM_ACCESS_TOKEN}`)
  ]);

  const youtubeData = await youtubeRes.json();
  const instaData = await instaRes.json();

  return {
    props: {
      episodes: youtubeData.items || [],
      reviews: instaData.data || [],
    },
    revalidate: 3600,
  };
}

export default function Home({ episodes, reviews }) {
  return (
    <>
      <Head>
        <title>SWJ Podcast</title>
      </Head>
      <Header />
      <Hero />
      <Episodes episodes={episodes} />
      <Reviews reviews={reviews} />
      <Footer />
    </>
  );
}
