import React from 'react';
import reviewImg from '../Assets/reviewImg.png';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-8 bg-black overflow-x-auto">
      {/* reviews code */}
      <h2 className="text-4xl font-bold text-white font-Montserrat border border-green-800 mt-20 mb-16 underline underline-offset-8 decoration-4 decoration-white font-serif">
        Our Patients Reviews
      </h2>
      <div className="flex flex-col mb-10">
        {/* row 1 */}
        <div className="flex flex-col md:flex-row rounded-3xl bg-white font-Montserrat font-bold mb-4 px-4 md:px-14 py-4 md:p-10 justify-center items-center">
          <p className="text-center md:text-left">
            It really saves me time and effort. It<br /> is exactly what our business has <br />been lacking. EEZY is the most <br />valuable business resource we have <br />EVER purchased. After using EEZY <br />my business skyrocketed!
          </p>
          <Image src={reviewImg} alt="reviewImg" className="sm:mt-2 w-16 h-16 md:w-20 md:h-20 md:ml-8" />
        </div>
        {/* row 2 */}
        <div className="flex flex-col md:flex-row rounded-3xl bg-white font-Montserrat font-bold mb-4 px-4 md:px-14 py-4 md:p-10 justify-center items-center">
          <p className="text-center md:text-left">
            It really saves me time and effort. It<br /> is exactly what our business has <br />been lacking. EEZY is the most <br />valuable business resource we have <br />EVER purchased. After using EEZY <br />my business skyrocketed!
          </p>
          <Image src={reviewImg} alt="reviewImg" className="sm:mt-2 w-16 h-16 md:w-20 md:h-20 md:ml-8" />
        </div>
        {/* row 3 */}
        <div className="flex flex-col md:flex-row rounded-3xl bg-white font-Montserrat font-bold mb-4 px-4 md:px-14 py-4 md:p-10 justify-center items-center">
          <p className="text-center md:text-left">
            It really saves me time and effort. It<br /> is exactly what our business has <br />been lacking. EEZY is the most <br />valuable business resource we have <br />EVER purchased. After using EEZY <br />my business skyrocketed!
          </p>
          <Image src={reviewImg} alt="reviewImg" className="sm:mt-2 w-16 h-16 md:w-20 md:h-20 md:ml-8" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
