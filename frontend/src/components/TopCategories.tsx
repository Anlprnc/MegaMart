import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import categories from '../../data/categories.json';

const TopCategories = () => {
  return (
    <div className="container mx-auto mt-10 md:mt-20">
      <div className="border-b border-gray-200 flex items-center justify-between">
        <h3 className="border-b-3 border-sky-500 pb-2 text-sm md:text-lg font-semibold text-gray-500">
          Shop From <span className="text-sky-500">Top Categories</span>
        </h3>
        <div className="flex items-center gap-1 pb-2 text-xs md:text-sm text-gray-500 cursor-pointer">
          View All
          <MdOutlineKeyboardArrowRight className="text-sky-500" size={20} />
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-between flex-wrap gap-4 mt-5">
        {categories.map((category) => (
          <div key={category.id} className="text-center">
            <div className="relative rounded-full hover:border hover:border-sky-500 bg-gray-100 w-[124px] h-[124px] flex justify-center items-center overflow-hidden">
              <img src={category.image} alt="category images" className="object-cover max-w-full max-h-full" />
            </div>
            <div className="text-sm opacity-70 mt-2">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
