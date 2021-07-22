import React from 'react';
import { FaRegStar } from "react-icons/fa"

export default class DashBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: this.props.rating
        }
    }

componentDidMount() {
    this.reset()
}

    highlight(id) {
        let rating = parseInt(id.substring(id.length-1, id.length));
        for(let i = 0; i < 5;i++) {
            let star = document.getElementById(`${this.props.uuid}s` + (i+1).toString());
            star.style.color = i < rating ? "grey" : "black";
        }
    }

    reset() {
        for(let i = 0; i < 5;i++) {
            let star = document.getElementById(`${this.props.uuid}s` + (i+1).toString());
            star.style.color = i < this.state.rating ? "orange" : "black";
        }
    }

    updateRating(id) {
        let rating = parseInt(id.substring(id.length-1, id.length));
        this.setState({rating: rating})
        this.props.saveRating(this.props.index, rating);
    }

  render() {
      return (
          <div>
              <FaRegStar className="star" size={20}  id={`${this.props.uuid}s1`} onMouseOut={() => this.reset()} onMouseOver={(e) => this.highlight(e.target.id)} onClick={(e) => this.updateRating(e.target.id)} />
              <FaRegStar className="star" size={20} id={`${this.props.uuid}s2`} onMouseOut={() => this.reset()} onMouseOver={(e) => this.highlight(e.target.id)} onClick={(e) => this.updateRating(e.target.id)} />
              <FaRegStar className="star" size={20} id={`${this.props.uuid}s3`} onMouseOut={() => this.reset()} onMouseOver={(e) => this.highlight(e.target.id)} onClick={(e) => this.updateRating(e.target.id)} />
              <FaRegStar className="star" size={20} id={`${this.props.uuid}s4`} onMouseOut={() => this.reset()} onMouseOver={(e) => this.highlight(e.target.id)} onClick={(e) => this.updateRating(e.target.id)} />
              <FaRegStar className="star" size={20} id={`${this.props.uuid}s5`} onMouseOut={() => this.reset()} onMouseOver={(e) => this.highlight(e.target.id)} onClick={(e) => this.updateRating(e.target.id)} />
          </div>
      )
  }
}