import * as React from 'react';
import Alert from 'react-bootstrap/Alert';

function Alerts(props) {
    return (
        <>
                <Alert variant={"danger"}>
                    { props.children }
                </Alert>
        </>
    );
};

export default Alerts;