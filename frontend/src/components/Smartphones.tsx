import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Card from './Card';

const Smartphones = () => {
  return (
    <div className="container mx-auto mt-10 md:mt-20">
      <div className="border-b border-gray-200 flex items-center justify-between">
        <h3 className="border-b-3 border-sky-500 pb-2 text-sm md:text-lg font-semibold text-gray-500">
          Grab the best deal on <span className="text-sky-500">Smartphones</span>
        </h3>
        <div className="flex items-center gap-1 pb-2 text-xs md:text-sm text-gray-500 cursor-pointer">
          View All
          <MdOutlineKeyboardArrowRight className="text-sky-500" size={20} />
        </div>
      </div>
      <div className="mt-5">
        <Card />
      </div>
    </div>
  );
};

export default Smartphones;
