import { useEffect, useState } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import "./Header.css";
import disease from "../../apis/disease";

const Header = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await disease.get("/covid-19/countries");
      const countriesData = response.data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }));
      setCountries(countriesData);
    };
    fetchCountries();
  }, []);

  // Handle the select on change
  const selectChangeHandler = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div class="header">
      <h1>Covid 19 tracker</h1>

      <FormControl className="header__dropdown">
        <Select
          variant="outlined"
          value={country}
          onChange={selectChangeHandler}
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {/* render a list of countries */}
          {countries.map((country) => (
            <MenuItem value={country.value}>{country.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Header;
