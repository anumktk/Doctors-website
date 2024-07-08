import React from 'react';
import Image from 'next/image';
import AboutImg from '../Assets/AboutImg.png';
import { ListItem, UnorderedList } from '@chakra-ui/react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black">
      <Image src={AboutImg} alt="AboutImg" />

      <div className=" pb-14 pt-14 text-lg w-full md:w-3/4 lg:w-1/2 xl:w-2/3">
        <div className="text-gray-300 font-Montserrat text-xl px-4 md:px-12 lg:px-24 xl:px-32">
          <p>
            Operating under the Ziauddin Trust,{' '}
            <span className="underline ">Dr. Ziauddin Group of Hospitals</span> is one of the largest private groups
            in the country. Its mission has been to reach out to the masses and cater to their needs for quality health
            care facilities at affordable rates in the country. It began with a small maternity home and has grown
            exponentially over the years to include five hospitals, including three tertiary-care facilities, responding
            to the healthcare needs of the people. <br /> These hospitals are:
          </p>

          <UnorderedList className="underline">
            <ListItem>Dr. Ziauddin Hospital, North Nazimabad Campus</ListItem>
            <ListItem>Dr. Ziauddin Hospital, Clifton Campus</ListItem>
            <ListItem>Dr. Ziauddin Hospital, Keamari Campus</ListItem>
            <ListItem>Dr. Ziauddin Memorial Hospital</ListItem>
            <ListItem>Boat Basin Executive Clinics</ListItem>
          </UnorderedList>

          <p>
            All facilities under Dr. Ziauddin Group of Hospitals are equipped with state-of-the-art equipment and focused
            on providing services of the highest quality. The diagnostic technologies, and medical and surgical treatments
            provided, are controlled to keep pace with the technological advancements. The planning and development team
            of Dr. Ziauddin Group of Hospitals is working continuously to increase the patient capacity at each of the
            hospitals to make quality health care accessible to as many people as possible. Dr. Ziauddin Group of
            Hospitals competes with some of the biggest names in the healthcare industry and aspires to become the
            preferred healthcare facility for our people and a symbol of national pride for all. Zia Medical Center
            located in Dubai, UAE is a part of Dr. Ziauddin Group of Hospitals. ZMC practices the same standard of
            excellence and provides premium healthcare to the residents of Dubai.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;



// import React from 'react'
// import Image from 'next/image'
// import AboutImg from '../Assets/AboutImg.png'
// import {ListItem,UnorderedList,} from '@chakra-ui/react'

// const About = () => {
//   return (
//     <div >
//       <Image src={AboutImg} alt="AboutImg"/>
//       <div className='bg-black pb-4 text-lg '>
//     <div className='text-gray-300 font-Montserrat text-xl p-20 md:px-64 '>
//         <p>Operating under the Ziauddin Trust, <span className='underline '>Dr. Ziauddin Group of Hospitals</span> is one of the largest private groups in the country. Its mission has been to reach out to the masses and cater to their needs for quality health care facilities at affordable rates in the country. It began with a small maternity home and has grown exponentially over the years to include five hospitals, including three tertiary-care facilities, responding to the healthcare needs of the people.
//         </p>
//         <UnorderedList className='underline'>
//   <ListItem>Dr. Ziauddin Hospital,  North Nazimabad Campus</ListItem>
//   <ListItem>Dr. Ziauddin Hospital,Clifton Campus</ListItem>
//   <ListItem>Dr. Ziauddin Hospital ,Keamari Campus</ListItem>
//   <ListItem>Dr. Ziauddin Memorial Hospital</ListItem>
//   <ListItem>Boat Basin Executive Clinics</ListItem>
// </UnorderedList>
//         {/* <ul className='list-disc list-inside underline'>
//             <li>Dr. Ziauddin Hospital,  North Nazimabad Campus</li>
//             <li>Dr. Ziauddin Hospital,Clifton Campus</li>
//             <li> Dr. Ziauddin Cancer Hospital</li>
//             <li>Dr. Ziauddin Hospital ,Keamari Campus</li>
//             <li>Dr. Ziauddin Memorial Hospital</li>
//             <li>Boat Basin Executive Clinics</li>
//         </ul> */}
//         <p>All facilities under Dr. Ziauddin Group of Hospitals are equipped with state-of-the-art equipment and focused on providing services of the highest quality. The diagnostic technologies, and medical and surgical treatments provided, are controlled to keep pace with the technological advancements. The planning and development team of Dr. Ziauddin Group of Hospitals is working continuously to increase the patient capacity at each of the hospitals to make quality health care accessible to as many people as possible. Dr. Ziauddin Group of Hospitals competes with some of the biggest names in the healthcare industry and aspires to become the preferred healthcare facility for our people and a symbol of national pride for all. Zia Medical Center located in Dubai, UAE is a part of Dr. Ziauddin Group of Hospitals. ZMC practices the same standard of excellence and provides premium healthcare to the residents of Dubai.</p>
//     </div>
   
//       </div>
//     </div>
//   )
// }

// export default About

