import React, { useEffect } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, Menu, MenuItem } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { injected } from "web3/connectors";
import { deleteContracts, init } from "../../web3/Web3Client";

import axios from "axios";

export default function Nav() {
  const { chainId, account, active, activate, deactivate } = useWeb3React();
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken") && !active) {
      connectMetamask();
    }
  }, []);

  const connectMetamask = async () => {
    await activate(injected, (error) => {
      if ("/No Ethereum provider was found on window.ethereum/".test(error)) {
        window.open("https://metamask.io/download.html");
      }
    });
  };

  const login = (address) => {
    if (!active) return;

    const nowAddress = localStorage.getItem("walletAddress");

    if (nowAddress && nowAddress !== address) {
      disconnectMetamask();
      return;
    }
    localStorage.setItem("walletAddress", address);

    if (localStorage.getItem("accessToken")) {
      init();
      return;
    }

    axios({
      url: "http://3.35.173.223:5050/user/login",
      method: "post",
      data: {
        walletAddress: address,
      },
    }).then((res) => {
      localStorage.setItem("accessToken", res.data.accessToken);
      console.log("get Token success");
      getNickname();
    });
  };

  function getNickname() {
    axios
      .get("http://3.35.173.223:5050/user/profile", {
        headers: {
          accessToken: `${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data.nickname);
        if (res.data.nickname === null) {
          navigate("/profileEdit");
        } else {
          navigate("/");
        }
      });
  }

  const disconnectMetamask = async () => {
    await deactivate();
    deleteContracts();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("walletAddress");
    navigate('/');
  };

  let accountButton;
  if (active) {
    accountButton = (
      <div>
        <Button onClick={disconnectMetamask}>Logout</Button>
        <div>{login(account)}</div>
      </div>
    );
  } else
    accountButton = <Button onClick={connectMetamask}>MetaMask Login</Button>;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="logo">
            <img
              src={"/logo.png"}
              style={{ display: "flex", width: "40px", margin: "25px" }}
            ></img>
            <span>Holubar</span>
          </div>
        </Link>
        <ul className="nav">
          <li>
            <Link to="/donate">Donate</Link>
          </li>
          <li>
            <Link to="/Market">Market</Link>
          </li>
          <li>
            <Link to="/Ranking">Rankings</Link>
          </li>
          <li>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <AccountCircleIcon color="primary" fontSize="large" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <MenuItem>
                    <Button>My Profile</Button>
                  </MenuItem>
                </Link>
                <MenuItem>{accountButton}</MenuItem>
              </Menu>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
