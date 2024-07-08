/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import coughImg from '../Assets/coughImg.png';
import {
  ListItem,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

const Jaundice = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black overflow-x-auto">
      <div className="relative bg-white w-full">
        <Image src={coughImg} alt="coughImg" width={1200} height={700} /> {/* Adjust width and height according to your preference */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B9235]">
            Cough Patients 
          </h2>
        </div>
      </div>
 {/* same code */}
 <div className='text-gray-300 px-10 pt-4 md:px-48 text-xl '>
  <h1 className='font-bold text-white text-xl mt-8 mb-8 text-center sm:text-2xl'>Beat the Flu:<br className="sm:hidden "/>  Care and Treatment<br className="sm:hidden "/> Strategies for a<br className="sm:hidden "/> Speedy Recovery </h1>
       <p className='mb-5 '></p>
      <OrderedList >
  <ListItem className='mb-5 '><span className='font-bold text-white'>Understanding Coughs: Types and Causes :</span>
    <UnorderedList>
  <ListItem>Describe the different types of coughs, including dry coughs, productive coughs (with mucus), and chronic coughs lasting longer than eight weeks. </ListItem>
  <ListItem>Discuss common causes of coughing, such as viral infections (e.g., cold or flu), allergies, asthma, smoking, environmental irritants, and underlying medical conditions.</ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Home Remedies and Self-Care :</span>
    <UnorderedList>
  <ListItem> Provide a list of natural and home remedies to help soothe and relieve cough symptoms, such as:
    <UnorderedList>
  <ListItem> Hydration: Drinking plenty of fluids, including water, herbal teas, and warm broths, to help thin mucus and soothe the throat.</ListItem>
  <ListItem> Humidification: Using a humidifier or steam inhalation to add moisture to the air and ease congestion. </ListItem>
  <ListItem>Honey and herbal teas: Sipping on warm beverages containing honey, ginger, or lemon to soothe throat irritation and suppress coughing. </ListItem>
<ListItem>Rest: Getting adequate rest and sleep to support the body's immune response and promote healing.</ListItem>
</UnorderedList>
  </ListItem>
  <ListItem>Emphasize the importance of avoiding tobacco smoke, air pollutants, and other environmental triggers that can exacerbate cough symptoms. </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Over-the-Counter Medications :</span>
    <UnorderedList>
  <ListItem>Discuss the use of over-the-counter cough medications to relieve cough symptoms, including cough suppressants and expectorants. </ListItem>
  <ListItem>Explain the differences between cough suppressants (which reduce the urge to cough) and expectorants (which help loosen mucus), and when each type may be appropriate. </ListItem>
  <ListItem>Provide guidance on selecting appropriate cough medications based on individual symptoms and medical history, and emphasize the importance of following dosage instructions. </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Prescription Medications and Medical Treatments :</span>
    <UnorderedList>
  <ListItem>Explore prescription medications and medical treatments that may be recommended for specific underlying causes of coughing, such as:
     <UnorderedList>
  <ListItem> Antibiotics: Treatment for bacterial infections like bronchitis or pneumonia. Corticosteroids: Management of cough associated with asthma or chronic obstructive pulmonary disease (COPD). </ListItem>
  <ListItem>associated with asthma or chronic obstructive pulmonary disease (COPD). </ListItem>
  <ListItem>Bronchodilators: Relief of coughing and breathing difficulties in individuals with asthma or COPD. </ListItem>
   <ListItem>Allergy medications: Management of cough due to allergic rhinitis or sinusitis.</ListItem>
</UnorderedList>
  </ListItem>
  <ListItem> Highlight the importance of consulting a healthcare provider for evaluation and appropriate treatment recommendations, especially for chronic or persistent coughs.</ListItem>
 
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Lifestyle and Environmental Modifications :</span>
    <UnorderedList>
  <ListItem> Offer advice on lifestyle changes and environmental modifications to help reduce cough triggers and promote respiratory health, such as:
    <UnorderedList>
  <ListItem> Quitting smoking: Encouraging smokers to quit smoking to improve cough symptoms and overall lung health. </ListItem>
  <ListItem>Avoiding allergens: Identifying and avoiding allergens that may trigger coughing, such as pollen, pet dander, dust mites, or mold. </ListItem>
  <ListItem>Improving indoor air quality: Using air purifiers, maintaining clean air ducts, and minimizing exposure to indoor pollutants to reduce respiratory irritation. </ListItem>
  <ListItem>Practicing good hygiene: Regular handwashing, covering coughs and sneezes, and staying home when sick to prevent the spread of respiratory infections.</ListItem>
</UnorderedList></ListItem>
  
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Seeking Medical Evaluation: When to See a Doctor :</span>
    <UnorderedList>
      <ListItem>Provide guidance on when to seek medical evaluation for cough symptoms, including: 
        <UnorderedList>
      <ListItem>Persistent or worsening cough lasting longer than three weeks.</ListItem>
  <ListItem>Cough accompanied by high fever, chest pain, difficulty breathing, or coughing up blood.</ListItem>
  <ListItem>Cough in children, elderly individuals, or those with underlying medical conditions. </ListItem>
</UnorderedList>
      </ListItem>
  <ListItem>Encourage prompt medical attention for individuals experiencing concerning symptoms or complications associated with coughing.</ListItem>
</UnorderedList>
  </ListItem>
  
</OrderedList>


</div>
    </div>
  );
};

export default Jaundice;
