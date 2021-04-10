
export const COLUMNS = [
    {
        Header: 'Name of Internship',
        accessor: 'internship_name',
    },
    {
        Header: 'URL',
        accessor: 'internship_url',
        Cell: e=><a href={e.value} target="_blank"> {e.value}</a>
    },
   
    
]