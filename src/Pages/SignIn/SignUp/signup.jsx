import React from "react";
import './signup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signUp } from "../../../Services/userService";
function SignUp() {
  const firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
  const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
  const emailRegex =
    /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/; const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

  const [sigupObj, setSignupObj] = React.useState({ firstName: " ", lastName: " ", email: " ", password: " " });
  const [regexObj, setRegExObj] = React.useState({
    firstnameBorder: false,
    lastnameBorder: false,
    usernameBorder: false,
    passwordBorder: false,
    confirmBorder: false,

    firstnameHelper: "",
    lastnameHelper: "",
    usernameHelper: "",
    passwordHelper: "",
    confirmHelper: ""
  });
  const takeFirstname = (event) => {
    setSignupObj((prevState) => ({ ...prevState, firstName: event.target.value }));
  };
  const takeLastname = (event) => {
    setSignupObj((prevState) => ({ ...prevState, lastName: event.target.value }));
  }; const takeUsername = (event) => {
    setSignupObj((prevState) => ({ ...prevState, email: event.target.value }));
  }; const takePassword = (event) => {
    setSignupObj((prevState) => ({ ...prevState, password: event.target.value }));
  };
  const takeConfirm = (event) => {
    setSignupObj((prevState) => ({ ...prevState, confirm: event.target.value }));
  };
  const submit = () => {
    let firstnameTest = firstNameRegex.test(sigupObj.firstname);
    let lastnameTest = lastNameRegex.test(sigupObj.lastname);
    let usernameTest = emailRegex.test(sigupObj.email);
    let passwordTest = passwordRegex.test(sigupObj.password);
    let confirmTest = passwordRegex.test(sigupObj.confirm);


    if (firstnameTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        firstnameBorder: true,
        firstnameHelper: "enter correct name",
      }));
    } else if (firstnameTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        firstnameBorder: false,
        firstnameHelper: "",
      }));
    }


    if (lastnameTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        lastnameBorder: true,
        lastnameHelper: "enter correct name",
      }));
    } else if (lastnameTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        lastnameBorder: false,
        lastnameHelper: "",
      }));
    }

    if (usernameTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        usernameBorder: true,
        usernameHelper: "enter correct name",
      }));
    } else if (usernameTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        usernameBorder: false,
        usernameHelper: "",
      }));
    }


    if (passwordTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "enter correct p",
      }));
    } else if (passwordTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        passwordBorder: false,
        passwordHelper: "",
      }));
    }
    if (confirmTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        confirmBorder: true,
        confirmHelper: "enter correct name",
      }));
    } else if (confirmTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        confirmBorder: false,
        confirmHelper: "",
      })
      );
    }
    if (firstnameTest === true && lastnameTest === true && usernameTest === true && passwordTest === true)
      console.log(firstnameTest + " " + lastnameTest + usernameTest + passwordTest)
    signUp(sigupObj).then((response) => { console.log(response) }).catch((error) => { console.log(error) })
  }


  return (
    <div className="main">

      <div className="header">

      </div>

      <div className="content">

        <div className="left">
          <div className="image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" width="75"></img>
          </div>

          <div className="create-account">
            Create your Google Account
          </div>

          <div className="name">
            <div className="one">
              <TextField id="outlined-basic" label="First name" variant="outlined" size="small" onChange={takeFirstname}
                error={regexObj.firstnameBorder}
                helperText={regexObj.firstnameHelper} />
            </div>
            <div className="two">

              <TextField id="outlined-basic" label="Last name" variant="outlined" size="small" onChange={takeLastname}
                error={regexObj.lastnameBorder}
                helperText={regexObj.lastnameHelper} />
            </div>

          </div>

          <div className="username">
            <TextField id="outlined-basic" label="Username" variant="outlined" onChange={takeUsername}
              error={regexObj.usernameBorder}
              helperText={regexObj.usernameHelper} size="small" />
          </div>

          <div className="username-line">
            You can use letters, numbers & periods
          </div>

          <div className="use-current-email">
            <a href="#">
              Use my current email address instead
            </a>
          </div>

          <div className="password">
            <TextField id="outlined-basic" label="Password" variant="outlined" size="small" onChange={takePassword}
              error={regexObj.passwordBorder}
              helperText={regexObj.passwordHelper} />
            {/* <TextField  id="outlined-basic" label="Confirm Password" variant="outlined" size="small"  onChange={takeConfirm}
        error={regexObj.confirmBorder}
        helperText={regexObj.confirmHelper}/> */}
          </div>

          <div className="password-line">
            Use 8 or more characters with a mix of letters, numbers  &  symbols
          </div>

          <div className="content-footer">
            <div className="sign-in">
              <a href="#">
                Sign in instead
              </a>
            </div>
            <Button variant="contained" size="small" onClick={submit}>Next</Button>

          </div>

        </div>

        <div className="right">
          <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="signup" width="244" height="244"></img>

          <div className="image-line">
            One account. All of Google working for you
          </div>
        </div>

      </div>

      <div className="footer">
        <div className="languages">
          English (United Kingdom)
        </div>

        <div className="links">
          <a href="#">Help</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>

    </div>
  )

}
export default SignUp