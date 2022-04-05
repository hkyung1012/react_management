import React from 'react';

class Customer extends React.Component { 
    render(){ //화면에 그리고자 하는 
        const customer = this.props;
        return(
            <div>
                <CustomerProfile image={customer.img} name={customer.name} id={customer.id}/>
                <CustomerInfo  age={customer.age} birthday={customer.birthday} location={customer.location}/>
            </div>
        )
    }
}

class CustomerProfile extends React.Component{
    render(){
        const profile = this.props;
        return(
            <div>
                <img src={profile.img} alt="profile"/>
                <h2>{profile.name}({profile.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render() {
        const info = this.props;
        return (
            <div>
                <p>{info.age}</p>
                <p>{info.birthday}</p>
                <p>{info.location}</p>
            </div>               
        )
    }
}

export default Customer;
