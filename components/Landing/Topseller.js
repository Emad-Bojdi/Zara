

const Topseller = () => {
  return (
    <div className="mx-5 mt-10">
      <div className="flex flex-row justify-between items-center ">
        <h3 className="font-normal text-xl text-[#CB6146] font-Poppins">TOP SELLER</h3>
        <span className="w-64 h-[1px] bg-[#cb6146]"></span>
      </div>
      <div className="flex flex-row justify-between mt-5">
        <div className="">
          <img src="/Topseller.svg" alt="" className=""/>
          <div className="flex flex-row justify-between items-center">
            <p className="font-normal text-base font-poppins">X Trench Coat</p>
            <p className="text-xl text-[#A8472F] font-normal">$59</p>
          </div>
          <img src="/Line 13.svg" className="my-4" alt="" />
          <button className="font-normal text-base text-[#A8472F] flex flex-row items-end  font-Poppins">
              SHOW DETAIL
              <span className="pl-3">
                <img src="/arrow-right.svg" alt="" />
              </span>
          </button>
        </div>
        <div className=""></div>
      </div>
    </div>
  )
}

export default Topseller
