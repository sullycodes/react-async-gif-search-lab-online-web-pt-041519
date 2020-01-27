import React, { Component } from 'react'
 
export default class GifList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            url: props.url
        }
    }

    render() {
        return (
          <div>
              <img height="200" src={this.state.url} alt="" />
          </div>
        )
        
      }
    


}