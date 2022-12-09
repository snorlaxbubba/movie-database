//AppRouter

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavorites from '../pages/PageFavorites';
import PageSingleMovie from '../pages/PageSingleMovie';
import PageSingleCast from '../pages/PageSingleCast';
import PageTrailer from '../pages/PageTrailer';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {
  return (
    <div>
        <BrowserRouter>
            <div className="main-wrapper">
            <Header />
                <Routes>
                    <Route path="/" element={<PageHome sort='popular' />} />
                    <Route path="/sort/popular" element={<PageHome sort='popular' />} />
                    <Route path="/sort/top-rated" element={<PageHome sort='top-rated' />} />
                    <Route path="/sort/now-playing" element={<PageHome sort='now-playing' />} />
                    <Route path="/sort/upcoming" element={<PageHome sort='upcoming' />} />
                    <Route path="/about" element={<PageAbout />} />
                    <Route path="/favorites" element={<PageFavorites />} />
                    <Route path="/movie/:id" element={<PageSingleMovie />} />
                    <Route path="/movie/:id/trailer" element={<PageTrailer />} />
                    <Route path="/cast/:id" element={<PageSingleCast />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  )
}
export default AppRouter