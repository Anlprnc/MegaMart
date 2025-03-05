import { SlLocationPin } from 'react-icons/sl';
import { PiTruck } from 'react-icons/pi';
import { BiSolidOffer } from 'react-icons/bi';

const TopBar = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-1 md:p-2 px-3 md:px-6 gap-y-2 md:gap-0">
          <div className="text-sm opacity-50">Welcome to worldwide Megamart!</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <SlLocationPin className="text-sky-500" />
              <div className="text-xs opacity-50">
                <span>Deliver to </span>
                <b>423551</b>
              </div>
            </div>
            <div className="border-l border-gray-300 pl-4 flex items-center gap-2">
              <PiTruck className="text-sky-500" />
              <div className="text-xs opacity-50">
                <span className="cursor-pointer">Track your order</span>
              </div>
            </div>
            <div className="border-l border-gray-300 pl-4 flex items-center gap-2">
              <BiSolidOffer className="text-sky-500" />
              <div className="text-xs opacity-50">
                <span className="cursor-pointer">All Offers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
