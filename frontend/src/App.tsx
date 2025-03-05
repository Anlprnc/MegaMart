import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Smartphones from './components/Smartphones';
import TopCategories from './components/TopCategories';

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <TopBar />
        <Header />
        <div className="hidden lg:flex border-b border-gray-200">
          <Navbar />
        </div>
        <Carousel />
        <Smartphones />
        <TopCategories />
      </div>
    </>
  );
}

export default App;
