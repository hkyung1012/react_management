import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component { 
    render(){ //화면에 그리고자 하는 
        const customer = this.props;
        return(
            <TableRow>
                <TableCell>{customer.id}</TableCell>
                <TableCell><img src={customer.img} alt="profile"></img></TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.birthday}</TableCell>
                <TableCell>{customer.age}</TableCell>
                <TableCell>{customer.location}</TableCell>
            </TableRow>
        )
    }
}

export default Customer;
