import * as React from "react";
import "../styles/Countries.css";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Country from "./Country";

type CountryType = {
    name: string,
    capital: string,
    alpha3Code: string
}

function Countries() {
    const [countries, getCountries] = React.useState([]);
    if(!countries.length)
    axios.get("https://restcountries.com/v2/all").then(got => {
        getCountries(got.data);
    }); 
    return ( 
            <Table striped bordered hover className={"countries"}>
                <thead><tr><th>Name</th><th>Capital</th><th>Buttons</th></tr></thead>
                <tbody>
                    {countries.map((country : CountryType) => country.capital ? <Country key={country.alpha3Code} name={country.name} capital={country.capital}/> :
                    <Country key={country.alpha3Code} name={country.name}/>
                    )
                    }
                </tbody>
            </Table>
        );
    };


export default Countries;