import React, { Component } from 'react';
import CreateReview from '../createReview/createReview'
import HotelList from '../HotelList/HotelList';
import './HotelLocation.css'

class HotelLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showReview: false,
      showButton: true
    }
  }

  handleClick =  () => {
    this.setState({
      showReview: true,
      showButton: false
    })
  }

  render() {
    const  {hotels} = this.props    
        
    return (
      <section className="section" id="dis-thingy">
        <div className="container">
          <h1 className="title">{hotels.name}</h1>
          <h4>{hotels.location}</h4>
          <p>{hotels.description}</p>
          {this.state.showReview && <CreateReview/>}
          <button 
            onClick={this.handleClick} 
            style={this.state.showButton ? {} : { display: 'none' } }
            type="button" 
            value={HotelList.name}>Click to review
          </button>   
        </div>

        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="nothing"/>
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{hotels.reviews[0].user_name}</strong> <small>{hotels.reviews[0].caption}h</small> <small> {hotels.reviews[0].trip_type}</small>
                <br />
                {hotels.reviews[0].experience}      
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item">
                  <span className="icon is-small"><i className="fas fa-reply" /></span>
                </a>
                <a className="level-item">
                  <span className="icon is-small"><i className="fas fa-retweet" /></span>
                </a>
                <a className="level-item">
                  <span className="icon is-small"><i className="fas fa-heart" /></span>
                </a>
              </div>
            </nav>
            </div>
          <div className="media-right">
          </div>
        </article>
      </section>
    )
  }
}

export default HotelLocation;