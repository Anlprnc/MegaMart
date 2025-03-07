import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

type Fruit = {
  id: number;
  name: string;
  image: string;
};

const fruits: Fruit[] = [
  {
    id: 1,
    name: 'Daily Essentials',
    image: '/fruits/groceries-hd.png',
  },
  {
    id: 2,
    name: 'Vegitables',
    image: '/fruits/grocery-free.png',
  },
  {
    id: 3,
    name: 'Fruits',
    image: '/fruits/egg.png',
  },
  {
    id: 4,
    name: 'Strowberry',
    image: '/fruits/strawberry.png',
  },
  {
    id: 5,
    name: 'Mango',
    image: '/fruits/mango.png',
  },
  {
    id: 6,
    name: 'Cherry',
    image: '/fruits/cherry.png',
  },
];

const DailyEssentails = () => {
  return (
    <div className="container mx-auto mt-10 md:mt-20">
      <div className="border-b border-gray-200 flex items-center justify-between">
        <h3 className="border-b-3 border-sky-500 pb-2 text-sm md:text-lg font-semibold text-gray-500">
          Daily <span className="text-sky-500">Essentials</span>
        </h3>
        <div className="flex items-center gap-1 pb-2 text-xs md:text-sm text-gray-500 cursor-pointer">
          View All
          <MdOutlineKeyboardArrowRight className="text-sky-500" size={20} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 place-items-center place-content-center place-self-center lg:place-self-stretch gap-3 mt-5 mx-5 xl:mx-0">
        {fruits.map((fruit) => (
          <div key={fruit.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center">
                <div className="bg-gray-100 w-[187px] h-[187px] relative flex items-center justify-center rounded-xl hover:border hover:border-sky-500">
                  <img src={fruit.image} alt="images" className="w-fit h-fit" />
                </div>
              </div>
              <div className="mt-2 flex flex-col items-center">
                <span className="text-sm text-gray-600">{fruit.name}</span>
                <span className="font-semibold">UP to 50% OFF</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyEssentails;
