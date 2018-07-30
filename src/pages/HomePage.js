import React, { Component } from 'react';
// import { Table } from 'react-bootstrap';
// import { connect } from 'react-redux'
// import Users from '../actions/users';

class HomePage extends Component 
{
    componentWillMount()
    {
        // this.props.getUsers()
    }

    render() 
    {
        return(
            <div>
              <h1>df</h1>
            </div>
        );
    }
}

// const mapDispatchToProps = 
// {
//     getUsers: ()=>Users.get()
// }

// const mapStateToProps = (store) => 
// ({
//     users: store.usersStore.users,
// });

// export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
export default HomePage;