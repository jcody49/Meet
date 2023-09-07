import { render } from '@testing-library/react';
import App from '../App';

/* eslint-disable */

describe('<App /> component', () => {
  let AppDOM;

  beforeEach(() => {
    AppDOM = render(<App />).container;
  });
  
  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });
  
  test('renders CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });

  test('renders NumberOfEvents component', () => {
    expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
  });
});
