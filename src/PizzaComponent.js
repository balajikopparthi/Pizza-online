import React from 'react';
import "isomorphic-fetch";
import {Header} from './header';
import {Footer} from './footer';


function sortFilter() {
    const self=this;
    this.asc = !this.asc;
    return this.sort(function (l, x) {
        return l > x ? (self.asc ? 1 : -1) : l < x ? (self.asc ? -1 : 1) : 0;
    });
}

class PizzaComponent extends React.Component{
	constructor(){
		super();
			this.state={items: []},
			this.sorts = this.sorts.bind(this);
	}
	componentWillMount(){
		fetch('jsondata.json')
		.then(response => response.json())
		.then(({records:items}) => this.setState({items}))
	}
	filter(e){
		this.setState({filter:e.target.value})
	}

	sorts(ev) {
        this.state.items.sortFilter = sortFilter;
        this.setState({sorts: this.state.items.sortFilter()});
    }

   render(){
	   let items = this.state.items
	   if(this.state.filter){
		   items=items.filter(item => 
		   item.toLowerCase()
		   .includes(this.state.filter.toLowerCase()))
	   }
     return(
		
	   <div className="container panel panel-default">
			<Header/>
			<div className="panel-body">
			<div className="row">
						<div className="col-sm-8">
						<input type="text"
						className="form-control"			   
						onChange={this.filter.bind(this)} />
				</div>
			   <div className="col-sm-4">
						<button
							type="button"
							className="btn btn-primary"
							onClick={this.sorts.bind(this)}>
							sort
						</button>
				</div>
			</div>
			<div className="panel-body">
				 <ul className="list-group">
				   {items.map(item => 
					<Person key={item} person={item} />
				   )}
				</ul>
			</div>
			</div>
			<Footer/>
	   </div>
	 )
   }
}

const Person =(props) =>
<li className="list-group-item">{props.person}</li>


export default PizzaComponent;





