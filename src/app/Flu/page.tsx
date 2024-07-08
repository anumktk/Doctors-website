import React from 'react';
import Image from 'next/image';
import fluImg from '../Assets/fluImg.png';
import {
  ListItem,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

const Flu = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black overflow-x-auto">
      <div className="relative bg-white w-full">
        <Image src={fluImg} alt="fluImg" width={400} height={300} /> {/* Adjust width and height according to your preference */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B9235]">
            Flu Patients
          </h2>
        </div>
      </div>
 {/* same code */}
 <div className='text-gray-300 px-14 pt-4 md:px-48 text-xl '>
  <h1 className='font-bold text-white text-xl mt-8 mb-8 text-center sm:text-2xl'>Beat the Flu:<br className="sm:hidden "/>  Care and Treatment <br className="sm:hidden "/>Strategies for <br className="sm:hidden "/> a Speedy Recovery</h1>
       <p className='mb-5 '>Introduce the topic of influenza (the flu) as a common viral illness that affects millions of people each year. Emphasize the importance of timely care and effective treatment to minimize symptoms and prevent complications.</p>
      <OrderedList >
  <ListItem className='mb-5 '><span className='font-bold text-white'>Understanding the Flu: Symptoms and Transmission:</span>
    <UnorderedList>
  <ListItem>Describe the typical symptoms of the flu, including fever, cough, sore throat, body aches, fatigue, and nasal congestion.</ListItem>
  <ListItem> Explain how the flu virus spreads through respiratory droplets and direct contact with infected individuals.</ListItem>
   <ListItem> Stress the importance of flu vaccination as a preventive measure to reduce the risk of illness and complications. </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Flu Care at Home: Tips for Self-Management :</span>
    <UnorderedList>
  <ListItem>
</ListItem>
  <ListItem> Provide practical advice for managing flu symptoms at home, such as getting plenty of rest, staying hydrated, and using over-the-counter medications to alleviate fever, pain, and congestion.</ListItem>
  <ListItem> Offer guidance on when to seek medical attention, including signs of severe symptoms or complications such as difficulty breathing, persistent chest pain, confusion, or high fever. </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Antiviral Medications :</span>
    <UnorderedList>
  <ListItem>Discuss the role of antiviral medications, such as oseltamivir (Tamiflu), in the treatment of influenza. </ListItem>
  <ListItem>Explain how antiviral medications work to reduce the severity and duration of flu symptoms when taken early in the course of illness. </ListItem>
  <ListItem>Highlight the importance of consulting a healthcare provider for evaluation and prescription of antiviral medications, particularly for high-risk individuals or those with severe symptoms. </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Supportive Care :</span>
    <UnorderedList>
  <ListItem>Managing Symptoms Effectively: Offer recommendations for managing specific flu symptoms, such as:
    <UnorderedList>
  <ListItem> Fever: Use of acetaminophen or ibuprofen to reduce fever and discomfort. </ListItem>
  <ListItem>Cough: Use of cough suppressants or expectorants to relieve coughing and promote mucus clearance.</ListItem>
  <ListItem> Sore throat: Gargling with warm salt water or using throat lozenges to soothe irritation. </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem>Stress the importance of staying hydrated and avoiding excessive alcohol or caffeine consumption, which can contribute to dehydration.</ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Prevention Strategies :</span>
    <UnorderedList>
  <ListItem>Reinforce the importance of flu prevention through vaccination, hand hygiene, and respiratory etiquette (covering coughs and sneezes). </ListItem>
  <ListItem>Provide tips for minimizing exposure to the flu virus, such as avoiding close contact with sick individuals and staying home when experiencing flu-like symptoms to prevent spread to others.</ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>High-Risk Groups :</span>
    <UnorderedList>
      <ListItem>Special Considerations: Identify populations at higher risk of flu complications, such as young children, older adults, pregnant women, and individuals with underlying health conditions. </ListItem>
  <ListItem>Emphasize the importance of early treatment and close monitoring for high-risk individuals to prevent serious complications like pneumonia or exacerbation of chronic conditions. </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>When to Seek Medical Attention :</span>
    <UnorderedList>
  <ListItem>Warning Signs: Educate readers on warning signs that may indicate the need for urgent medical attention, such as: 
    <UnorderedList>
  <ListItem>Difficulty breathing or shortness of breath </ListItem>
  <ListItem>Chest pain or pressure </ListItem>
  <ListItem>Confusion or sudden dizziness </ListItem>
  <ListItem>Severe or persistent vomiting </ListItem>
  <ListItem>Encourage prompt medical evaluation for anyone experiencing these symptoms, as they may indicate complications requiring immediate treatment. </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem></ListItem>
</UnorderedList>
  </ListItem>
</OrderedList>

<p className='mb-5 '>Conclusion: Influenza can cause significant discomfort and disruption, but with proper care and treatment, most individuals can recover fully within a few weeks. By following the tips outlined in this blog, you can minimize the impact of the flu on your health and well-being, and help prevent its spread to others. </p>
<p className='mb-5 '>Call to Action: Encourage readers to prioritize their health and well-being by following preventive measures, seeking timely medical care when needed, and staying informed about flu-related updates and recommendations from trusted sources such as healthcare providers and public health agencies.</p>
<p className='mb-5 '>This blog provides practical guidance for managing flu symptoms, accessing appropriate treatment, and preventing the spread of illness to others. It empowers readers to take proactive steps to protect their health and well-being during flu season.</p>

</div>
    </div>
  );
};

export default Flu;
