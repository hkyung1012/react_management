import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root:{
        width : '100%',
        marginTop:theme.spacing.unit * 3,
        overflowX :"auto"
    },
    table:{
        minWidth : 1080
    }
})
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

  //변경될 수 있는 값
  state = {
    customers: ""
  }

  componentDidMount(){
    this.callApi().then(res => this.setState({customers: res}))
    .catch(err => console.log(err);)
  }

  callApi = async() => {
    const response = await fetch('api/customers');
    const body = await response.json();
    return body;
  }
  
  render(){
      const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>번호</TableCell>
                    <TableCell>이미지</TableCell>
                    <TableCell>이름</TableCell>
                    <TableCell>생년월일</TableCell>
                    <TableCell>나이</TableCell>
                    <TableCell>위치</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {customers.map(c => {return (<Customer key={c.key} id={c.id} name={c.name} age={c.age} birthday={c.birthday}  location={c.location} img={c.img}/>);})};
            </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
