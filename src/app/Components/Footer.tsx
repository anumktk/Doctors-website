import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black border-t border-white pt-14">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-300 sm:grid md:grid-cols-5 gap-6 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <h3 className="font-bold text-center text-4xl text-white">Doctor</h3>
          </div>
          <div className="">
            <div className="text-xl text-white ">
              About Dr Website
            </div>
            <ul className="list-disc list-inside">
              <li className="my-3">
                <a href="/#">Doctor Website</a>
                <span className="text-teal-600 text-xs p-1"></span>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="text-xl text-white">
              Information
            </div>
            <ul className="list-disc list-inside">
              <li className="my-3">
                <a href="/#">Home</a>{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </li>
              <li className="my-3">
                <a href="/#">Services</a>{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </li>
              <li className="my-3">
                <a href="/#">area Covered</a>{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </li>
              <li className="my-3">
                <a href="/#">Partners</a>{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="text-xl text-white">
              Csutomer Support
            </div>
            <ul className="list-disc list-inside">
              <li className="my-3">
               Customer SignIn
                <span className="text-teal-600 text-xs p-1"></span>
              </li>
              <li className="my-3">
                Partner SignIn
                <span className="text-teal-600 text-xs p-1"></span>
              </li>
              <li className="my-3">
                Integrate Our API
                <span className="text-teal-600 text-xs p-1"></span>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="text-xl text-white ">
             Have a Question?
            </div>
           
          </div>
        </div>
      </div>

      {/* sub footer */}
      <div className="bg-black">
       <footer className="rounded-lg shadow p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base text-gray-300">
          
          <span className="mt-4 md:mt-0">@ 2024-Doctor Appointment</span>
          <ul className="flex flex-wrap">
            <li className="mr-4">
              <a href="#" className="hover:underline">
                Privacy policy
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="hover:underline">
                Terms and conditions
              </a>
            </li>
            
          </ul>
        </div>
      </footer>
</div>
    </div>
  );
};

export default Footer;


// import React from "react";

// const Footer = () => {
//   return (
//     <div>
//       <div className="bg-gray-100">
//         <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
//           <div className="p-5">
//             <h3 className="font-bold text-xl text-indigo-600">Company Name</h3>
//           </div>
//           <div className="p-5">
//             <div className="text-sm uppercase text-indigo-600 font-bold">
//               Resources
//             </div>
//             <a className="my-3 block" href="/#">
//               Documentation <span className="text-teal-600 text-xs p-1"></span>
//             </a>
//             <a className="my-3 block" href="/#">
//               Tutorials <span className="text-teal-600 text-xs p-1"></span>
//             </a>
//             <a className="my-3 block" href="/#">
//               Support <span className="text-teal-600 text-xs p-1">New</span>
//             </a>
//           </div>
//           <div className="p-5">
//             <div className="text-sm uppercase text-indigo-600 font-bold">
//               Support
//             </div>
//             <a className="my-3 block" href="/#">
//               Help Center <span className="text-teal-600 text-xs p-1"></span>
//             </a>
//             <a className="my-3 block" href="/#">
//               Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
//             </a>
//             <a className="my-3 block" href="/#">
//               Conditions <span className="text-teal-600 text-xs p-1"></span>
//             </a>
//           </div>
//           <div className="p-5">
//             <div className="text-sm uppercase text-indigo-600 font-bold">
//               Contact us
//             </div>
//             <a className="my-3 block" href="/#">
//               XXX XXXX, Floor 4 San Francisco, CA
//               <span className="text-teal-600 text-xs p-1"></span>
//             </a>
//             <a className="my-3 block" href="/#">
//               contact@company.com
//               <span className="text-teal-600 text-xs p-1"></span>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-100 pt-2">
//         <div
//           className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
//       max-w-screen-lg items-center"
//         >
         
//           <div className="my-5">© Copyright 2020. All Rights Reserved.</div>
//         </div>
//       </div>

//       {/* <!-- Credit: Componentity.com --> */}
//     </div>
//   );
// };

// export default Footer;
