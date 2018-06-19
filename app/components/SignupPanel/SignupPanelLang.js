import LocalizedStrings from 'react-localization';
 
let strings = new LocalizedStrings({
 en:{
   title: "Regsitrieren",
   content:"Please create a account for using this platform.",
   firstname: "Firstname",
   familyname: "Familyname",
   email: "Email",
   password: "Password",
   passwordre: "Password repetation",
   signup_button: "Signup"
 },
 de: {
   title: "Registrieren",
   content:"Bitte erstellen Sie einen Account um diese Platform zu nutzen.",
   firstname: "Vorname",
   familyname: "Name",
   email: "E-Mail",
   password: "Passwort",
   passwordre: "Passwort wiederhohlung",
   signup_button: "Registrieren"
 }
});

export default strings;