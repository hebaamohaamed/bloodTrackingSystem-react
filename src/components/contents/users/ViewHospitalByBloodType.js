import {useTable, useFilters} from 'react-table'
import Data from './ViewHospitalByBloodTypeData.json'
import {COLUMNS} from './ViewHospitalByBloodTypeColumn'
import { useMemo } from 'react'
import UserHeader from '../../headers/user'
import BTable from 'react-bootstrap/Table';



export const ViewHospitalByBloodType = () =>{
	
	const columns = useMemo(()=> COLUMNS, []);
	const data = useMemo(()=> Data, []);

	const tableInstance = useTable({
		columns,
		data,
		},
		useFilters
	)
	const {
		getTableProps, 
		getTableBodyProps, 
		headerGroups, 
		rows, 
		prepareRow 
	}=tableInstance
	return(
		<div>
			<UserHeader/>
	<main class="py-4 RetrieveAllBloodBags">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    Hospitals
                </div>
                <div class="card-body">
				<h6 style={{color:"darkorange", float:"left"}}><b>Note: you can search the blood from the dropdown bar</b></h6>          
		<BTable bordered hover size="sm" {...getTableProps()}   >
			<thead>
				{
					headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()} className="retrieveTr">
							{headerGroup.headers.map((column)=>(
									
									<th {...column.getHeaderProps()} className="retrieveTh">
										<div>{column.canFilter ? column.render('Filter') : null}</div>
										<br></br>
										{column.render('Header')}
										
									</th>
								))
							}
							
						</tr>
					))
				}
			</thead>
			<tbody {...getTableBodyProps()}>
				{
					rows.map(row=>{
						prepareRow(row)
						return(
							<tr {...row.getRowProps()} className="retrieveTr">
								{
									row.cells.map(cell => {
										return <td className="retrieveTd" {...cell.getCellProps()}>{cell.render('Cell')}</td>
									})
								}
							
							</tr>
						)
					})
				}
			</tbody>
		</BTable>
		</div>
            </div>    
            </div>
        </div>
    </div>    
</main>
</div>
	)

}
export default ViewHospitalByBloodType;
