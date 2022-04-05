import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer_';

const customers = [
  {
    id:1,
    name : 'leehyunkyung',
    age : 30,
    birthday : '931012',
    location : 'office',
    img: 'https://placeimg.com/64/64/any'
  },
  {
    id:2,
    name : 'leehyunkyung2',
    age : 31,
    birthday : '931012',
    location : 'office1',
    img: 'https://placeimg.com/64/64/1'
  },
  {
    id:3,
    name : 'leehyunkyung3',
    age : 32,
    birthday : '931012',
    location : 'office2',
    img: 'https://placeimg.com/64/64/2'
  }
]
class App extends Component{
  render(){
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.key}
                id={c.id}
                name={c.name}
                age={c.age}
                birthday={c.birthday}
                location={c.location}
                img={c.img}/>
            );
          })
        }
      </div>
    )
  }
}

export default App;
