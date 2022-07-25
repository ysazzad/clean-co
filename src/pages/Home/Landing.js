import React from 'react';

const Landing = () => {
    return (
        <>
            <div class="hero h-screen lg:h-[60vh] bg-accent mt-16">
                <div class="hero-content flex-col lg:flex-row">
                    <div data-aos="fade-right " data-aos-delay="200" data-aos-duration="3000">
                        <p className='text-xl'>Best Quality</p>
                        <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p class="py-6 max-w-xl">We are very pleased to introduce “Clean Co” as a promising cleaning Service provider in this country. We are providing different best cleaning service, cleaner service &  pest control services with adequate machinery, equipment & method.</p>
                        <button class="btn btn-primary mt-0">Get Started</button>
                    </div>
                    <div className=' h-[60vh] shrink-0'>
                        <img src="https://www.a1-cleaningservices.com/wp-content/uploads/2014/06/Cleaner-on-hire.jpg" class="h-full " alt='' />

                    </div>

                </div>
            </div>
            <div className='shadow-lg rounded-2xl mt-[-50px] bg-base-200 relative z-20 mx-auto w-5/6 p-10'>
                <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div className='btn btn-primary mt-5'>
                    Get a Quote
                </div>
            </div>
        </>

    );
};

export default Landing;