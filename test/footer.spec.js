import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import {Footer} from '../src/footer';

describe('<Footer/> Component', () => {
    let renderedElement;

    beforeEach(() => {
        renderedElement = shallow(<Footer/>);
    });

    it('should have panel footer', () => {
        expect(renderedElement.props().className).to.equal('panel-footer');
    });

    it('should have footer text', () => {
        const footerText = 'This app is created in react for front-end test';
        expect(renderedElement.props().children.props.children).to.equal(footerText);
    });
});