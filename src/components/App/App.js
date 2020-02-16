import React, { Component } from 'react';
import './App.css';
import ListItem from '../listItem';
import Record from '../Record';
import DataService from '../../service/ListDataService';

export default class App extends Component {
  dataservice = new DataService();
  render() {
   
    return (
      <div className="App">
        <div className="wrapper">
          <ListItem getItems={this.dataservice.getCars} header={"Cars"}>
            <Record label={"Name"} objKey={"name"}/>
            <Record label={"Founded Date"} objKey={"foundedDate"}/>
            <Record label={"Headquarters"} objKey={"headquarters"}/>
          </ListItem>
          <ListItem getItems={this.dataservice.getCountries} header={"Countries"}>
            <Record label={"Country"} objKey={"name"}/>
            <Record label={"Capital"} objKey={"capital"}/>
            <Record label={"Population"} objKey={"population"}/>
          </ListItem>
          <ListItem getItems={this.dataservice.getBrands} header={"Brands"}>
            <Record label={"Brand"} objKey={"name"}/>
            <Record label={"Founded in"} objKey={"founded"}/>
            <Record label={"Web Site"} objKey={"website"}/>
          </ListItem>
          
        </div>
      </div>
    );
  }
}

