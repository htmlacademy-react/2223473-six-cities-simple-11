import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MainPage} from '../../pages/main-page/main-page';
import {LoginPage} from '../../pages/login-page/login-page';
import {PropertyPage} from '../../pages/property-page/property-page';

function App(props: {apartmentCount: number}): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<MainPage apartmentCount={props.apartmentCount} />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/property' element={<PropertyPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
