import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
 
  state = {
    gifs: []
  }

  queryGiphy = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(info => {
        this.setState({
           gifs: info.data.map(gif => gif.images.original.url)
        }, () => console.log(this.state.gifs[0]))
    })
  }
 
  generateGifs = () => {
    return this.state.gifs.map( url => <GifList url={url} />
    )
  }

  render() {
    return (
        <div>
            <GifSearch query={this.queryGiphy}/>
            {this.generateGifs()}
         </div>
    )
    
  }
 
//   componentDidMount() {
//       this.queryGiphy()
//   }

}