import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import FirstScreen from './components/FirstScreen';
import LoginForm from './components/LoginForm';
import signupSuccessGreetings from './components/signupSuccessGreetings';
import SignUp from './components/SignUp';
import Home from './components/Home';
import AddressForm from './components/AddressForm';
import Menu from './components/Menu';
import titleForm from './components/titleForm';

const RouterComponent = () => {
    return (
      <Router>
        <Scene key="root" hideNavBar>

            <Scene key="auth">
              <Scene key="first" component={FirstScreen} title="login" hideNavBar initial />
              <Scene key="login" component={LoginForm} title="LoginForm" hideNavBar />
              <Scene key="signupSuccessGreetings" component={signupSuccessGreetings} title="Signup success" />
              <Scene key="signup" component={SignUp} title="SignUp" navigationBarStyle={{ backgroundColor: '#5DBCD2' }} titleStyle={{ textAlign: 'center', color: '#ffffff' }} />

            </Scene>
            <Scene key="drawer" drawer drawerWidth={230} contentComponent={Menu} drawerPosition="left" drawerLabel="hi" >
              <Scene key="home" component={Home} title="Welcome" initial titleStyle={{ textAlign: 'center', flex: 1, color: '#fff' }} initial navigationBarStyle={{ backgroundColor: 'rgba(153,0,153,0.8)' }} />
              <Scene key="address" component={AddressForm} title="Enter your address details" navigationBarStyle={{ backgroundColor: 'rgba(187,187,187,0.8)' }} />
              <Scene key="titles" component={titleForm} title="Enter your title" />
            </Scene>
        </Scene>
      </Router>
    );
};

export default RouterComponent;
