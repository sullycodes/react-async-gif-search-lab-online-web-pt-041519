import React, { Component } from 'react'
// import GifListContainer from '../containers/GifListContainer'

 
export default class GifSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
        }
    }

    handleSearch  = event => {
        this.setState({
            search: event.target.value
          })
    } 

    handleSubmit(event) {
        event.preventDefault()
        this.props.query(this.state.search)
        
    }



  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div> 
          <label>Gif Search: <input id="search" name="search" type="text" onChange={event => this.handleSearch(event)}/></label>
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    );
  }

}