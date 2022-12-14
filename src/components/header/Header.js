import { useEffect } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getCountryInfo } from "../../store/reducers/diseases";

const Header = () => {
  // States
  const { countries, countryInfo, diseaseName } = useSelector(
    (state) => state.disease
  );
  const dispatch = useDispatch();

  // Fecth all countries
  useEffect(() => {
    const fetchCountries = async () => {
      await dispatch(getCountries(diseaseName)).unwrap();
    };
    fetchCountries();
  }, []);

  // Fecth worldwide cases
  useEffect(() => {
    const fecthWorldwide = async () =>
      await dispatch(getCountryInfo({ diseaseName, countryCode: "all" }));
    fecthWorldwide();
  }, []);

  // Handle the select on change
  const selectChangeHandler = async (e) => {
    const countryCode = e.target.value;
    const url = countryCode === "all" ? "all" : `countries/${countryCode}`;
    console.log(url);
    await dispatch(getCountryInfo({ diseaseName, countryCode: url }));
  };

  return (
    <div className="header">
      <h1>Disease Tracker</h1>

      <FormControl className="header__dropdown">
        <Select
          variant="outlined"
          value={countryInfo?.countryInfo?.iso2 || "all"}
          onChange={selectChangeHandler}
        >
          <MenuItem value="all">Worldwide</MenuItem>
          {/* render a list of countries */}
          {countries.map((country) => (
            <MenuItem value={country.countryInfo.iso2} key={country.country}>
              {country.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Header;
