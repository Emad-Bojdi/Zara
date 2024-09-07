import Cart from "../../components/Cart/Cart"


const checkout = () => {
    return (
        <>
        <div className="flex flex-col mx-5 bg-[#FFFCEE] ">
            <h1 className="font-PlayfairDisplay font-normal text-[40px] leading-[53.32px] text-[#282828] mt-16 mb-6">
                CART
            </h1>
            <div className="mb-4">
                <Cart image={'./cloth1.svg'} title={'NORTH ZACKSUN'} desc={'VIANNEY DB BREASTED ...'} size={'XL'} color={'./brown.svg'} price={'129'}/>
                <Cart image={'./cloth1.svg'} title={'NORTH ZACKSUN'} desc={'VIANNEY DB BREASTED ...'} size={'XL'} color={'./brown.svg'} price={'129'}/>
            </div>
            <hr/>
            <div className="">
                <div className="flex flex-row justify-between my-6">
                    <h1 className="font-Poppins text-[24px] font-normal leading-[36px] ">Total</h1>
                    <h1 className="font-Poppins font-semibold text-[24px] leading-[36px] text-[#282828]">$450.00</h1>
                </div>
                <div className="flex flex-row justify-between mt-6 mb-4">
                    <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#7B7B7B]">Price Delivery</p>
                    <p className="font-Poppins font-normal text-[14px] leading-[21px] text-[#282828]">Free</p>
                </div>
                <div className="flex flex-row justify-between">
                <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#7B7B7B]">Taxes</p>
                <p className="font-Poppins font-normal text-[14px] leading-[21px] text-[#282828]">$5.00</p>
                </div>
                <div className="flex flex-row justify-between  mt-4">
                <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#7B7B7B]">Total Promo</p>
                <p className="font-Poppins font-normal text-[14px] leading-[21px] text-[#282828]"> $13.00 </p>
                </div>
                <button className="w-[390px] h-[64px] rounded-[8px] bg-[#282828] text-[#FFFCEE] mt-9 mb-20">
                    Checkout Now
                </button>
                
            </div>
            
        </div>
        <div className="w-full h-[70px] border-t shadow-[0_35px_60px_-15px_rgba(0,0,0)">

        </div>
        </>
    )
}

export default checkout
