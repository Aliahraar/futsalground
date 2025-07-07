import React from 'react';
import ctaImage from "../assets/CTA.webp"
import Button from "../components/Button"
function CTASection() {
  return (
    <section className=" 2xl:w-[60%] lg:w-[90%] md:w-[95%] sm:w-[80%] w-[90%] mx-auto" >
        <div className='flex flex-wrap md:flex-row flex-col items-center'>
            <div className='md:w-[40%] w-full flex justify-center'>
                <img src={ctaImage} className='md:w-full w-[90%] xl:-m-9' alt="cta-image" />
            </div>

        <div className="md:w-[60%]  w-full flex flex-col sm:gap-y-5 gap-y-5 md:py-0 py-3">
            <h1 className='w-full text-2xl text-white'>
            Have a Best Seller
            At A Discount 50% Off
            </h1>

            <p className='text-white'>
            Become a bestseller with Premium Book Publishers!
            </p>

            <div className="flex gap-x-10 flex-wrap gap-y-2">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-white">Call us</p>
                <p className="text-lg text-white hover:text-blue-600">
                  +1 302-518-4405
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-white">Discuss your ideas</p>
                <p href="mailto:info@premiumbookpublishers.com" className="text-lg text-white hover:text-blue-600">
                  info@premiumbookpublishers.com
                </p>
              </div>
            </div>
          </div>


          <div className='flex gap-3 flex-wrap'>
            <Button text="Get A Quote" children="py-3"/>
            <Button text="Live Chat"/>
            <Button text="+1 302-518-4405"/>
          </div>


        </div>
        </div>
          
    </section>
  );
}

export default CTASection;