import * as React from "react";
import Header from "./Header";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
    render() {
        return (<>
            <Header/>
            <App/>
        </>
        );
    }
};

export default Main;