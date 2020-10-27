
import { API } from '../config';


export const createCategory = (userId,token,category) => {
      return fetch(`${API}/city/create/${userId}`, {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization:`Bearer ${token}`
          },
          body: JSON.stringify(category)
      })
          .then(response => {
              return response.json();
          })
          .catch(err => {
              console.log(err);
          });
  };

 export const getCity = () => {
      return fetch(`${API}/cities`, {
          method: 'GET'
      })
          .then(response => {
              return response.json();
          })
          .catch(err => console.log(err));
  };
    