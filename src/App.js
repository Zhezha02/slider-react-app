import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel';
import { slidesDB } from './components/Carousel/date';

function App() {
  return (
    <>
      <Carousel imageDB={slidesDB} />
    </>
  );
}

export default App;
