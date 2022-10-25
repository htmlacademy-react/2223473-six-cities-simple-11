import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MainPage} from '../../pages/main-page/main-page';
import {LoginPage} from '../../pages/login-page/login-page';
import {PropertyPage} from '../../pages/property-page/property-page';

type ApartmentCardType = {
  apartmentData:{
  mark?: string;
  url: string;
  imgUrl: string;
  price: number;
  ratingPercent: number;
  description: string;
  type: string;
  }[];
};

function App({apartmentData}: ApartmentCardType): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<MainPage apartmentCardList = {apartmentData}/>}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/property' element={<PropertyPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
