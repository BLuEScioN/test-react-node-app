import * as React from 'react';
import '../styles/MainPage';
import { PhoneSearchBox } from './PhoneNumberBox';

export const MainPage = () => {
  return (
    <div className='main'>
      <PhoneSearchBox />
    </div>
  );
};
