import styled from "@emotion/styled";
import SearchFilter from "components/SearchFilter";
import List from "components/List";
import SearchHeader from "components/SearchHeader";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllProducts } from "api/nft";
import { updateItems } from "state/assetsSlice";
import { initialize } from "state/filterSlice";

const MarketContainer = ({page})=>{
    const dispatch = useDispatch();
    const filterInfo = useSelector((state)=>state.filter.info);
    const assets = useSelector((state)=>state.assets.items);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if(loading) dispatch(initialize());
        getCollections(filterInfo);
    },[filterInfo]);
    
    const getCollections = (info)=>{
        const query = `status=${info.status}&max=${info.to}&min=${info.from}&condition=${info.sort}`;
        findAllProducts(query,(res)=>{
            // filterInfo
            const mySellList = res.data.sellList
                .filter((item)=>item.asset_name.includes(info.msg))
            dispatch(updateItems(mySellList));
        })
        setLoading(false);
    }

    return (
    <Container>
        <FilterContainer>
            <SearchFilter/>
        </FilterContainer>
        {loading ? <div>loading...</div> :
        <MainContainer>
            <SearchHeader items={assets}/>
            <SeachView>
                <List items={assets} page={page}/>
            </SeachView>
        </MainContainer>
        }
    </Container>);
}

export default MarketContainer;

const Container = styled.div`
    width: 100%;
    @media (min-width: 600px){
        display: flex;
    }
`
const FilterContainer = styled.div`
    width: 340px;
    height: 100%;
`;

const MainContainer = styled.div`
    border-left: 1px solid rgb(229, 232, 235);
    @media (min-width: 600px){
        flex: 1 0 0%;
        padding: 0px 28px;
    }
`;
const SeachView = styled.div`
    @media (min-width: 600px){
        padding: 16px 0px;
    }
`;
