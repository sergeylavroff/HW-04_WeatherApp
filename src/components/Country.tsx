import * as React from "react";
import Button from 'react-bootstrap/Button';
import "../styles/Country.css";
import * as PropTypes from "prop-types";

function Country({ name, capital }) {
    const [selected, changeSelected] = React.useState(false);

    return(
        <tr className={selected ? "country-selected": ""}>
            <td>{name}</td>
            <td>{capital}</td>
            <td>
                { !selected ? 
                <Button variant="success" onClick={() => changeSelected(true)}>Add</Button> :
                <Button variant="danger" onClick={() => changeSelected(false)}>Remove</Button>
                }
            </td>
        </tr>
    );
};

Country.defaultProps = {
    capital : "Not available"
};

Country.propTypes = {
    country: PropTypes.object
};

export default Country;