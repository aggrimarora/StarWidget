import React from 'react';
import products from '../data/data.json';
import Card from './card';
import StarWidget from './starWidget';

export default class DashBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: products 
        }
    }

  saveRating = (index, rating) => {
      this.setState(prevState => {
          let temp = {...prevState}
          temp.data[index].rating = rating;
          return {data: temp.data};
      })
  }

  render() {
      return <div>
          {this.state.data.map((record, i) => (
              <Card saveRating={this.saveRating} index={i} product ={record} />
          ))}
      </div>
  }
}