import { ReactNode } from "react";

export interface iPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: iUser;
  comments: iComments[];
}

export interface iComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface iUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: iAdressUser;
  phone: string;
  website: string;
  company: iCompany;
}

export interface iAdressUser {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: iGeoUser;
}

export interface iGeoUser {
  lat: number | undefined;
  lng: number | undefined;
}

export interface iCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface iChildrenProps {
  children: ReactNode;
}
