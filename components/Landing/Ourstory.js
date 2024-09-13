

const OurStory = () => {
  return (
    <>
    <div className="mx-5 mt-10 ">
      <div className="flex flex-row justify-between items-center ">
        <h3 className="font-normal text-xl text-[#CB6146] font-poppins">OUR STORY</h3>
        <span className="w-64 h-[1px] bg-[#412017]"></span>
      </div>
      <div className="flex justify-center my-8">
        <img src="/Text.svg" alt='none'/>
      </div>
      <div className="">
        <p className="font-light text-[14px] leading-[30.8px] text-[#404040] font-poppins">
          Zara was started by Amancio Ortega in 1975. His first shop was in central A Coruña, in Galicia, Spain, where the company is still based. He initially called it Zorba after the classic 1964 film Zorba the Greek, but after learning there was a bar with the same name two blocks ...
        </p>
      </div>
      <button className="font-normal text-base text-[#A8472F] flex flex-row items-end  my-6 font-poppins">
        Full Story
        <span className="pl-3">
          <img src="/arrow-right.svg" alt="" />
        </span>
      </button>
      <hr className="text-[#DFDFDF]"/>
      <div className="flex flex-row justify-center items-end mt-10">
        <img src="/Logoo.svg" className="pr-8" alt='none'/>
        <div className="flex flex-row justify-between items-center">
          <h3 className="font-normal text-[18px] leading-[28.8px] text-[#CB6146] pr-7 font-poppins">ON SOCIAL</h3>
          <span className="w-40 h-[1px] bg-[#cb6146]"></span>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full mt-10 mb-5">
        <div className="w-[252px] h-[260px]">
          <img src="/Social3.svg" className="w-[252px] h-[260px]" />
        </div>
        <div className="flex flex-col items-center justify-center w-[102px]">
          <img src="/Social1.svg" className="w-[102px] h-[124px] mb-3" />
          <img src="/Social2.svg" className="w-[102px] h-[124px] " />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center relative mt-6 mb-10">
        <h3 className="font-normal text-xl text-[#A8472F] font-poppins">FOLLOW US ON INSTAGRAM</h3>
        <span className="w-20 h-[1.5px] bg-[#A8472F] mr-5"></span>
        <img src="/arrow-right.svg" className="absolute right-2 top-[3.735px]"/>
      </div>
    </div>
    </>
  )
}

export default OurStory
