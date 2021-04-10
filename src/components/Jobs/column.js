
export const COLUMNS = [
    {
        Header: 'Position',
        accessor: 'job_name',
    },
    {
        Header: 'URL',
        accessor: 'job_url',
        Cell: e=><a href={e.value} target="_blank"> {e.value}</a>
    },
    {
        Header: 'Company Name',
        accessor: 'company_name',
    }
    
]