import React from 'react';
import { Grid, Container, Button } from "@mui/material"
import StandardImageList from "../components/all/ImageList"
// import InputAdornments from "../components/all/PriceInput"
import InputAdornments from '../components/donate/TextInput';
// 토큰 이름 입력란 / 토큰 설명 입력란 생성
// axios 명령어 연결(아직 API 재정의 안됨)
const DonatePage = (props) => {
    // const [price, setPrice] = React.useState(0.0026)
    const [values, setValues] = React.useState({
        price: 0.0026,
        title: '',
        desc: ''
    });
    return (
        <Container fixed>
            <Grid container>
                <Grid item xs={6}>
                    <StandardImageList itemData={itemData}/>
                </Grid>
                <Grid item xs={3} style={{ marginTop: "2em" }}>
                    <h3>기부금액설정</h3>

                    <InputAdornments
                        values={values}
                        props={props}
                        onClick={(data) => {
                            console.log(data)
                            props.props.mint(data.title, data.desc, itemData[Math.floor(Math.random() * 17)].img, data.amount)
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

const itemData = [
    {
        img: require('./../assets/sampleImg/국기1.jpg'),
        title: '국기1'
    },
    {
        img: require('./../assets/sampleImg/국기2.jpg'),
        title: '국기2'
    },
    {
        img: require('./../assets/sampleImg/국기3.jpg'),
        title: '국기3'
    },
    {
        img: require('./../assets/sampleImg/국기4.jpg'),
        title: '국기4'
    },
    {
        img: require('./../assets/sampleImg/국기5.jpg'),
        title: '국기5'
    },
    {
        img: require('./../assets/sampleImg/국기6.jpg'),
        title: '국기6'
    },
    {
        img: require('./../assets/sampleImg/국기7.jpg'),
        title: '국기7'
    },
    {
        img: require('./../assets/sampleImg/비둘기.jpg'),
        title: '비둘기'
    },
    {
        img: require('./../assets/sampleImg/비둘기2.jpg'),
        title: '비둘기2'
    },
    {
        img: require('./../assets/sampleImg/비둘기3.jpg'),
        title: '비둘기3'
    },
    {
        img: require('./../assets/sampleImg/비둘기4.jpg'),
        title: '비둘기4'
    },
    {
        img: require('./../assets/sampleImg/비둘기5.jpg'),
        title: '비둘기5'
    },
    {
        img: require('./../assets/sampleImg/비둘기6.jpg'),
        title: '비둘기6'
    },
    {
        img: require('./../assets/sampleImg/비둘기7.jpg'),
        title: '비둘기7'
    },
    {
        img: require('./../assets/sampleImg/비둘기8.jpg'),
        title: '비둘기8'
    },
    {
        img: require('./../assets/sampleImg/비둘기9.jpg'),
        title: '비둘기9'
    },
    {
        img: require('./../assets/sampleImg/비둘기10.jpg'),
        title: '비둘기10'
    },
];
// console.log(itemData[Math.floor(Math.random() * 17)].img)
export default DonatePage;