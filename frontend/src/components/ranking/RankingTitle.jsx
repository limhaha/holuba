import React from "react";
import { Container } from "@mui/material";
const RankingTitle = () => {
  return (
    <Container
      sx={{
        marginTop: 8,
        textAlign: "center",
      }}
    >
      <h1>Top 10 Rankings</h1>
      <h3>The top 10 Donators in Holuba, ranked by amount of ETH.</h3>
    </Container>
  );
};

export default RankingTitle;
