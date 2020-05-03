import React, { useContext, useEffect } from 'react';
import { useTable } from 'react-table';

import CountryContext from '../../context/country/countryContext';

const Table = () => {
  const countryContext = useContext(CountryContext);
  const { countries } = countryContext;
  const tableData = [];
  countries.forEach((country) => {
    if (
      country.country !== 'North-America' &&
      country.country !== 'South-America' &&
      country.country !== 'Europe' &&
      country.country !== 'Asia' &&
      country.country !== 'Africa' &&
      country.country !== 'Diamond-Princess-' &&
      country.country !== 'MS-Zaandam-'
    ) {
      tableData.push({
        col1: country.country,
        col2: country.cases.total.toLocaleString(),
        col3: country.cases.new
          ? parseInt(country.cases.new).toLocaleString()
          : '',
        col4: country.deaths.new
          ? parseInt(country.deaths.new).toLocaleString()
          : '',
        col5: country.cases.active.toLocaleString(),
        col6: country.cases.recovered.toLocaleString(),
        col7: country.deaths.total.toLocaleString(),
      });
    }
  });

  const columns = React.useMemo(
    () => [
      {
        Header: 'Country',
        accessor: 'col1', // accessor is the "key" in the data
        width: 500,
      },
      {
        Header: 'Confirmed',
        accessor: 'col2',
        width: 500,
      },
      {
        Header: 'New Cases',
        accessor: 'col3',
        width: 500,
      },
      {
        Header: 'New Deaths',
        accessor: 'col4',
        width: 500,
      },
      {
        Header: 'Active',
        accessor: 'col5',
        width: 500,
      },
      {
        Header: 'Recovered',
        accessor: 'col6',
        width: 500,
      },
      {
        Header: 'Deaths',
        accessor: 'col7',
        width: 500,
      },
    ],
    []
  );
  const data = React.useMemo(() => [...tableData], []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
