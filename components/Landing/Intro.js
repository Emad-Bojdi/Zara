

const Intro = () => {



    return (
        <div>
            <div className="flex flex-row justify-between ">
                <div className="">
                    <img src="/Model.png" alt="" className="static z-10" />
                    <img src="/Square.png" alt="" className="absolute left-[120px] top-[270px] -z-10" />
                </div>
                <div className="">
                    <img src="/Star.jpg" alt="" className="absolute top-24 left-44 " />
                    <img src="/Star2.jpg" alt="" className="absolute top-36 right-16" />
                    <img src="/Star3.jpg" alt="" className="absolute top-72 right-20 " />
                    <h2 className="absolute top-52 right-32 text-[#CB6146] text-xl font-normal italic font-Poppins">#Fall</h2>
                    <p className="absolute right-12 top-[325px] text-[#CB6146] font-normal text-lg font-Poppins">Explore Collections </p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-24">
                <h2 className="w-[270px] text-[#282828] font-normal text-2xl text-center italic font-PlayfairDisplay">
                    Simplicity is the ultimate
                    sophistication
                </h2>
                <div className="mt-5">
                    <img src="/Scroll.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Intro
