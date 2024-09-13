import React from 'react'

const Detail = () => {
    return (
        <div className="mt-10 ">
            <div className='flex flex-row justify-between w-full '>
                <div className="">
                    <img src='/Detail.svg' className='w-[353px] h-[391px] ' />
                </div>
                <div className="h-[391px] flex flex-col items-center grow">
                    <div className="h-[300px] flex flex-col justify-center items-center grow">
                        <span className="w-[28px] h-[28px] rounded-full bg-[#F2D7D1] relative">
                            <span className="w-[5px] h-[5px] rounded-full  bg-[#000] absolute top-3 left-3">
                            </span>
                        </span>
                        <span className="w-[28px] h-[28px] rounded-full bg-[#D88875] my-5"></span>
                        <span className="w-[28px] h-[28px] rounded-full bg-[#D9D9D9]"></span>
                    </div>
                    <div className="flex">
                        4.9
                    </div>
                </div>
            </div>
            <div className='mx-4 my-5'>
                <p className="font-normal text-[10px] leading-[22px] text-[#7B7B7B] ">
                    WOMEN / TOP
                </p>
            </div>
            <div className="flex flex-row justify-between items-center my-5 mx-4">
                <h3 className=" font-medium text-[32px] leading-[42.66px] text-[#282828] font-PlayfairDisplay">OUR STORY</h3>
                <span className="w-[135px] h-[1px] bg-[#DFDFDF]"></span>
                <img src='/heart.svg' />
            </div>
            <div className='mx-4'>
                <p className="font-poppins font-normal text-[12px] leading-[28.8px] text-[#7B7B7B]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
            </div>
            <div className='flex flex-row justify-between items-center w-full mx-5'>
                <div className="flex flex-row justify-between items-center w-[152px] ">
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-[#404040] "> COLOR </p>
                    <div className="flex flex-row justify-between items-center ml-3">
                        <span className="w-[28px] h-[28px] rounded-full bg-[#F2D7D1] relative">
                            <span className="w-[5px] h-[5px] rounded-full  bg-[#000] absolute top-3 left-3">
                            </span>
                        </span>
                        <span className="w-[28px] h-[28px] rounded-full bg-[#D88875] mx-3"></span>
                        <span className="w-[28px] h-[28px] rounded-full bg-[#D9D9D9]"></span>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center mx-5">
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-[#404040]"> SIZE</p>
                    <div className="flex flex-row justify-between items-center ml-3">
                        <span className="w-[28px] h-[28px] rounded-full border relative">
                            <span className="text-[#7B7B7B] absolute top-[1px] left-[8px]">
                                S
                            </span>
                        </span>
                        <span className="w-[28px] h-[28px] rounded-full border mx-3 relative">
                            <span className="text-[#7B7B7B] absolute top-[1px] left-[6px]">
                                M
                            </span>
                        </span>
                        <span className="w-[28px] h-[28px] rounded-full bg-[#000] relative">
                        <span className="text-[#fff] absolute top-[1px] left-[9px] ">
                                L
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <hr className='mx-5 bg-[#DFDFDF] mt-8' />
            <div className='my-8 flex flex-row justify-between items-center mx-4'>
                <p className="font-poppins font-medium text-[36px] leading-[79.2px] text-[#CB6146]">
                    $129.99
                </p>
                <button className='w-[153px] h-[56px] rounded-[8px] bg-[#CB6146] font-Poppins font-semibold text-[12px] leading-[26.4px] text-[#FFFFFF] '>
                    ADD TO BAG +
                </button>
            </div>
        </div>
    )
}

export default Detail
