import LocalizedStrings from 'react-localization';
 
let strings = new LocalizedStrings({
 en:{
   title: "Password Resotre",
   content:"Please enter your email.",
   email: "Email",
   restore_button: "Reset Password"
 },
 de: {
    title: "Passwort Wiederherstellen",
    content:"Bitte geben Sie ihre E-Mail ein.",
    email: "Email",
    restore_button: "Passwort zurücksetzen"
 }
});

export default strings;