import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      Holuba {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function ProfileEditContainer() {
  let navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let nickname = data.get("nickname");
    let email = data.get("email");
    let bio = data.get("bio");

    console.log({
      nickname: data.get("nickname"),
      email: data.get("email"),
      bio: data.get("bio"),
    });
    console.log(nickname);

    axios
      .put(
        "http://3.35.173.223:5050/user/profile/edit",
        {
          email: email,
          nickname: nickname,
          profileImageUrl:
            "https://holuba.s3.ap-northeast-2.amazonaws.com/default.png",
          bio: bio,
        },
        {
          headers: {
            accessToken: `${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => {
        setShow(true);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Profile
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="nickname"
              label="Nickname"
              name="nickname"
              autoComplete="nickname"
              autoFocus
            />
            {show && (
              <Alert severity="error">
                닉네임 중복 - 다른 닉네임을 사용해주세요.
              </Alert>
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              id="bio"
              label="Bio"
              name="bio"
              autoComplete="bio"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link href="https://metamask.io/" variant="body2">
                  {"Don't have an account? Go to MetaMask"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default ProfileEditContainer;
