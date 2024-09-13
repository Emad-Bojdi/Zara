import Link from "next/link"
import Slider from "../slider/Slider"



const Topseller = () => {
  return (
    <div className="mx-5 mt-10">
      <div className="flex flex-row justify-between items-center ">
        <h3 className="font-normal text-xl text-[#CB6146] font-Poppins">TOP SELLER</h3>
        <span className="w-64 h-[1px] bg-[#cb6146]"></span>
      </div>

      <Slider />
      <div>
        <p className=""> </p>
      </div>
      <Link className="flex flex-row items-end text-[#A8472F] font-normal text-[16px] leading-[24px]  " href={"/detail"}>
        SHOW DETAIL
        <span>
          <img src="./arrow-right.svg" className="pl-3" />
        </span>
      </Link>
    </div>
  )
}

export default Topseller



