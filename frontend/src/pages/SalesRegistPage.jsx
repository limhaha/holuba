import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {Grid, Container, Button} from '@mui/material'

import SwitchLabels from '../components/all/Switch'
import LabTabs from '../components/all/SmallTab'


export default function SalesRegist(props) {

  const [tokenData, setTokenData] = useState(require('./../samplejson/ItemDetailPage.json'))
  const [userData, setUserData] = useState(require('./../samplejson/sampleUser.json'))
  
  const params = useParams();
  useEffect(()=>{
    axios.get(`http://3.35.173.223:5050/nft/${params.itemId}`,{
      headers: {
        "accessToken": localStorage.getItem("accessToken")
      }
    }).then((res) => {
      setTokenData(res.data)
    }).then(() => {
      axios.get(`http://3.35.173.223:5050/user/profile/${tokenData.userId}`,{
        headers: {
          "accessToken": localStorage.getItem("accessToken")
        }
      }).then((res) => {
        setUserData(res.data)
      })
    })
  },[])

  let salesRegistbtn;
  if (Boolean(tokenData.marketStatus))
    salesRegistbtn = (
      <Button
        variant="contained"
        onClick={()=>{
          props.props._newSale(tokenData.tokenId)
          axios({
            url: 'http://3.35.173.223:5050/nft/trade/sell',
            method: 'put',
            headers: {
              "accessToken": localStorage.getItem("accessToken")
            },
            data: {
              "assetId": tokenData.assetId,
              "price": tokenData.price
            }
          }).then((res) =>{
            console.log(res)
          }).catch((err)=>{
            console.log(err)
          })
        }}
        >SAVE</Button>
    )
  else
    salesRegistbtn = (
      <Button
        variant="contained"
        onClick={()=>{
          props.props._cancelSale(tokenData.tokenId)
          axios({
            url: 'http://3.35.173.223:5050/nft/trade/cancel',
            method: 'put',
            headers: {
              "accessToken": localStorage.getItem("accessToken")
            },
            data: {
              "assetId": tokenData.assetId,
            }
          }).then((res) =>{
            console.log(res)
          }).catch((err)=>{
            console.log(err)
          })
        }}
      >SAVE</Button>
    )

  return (
    <Container fixed>
      <Grid container>
        <Grid item xs={5}>
          <img
            src={ tokenData.assetImageUrl }
            width="100%"
          />
        </Grid>
        <Grid item xs={5} style={{margin:'1em'}}>
          { userData.nickname }
          <br />
          <h3>{ tokenData.assetName }</h3>
          <SwitchLabels
            sales={Boolean(tokenData.marketStatus)}
            onChange={() => {
              if (Boolean(tokenData.marketStatus)){
                setTokenData({
                  ...tokenData,
                  marketStatus: ""
                })
              }else{
                setTokenData({
                  ...tokenData,
                  marketStatus: "1"
                })
              }
              console.log(tokenData.marketStatus)
            }}
          />
          <LabTabs 
            price={tokenData.price}
            onChange={(data)=>{
              tokenData.price=data
            }}
          />
          {salesRegistbtn}
        </Grid>
      </Grid>
    </Container>
  )
}