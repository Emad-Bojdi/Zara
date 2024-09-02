import Bag from "./icons/Bag"
import Menu from "./icons/Menu";
import Search from "./icons/Search";



const Header = () => {
    return (
        <>
        <div className="w-9/10 mx-4 flex flex-row-reverse justify-between py-7 border-b-2 border-gray-300">
            <div className="flex flex-row-reverse ">
                <div className="">
                    <Bag />
                </div>
                <div className="pr-6">
                    <Search />
                </div>
            </div>
            <div className="">
                <img src="/Logoo.svg" alt="" />
            </div>
            <div className="">
                <Menu />
            </div>
        </div>
        </>
    )
}

export default Header
