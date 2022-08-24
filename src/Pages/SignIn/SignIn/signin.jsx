import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signIn } from "../../../Services/userService";

import './signin.css'

function SignIn() {

  const emailRegex =
    /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
  const [siginObj, setSigninObj] = useState({ email: "", password: "" });
  const [regexObj, setRegExObj] = useState({
    emailBorder: false,
    passwordBorder: false,
    emailHelper: "",
    passwordHelper: "",
  });
  const takeEmail = (event) => {
    setSigninObj((prevState) => 
    (
      { ...prevState, email: event.target.value }
      ));
  };
  const takePass = (event) => {
    setSigninObj((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };
  const submit = () => {
    let emailTest = emailRegex.test(siginObj.email);
    let passwordTest = passwordRegex.test(siginObj.password);

    if (emailTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "enter correct email",
      }));
    } else if (emailTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        emailBorder: false,
        emailHelper: "",
      }));
    }

    if (passwordTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "enter correct p",
      }));
    } else if (emailTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        passwordBorder: false,
        passwordHelper: "",
      }));
    }
  

if(emailTest===true && passwordTest===true)
console.log(emailTest + " "+ passwordTest)
signIn(siginObj).then((response) => {console.log(response);localStorage.setItem("Token", response.data.data)}).catch((error) => {console.log(error)})
}  
return (
    <div className="container">
      <div className="form-container">
        <div>
          <div className="form-header">
            <img id="logo" src="https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_share.jpg" alt="google" ></img>
            <h2>Sign In</h2>
            <h4 >Use Your Google Account</h4>
          </div>
          <div className="form">
            <div className="first"> 
              {" "}
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
                onChange={takeEmail}
                error={regexObj.emailBorder}
                helperText={regexObj.emailHelper}
              />
</div>
<div className="second">
           
              <TextField id="outlined-basic" label="Password" variant="outlined" size="small" onChange={takePass}
                error={regexObj.passwordBorder}
                helperText={regexObj.passwordHelper} />
</div>
</div>
            {/* <input type="text" id="email" class="form-control-placeholder" value="Email or phone" ></input> */}
            {/* <input type="text" id="password" class="form-control-placeholder" value="Password" ></input> */}

          {/* </div> */}
          <div className="form-link">
            <label><a href="#">Forgot Email?</a></label>

          </div>
          <br />
          <br />
          <div className="form-link1">
            <label>Not your computer? Use Guest mode to sign in privately.</label>
            <label><a href="#" >Learn More</a></label>
          </div>
          <br />
          <br />
          <div className="form-link">
            <label><a href="#">Create Account</a></label>
            <Button variant="contained" onClick={submit}>Next</Button>
          </div>
        </div>



      </div>

    </div>

  )
}
export default SignIn