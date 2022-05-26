import SearchIcon from '@mui/icons-material/Search';
import { css } from "@emotion/react";

const SearchBar = ({className, ...rest})=>{
    return (
        <div
            className={className}
            css={css`
                max-width: 768px;
                display: flex;
                width: 100%;
            `}
        >
            <SearchIcon
                css={css`
                    justify-content: center;
                    margin-right: 8px;
                    height:auto;
                `}
            />
            <input
                css={css`
                    line-height: 26px;
                    cursor: text;
                    border: 0;
                    width: 100%;
                `}
                placeholder="Seach items...."
                {...rest}
            /> 
        </div>
    );
}

export default SearchBar;