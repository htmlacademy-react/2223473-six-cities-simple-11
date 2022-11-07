import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { OfferPage } from '../../pages/offer-page/offer-page';
import {WrapOfferLayout} from '../wrap-offer-layout/wrap-offer-layout';
import { Header } from '../../components/header/header';
import { AppRoute } from '../../types/appRoutes/appRoute';
import { NotFoundPage } from '../../pages/error-page/not-found-page';
import { OfferParameterType } from '../../types/offerType/offerType';

type AppProps = {
  offers:OfferParameterType[];
}


function App({offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Header />}>
          <Route index element={<MainPage offerParameters = {offers}/>}/>
          <Route path={AppRoute.Login} element={<LoginPage />}/>
          <Route path={AppRoute.Room} element={<WrapOfferLayout />}>
            <Route path=':id' element={<OfferPage offersData = {offers} />}/>
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
