import React from 'react';
import { Link } from 'react-router-dom';
import { OfferParameterType } from '../../types/offerType/offerType';
import { AppRoute } from '../../types/appRoutes/appRoute';

type OfferDataProps = {
  offerParameter: OfferParameterType;
}

export const OfferCards = ({offerParameter} : OfferDataProps) => {
  const ratingStar : string = offerParameter ? (offerParameter.rating * 20).toString().concat('%') : '0%';
  return (
    <article className="cities__card place-card">
      {offerParameter.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${offerParameter.key}`}>
          <img className="place-card__image" src={`${offerParameter.imgSrc[0]}`} width="260" height="200" alt="Place {image}"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offerParameter.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{offerParameter.isNight ? 'night' : ''}</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingStar}}/>
            <span className="visually-hidden">{offerParameter.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${offerParameter.key}`}>{offerParameter.description}</Link>
        </h2>
        <p className="place-card__type">{offerParameter.type}</p>
      </div>
    </article>
  );
};
