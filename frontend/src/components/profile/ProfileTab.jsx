import {css} from "@emotion/react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter';
import ImagesearchRollerIcon from '@mui/icons-material/ImagesearchRoller';
import HistoryIcon from '@mui/icons-material/History';
import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from "react-redux";
import { changeTabIndex } from "state/tabIndexSlice";

const useTabStyles = makeStyles({
    root: {
      justifyContent: "center"
    },
    scroller: {
      flexGrow: "0"
    }
  });


const ProfileTab = ({
    className, 
    children,
})=>{
    const classes = useTabStyles();
    const index = useSelector((state)=>state.tabIndex.value);
    const dispatch = useDispatch();
    return(
        <div
            css={css`
            justify-content: center;
            `}
        >
            <Tabs
                classes={{ root: classes.root, scroller: classes.scroller }}
                value={index}
                onChange={(e,newValue)=>dispatch(changeTabIndex(newValue))}
                centered
                css={css`
                    padding: 0px 8px;
                    border-bottom: 1px solid rgb(229, 232, 235);
                    overflow: auto;
                    margin-top: 30px;
                    justify-content: center;
                `}
            >
                <Tab icon={<PhotoFilterIcon/>} iconPosition="start" label="Collected" />
                {/* <Tab icon={<ImagesearchRollerIcon/>} iconPosition="start" label="Created"/> */}
                <Tab icon={<HistoryIcon/>} iconPosition="start" label="Activity"/>
            </Tabs>
        </div>
    );
}


export default ProfileTab;
