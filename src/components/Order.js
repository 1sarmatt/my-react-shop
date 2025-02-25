import React, { Component } from 'react'
import { FaTrash} from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='object'>
         <img src={"./img/"+ this.props.object.img}></img>
            <h2>{this.props.object.title}</h2>
            <p>{this.props.object.desc}</p>
            <b>{this.props.object.price}</b>
            <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.object.id)}/>
      </div>
    )
  }
}

export default Order
