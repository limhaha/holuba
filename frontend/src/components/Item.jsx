import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea} from '@mui/material';
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { EthereumIcon } from './Icons';

const Item = ({
    item
})=>{
return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <ItemImage src={item.asset_image_url}/>
            <ItemContent>
                <CardContentLeft>
                    <LabelText>
                        {item.token_id}
                    </LabelText>
                    <CardTitle>
                        {item.asset_name}
                    </CardTitle>
                </CardContentLeft>
                <CardContentRight>
                    <LabelText css={css`
                        justify-content: end;`}>
                        Price
                    </LabelText>
                    <CardPrice>
                        <EthereumIcon/>
                        <span>{item.price}</span>
                    </CardPrice>
                </CardContentRight>
            </ItemContent>
        </CardActionArea>
    </Card>
)
}

const LabelText = styled.div`
    color: rgb(112, 122, 131);
    font-weight: 500;
    font-size: 12px;
    display:flex;
`
const CardTitle = styled.div`
    color: rgb(53, 56, 64);
    font-size: 12px;
    letter-spacing: 0.1px;
    font-weight: 600;
    text-align: left;
`
const CardPrice = styled.div`
    display:flex;
    justify-content: end;
    align-items: center;
`
const CardContentLeft = styled.div`
    width: 60%;
`;

const CardContentRight = styled.div`
    width: 40%;
`;

const ItemImage = ({...props})=>{
    return (
        <CardMedia
            component="img"
            height="289"
            src={props.src}
        />
    );
}

const ItemContent = ({children, ...props})=>{
    return(
        <CardContent css={css` display:flex;`} {...props}>
            {children}
        </CardContent>
    );
}

export default Item;