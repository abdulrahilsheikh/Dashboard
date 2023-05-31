import React from "react";

type Props = {};

const Charges = (props: Props) => {
  return (
    <div className="flex-1 w-full flex items-start gap-4 text-sm">
      <div className="grid grid-cols-[5rem_10rem_10rem] content-center gap-2 ">
        <div></div>
        <div className="flex justify-between">
          <div>Charge Name</div>
          <div>%</div>
        </div>
        <div>Value</div>
        <div>Discount</div>
        <div className="flex items-center w-full gap-2">
          <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 w-[80%] flex-1" />
          <input className=" ml-auto  text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 w-[20%]" />
        </div>

        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <div>IGST</div>
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <div>CGST</div>
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <div>SGST</div>
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <div>TCS/TDS Chr</div>
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
      </div>
      <div className="grid grid-cols-[5rem_10rem_10rem] content-center gap-2 ">
        <div></div>
        <div className="flex justify-between">
          <div>Charge Name</div>
          <div>%</div>
        </div>
        <div>Value</div>
        <div>Freight</div>
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <div>Cartage</div>
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <div>Entry Tax</div>
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <div>Packing</div>
        <div className="flex items-center w-full gap-2">
          <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 w-[80%] flex-1" />
          <input className=" ml-auto  text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 w-[20%]" />
        </div>
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <div>Insurance</div>
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <div>Reverse</div>
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
      </div>
      <div className="grid grid-cols-[5rem] content-center gap-2">
        <div>GST</div>
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[5rem_10rem_5rem] content-center gap-2 ">
          <div>Char 1</div>
          <div className="flex items-center w-full gap-2">
            <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 w-[80%] flex-1" />
            <input className=" ml-auto  text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 w-[20%]" />
          </div>
          <input className="w-[5rem]  text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
          <div>Char 2</div>
          <div className="flex items-center w-full gap-2">
            <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 w-[80%] flex-1" />
            <input className=" ml-auto  text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 w-[20%]" />
          </div>
          <input className="w-[5rem]  text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
          <div>Char 3</div>
          <div className="flex items-center w-full gap-2">
            <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 w-[80%] flex-1" />
            <input className=" ml-auto  text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 w-[20%]" />
          </div>
          <input className="w-[5rem]  text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
          <div>Char 4</div>
          <div className="flex items-center w-full gap-2">
            <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 w-[80%] flex-1" />
            <input className=" ml-auto  text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 w-[20%]" />
          </div>
          <input className="w-[5rem] text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 " />
        </div>

        <div className="grid grid-cols-[5rem_15.5rem]  content-center gap-2">
          <div>Round Off</div>
          <div className="flex items-center gap-2">
            <input className=" ml-auto  text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 w-[20%]" />
            <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2 w-[80%] flex-1" />
          </div>
        </div>
        <div className="grid grid-cols-[5rem_15.5rem]  content-center gap-2">
          <div>Net Amount</div>

          <input className=" text-sm bg-white border-[1px] focus:border-[1px] focus:outline-none px-2  " />
        </div>
      </div>
    </div>
  );
};

export default Charges;
