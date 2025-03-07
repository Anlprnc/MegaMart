import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="bg-sky-600 mt-10 lg:mt-20 relative">
      <div className="container mx-auto flex flex-wrap items-center justify-center lg:justify-start gap-40 p-5 py-10">
        <div className="flex flex-col items-start justify-between gap-y-5">
          <h2 className="text-white text-4xl font-medium tracking-wider">MegaMart</h2>
          <div className="text-white flex flex-col items-start gap-y-3">
            <h4 className="font-medium">Contact Us</h4>
            <div className="flex items-center gap-2">
              <FaWhatsapp size={22} />
              <div className="flex flex-col items-start text-sm">
                <span>WhatsApp</span>
                <span>+1 202-918-2132</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone size={22} />
              <div className="flex flex-col items-start text-sm">
                <span>Call Us</span>
                <span>+1 202-918-2132</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium">Download App</h4>
            <div className="flex items-center gap-3">
              <img src="/app-store.png" alt="app-store" className="w-[140px]" />
              <img src="/google-play.png" alt="google-play" className="w-[160px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-start justify-center">
          <div className="flex flex-col items-center">
            <h4 className="border-b-2 border-white pb-2 text-white font-medium">Most Popular Categories</h4>
            <ul className="list-disc text-white font-light text-sm pl-0 p-5 space-y-2">
              <li>Staples</li>
              <li>Beverages</li>
              <li>Personal Care</li>
              <li>Home Care</li>
              <li>Baby Care</li>
              <li>Vegetables & Fruits</li>
              <li>Snacks & Foods</li>
              <li>Dairy & Bakery</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="border-b-2 border-white pb-2 text-white font-medium">Customer Services</h4>
            <ul className="list-disc text-white font-light text-sm pl-0 ml-12 md:ml-24 p-5 space-y-2">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>E-waste Policy</li>
              <li>Cancelletion & Return Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden xl:block absolute right-0 top-0">
        <img src="/mask.png" alt="mask" className="w-[250px]" />
      </div>
      <div className="container mx-auto mt-10">
        <div className="flex items-center justify-center border-t border-sky-400 text-white p-5 text-xs md:text-lg font-extralight">
          © 2022 All rights reserved. Reliance Retail Ltd.
        </div>
      </div>
    </div>
  );
};

export default Footer;
