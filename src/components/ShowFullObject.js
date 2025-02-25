import React, { Component } from 'react'

export class ShowFullObject extends Component {
  render() {
    return (
      <div className='full-object'>
        <div>
        <img src={"./img/"+ this.props.object.img} onClick={() => this.props.onShowObject(this.props.object)}/>
            <h2>{this.props.object.title}</h2>
            <p>{this.props.object.desc}</p>
            <b>{this.props.object.price}</b>
            <div className='add-to-cart' onClick={()=>this.props.onAdd(this.props.object)}>+</div>       
        </div>
      </div>
    )
  }
}

export default ShowFullObject
