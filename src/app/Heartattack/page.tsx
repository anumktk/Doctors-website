import React from 'react';
import Image from 'next/image';
import HeartImg from '../Assets/HeartImg.png';
import {
  ListItem,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

const HeartAttack = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black overflow-x-auto">
      <div className="relative bg-white w-full">
        <Image src={HeartImg} alt="HeartImg" width={1200} height={700} /> {/* Adjust width and height according to your preference */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B9235]">
            HeartAttack Patients
          </h2>
        </div>
      </div>
 {/* same code */}
 <div className='text-gray-300 px-10 pt-4 md:px-48 text-xl '>
  <h1 className='font-bold text-white text-xl mt-8 mb-8 text-center sm:text-2xl'>Understanding Heart Attacks:<br className="sm:hidden "/> Care and Treatment <br className="sm:hidden "/>Strategies for Recovery</h1>
       <p className='mb-5 '>Introduce the topic of heart attacks as a serious medical emergency that requires prompt treatment. Emphasize the importance of recognizing the symptoms of a heart attack and seeking immediate medical attention.</p>
      <OrderedList >
  <ListItem className='mb-5 '><span className='font-bold text-white'>Understanding Heart Attacks:</span>
    <UnorderedList>
  <ListItem>Causes and Risk Factors: Define a heart attack (myocardial infarction) as the result of reduced blood flow to the heart muscle, usually due to blockage of a coronary artery. </ListItem>
  <ListItem>Discuss common causes and risk factors for heart attacks, such as: 
    <UnorderedList>
  <ListItem>Atherosclerosis (buildup of plaque in the arteries) </ListItem>
  <ListItem>High blood pressure </ListItem>
  <ListItem>High cholesterol </ListItem>
  <ListItem>Smoking</ListItem>
  <ListItem> Obesity </ListItem>
  <ListItem>Diabetes </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem>Emphasize the importance of lifestyle factors and preventive measures in reducing the risk of heart attacks.</ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Recognizing the Symptoms of a Heart Attack :</span>
    <UnorderedList>
  <ListItem>Outline the typical symptoms of a heart attack, including:
    <UnorderedList>
  <ListItem> Chest pain or discomfort (pressure, squeezing, fullness, or pain) </ListItem>
  <ListItem>Pain or discomfort in other areas of the upper body (arms, back, neck, jaw, or stomach) </ListItem>
  <ListItem>Shortness of breath Nausea, vomiting, or lightheadedness </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem>Encourage readers to seek immediate medical attention if they experience any of these symptoms, as early intervention can save lives. </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Emergency Care for Heart Attacks :</span>
    <UnorderedList>
  <ListItem> Provide guidance on what to do in the event of a suspected heart attack, including: 
    <UnorderedList>
  <ListItem>Calling emergency services (911 or local emergency number) immediately</ListItem>
  <ListItem> Chewing and swallowing aspirin (if advised by a healthcare provider) </ListItem>
  <ListItem>Performing CPR (if trained) on someone who is unconscious and not breathing </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem>Stress the importance of acting quickly to increase the chances of survival and minimize damage to the heart muscle.</ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Hospital Treatment for Heart Attacks :</span>
    <UnorderedList>
  <ListItem>Discuss the medical interventions and treatments administered in the hospital setting for heart attacks, such as:
    <UnorderedList>
  <ListItem>Oxygen therapy to increase oxygen supply to the heart</ListItem>
  <ListItem> Nitroglycerin to relieve chest pain and improve blood flow </ListItem>
  <ListItem>Thrombolytic therapy (clot-busting drugs) or percutaneous coronary intervention (PCI) to restore blood flow to the heart</ListItem>
  <ListItem>Monitoring for complications and providing supportive care as needed </ListItem>
</UnorderedList>
  </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Recovery and Rehabilitation :</span>
    <UnorderedList>
  <ListItem>Outline the recovery process following a heart attack, including: 
    <UnorderedList>
  <ListItem>Medications to manage symptoms, prevent complications, and reduce the risk of future heart attacks (e.g., aspirin, beta-blockers, statins)</ListItem>
  <ListItem>Cardiac rehabilitation programs to help patients regain strength, improve cardiovascular fitness, and adopt heart-healthy lifestyle habits</ListItem>
  <ListItem> Lifestyle modifications, such as quitting smoking, adopting a healthy diet, maintaining a healthy weight, and engaging in regular physical activity</ListItem>
</UnorderedList>
  </ListItem>
  <ListItem> Emphasize the importance of ongoing medical follow-up and adherence to treatment plans to optimize recovery and reduce the risk of future heart events.</ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Emotional Support and Lifestyle Changes :</span>
    <UnorderedList>
      <ListItem>Address the emotional impact of experiencing a heart attack and the importance of seeking support from healthcare professionals, family, and friends.</ListItem>
      <ListItem> Provide guidance on coping with anxiety, depression, or fear of future heart events and incorporating stress-reduction techniques into daily life.</ListItem>
      <ListItem> Encourage readers to embrace heart-healthy lifestyle changes and make positive choices to protect their heart health in the long term. </ListItem>
    </UnorderedList>
  </ListItem>
</OrderedList>

<p className='mb-5 '>Conclusion: While a heart attack can be a frightening experience, prompt medical treatment and lifestyle changes can greatly improve outcomes and reduce the risk of future heart events. By understanding the causes, symptoms, and treatment options for heart attacks, you can take proactive steps to protect your heart health and live a longer, healthier life. </p>
<p className='mb-5 '>Call to Action: Encourage readers to prioritize their heart health by recognizing the symptoms of a heart attack, seeking immediate medical attention when necessary, and taking proactive steps to reduce their risk of heart disease through lifestyle changes and preventive care. </p>
<p className='mb-5 '>This blog aims to provide valuable information and support for individuals who have experienced a heart attack, as well as those looking to prevent heart disease and promote heart-healthy living. It emphasizes the importance of recognizing the signs of a heart attack, seeking timely medical care, and making positive lifestyle changes to protect heart health.</p>

</div>
    </div>
  );
};

export default HeartAttack;
