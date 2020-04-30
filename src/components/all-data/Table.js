import React from 'react';
import { useTable } from 'react-table';

const Table = () => {
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
				Header: 'Active',
				accessor: 'col3',
				width: 500,
			},
			{
				Header: 'Recovered',
				accessor: 'col4',
				width: 500,
			},
			{
				Header: 'Deaths',
				accessor: 'col5',
				width: 500,
			},
		],
		[]
	);
	const data = React.useMemo(
		() => [
			{
				col1: 'United States',
				col2: '10,000,000',
				col3: '3,000,000',
				col4: '1,000',
				col5: '3,000',
			},
			{
				col1: 'react-table',
				col2: 'rocks',
			},
			{
				col1: 'whatever',
				col2: 'you want',
			},
			{
				col1: 'whatever',
				col2: 'you want',
			},
			{
				col1: 'whatever',
				col2: 'you want',
			},
			{
				col1: 'whatever',
				col2: 'you want',
			},
			{
				col1: 'whatever',
				col2: 'you want',
			},
			{
				col1: 'whatever',
				col2: 'you want',
			},
		],
		[]
	);
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data });

	return (
		<div className='table-container'>
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
