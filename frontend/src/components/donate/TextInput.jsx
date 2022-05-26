import * as React from 'react';
import { Box, Input, InputLabel, InputAdornment, FormControl, Button } from '@mui/material';
import { EthereumIcon } from '../Icons'

export default function InputAdornments(props) {
  const [values, setValues] = React.useState({
    amount: props.values.price,
    title: props.values.title,
    desc: props.values.desc
  });

  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value
    });
    // props.onChange(event.target.value);
    // props.onChange(values);
  };


  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-title">Title</InputLabel>
        <Input
          id="standard-adornment-title"
          placeholder='제목을 입력해 주세요'
          onChange={handleChange('title')}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-desc">desc</InputLabel>
        <Input
          id="standard-adornment-desc"
          placeholder='전달할 메시지'
          onChange={handleChange('desc')}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={values.amount}
          onChange={handleChange('amount')}
          // value={values.amount}
          // onChange={onChange}
          startAdornment={<InputAdornment position="start"><EthereumIcon /></InputAdornment>}
        />
        <p style={{ fontSize: "1px", marginLeft: "8em" }}>minETH : 0.0026ETH</p>
      </FormControl>
      <Button
        variant="contained"
        onClick={() =>{
          props.onClick(values)
        }}
      >구매하기</Button>
    </Box>
  );
}