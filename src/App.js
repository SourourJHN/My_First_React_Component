import React from 'react';
import './App.css';
/*import {FacebookLoginButton} from 'React-social-login-buttons';*/
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <div className="App">
     <ProfilePhoto/>
     <FullName/>
     <Address/>
    
    </div>
  );
}

export default App;
