/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import weightImg from '../Assets/weightImg.png'
import {
  ListItem,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

const weightloss = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black overflow-x-auto">
      <div className="relative bg-white w-full">
        <Image src={weightImg} alt="weightImg" width={1200} height={700} /> {/* Adjust width and height according to your preference */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl ml-56 lg:text-5xl font-bold text-[#1B9235]">
            WeightLoss Tips
          </h2>
        </div>
      </div>
 {/* same code */}
 <div className='text-gray-300 px-10 pt-4 md:px-48 text-xl '>
  <h1 className='font-bold text-white text-xl mt-8 mb-8 text-center sm:text-2xl'>Your Journey to Healthy<br className="sm:hidden "/>  Weight Loss: Tips, <br className="sm:hidden "/>Strategies, and Inspiration </h1>
       
      <OrderedList >
  <ListItem className='mb-5 '><span className='font-bold text-white'>Understanding Weight Loss:</span>
    <UnorderedList>
  <ListItem>Explain the basics of weight loss, including the concept of calories in versus calories out and the role of metabolism in determining weight.</ListItem>
  <ListItem>Discuss factors that influence weight, such as diet, physical activity, genetics, and lifestyle habits. </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Setting Realistic Goals :</span>
    <UnorderedList>
  <ListItem>Guide readers in setting SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) for their weight loss journey. </ListItem>
  <ListItem>Emphasize the importance of setting achievable goals that are tailored to individual preferences, health status, and lifestyle. </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Nutrition Tips for Weight Loss :</span>
    <UnorderedList>
  <ListItem>Provide guidance on building a balanced and nutritious diet that supports weight loss, including: 
    <UnorderedList>
  <ListItem>Portion control:Tips for managing portion sizes to avoid overeating. </ListItem>
  <ListItem>Macronutrient balance: Emphasizing the importance of consuming a balanced mix of carbohydrates, proteins, and healthy fats.</ListItem>
  <ListItem>Whole foods: Encouraging the consumption of nutrient-dense whole foods such as fruits, vegetables, lean proteins, and whole grains</ListItem>
<ListItem> Mindful eating: Techniques for practicing mindful eating, such as paying attention to hunger and fullness cues and savoring each bite. </ListItem>
</UnorderedList>
  </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Exercise and Physical Activity :</span>
    <UnorderedList>
  <ListItem>Discuss the role of physical activity in weight loss and overall health, including: 
     <UnorderedList>
  <ListItem>Types of exercise: Recommendations for incorporating aerobic exercise, strength training, flexibility exercises, and leisure activities into a well-rounded fitness routine. </ListItem>
  <ListItem>Frequency and duration: Guidelines for achieving recommended levels of physical activity for weight loss and overall health. </ListItem>
  <ListItem>Finding activities you enjoy: Encouragement to explore different types of physical activity to find activities that are enjoyable and sustainable long-term. </ListItem>
</UnorderedList>
  </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Behavior Change Strategies :</span>
    <UnorderedList>
  <ListItem> Explore behavior change techniques to support successful weight loss, such as:
    <UnorderedList>
  <ListItem>Goal setting and tracking progress: Encouragement to set achievable goals and track progress using tools like food journals, activity trackers, or apps. </ListItem>
  <ListItem>Self-monitoring: Techniques for monitoring food intake, physical activity, and other behaviors related to weight loss. </ListItem>
  <ListItem>Social support: Emphasize the importance of seeking support from friends, family, or support groups to stay motivated and accountable. </ListItem>
</UnorderedList>
  </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Overcoming Challenges and Plateaus :</span>
    <UnorderedList>
  <ListItem>Acknowledge common challenges and obstacles encountered during weight loss, such as plateaus, cravings, emotional eating, and social pressures.</ListItem>
  <ListItem> Provide strategies for overcoming challenges and staying motivated, such as:
     <UnorderedList>
  <ListItem> Problem-solving techniques: Encouragement to identify barriers to progress and develop strategies to overcome them. </ListItem>
  <ListItem>Self-compassion: Emphasize the importance of practicing self-compassion and kindness toward oneself during challenging times. </ListItem>
</UnorderedList>
  </ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Celebrating Success and Non-Scale Victories :</span>
    <UnorderedList>
  <ListItem>Encourage readers to celebrate their successes along the way, including both scale victories (e.g., reaching weight loss milestones) and non-scale victories (e.g., improved energy levels, clothing fitting better). </ListItem>
  <ListItem>Highlight the importance of recognizing and celebrating progress, no matter how small, to stay motivated and inspired. </ListItem>
  <ListItem></ListItem>
</UnorderedList>
  </ListItem>
  <ListItem className='mb-5 '><span className='font-bold text-white'>Maintaining Weight Loss and Long-Term Success :</span>
    <UnorderedList>
  <ListItem>Discuss strategies for maintaining weight loss and preventing regain, such as: 
    <UnorderedList>
  <ListItem>Adopting sustainable lifestyle changes: Encouragement to focus on long-term behavior change rather than short-term fixes or fad diets. </ListItem>
  <ListItem>Continuing healthy habits: Emphasize the importance of continuing healthy eating and exercise habits even after reaching weight loss goals.</ListItem>
  <ListItem> Staying flexible: Encouragement to be flexible and adapt to life's changes while maintaining a healthy lifestyle.</ListItem>
</UnorderedList>
  </ListItem>
</UnorderedList>
  </ListItem>
</OrderedList>

<p className='mb-5 '>Conclusion: Achieving and maintaining a healthy weight is a journey that requires commitment, dedication, and perseverance. By following the tips and strategies outlined in this blog, you can embark on your own journey to healthy weight loss and discover the joy of living a healthier, more vibrant life. </p>
<p className='mb-5 '>Call to Action: Encourage readers to take the first step toward their weight loss goals by committing to small, sustainable changes in their diet, physical activity, and mindset. Invite them to join the community of individuals on a similar journey to share support, encouragement, and inspiration along the way. </p>
<p className='mb-5 '>This blog aims to provide practical guidance, inspiration, and support for individuals embarking on a journey to achieve healthy and sustainable weight loss. It emphasizes the importance of setting realistic goals, adopting healthy habits, and finding motivation and support to succeed in reaching their goals.</p>

</div>
    </div>
  );
};

export default weightloss;
