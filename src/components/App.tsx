import * as React from "react";
import "../styles/App.css";
import Countries from "./Countries";
import Alerts from "./Alerts";

class App extends React.Component {
    render() {
        let AlertText = <b>Some text for alert!</b>
        return (<div>
            <h1>Hello World</h1>
            <Alerts> { AlertText } </Alerts>
            <Countries />
        </div>
        );
    }
}

export default App;