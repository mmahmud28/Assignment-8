import Banner from "@/Component/Banner";
import AllTiles from "./tiles/page";
import Marquee from "react-fast-marquee";



export default function Home() {
  return (
    <div className="space-y-8 p-5">
     
      <Marquee className="px-3 py-2">
        I can be a React component, multiple React components, or just some text.
      </Marquee>
       <Banner />
      <AllTiles />
    </div>
  );
}
