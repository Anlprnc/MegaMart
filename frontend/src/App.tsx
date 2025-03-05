import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

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
      </div>
    </>
  );
}

export default App;
