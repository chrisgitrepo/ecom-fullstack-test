import React from 'react';
import { mount } from 'enzyme';
import Homepage from '../../src/views/Homepage';
import { products } from '../../gql-server/database/data';

describe('HomePage', () => {
    test('should render Hompage with correct classes', () => {
        const wrapper = mount(<Homepage products={products} fetchProducts={()=>true}/>);
        expect(wrapper.render()).toBeTruthy();
        expect(wrapper.find('.container').exists()).toBeTruthy();
        expect(wrapper.find('.productlist').exists()).toBeTruthy();
        expect(wrapper.find('.listitem').exists()).toBeTruthy();
        expect(typeof wrapper.render).toBe('function');
    });
});