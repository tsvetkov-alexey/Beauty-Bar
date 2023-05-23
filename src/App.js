import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import MoreInfo from './pages/MoreInfo';
import NotReady from './pages/NotReady';
import AboutUs from './pages/AboutUs';
import Delivery from './pages/Delivery';
import Contacts from './pages/Contacts';

function App() {
    return (
        <div>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="delivery" element={<Delivery />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="items/:id" element={<MoreInfo />} />
                <Route path="NotReady" element={<NotReady />} />
            </Routes>
        </div>
    );
}

export default App;
