import React from 'react';
import { useSpring, animated } from 'react-spring';

function Achievement() {
    const number1Props = useSpring({
        from: { number: 0 },
        to: { number: 3 },
        config: { duration: 1000 },
    });
    const number2Props = useSpring({
        from: { number: 0 },
        to: { number: 56 },
        config: { duration: 1500 },
    });
    const number4Props = useSpring({
        from: { number: 0 },
        to: { number: 22 },
        config: { duration: 1500 },
    });

    return (
        <div className='flex flex-row justify-around items-center  p-2 m-0'>
            <div className='flex flex-col items-center bg-transparent text-white mt-1 lg:mt-4'>

                <div className='lg:text-7xl text-3xl m-0 lg:m-2 font-thin text-[#00e6e6] bg-transparent num'>
                    <animated.span>{number1Props.number.interpolate(val => Math.floor(val))}</animated.span>+
                </div>
                <h3 className='text-white my-0 lg:my-3 lg:text-2xl text-sm capitalize bg-transparent'>Year Of Experience</h3>
            </div>
            <div className="h-16 lg:h-24 w-px bg-white mx-2 lg:mx-4"></div>
            <div className='flex flex-col items-center bg-transparent text-white mt-1 lg:mt-4'>

                <div className='lg:text-7xl text-3xl m-0 lg:m-2 font-thin text-[#00e6e6] bg-transparent num'>
                    <animated.span>{number2Props.number.interpolate(val => Math.floor(val))}</animated.span>+
                </div>
                <h3 className='text-white my-0 lg:my-3 lg:text-2xl text-sm capitalize bg-transparent'>Project Completed</h3>
            </div>
            <div className="h-16 lg:h-24 w-px bg-white mx-2 lg:mx-4"></div>
            <div className='flex flex-col items-center bg-transparent text-white mt-1 lg:mt-4'>

                <div className='lg:text-7xl text-3xl m-0 lg:m-2 font-thin text-[#00e6e6] bg-transparent num'>
                    <animated.span>{number4Props.number.interpolate(val => Math.floor(val))}</animated.span>+
                </div>
                <h3 className='text-white my-0 lg:my-3 lg:text-2xl text-sm capitalize bg-transparent'>Happy Clients</h3>
            </div>
        </div>
    );
}

export default Achievement;
