import React, { useContext, useState, useEffect } from 'react';
import CountryContext from '../../context/country/countryContext';

const Table = () => {
	const countryContext = useContext(CountryContext);
	const { countries, filtered } = countryContext;
	const [tableData, setTableData] = useState([]);

	return (
		<div className='table-container'>
			<table>
				<thead>
					<th>Country</th>
					<th>Confirmed</th>
					<th>New Cases</th>
					<th>New Deaths</th>
					<th>Active</th>
					<th>Recovered</th>
					<th>Deaths</th>
				</thead>
				<tbody>
					{!filtered
						? countries.map((value) => {
								if (
									value.country !== 'North America' &&
									value.country !== 'South America' &&
									value.country !== 'Europe' &&
									value.country !== 'Asia' &&
									value.country !== 'Africa' &&
									value.country !== 'Diamond-Princess-' &&
									value.country !== 'MS-Zaandam-'
								) {
									return (
										<tr>
											<td>{value.country}</td>
											<td>{value.cases.total.toLocaleString()}</td>
											<td>
												{value.cases.new
													? `+${parseInt(value.cases.new).toLocaleString()}`
													: ''}
											</td>
											<td>
												{value.deaths.new
													? `+${parseInt(value.deaths.new).toLocaleString()}`
													: ''}
											</td>
											<td>{value.cases.active.toLocaleString()}</td>
											<td>{value.cases.recovered.toLocaleString()}</td>
											<td>{value.cases.total.toLocaleString()}</td>
										</tr>
									);
								}
						  })
						: filtered.map((value) => {
								if (
									value.country !== 'North America' &&
									value.country !== 'South America' &&
									value.country !== 'Europe' &&
									value.country !== 'Asia' &&
									value.country !== 'Africa' &&
									value.country !== 'Diamond-Princess-' &&
									value.country !== 'MS-Zaandam-'
								) {
									return (
										<tr>
											<td>{value.country}</td>
											<td>{value.cases.total.toLocaleString()}</td>
											<td>
												{value.cases.new
													? `+${parseInt(value.cases.new).toLocaleString()}`
													: ''}
											</td>
											<td>
												{value.deaths.new
													? `+${parseInt(value.deaths.new).toLocaleString()}`
													: ''}
											</td>
											<td>{value.cases.active.toLocaleString()}</td>
											<td>{value.cases.recovered.toLocaleString()}</td>
											<td>{value.cases.total.toLocaleString()}</td>
										</tr>
									);
								}
						  })}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
