import React, { Component } from 'react'
import Object from './Object'
export class Objects extends Component {
  render() {
    return (
      <main>
              {this.props.objects.map(el=>(
                  <Object onShowObject={this.props.onShowObject} key={el.id} object={el} onAdd={this.props.onAdd}/>
              ))}
            </main>
    )
  }
}

export default Objects
