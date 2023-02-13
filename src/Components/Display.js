import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Display = ({ userData }) => {
  const userList = userData.map((item) => {
    return (
      <Card
        sx={{
          maxWidth: "auto",
          backgroundColor: "teal",
          float: "left",
          margin: "10px 10px 10px 0"
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <React.Fragment key={item.email}>
              <p>Name: {item.name}</p>
              <p>Date of Birth: {item.dob}</p>
              <p>Email: {item.email}</p>
              <p>Contact Number: {item.cn}</p>
              <p>Description: {item.tmay}</p>
            </React.Fragment>
          </Typography>
        </CardContent>
      </Card>
    );
  });

  return <>{userList}</>;
};

export default Display;
