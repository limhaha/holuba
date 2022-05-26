import * as React from 'react';
import {Box, Input, InputLabel, InputAdornment, FormControl} from '@mui/material';
import { EthereumIcon } from '../Icons'

export default function InputAdornments(props) {
  const [values, setValues] = React.useState({
    amount: props.price,
  });

  const handleChange = (prop) => (event) => {
    setValues({
       ...values,
       [prop]: event.target.value 
    });
    props.onChange(event.target.value);
  };
  // let price = 0.0026
  // const onChange = (event) =>{
  //   // this.props.editPrice(event.target.value)
  //   console.log(event.target.value)
  // }


  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={values.amount}
          onChange={handleChange('amount')}
          // value={values.amount}
          // onChange={onChange}
          startAdornment={<InputAdornment position="start"><EthereumIcon/></InputAdornment>}
        />
      </FormControl>
    </Box>
  );
}