import Footer from "./components/Footer";
import Header from "./components/header";
import React from 'react';
import Objects from './components/Objects'
import Categories from "./components/Categories";
import ShowFullObject from "./components/ShowFullObject";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      orders:[],
      currentObjects:[],
      objects:[
        {
          id:1,
          title: 'Дуэт BMW: M3 и M4',
          img: 'black-t-shirt.png',
          desc:'black',
          price:'2500 ₽',
          category:'t-shirt'
        },
        {
          id:2,
          title: 'Дуэт BMW: M3 и M4',
          img: 'white-t-shirt.png',
          desc:'white',
          price:'2500 ₽',
          category:'t-shirt'
        },
        {
          id:3,
          title: 'Худи M3',
          img: 'hoodie-black-m3.png',
          desc: 'Black',
          price:'3500 ₽',
          category:'hoodie'

        },
        {
          id:4,
          title: 'Худи Porsche',
          img: 'hoodie-white.png',
          desc: 'White',
          price:'3500 ₽',
          category:'hoodie'

        },
        {
          id:5,
          title: 'Худи M3',
          img: 'hoodie-white-m3.png',
          desc: 'White',
          price:'3500 ₽',
          category:'hoodie'

        },
        {
          id:6,
          title: 'Классика: ГАЗ-24 Волга',
          img: 'volga-grey.jpg',
          desc:'Nardo Grey',
          price:'2500 ₽',
          category:'t-shirt'
        },

      ],
      showFullObject:false,
      fullObject: {} 
    }
    this.state.currentObjects=this.state.objects
    this.addToOrder=this.addToOrder.bind(this)
    this.deleteOrder=this.deleteOrder.bind(this)
    this.chooseCategory=this.chooseCategory.bind(this)
    this.onShowObject=this.onShowObject.bind(this)
  }
   
  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Objects onShowObject={this.onShowObject} objects={this.state.currentObjects} onAdd={this.addToOrder}/>
        
        {this.state.showFullObject && <ShowFullObject onAdd={this.addToOrder} onShowObject={this.onShowObject} object={this.state.fullObject}/>}
        <Footer />
      </div>
    );
  }

  onShowObject(object){
    this.setState({fullObject: object})
    this.setState({showFullObject: !this.state.showFullObject})
  }

    chooseCategory(category){

      if(category==='all'){
        this.setState({currentObjects:this.state.objects})
        return
      }
      this.setState({
        currentObjects:this.state.objects.filter(el=> el.category ===category)
      })
    }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  addToOrder(object){
    this.setState({orders:[...this.state.orders,object]})
  }
}

export default App;
