const Navbar = () => {
  return (
    <nav className="container mx-auto border-b border-gray-200 p-3">
      <ul className="flex flex-col lg:flex-row items-center justify-between gap-3 text-center">
        <li className="bg-sky-50 hover:bg-sky-500 hover:text-white w-full lg:w-auto p-2 px-2 xl:px-6 text-sm rounded-full">
          <a href="">Groceries</a>
        </li>
        <li className="bg-sky-50 hover:bg-sky-500 hover:text-white w-full lg:w-auto p-2 px-2 xl:px-6 text-sm rounded-full text-nowrap">
          <a href="">Premium Fruits</a>
        </li>
        <li className="bg-sky-50 hover:bg-sky-500 hover:text-white w-full lg:w-auto p-2 px-2 xl:px-6 text-sm rounded-full text-nowrap">
          <a href="">Home & Kitchen</a>
        </li>
        <li className="bg-sky-50 hover:bg-sky-500 hover:text-white w-full lg:w-auto p-2 px-2 xl:px-6 text-sm rounded-full">
          <a href="">Fashion</a>
        </li>
        <li className="bg-sky-50 hover:bg-sky-500 hover:text-white w-full lg:w-auto p-2 px-2 xl:px-6 text-sm rounded-full">
          <a href="">Electronics</a>
        </li>
        <li className="bg-sky-50 hover:bg-sky-500 hover:text-white w-full lg:w-auto p-2 px-2 xl:px-6 text-sm rounded-full">
          <a href="">Beauty</a>
        </li>
        <li className="bg-sky-50 hover:bg-sky-500 hover:text-white w-full lg:w-auto p-2 px-2 xl:px-6 text-sm rounded-full text-nowrap">
          <a href="">Home Improvement</a>
        </li>
        <li className="bg-sky-50 hover:bg-sky-500 hover:text-white w-full lg:w-auto p-2 px-2 xl:px-6 text-sm rounded-full text-nowrap">
          <a href="">Sports, Toys & Luggage</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
