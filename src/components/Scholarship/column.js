
export const COLUMNS = [
    {
        Header: 'Name of Scheme',
   accessor: 'scholarship_name',
    },
    {
        Header: 'URL',
        accessor: 'scholarship_url',
        Cell: e=><a href={e.value} target="_blank"> {e.value}</a>
    },
    
   
    {
        Header: 'Starting date',
        accessor: 'scholarship_Starting_date',
    },
    {
        Header: 'Deadline',
        accessor: 'scholarship_last_data',
    }
    
]