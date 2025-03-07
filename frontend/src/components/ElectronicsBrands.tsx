import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const ElectronicsBrands = () => {
  return (
    <div className="container mx-auto mt-10 md:mt-20">
      <div className="border-b border-gray-200 flex items-center justify-between">
        <h3 className="border-b-3 border-sky-500 pb-2 text-sm md:text-lg font-semibold text-gray-500">
          Top <span className="text-sky-500">Electronics Brands</span>
        </h3>
        <div className="flex items-center gap-1 pb-2 text-xs md:text-sm text-gray-500 cursor-pointer">
          View All
          <MdOutlineKeyboardArrowRight className="text-sky-500" size={20} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center items-center justify-items-center gap-5 mt-5 mx-5 xl:mx-0">
        <div className="bg-[#414141] flex items-center w-full h-[170px] rounded-xl p-4">
          <div className="relative w-full">
            <div className="flex flex-col items-start gap-3 justify-between text-white">
              <h3 className="bg-[#494949] text-[11px] opacity-70 font-light p-2 px-3 rounded-lg tracking-widest">IPHONE</h3>
              <img src="/apple-logo.png" alt="brand-logo" />
              <span className="text-xl">UP to 80% OFF</span>
            </div>
            <div className="absolute -right-5 md:right-0 -top-2">
              <img src="/iphone15.png" alt="phone" className="w-[150px] h-[250px]" />
            </div>
          </div>
        </div>
        <div className="bg-[#FFF3CC] flex items-center w-full h-[170px] rounded-xl p-4">
          <div className="relative w-full">
            <div className="flex flex-col items-start gap-6 justify-between">
              <h3 className="bg-[#F6DE8D] text-[11px] opacity-70 font-light p-2 px-3 rounded-lg tracking-widest">REALME</h3>
              <img src="/realme-logo.png" alt="brand-logo" />
              <span className="text-xl">UP to 80% OFF</span>
            </div>
            <div className="absolute -right-5 md:right-0 -top-2">
              <img src="/realme.png" alt="phone" className="w-[150px] h-[250px]" />
            </div>
          </div>
        </div>
        <div className="bg-[#FFECDF] flex items-center w-full h-[170px] rounded-xl p-4">
          <div className="relative w-full">
            <div className="flex flex-col items-start gap-3 justify-between">
              <h3 className="bg-[#FFD1B0] text-[11px] opacity-70 font-light p-2 px-3 rounded-lg tracking-widest">XIAOMI</h3>
              <img src="/xiaomi-logo.png" alt="brand-logo" />
              <span className="text-xl">UP to 80% OFF</span>
            </div>
            <div className="absolute -right-5 md:right-0 -top-2">
              <img src="/xiaomi-phone.png" alt="phone" className="w-[170px] h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsBrands;
