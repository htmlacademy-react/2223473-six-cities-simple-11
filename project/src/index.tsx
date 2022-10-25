import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';


const apartamentList = [
  {
    mark: 'Premium',
    url: '#',
    imgUrl: 'img/apartment-01.jpg',
    type: 'Apartment',
    description: 'Beautiful &amp; luxurious apartment at great location',
    price: 120,
    ratingPercent: 80,
  },
  {
    url: '#',
    imgUrl: 'img/apartment-02.jpg',
    type: 'Private room',
    description: 'Wood and stone place',
    price: 80,
    ratingPercent: 80,
  },
  {
    url: '#',
    imgUrl: 'img/apartment-03.jpg',
    type: 'Apartment',
    description: 'Canal View Prinsengracht',
    price: 132,
    ratingPercent: 80,
  },
  {
    mark: 'Premium',
    url: '#',
    imgUrl: 'img/apartment-01.jpg',
    type: 'Apartment',
    description: 'Nice, cozy, warm big bed apartment',
    price: 180,
    ratingPercent: 100,
  },
  {
    url: '#',
    imgUrl: 'img/apartment-02.jpg',
    type: 'Private room',
    description: 'Wood and stone place',
    price: 80,
    ratingPercent: 80,
  },
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App apartmentData = {apartamentList} />
  </React.StrictMode>,
);
