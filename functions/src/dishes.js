import fetch from 'isomorphic-fetch';
export default function getDishes() {
  return fetch('https://us-central1-foodnationgo.cloudfunctions.net/dish').then(res => res.json());
}