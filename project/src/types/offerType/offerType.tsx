export type Reviews = {
  avatar: string,
  name: string,
  rating: number,
  text: string,
  dateTime: string
}

export type Host = {
  avatar:string;
  name:string;
  status:string;
};

export type Location = {
  city: string,
  location: {
    longitude:number,
    latitude:number,
    zoom:number
  }
}

export type OfferParameterType = {
  key: string;
  imgSrc:string[];
  isPremium: boolean;
  name: string;
  rating:number;
  type:string;
  countBedrooms:number;
  countAdults:number;
  price:number;
  isNight:boolean;
  inSideList:string[];
  hostTitle:string;
  hostUser:Host;
  description:string;
  location:Location;
  reviews:Reviews;
};
