import { useSelector } from "react-redux";
import { sortData } from "../../utils/utils";
import "./Table.css";

const Table = () => {
  const { countries } = useSelector((state) => state.disease);
  const sortedCountries = sortData(countries);
  return (
    <div className="table">
      <table>
        <tbody>
          {sortedCountries.map(({ country, cases }) => {
            return (
              <tr key={country}>
                <td>{country}</td>
                <td>
                  <strong>{cases}</strong>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
