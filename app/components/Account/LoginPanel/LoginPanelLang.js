import LocalizedStrings from 'react-localization';
 
let strings = new LocalizedStrings({
 en:{
   title: "Login",
   content:"Please enter your credentials.",
   email: "Email",
   password: "Password",
   login_button: "Signin"
 },
 de: {
   title: "Login",
   content:"Bitte geben Sie ihre Kontodaten ein.",
   email: "E-Mail",
   password: "Password",
   login_button: "Anmelden"
 }
});

export default strings;