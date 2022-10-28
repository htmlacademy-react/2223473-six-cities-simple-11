import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';


const offerList = [
  {
    id: '1',
    mark: 'Premium',
    url: '#',
    previewImage: 'img/apartment-01.jpg',
    type: 'Apartment',
    description: 'Beautiful &amp; luxurious apartment at great location',
    price: 120,
    rating: 80,
  },
  {
    id: '2',
    url: '#',
    previewImage: 'img/apartment-02.jpg',
    type: 'Private room',
    description: 'Wood and stone place',
    price: 80,
    rating: 80,
  },
  {
    id: '3',
    url: '#',
    previewImage: 'img/apartment-03.jpg',
    type: 'Apartment',
    description: 'Canal View Prinsengracht',
    price: 132,
    rating: 80,
  },
  {
    id: '4',
    mark: 'Premium',
    url: '#',
    previewImage: 'img/apartment-01.jpg',
    type: 'Apartment',
    description: 'Nice, cozy, warm big bed apartment',
    price: 180,
    rating: 100,
  },
  {
    id: '5',
    url: '#',
    previewImage: 'img/apartment-02.jpg',
    type: 'Private room',
    description: 'Wood and stone place',
    price: 80,
    rating: 80,
  },
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offerData = {offerList} />
  </React.StrictMode>,
);
