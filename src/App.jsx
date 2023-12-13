
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Nordson from './pages/nordson/Nordson.jsx';

function Hello() {
  return <div>Hello</div>;
}

function IndexPage() {
  return <div>Index</div>
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename="/landing-pages">
        <Routes>
          <Route path="/nordson" element={<Nordson />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/" element={<IndexPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
