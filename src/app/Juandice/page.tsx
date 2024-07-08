/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import jaundiceImg from '../Assets/jaundiceImg.png';
import {
  ListItem,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

const Jaundice = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black overflow-x-auto">
      <div className="relative bg-white w-full">
        <Image src={jaundiceImg} alt="jaundiceImg" width={400} height={300} /> {/* Adjust width and height according to your preference */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B9235]">
            Jaundice Patients
          </h2>
        </div>
      </div>
 {/* same code */}
 <div className='text-gray-300 px-10 pt-4 md:px-48 text-xl '>
  <h1 className='font-bold text-white text-xl mt-8 mb-8 text-center sm:text-2xl'>Understanding Jaundice:<br className="sm:hidden "/> Care and Treatment for Patients </h1>
       <p className='mb-5 '>Jaundice is a condition characterized by yellowing of the skin and eyes due to elevated levels of bilirubin in the blood. In this guide, we will explore the causes, symptoms, and effective care and treatment strategies for individuals with jaundice.</p>
      <OrderedList >
  <ListItem className='mb-5 '><span className='font-bold text-white'>Understanding Jaundice: Causes and Symptoms:</span>
    <UnorderedList>
  <ListItem>Explain the underlying causes of jaundice, including liver disease, bile duct obstruction, hemolytic disorders, and certain medications.</ListItem>
  <ListItem>Describe common symptoms of jaundice, such as yellowing of the skin and eyes, dark urine, pale stools, fatigue, abdominal pain, and itching.</ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Diagnosis and Evaluation :</span>
    <UnorderedList>
  <ListItem>Discuss the diagnostic process for jaundice, which may include physical examination, blood tests (such as liver function tests and bilirubin levels), imaging studies (like ultrasound or MRI), and liver biopsy in some cases.</ListItem>
  <ListItem>Emphasize the importance of seeking medical evaluation promptly for accurate diagnosis and appropriate treatment planning.</ListItem>
  
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Treatment Approaches for Jaundice :</span>
    <UnorderedList>
  <ListItem>Depending on the underlying cause, treatment for jaundice may vary:</ListItem>
  <ListItem>Liver disease: Treatment focuses on managing the underlying liver condition, such as hepatitis or cirrhosis, through lifestyle modifications, medication, and, in severe cases, liver transplantation.</ListItem>
  <ListItem>Bile duct obstruction: Treatment may involve relieving the obstruction through procedures like endoscopic retrograde cholangiopancreatography (ERCP) or surgery.</ListItem>
  <ListItem>Hemolytic disorders: Treatment aims to address the underlying cause of increased red blood cell breakdown, such as medication adjustments or blood transfusions.</ListItem>
  <ListItem>Medication-induced jaundice: Discontinuation or adjustment of the offending medication may be necessary under medical supervision.</ListItem>
  <ListItem>Highlight the importance of individualized treatment plans tailored to the patient's specific condition and medical history.</ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Symptom Management and Supportive Care :</span>
    <UnorderedList>
  <ListItem>Provide recommendations for managing symptoms associated with jaundice, such as itching, fatigue, and abdominal discomfort.</ListItem>
  <ListItem>Suggest measures to alleviate itching, such as topical treatments, antihistamines, and avoiding hot showers.</ListItem>
  <ListItem>Encourage patients to maintain adequate hydration, rest, and nutrition to support overall health and recovery.</ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Lifestyle Modifications :</span>
    <UnorderedList>
  <ListItem>Offer guidance on lifestyle changes to support liver health and reduce the risk of complications:</ListItem>
  <ListItem>Maintain a balanced diet rich in fruits, vegetables, whole grains, and lean proteins, while limiting processed foods, alcohol, and fatty or fried foods.</ListItem>
  <ListItem>Avoid exposure to potential liver toxins, such as excessive alcohol consumption, illicit drug use, and certain medications.</ListItem>
  <ListItem>Engage in regular physical activity to promote overall well-being and healthy liver function.</ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Follow-Up Care and Monitoring :</span>
    <UnorderedList>
      <ListItem>Stress the importance of ongoing medical follow-up and monitoring for individuals with jaundice to assess treatment response, monitor liver function, and detect any complications.</ListItem>
  <ListItem>Encourage patients to adhere to scheduled appointments with their healthcare providers and undergo recommended tests or screenings as advised.</ListItem>
  
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Emotional Support and Education :</span>
    <UnorderedList>
  <ListItem>Acknowledge the emotional impact of living with jaundice and provide resources for coping with stress, anxiety, and uncertainty.</ListItem>
  <ListItem>Offer educational materials and support groups for patients and their families to learn more about jaundice, treatment options, and lifestyle management.</ListItem>
</UnorderedList>
  </ListItem>
</OrderedList>
<p className='mb-5 '>Conclusion: Jaundice requires prompt medical evaluation and individualized treatment to address the underlying cause and manage symptoms effectively. By following a comprehensive care plan, including medical treatment, lifestyle modifications, and supportive care, individuals with jaundice can optimize their health outcomes and quality of life.</p>

<p className='mb-5 '>Call to Action: Encourage individuals experiencing symptoms of jaundice to seek medical attention promptly for evaluation and treatment. Provide resources for finding healthcare providers experienced in managing liver conditions and support services for patients and their families.</p>
<p className='mb-5 '>This guide aims to provide comprehensive information and support for individuals living with jaundice, addressing various aspects of care, treatment, and lifestyle management. It emphasizes the importance of a multidisciplinary approach involving medical professionals, supportive care providers, and patients themselves in managing this condition effectively.</p>
</div>
    </div>
  );
};

export default Jaundice;
