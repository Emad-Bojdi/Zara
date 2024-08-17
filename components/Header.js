import Bag from "./icons/Bag"
import Menu from "./icons/Menu";
import Search from "./icons/Search";



const Header = () => {
    return (
        <div className="w-full px-3 flex flex-row justify-center">
            <div className="w-1/3">
                <div className="border-green-900">
                    <Bag />
                </div>
                <div className="">
                    <Search />
                </div>
            </div>
            <div className="w-1/3">
                ZARA
            </div>
            <div className="w-1/3">
                <Menu />
            </div>
        </div>
    )
}

export default Header
