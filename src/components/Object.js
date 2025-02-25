import React, { Component } from 'react'

export class Object extends Component {
  render() {
    return (
      <div className='object'>
            <img 
                src={"./img/"+ this.props.object.img} 
                alt={this.props.object.title}
                onClick={() => this.props.onShowObject(this.props.object)}
            />
            <h2>{this.props.object.title}</h2>
            <p>{this.props.object.desc}</p>
            <b>{this.props.object.price}</b>
            <div className='add-to-cart' onClick={()=>this.props.onAdd(this.props.object)}>+</div>       
      </div>
    )
  }
}

export default Object
