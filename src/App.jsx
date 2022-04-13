import { Fragment } from 'react';

import AppHeader from './component/Layout/AppHeader';
import AppFooter from './component/Layout/AppFooter';
import Navbar from './component/Nav/Navbar';
import Home from './component/Pages/Home';

const App = () => {
  return (
    <Fragment>
      <AppHeader>
        <Navbar />
      </AppHeader>

      <Home />

      <AppFooter></AppFooter>
    </Fragment>
  );
};

export default App;
