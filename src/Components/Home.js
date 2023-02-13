import React, { Component } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import HOC from "./HOC";

class Home extends Component {
    state = {
        post: [],
      };
    
      componentDidMount = () => {
        //api calls
        let url = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";
    
        axios
          .get(url)
          .then((res) => {
            console.log(res.data);
            this.setState({
              post: res.data,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      render() {
        //conditional rendering: using tenary operator
        const postList = this.state.post.length ? (
          <p>
            {this.state.post.map((user) => {
              return (
                <React.Fragment key={user.id}>
                  <img src={user.imageUrl} alt="image1" />
                  <p style={{ color: this.props.color }}>
                      {user.firstName} {user.lastName}
                  </p>
                  <p> {user.email}</p>
                </React.Fragment>
              );
            })}
          </p>
        ) : (
          <ClipLoader
            color="blue"
            loading="true"
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        );
    
        return <>{postList}</>;
      }
}

export default HOC(Home);
