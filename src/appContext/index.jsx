import { createContext } from "react";

export const initialState = {
  theme: {
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'red'
  },
  wordlimitCount: 50,
  userToken: '',
  users: {},
  cartList: {},
  favouriteProdcuts: {}
};

export const AppContext = createContext(initialState);

export const THEME_CHANGER = 'THEME_CHANGER';
export const WORD_COUNT_UPDATE = 'WORD_COUNT_UPDATE'