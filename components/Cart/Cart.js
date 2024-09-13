

const Cart = ({ image, title, desc, size, color, price }) => {
    return (
        <div className="relative my-3">
            <span className="w-[24px] h-[24px] border border-[#BDBDBD]  rounded-full  absolute text-center right-2 top-2">
               <span className="absolute top-[-8px] right-[8px]">
                _
               </span>
            </span>
            <div className="p-8 flex flex-row justify-between border border-[#DFDFDF] items-center">
                <div className="">
                    <img src={image} alt="none"/>
                </div>
                <div className="flex flex-col items-between">
                    <p className="font-Poppins font-normal text-[10px] leading-[15px] text-[#404040] ">{title}</p>
                    <h2 className="font-Poppins font-normal text-[14px] leading-[21px] text-[#282828] "> {desc} </h2>
                    <div className="flex flex-row justify-start mt-3">
                        <img src={color} alt="none"/>
                        <p className="pl-8 font-Poppins font-normal text-[12px] leading-[18px] text-[#404040] "> {size} </p>
                    </div>
                </div>
                <div className="pl-7">
                    <p className="font-Literata font-bold text-[20px] leading-[44px] text-[#A8472F]">$ {price}</p>
                </div>
            </div>
        </div>
    )
}

export default Cart
