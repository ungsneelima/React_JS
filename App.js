import React from  "react";
import { createRoot } from "react-dom/client"
import ReactDOM from "react-dom"

var hOneReact = React.createElement("h1", {}, "HEADING CREATED using React");
var htmlRoot = document.getElementById("root");
var rootReact = createRoot(htmlRoot);
rootReact.render(hOneReact);

const App = function (){
    return(<>
    <Header />
    <Body/>
    <Footer />
    </>)
}
export default App;