
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
          <Route path="/" element={<IndexPage />}/>
          <Route path="/hello" element={<Hello />} />
          <Route path="/nordson" element={<Nordson />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
