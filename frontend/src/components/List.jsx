import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Item from "components/Item"
import { useNavigate } from "react-router-dom";
const List = ({items, page})=>{
    const navigate = useNavigate(); 
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {items.map((item, index) => (
                <Grid item xs={2} sm={4} md={3} key={index} onClick={(e)=>navigate(`/${page}/${item.asset_id}`)}>
                    <Item item={item}/>
                </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default List;
