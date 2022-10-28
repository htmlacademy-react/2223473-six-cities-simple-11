import React from 'react';
import { Link } from 'react-router-dom';
import { OfferCardType } from '../../types/offerType/offerType';
import { AppRoute } from '../../types/appRoutes/appRoute';

export const OfferCards = ({id,mark, url, previewImage, price, rating, description, type}: OfferCardType) => (
  <article className="cities__card place-card">
    {mark && <div className="place-card__mark"><span>{mark}</span></div>}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={`${AppRoute.Room}/${id}`}>
        <img className="place-card__image" src={`${previewImage}`} width="260" height="200" alt="Place {image}" />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>

      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: '80%'}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`${AppRoute.Room}/${id}`}>{description}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>
);
