import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import CreateReview from "./components/createReview/createReview"
import{ fetchDestination } from './services/Destination'
import{ fetchAllBars } from './services/Bars'
import{ fetchHotel } from './services/Hotels'
import{ fetchReview } from './services/Reviews'
import UserReviews from './components/UserReviews/UserReviews'
import Header from './components/Header/Header'
import BarsList from './components/BarsList/BarsList';
import HotelList from './components/HotelList/HotelList';
import DestinationList from './components/DestinationList/destinationList';
import ReviewList from './components/ReviewList/ReviewList';
import CreateBarPage from './components/CreateBarPage/CreateBarPage'
import UpdateBarsPage from "./components/UpdateBarsPage/UpdateBarsPage"
import Calendar from './components/Home/Months'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       destinations:[],
       hotels:[],
       bars:[],
       reviews:[],
       currentBar: {}
    }
  }
  
  fetchDestinationData = async () => {
    const destinations = await fetchDestination()
      this.setState({
      destinations: destinations
    })
  }

  setCurrentBar = (bar) => {
    this.setState({
      currentBar: bar
    })
  }

  fetchBarData = async () => { 
    const bars = await fetchAllBars()
      this.setState({
        bars: bars
      })
    }

  fetchHotelData = async () => {
    const hotels =  await fetchHotel()
    this.setState({
      hotels: hotels
    })
  }

  fetchReviewData = async () => {
    const reviews = await fetchReview()
      this.setState({
        reviews: reviews
      })
  }

  componentDidMount() {
    this.fetchDestinationData()
    this.fetchBarData()
    this.fetchHotelData()
    this.fetchReviewData()
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route 
            exact path='/destinations' 
            render={() => <DestinationList destinations={this.state.destinations}/>} 
          /> 

          <Route exact path='/' component={Calendar}/> 

          <Route 
            exact path='/hotels' 
            render={() => <HotelList hotels={this.state.hotels}/>} 
          />  

          <Route 
            path='/create-reviews' 
            component={CreateReview} 
          />
          
          <Route 
            path='/user-reviews' 
            component={UserReviews} 
          />

          <Route 
            exact path='/bars'
            render={() => <BarsList 
              bars={this.state.bars}
              currentBar={this.state.currentBar}
              setCurrentBar={this.setCurrentBar}
            />} 
          />   

          <Route
            path='/create-bar'
            component={ CreateBarPage }
          />

          <Route
            path="/bars/:id"
            render={() => <UpdateBarsPage bars={this.state.bars}
              currentBar={this.state.currentBar}
              setCurrentBar={this.setCurrentBar}
            />} 
          />

          <Route 
            exact path='/reviews'
            render={() => <ReviewList reviews={this.state.reviews}/>} 
          />  
        </Switch>
      </div>
    );
  }
}

export default App;
