import styled from "@emotion/styled";

const Banner = ({imgURL}) => {
    return (
        <BannerContainer>
            <BannerImage src={imgURL}/>
        </BannerContainer>
    );
}

const BannerContainer = styled.div`
    position: relative;
    z-index: 0;
`;
const BannerImage = styled.img`
    width: 100%;
    height: 225px;
    position: relative;
    z-index: 0;
`;

export default Banner;
