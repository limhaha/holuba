import * as React from 'react';
import {Box, Tab} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab';

import SelectTextFields from './Select';
import InputAdornments from './PriceInput';

export default function LabTabs(props) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [price, setPrice] = React.useState(props.price)

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="SELL" value="1" />
            <Tab label="AUCTION" value="2" disabled/>
          </TabList>
        </Box>
        <TabPanel value="1">
          {/* <SelectTextFields
            price={price}
            onChange={(data)=>{
              setPrice(data);
              props.onChange(data)
            }}
          /> */}
          <InputAdornments
            price={price}
            onChange={(data)=>{
              setPrice(data);
              props.onChange(data)
            }}
          />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
}