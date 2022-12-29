import Head from "next/head";
import Header from "./components/Header";
import Banner from "./components/Banner";
import SmallCard from "./components/SmallCard";
import MediumCard from "./components/MediumCard";
import LargeCard from "./components/LargeCard";
import Footer from './components/Footer';

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Hammad AirBnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />


      
      {/* max W-7xl uses for page default FIXED width */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* section explore More */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5"> Explore Nearby </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-6">
            {/* pull data from server side */}
            {exploreData?.map(({ img, distance, location }, i) => (
              <SmallCard
                key={i}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        {/* section live anywhere */}
        <section>
          <h2 className="text-4xl font-semibold py-8">live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }, i) => (
              <MediumCard key={i} img={img} title={title} />
            ))}
          </div>
        </section>

        {/* Large card section */}

        <section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Best Outdoors"
            description="Wishlists curated by Airbnb."
            buttonText="Get Inspired"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
