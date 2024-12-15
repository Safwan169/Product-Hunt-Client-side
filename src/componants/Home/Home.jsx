import React from "react";
import Navbar from "./shared/Navbar";
import Banner from "./shared/Banner/Banner";
import Heading from "../All-Shared/Heading";
import { Link } from "react-router-dom";
import Feretured from "./shared/Feretured";
import ShowCoupons from "./shared/ShowCoupons";
import Alldata from "../Fatching-data/Alldata";
import Featured from "../Fatching-data/Featured";
import ShinyButton from "../../components/ui/shiny-button";
import AnimatedShinyText from "../../components/ui/animated-shiny-text";
import { RainbowButton } from "../../components/ui/rainbow-button";

const Home = () => {
  // const alldata=useLoaderData()
  const [cart] = Alldata();
  const [featured] = Featured();
  const data = featured?.sort((a, b) => b.date - a.date);
  const lastData = data?.slice(0, 4);
  // console.log(vote)
  const vote = cart?.sort((a, b) => b.vote - a.vote);
  console.log(vote);

  return (
    <div className="px-2 sm:px-0 sm:space-y-2">
      <div className="md:h-[400px] lg:h-[700px]  ">
        <Banner></Banner>
      </div>
      <AnimatedShinyText>
        <Heading text={"Featured Products"}></Heading>
      </AnimatedShinyText>
      {lastData?.map((d) => (
        <Feretured data={d}></Feretured>
      ))}

      <div className="my-10 container  mx-auto">
        <ShowCoupons></ShowCoupons>
      </div>
      <div className="lg:mt-20 px-2 sm:px-0 sm:space-y-2 md:lg:mt-20 mt-10">
        <AnimatedShinyText>
          <Heading text={"Trending Products"}></Heading>
        </AnimatedShinyText>

        {vote?.map((d) => (
          <Feretured data={d}></Feretured>
        ))}
      </div>
      <button className="w-full mt-5  font-bold">
        <ShinyButton>
          {" "}
          <Link
            className="text-center bg-red-600 btn  text-white"
            to={"/products"}
          >
            All Products
          </Link>
        </ShinyButton>
      </button>
    </div>
  );
};

export default Home;
