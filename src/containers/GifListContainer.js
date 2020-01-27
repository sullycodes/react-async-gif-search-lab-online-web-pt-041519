import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
 
  state = {
    gifs: []
  }

  queryGiphy = (search) => {
      console.log(search)
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(info => {
        this.setState({
           gifs: info.data.map(gif => gif.images.original.url)
        })
    })
  }
 
  render() {
    return (
        <div>
            <GifSearch query={this.queryGiphy}/>
            <GifList gifs={this.state.gifs} />
         </div>
    )
  }
 
//   componentDidMount() {
//       this.render()
//   }

}