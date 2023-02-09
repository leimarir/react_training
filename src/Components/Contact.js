import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Contact = () => {

    const data = {
        "Contacts" : [
            {
                "location":"Manila, Philippines",
                "contact":"09351230480",
                "email":"leimar.i.ros@gmail.com",
            },
            {
                "location":"Singapore, Singapore",
                "contact":"+65 8763 4687",
                "email":"benny.ong@geco.asia",
            },
            {
                "location":"Ilocos Norte, Philippines",
                "contact":"09992437845",
                "email":"jonathan.sagadraca@upskilltoday.onmicrosoft.com",
            }
        ]
    };

    const contactList = data.Contacts.map((item) => {
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
                  <p>Location: {item.location}</p>
                  <p>Contact Number: {item.contact}</p>
                  <p>Email: {item.email}</p>
                </React.Fragment>
              </Typography>
            </CardContent>
          </Card>
        );
      });
    
      return <>{contactList}</>;
};

export default Contact;

// 1000ms = 1s