import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import { client, urlFor } from '../lib/client';

import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import MapGL from "../components/MapGL";

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  //finding whether or not string exist in the code or not?
  const loc = location;
  const sear = loc.indexOf(searchResults[0].location);
  const sear1 = loc.lastIndexOf(searchResults[0].location);
  console.log(searchResults);
  //using sear to display not found page



  const text = location;
  const myArray = text.split(" ");

  myArray.map(text => {
    console.log(text);
  })
  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays -{range}- for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Places</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            { searchResults.filter(search => myArray.includes(search.location)).map(item => (
                               console.log(item.slug),
                  <InfoCard
                    key={item.img}
                    img={item.img[0].asset._ref.replace("image-", "https://cdn.sanity.io/images/5i9l5w2e/production/").replace("-webp",".webp" || "-jpg", ".jpg" )}
                    location={item.location}
                    title={item.title}
                    description={item.description}
                    star={item.star}
                    price={item.price}
                    total={item.total}
                    slug={item.slug}
                    area={item.area}
                    address={item.address}
                  />
              ) )


            }

            {sear==-1 && (<h1>Not found</h1>)}


          </div>
        </section>

        <section className="hidden  xl:inline-flex xl:min-w-[600px]">
          <MapGL searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export const getServerSideProps = async () => {
  const query = '*[_type == "location"]';
  const searchResults = await client.fetch(query);
  return {
    props: {
      searchResults,
    },
  };
}
