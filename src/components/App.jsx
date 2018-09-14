import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegForm from './KegForm';
import KegList from './KegList';
import EditKeg from './EditKeg';
import Home from './Home';
import Error404 from './Error404';
import { v4 } from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          name: 'Spicy Orange Dream',
          brand: 'Bud Night',
          price: 11,
          alcoholContent: 2,
          pintsLeft: 98,
          id: v4()

        },
        {
          name: 'Caramel Banana Surprise',
          brand: 'Willer Lite',
          price: 5,
          alcoholContent: 2,
          pintsLeft: 23,
          id: v4()
        },
        {
          name: 'Monster Grapefruit',
          brand: 'Tres Equis',
          price: 33,
          alcoholContent: 2,
          pintsLeft: 111,
          id: v4()
        },
        {
          name: 'Graveyard Sunshine',
          brand: 'Doors Lite',
          price: 4,
          alcoholContent: 2,
          pintsLeft: 24,
          id: v4()
        },
        {
          name: 'Organic Seaweed',
          brand: 'Green Moon',
          price: 3,
          alcoholContent: 2,
          pintsLeft: 46,
          id: v4()
        },
        {
          name: 'Crazy Frog',
          brand: 'Sudweiser',
          price: 1,
          alcoholContent: 2,
          pintsLeft: 50,
          id: v4()
        }
      ]
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleSellingPints = this.handleSellingPints.bind(this);
  }
  handleAddingNewKegToList(newKeg){
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    console.log(newMasterKegList);
    this.setState({masterKegList: newMasterKegList});
  }
  handleSellingPints(id){
    let newMasterKegList = this.state.masterKegList.slice();
    for(let i = 0; i < newMasterKegList.length; i++){
      if(newMasterKegList[i].id === id){
        if(newMasterKegList[i].pintsLeft > 0){
          newMasterKegList[i].pintsLeft--;          
        }
      }
    }
    this.setState({masterKegList: newMasterKegList});
  }
  render(){
    return(
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/newkeg' render={()=><KegForm onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/kegs' render={()=><KegList kegList={this.state.masterKegList} onSellingPints={this.handleSellingPints} />} />
          <Route path='/editkeg' component={EditKeg} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
