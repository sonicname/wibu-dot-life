import { Routes, Route } from 'react-router-dom';
import { Main } from './components/layout';
import HomePage from './page/HomePage';
import MangaPage from './page/MangaPage';
import GenrePage from './page/GenrePage';
import SearchPage from './page/SearchPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Main />}>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/manga'} element={<MangaPage />} />
          <Route path={'/genre'} element={<GenrePage />} />
          <Route path={'/search'} element={<SearchPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
