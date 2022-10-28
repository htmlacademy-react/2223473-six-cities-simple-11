import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { OfferPage } from '../../pages/offer-page/offer-page';
import {WrapOfferLayout} from '../wrap-offer-layout/wrap-offer-layout';
import { Header } from '../../components/header/header';
import { Fragment } from 'react';
import { AppRoute } from '../../types/appRoutes/appRoute';


type OfferCardType = {
  offerData:{
  id: string;
  mark?: string;
  url: string;
  previewImage: string;
  price: number;
  rating: number;
  description: string;
  type: string;
  }[];
};

function App({offerData}: OfferCardType): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Header />}>
          <Route index element={<MainPage offerCardList = {offerData}/>}/>
          <Route path={AppRoute.Login} element={<LoginPage />}/>
          <Route path={AppRoute.Room} element={<WrapOfferLayout />}>
            <Route path=':id' element={<OfferPage />}/>
          </Route>
        </Route>
        <Route path='*' element={
          <Fragment>
            <h1>404<br /><small>Page not found</small></h1>
            <Link to='/'>Go to main page</Link>
          </Fragment>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
