

const Footer = () => {
    return (
        <div className="bg-[#A8472F] flex flex-col justify-center">
            <div className="flex flex-col items-center py-8 relative">
                <span className="w-10 h-3 bg-[#D9D9D9] absolute rotate-[-45deg] left-16"></span>
                <img src="./Footer.svg" />
                <span className="w-10 h-3 bg-[#D9D9D9] absolute rotate-[-45deg] right-16 bottom-8"></span>
            </div>
            <div className="flex flex-row justify-around items-center my-4">
                <img src="./Rec.svg" />
                <div className="flex flex-col items-center">
                    <h1 className="font-medium italic text-[28px] leading-[44.8px] text-[#fff]">flagship Store</h1>
                    <h3 className="font-medium italic text-[16px] leading-[25.6px] text-[#fff] mt-3 mb-5"> British, Blenheim St. </h3>
                    <button className=" font-normal text-[16px] leading-[25.6px] text-[#fff] border-b border-[#FFFCEE]">
                        FIND A STORE
                    </button>
                    <img src="./Rec.svg" className="pt-5"/>
                </div>
                <img src="./Rec.svg" />
            </div>
            <div className="flex flex-row justify-around mx-5 items-end">
                <img src="./Logo-White.svg" className="mr-16"/>
                <p className="font-normal text-[14px] leading-[22.4px] text-[#FFFCEE]">Stay in yhe know for all things</p>
            </div>
            <div className="flex flex-row justify-center mx-5 my-8 relative">
                <input
                    type="email"
                    placeholder="Enter Email"
                    className="bg-inherit w-full border-b outline-none text-[#FFFCEE] placeholder:text-[#FFFCEE] placeholder:font-normal placeholder:text-[16px] placeholder:[leading-25.6px] "
                />
                <button >
                <img src="./arrow-right-w.svg" className="absolute right-[-5px] bottom-1"/>
                </button>
            </div>
        </div>
    )
}

export default Footer
