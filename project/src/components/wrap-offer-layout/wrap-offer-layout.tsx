import {Outlet} from 'react-router-dom';

export function WrapOfferLayout():JSX.Element{
  return (
    <div className='page'>
      <main className="page__main page__main--property">
        <Outlet />
      </main>
    </div>
  );
}
