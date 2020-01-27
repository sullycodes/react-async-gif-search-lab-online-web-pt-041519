import React, { Component } from 'react'
 
export default class GifList extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
          <div>
            {this.props.gifs.map( url => <div><img height="100" margin="20" src={url} alt="" /></div>)}
        </div>
        ) 
      } 

}