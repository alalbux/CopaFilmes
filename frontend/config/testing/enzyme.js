import React from 'react'  // eslint-disable-line no-unused-vars
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// import 'jest-styled-components';