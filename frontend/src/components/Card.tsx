const Card = () => {
  return (
    <div className="w-50 border border-gray-100 hover:border-sky-500 rounded-2xl">
      <div className="relative bg-gray-100 flex justify-center p-3 rounded-t-2xl">
        <img src="/samsung.png" alt="phone" className="max-w-full" />
        <div className="absolute bg-sky-500 text-white top-0 right-0 p-2 px-2.5 text-xs rounded-tr-2xl rounded-bl-2xl">
          <div className="flex flex-col items-center">
            <span>10%</span>
            <span>OFF</span>
          </div>
        </div>
      </div>
      <div className=" p-2 space-y-1 border-b border-gray-100">
        <h4 className="text-sm">Galaxy S22 Ultra</h4>
        <span className="text-xs">
          <b>1080$</b> <s>1200$</s>
        </span>
      </div>
      <div className="text-xs font-semibold text-green-600 p-2">Save - 1080$</div>
    </div>
  );
};

export default Card;
