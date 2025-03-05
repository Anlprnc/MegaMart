import phones from '../../data/phones.json';

const Card = () => {
  return (
    <div className="flex items-center justify-center xl:justify-between gap-5 xl:gap-0 flex-wrap">
      {phones.map((phone) => (
        <div key={phone.id} className="w-[245px] border border-gray-100 hover:border-sky-500 rounded-2xl">
          <div className="relative bg-gray-100 h-[200px] flex justify-center p-3 rounded-t-2xl">
            <img src={phone.image} alt="phone" className="max-w-full" />
            <div className="absolute bg-sky-500 text-white top-0 right-0 p-2 px-2.5 text-xs rounded-tr-2xl rounded-bl-2xl">
              <div className="flex flex-col items-center">
                <span>{phone.discount}</span>
                <span>OFF</span>
              </div>
            </div>
          </div>
          <div className="p-2 space-y-1 border-b border-gray-100">
            <h4 className="text-sm">{phone.name}</h4>
            <span className="text-xs">
              <b>{phone.discountedPrice}$</b> <s>{phone.originalPrice}$</s>
            </span>
          </div>
          <div className="text-xs font-semibold text-green-600 p-2">Save - {phone.discountedPrice}$</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
