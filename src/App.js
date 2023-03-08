import MyForm from './from';
import Home from './Home';
import {Routes , Route} from 'react-router-dom';
import Updation from './update';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<MyForm />} />
      <Route path="/edit/:id" element={<Updation />} />
    </Routes>
    </>
  );
}

export default App;
