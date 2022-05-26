import { DataGrid } from '@mui/x-data-grid';

const ProfileActivityContainer = ({items})=>{
    console.log(items);
    const aaa = [
        {
            id:1,
            "assetId": 14,
            "price": "30",
            "from": "hongjunland",
            "to": "lasttest",
            "date": "2022-04-07T19:17:53.000Z",
            "assetName": "eqwewq"
        },
        {
            id:2,
            "assetId": 15,
            "price": "3000",
            "from": "hongjunland",
            "to": "lasttest",
            "date": "2022-04-07T19:33:41.000Z",
            "assetName": "사랑의 기부"
        }
    ];
    const columns = [
    { field: 'assetId', headerName: 'Id', width: 150 },
    { field: 'assetName', headerName: 'Item', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'from', headerName: 'From', width: 150 },
    { field: 'to', headerName: 'To', width: 150 },
    { field: 'date', headerName: 'Time', width: 150 },
    ];

    return(
        <div style={{display:'flex' ,justifyContent:'center'}}>
            <div style={{ height: 300, width: '50%'}}>
                <DataGrid rows={items} columns={columns} />
            </div>
        </div>
    );
}

export default ProfileActivityContainer;