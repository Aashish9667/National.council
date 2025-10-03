

import Feature from "./newpage/feature";
import Ncse from "./newpage/ncse";
import Event from "./newpage/event";
import Blogsection from "./newpage/blogsection";
import Successstory from "./newpage/successstory";
import Threepageinoneframe from "./newpage/threepageinoneframe";
import Navbar from "./newpage/navbar";
import Questionssection from "./newpage/questionssection";
import Navigationlink from "./newpage/navigationlink";
import Welcometo from "./newpage/welcometo";
import Programs from "./newpage/programs"
import Curriculumandsyllabus from "./newpage/curriculumandsyllabus";
export default function Home() {
  return (
    <div>
     
  <Navbar/>
      <Threepageinoneframe/> 

   
 <Welcometo />
       <Programs />

      <Ncse />
<Curriculumandsyllabus />
      
      <Feature />
      <Event />
      <Blogsection />
      <Successstory />
      <Questionssection />
      <Navigationlink />
    </div>
  );
}

// import Welcometo from "./newpage/welcometo";
// import Programs from "./newpage/programs";
// import Feature from "./newpage/feature";
// import Ncse from "./newpage/ncse";
// import Event from "./newpage/event";
// import Blogsection from "./newpage/blogsection";
// import Successstory from "./newpage/successstory";
// import Curriculumandsyllabus from "./newpage/curriculumandsyllabus";
// import Navbar from "./newpage/navbar";
// import Questionssection from "./newpage/questionssection";
// import Navigationlink from "./newpage/navigationlink";
// import Threepageinoneframe from "./newpage/threepageinoneframe";
// export default function Home() {
//   return (
//     <div>
//       <Navbar/>

//       <Threepageinoneframe/>

//       <Welcometo />

//       <Programs />

//       <Ncse />

//       <Curriculumandsyllabus />
//       <Feature />
//       <Event />
//       <Blogsection />
//       <Successstory />
//       <Questionssection />
//       <Navigationlink />
//     </div>
//   );
// }
