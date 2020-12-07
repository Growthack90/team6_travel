import React, { useState, useContext } from "react";
import App from "../App";
import { BrowserRouter as Router,Switch,Route, Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import AuthApi from './AuthApi'
import Cookies from 'js-cookie'

function Routing() {
  const [auth,setAuth]=useState(false)

  const readCookie=()=>{
    const user = Cookies.get("user");
    if(user){
        setAuth(true);
      }
    }
  React.useEffect(() => {
    readCookie();
      }, [])

  return (
    <> 
    <AuthApi.Provider value={{auth,setAuth}}>
      <Router>
          <Routes />
      </Router>
    </AuthApi.Provider>  
    </>
    // <>
    //   <Router>
    //     <Redirect to="/home" />
    //     <Route exact path="/home">
    //       <App />
    //     </Route>
    //   </Router>
    // </>
  );
}
const Login=()=>{
  const Auth=useContext(AuthApi)
  const [ error , setError ] = useState("")
  const userAdmin={user:'team6',psw:'123456'}
  const handleOnClick=(params)=>{
    if(params.username === userAdmin.user && params.password === userAdmin.psw){
      console.log("params.username",params.username)
      console.log("params.pass",params.username)
      Auth.setAuth(true);}
    else{setError("E-mail o password errata")}
    Cookies.set("user","loginTrue")
  }
  return(
    <>
    <LoginForm Login={handleOnClick} Error={error} />
    </>
  )

}

const Home =()=>{
  const Auth = React.useContext(AuthApi)
  const handleOnClick = () =>{
      Auth.setAuth(false);
      Cookies.remove("user");
  }
  return(
    <>
    <div className ="topbar">
          <h2 className="welcome">Benvenuto</h2>
          <button onClick={handleOnClick} style={{backgroundColor:'#FFB700',height:40,borderRadius:"10%"}} className="logout btn btn-primary">Logout</button>
    </div>
    <App />
    </>
  )
}

const Routes=() =>{
  const Auth=useContext(AuthApi)
  return(
    <Switch>
      <ProtectedLogin path="/login"  auth={Auth.auth} component={Login} />
      <ProtectedRoute path='/home' auth={Auth.auth} component={Home} />
      <Route path="/"><Redirect to="/login" /></Route>
    </Switch>

  )
}
const ProtectedRoute =({auth,component:Component,...rest})=>{
  return(
    <Route 
    {...rest}
    render = {()=> auth? (
      <Component />
    ):
    (
      <Redirect to="/login" />
    )
    }
    />

  )
}
const ProtectedLogin =({auth,component:Component,...rest})=>{
  return(
    <Route 
    {...rest}
    render = {()=> !auth? (
      <Component />
    ):
    (
      <Redirect to="/home" />
    )
    }
    />

  )
}
export default Routing;
