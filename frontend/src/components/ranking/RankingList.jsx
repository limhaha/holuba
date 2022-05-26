import React from "react";

const RankingList = ({ rankings }) => {
  return (
    <div>
      {rankings.map((ranking) => {
        return <div key={ranking.id}>{ranking.nickname}</div>;
      })}
    </div>
  );
};

export default RankingList;
