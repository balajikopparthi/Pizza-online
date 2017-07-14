import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import {Header} from '../src/header';

describe('<Header /> Component', () => {
    let renderedElement;

    beforeEach(() => {
        renderedElement = shallow(<Header/>);
    });

    it('should have panel header', () => {
        expect(renderedElement.props().className).to.equal('panel-heading')
    });

	it('should have header text', () => {
        const headerText = 'Pizza Search';
        expect(renderedElement.props().children.props.children).to.equal(headerText)
    });
});