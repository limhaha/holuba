import * as React from 'react';
import {Box, TextField, MenuItem} from '@mui/material'

import InputAdornments from './PriceInput';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'KOR',
    label: '원(원 기호가 백슬래시로 나옴;;',
  },
  {
    value: 'BTC',
    label: '฿(비트코인 단위)',
  },
  {
    value: 'ETM',
    label: '이더리움은 기호가 뭔지 모르겠음',
  },
];

export default function SelectTextFields(props) {
  const [currency, setCurrency] = React.useState('ETM');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const [price, setPrice] = React.useState(props.price)
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <InputAdornments 
        price={price}
        onChange={(data)=>{
          setPrice(data);
          props.onChange(data);
        }}
      />
    </Box>
  );
}