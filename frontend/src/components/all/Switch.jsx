import * as React from 'react';
import {FormGroup, FormControlLabel, Switch} from '@mui/material'

export default function SwitchLabels(props) {
  const [state, setState] = React.useState({
    sales: props.sales
  })
  const handleChange = (event) => {
    setState({
      ...state,
      sales: event.target.checked,
    });
    props.onChange();
  };
  return (
    <FormGroup>
      <FormControlLabel 
        control={
          <Switch 
            checked={state.sales}
            onChange={handleChange}
          />
        } 
        label="판매등록" 
      />
    </FormGroup>
  );
}