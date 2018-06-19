import LocalizedStrings from 'react-localization';
 
let strings = new LocalizedStrings({
 en:{
   title: "This is a Title",
   content:"How do you want your egg today?",
   link: "Click Here"
 },
 it: {
   title: "Sio mio Titelo",
   content:"Come vuoi il tuo uovo oggi?",
   link: "clickedi con pasta"
 },
 de: {
   title: "Das ist mein Titel",
   content:"Wie mögen Sie Ihre Eier heute?",
   link: "Klicken Sie hier"
 }
});

export default strings;