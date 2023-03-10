import Head from "next/head";
import Hero from "@/components/sections/Hero";
import Spotlight from "@/components/sections/Spotlight";
import Explore from "@/components/sections/Explore";
import Follow from "@/components/sections/Follow";
import Information from "@/components/sections/Information";
import ActivitySection from "@/components/sections/ActivitySection";
import QuickLinks from "@/components/sections/QuickLinks";
import Reasearch from "@/components/sections/Reasearch";
import Study from "@/components/sections/Study";
import Event from "@/components/sections/Event";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Spotlight />
        <Event />
        <QuickLinks />
        <Explore />
        <ActivitySection />
        <Study />
        <Information />
        <Reasearch />
        <Follow />
      </main>
    </>
  );
}
