import { Routes, Route } from 'react-router-dom';
import Menu from '../pages/menu';
import Page1 from '../pages/page1/Page1';
import Page2 from '../pages/page2/Page2';
import Page3 from '../pages/page3/Page3';
import Page4 from '../pages/page4/Page4';
import SingleProductPage from '../pages/page3/components/single-product-page';
import SingleProductPage4 from '../pages/page4/components/single-product-page';
import './app.css';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page3/:productId" element={<SingleProductPage />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page4/:productId" element={<SingleProductPage4 />} />
      </Routes>
    </>
  );
}

export default App;
