import {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { changeStatus } from 'state/filterSlice';
const ToggleButtons = ()=>{

    const dispatch = useDispatch();
    const [status, setStatus] = useState(0);
    const handleAlignment = (event, newStatus) => {
        setStatus(newStatus);
        dispatch(changeStatus(newStatus))
    };

    return (
        <ToggleButtonGroup
            value={status}
            exclusive
            onChange={handleAlignment}
            color="primary"
            css={css`
                width: 100%;
            `}
        >
            <ToggleButton value="">ALL</ToggleButton>
            <ToggleButton value="0">Not for sale</ToggleButton>
            <ToggleButton value="1">Buy Now</ToggleButton>
        </ToggleButtonGroup>
    );
}


export default ToggleButtons;