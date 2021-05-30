import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({ adapter: new Adapter() });

describe('NavigationItems', () => {
    it('should render 2 <NavigationItem/> if not authenticated', () => {
        const wrapper = shallow(<NavigationItems />);
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    })
    it('should render 3 <NavigationItem/> if  authenticated', () => {
        const wrapper = shallow(<NavigationItems isAuth />);
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    })
})