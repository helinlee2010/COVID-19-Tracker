import React, { useState, useEffect } from "react";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";
import { NativeSelect, FormControl } from "@material-ui/core";

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchAPICountries() {
      setCountries(await fetchCountries());
    }

    fetchAPICountries();
    console.log(handleCountryChange);
  }, [setCountries]); //why this?

  return (
    <FormControl className={styles.formControl}>
      <h4>Choose A Country</h4>
      <NativeSelect
        defaultValue=""
        onChange={e => handleCountryChange(e.target.value)}
      >
        <option className={styles.option} value="">
          Global
        </option>
        {countries.map((country, i) => (
          <option className={styles.option} key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
