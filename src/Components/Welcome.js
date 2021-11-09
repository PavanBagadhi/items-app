import React from 'react';
import { Link, Route } from 'react-router-dom';
import AddNewUser from './AddNewUser';

const Welcome = () => {
  return (
    <section>
      <h1>Welcome to home page</h1>
      <Link to='/welcome/add-new-user'>Add new User</Link>
      <Route path='/welcome/add-new-user' component={AddNewUser}/>
    </section>
  );
};

export default Welcome;



//nested routers are there above