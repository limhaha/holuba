import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import SwipeableViews from 'react-swipeable-views';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

export default function SalesRegist() {
  
  const tokenData = require('samplejson/SalesRegistPage.json');
  // const [tokenData, settokenData] = require('./../samplejson/SalesRegistPage.json');
  // const handleChange = (event) => {
  //   settokenData({
  //     [event.target.name]: event.target.chekced,
  //     // 스위치(판매 여부 선택)눌리는 경우
  //     // sales가 True로 바뀌면 price = 0으로 초기 설정
  //     // sales가 False로 바뀌면 price = None으로 설정

  //     // save버튼이 눌리는 경우 데이터를 수정함
  //   });
  // };

  return (
    <Container fixed>
      <Grid container>
        <Grid item xs={5}>
          <img 
            src={ tokenData.tokenImg }
            alt=""
            width="100%"
          />
        </Grid>
        <Grid item xs={5} style={{ margin: '1em' }}>
          { tokenData.owner }
          <br />
          <h3>{ tokenData.tokenName }</h3>
          <FormControlLabel
            control={
              <Switch checked={tokenData.sales} />
            }
            label="test"
          />

          <AppBar position="static" color="default">
            <Tabs
              value={0}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="action tabs example"
            >
              <Tab label="SELL" />
              <Tab label="Auction"  />
            </Tabs>
          </AppBar>
          {/* <SwipeableViews
            index={0}
          >
            <TabPanel value={0} index={0} dir={1111111}>
              Item One
            </TabPanel>
            <TabPanel value={1} index={1} dir={2222222}>
              Item Two
            </TabPanel>
            <TabPanel value={2} index={2} dir={333333}>
              Item Three
            </TabPanel>
          </SwipeableViews> */}
        </Grid>
      </Grid>
    </Container>
  )
}