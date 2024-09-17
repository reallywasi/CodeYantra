// import UserInfo from "@/components/UserInfo";
// import RankingList from "@/components/RankingList";

// import LandingPage from "@/components/LandingPage";
// export default function Home() {
//   return (
//     <div className="relative h-screen -mt-24">
//       {/* <UserInfo /> */}
//       {/* <LandingPage/> */}
//       <LandingPage className="absolute top-0 left-0 w-full h-full z-10" />
//       <RankingList className="absolute top-0 left-0 w-full h-full z-20" />

//     </div>
//   );
// }

import Testimonials from '@/components/homepage/testimonials';
import SupportSection from '@/components/SupportSection ';
import WhyChooseUs from '@/components/homepage/WhyChooseUs'
import FAQ from '@/components/homepage/FAQ';
import AICodeEnhancements from '@/components/homepage/AICodeEnhancements';
import Footer from '@/components/homepage/Footer';
import React from 'react';
import Home from '@/components/homepage/Home';
import CodeYantraFeatures from '@/components/homepage/CodeYantraFeatures';
import DownHome from '@/components/homepage/DownHome';
import ReportBug from '@/components/homepage/ReportBug';
const LeadMagnetsUI = () => {
  return (
    <div>
        <Home/>
<DownHome/>
<CodeYantraFeatures/>
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}


     
  
      <section className='my-20'>
      <AICodeEnhancements/>

      </section>

      <WhyChooseUs/>
      <section className='py-20'>
      <Testimonials/>

      </section>
      <ReportBug/>
      <section className='py-20'>
<FAQ/>
      </section>
      <SupportSection/>

    </div>
    <Footer/>
    </div>
  );
};

export default LeadMagnetsUI;
