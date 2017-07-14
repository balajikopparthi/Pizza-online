
import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import PizzaComponent from '../src/PizzaComponent';

import {Header} from '../src/header';
import {Footer} from '../src/footer';


describe('<PizzaComponent/>', () => {
    let renderedElement, testProps;

		beforeEach(() => {
			testProps ={
				pizza: ['veg', 'non-veg', 'cheese']
			}
			renderedElement = shallow(<PizzaComponent {...testProps}/>);	
		});
	
		 it('should have panel', () => {
			expect(renderedElement.props().className).to.equal('container panel panel-default');
		});
	
		it('should have panel', () => {
			expect(renderedElement.props().className).to.equal('panel-body');
		});
	
	
	
	
	    describe('Child ELements', function () {
        it('should have child elements', function () {
            expect(renderedElement.props().children[0].type).to.equal(Header);
            expect(renderedElement.props().children[1].type).to.equal('div');
            expect(renderedElement.props().children[2].type).to.equal(Footer);
        });
		

    });
	
});

