//import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';

function App(): JSX.Element {
  return (
    <MainPage availablePlaceCount={5} />
  );
}
export default App;
