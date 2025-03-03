import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <TopBar />
        <Header />
        <div className="hidden lg:flex">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
