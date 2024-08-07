import UserInfo from "@/components/UserInfo";
import RankingList from "@/components/RankingList";

import LandingPage from "@/components/LandingPage";
export default function Home() {
  return (
    <div className="relative h-screen -mt-24">
      {/* <UserInfo /> */}
      {/* <LandingPage/> */}
      <LandingPage className="absolute top-0 left-0 w-full h-full z-10" />
      <RankingList className="absolute top-0 left-0 w-full h-full z-20" />

    </div>
  );
}
