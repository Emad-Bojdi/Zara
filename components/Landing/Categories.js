const Categories = () => {
    return (
        <div className="mt-10 mx-5 border-b-2 border-[#DFDFDF]">
            <div className="flex flex-row justify-between  items-center">
                <h3 className="font-normal text-xl text-[#CB6146] font-Poppins">BROWSE CATEGORIES</h3>
                <span className="w-44 h-[1px] bg-[#CB6146]"></span>
            </div>
            <div className="flex flex-row mt-10 justify-between">
                <div className="flex flex-col justify-start items-center">
                    <div className="flex flex-row  items-center">
                        <span className="w-7 h-[2px] bg-[#CB6146] mr-2"></span>
                        <h2 className="font-normal text-2xl text-center text-[#110d0c] font-PlayfairDisplay">Coats</h2>
                    </div>
                    <ul className="py-3">
                        <li className="font-normal text-2xl text-[#282828] font-PlayfairDisplay">Dresses</li>
                        <li className="font-normal text-2xl text-[#282828] py-3 font-PlayfairDisplay">Jackets</li>
                        <li className="font-normal text-2xl text-[#282828] font-PlayfairDisplay">Boots</li>
                        <li className="font-normal text-2xl text-[#282828] py-3 font-PlayfairDisplay">Shirts</li>
                        <li className="font-normal text-2xl text-[#282828] font-PlayfairDisplay">Trousers</li>
                        <li className="font-normal text-2xl text-[#282828] py-3 font-PlayfairDisplay">Accessories</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-start mt-2 items-center">
                    <img src="/Categories.jpg" alt="" className="w-[200px] h-[250px] " />

                    <div className="flex flex-row items-center relative">
                        <p className="font-normal text-base text-center text-[#CB6146] font-Poppins"> View All </p>
                        <span className="w-4 h-[1.5px] bg-[#CB6146] absolute right-[4px] top-[15px] "></span>
                        <span className="pl-4 text-xl text-[#CB6146] "> {'>'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;