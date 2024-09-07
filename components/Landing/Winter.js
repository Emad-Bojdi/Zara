

const Winter = () => {
    return (
        <div className="bg-[#F9E9E5] mt-10 flex flex-col justify-center">
            <div className="relative flex flex-row justify-center mt-10">
                <img src="/winter.svg" />
                <img src="/frame.svg" className="absolute right-[90px] bottom-3" />
            </div>
            <div className="flex flex-col justify-center ">
                <h1 className="text-center font-normal text-[64px] leading-[85.31px] font-PlayfairDisplay">WINTER</h1>
                <div className="flex flex-row justify-center items-center">
                    <span className="w-32 h-[1.5px] bg-[#7B7B7B] mt-1 mr-2"></span>
                    <span className="font-normal text-[16px] leading-[21.33px] text-[#404040] font-PlayfairDisplay">is coming...</span>
                </div>
            </div>
            <div className="my-5 mx-5 text-[12px] leading-[26.4px] text-[#281e1e] font-Poppins">
                Our winter sale starts on December 1st and continues until January 15th. Warm winter clothes, boots, jackets, blankets and many more items will be available with discounts up to 60% off!
            </div>
            <div className="flex flex-row items-center justify-between mx-5">
                <span className="w-[83px] h-[95px] bg-white rounded-t-full flex flex-col justify-center items-center font-normal text-[40px] leading-[53.32px] text-[#282828] font-PlayfairDisplay">25</span> :
                <span className="w-[83px] h-[95px] bg-white rounded-t-full flex flex-col justify-center items-center font-normal text-[40px] leading-[53.32px] text-[#282828] font-PlayfairDisplay">25</span> :
                <span className="w-[83px] h-[95px] bg-white rounded-t-full flex flex-col justify-center items-center font-normal text-[40px] leading-[53.32px] text-[#282828] font-PlayfairDisplay">25</span> :
                <span className="w-[83px] h-[95px] bg-white rounded-t-full flex flex-col justify-center items-center font-normal text-[40px] leading-[53.32px] text-[#282828] font-PlayfairDisplay">25</span>
            </div>
            <div className="flex flex-row justify-around my-10 relative ">
                <img src="/square-kuchic.svg" className=""/>
                <button className="w-[183px] h-[64px] border-2 border-[#A8472F] rounded-[4px] z-10 bg-[#F9E9E5] font-semibold text-[16px] leading-[25.2px] text-[#A8472F]">
                    Pre shop
                </button>
                <span className="w-[183px] h-[64px] border border-[#ca998d] absolute rounded-[4px] left-[114px] top-2 z-2"></span>
                <img src="/square-kuchic.svg" />

            </div>
        </div>
    )
}

export default Winter
