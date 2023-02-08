import React, { Component } from "react";

class FormUser extends Component {
    state = {
        name: "",
        dob: "",
        email: "",
        cn: "",
        tmay: "",
        error: {
            nameError: "",
            dobError: "",
            emailError: "",
            cnError: "",
            tmayError: "",
        },
        formValid: false,
    };

    handleChange = (e) => {
        if (e.target.id == "name") {
            this.validateName(e.target.value);
        } else if (e.target.id == "dob") {
            this.validateDob(e.target.value);
        } else if (e.target.id == "email") {
            this.validateEmail(e.target.value);
        } else if (e.target.id == "cn") {
            this.validateCn(e.target.value);
        } else if (e.target.id == "tmay") {
            this.validateTmay(e.target.value);
        }
    };

    validateName = (name) => {
        let nameError = this.state.error.nameError;
        let formValid = this.state.formValid;
        let pattern = /^[A-Za-z]+$/;

        if (name.trim() == "") {
            nameError = "This is required";
            formValid = false;
        } else if (name.trim().length < 3 || !pattern.test(name)) {
            nameError = "This is invalid name";
            formValid = false;
        } else {
            nameError = "";
            formValid = true;
        }

        //spread operator (...)
        this.setState({
            name,
            formValid,
            error: { ...this.state.error, nameError },
        });

        return formValid;
    };

    validateDob = (dob) => {
        let dobError = this.state.error.dobError;
        let formValid = this.state.formValid;

        if (!dob) {
            dobError = "This is required";
            formValid = false; 
        } else {
            dobError = "";
            formValid = true;
        }

        //spread operator (...)
        this.setState({
            dob,
            formValid,
            error: { ...this.state.error, dobError },
        });

        return formValid;
    };

    validateCn = (cn) => {
        let cnError = this.state.error.cnError;
        let formValid = this.state.formValid;
        let pattern = /^[0-9]*$/;

        if (cn.trim() == "") {
            cnError = "This is required";
            formValid = false;
        } else if (cn.trim().length != 10 || !pattern.test(cn)) {
            cnError = "This is invalid";
            formValid = false;
        } else {
            cnError = "";
            formValid = true;
        }

        this.setState({
            cn,
            formValid,
            error: { ...this.state.error, cnError },
        });

        return formValid;
    };

    validateEmail = (email) => {
        let emailError = this.state.error.emailError;
        let formValid = this.state.formValid;

        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        //regex
        if (!pattern.test(email)) {
            emailError = "Please enter valid email";
            formValid = false;
        } else {
            emailError = "";
            formValid = true;
        }

        this.setState({
            email,
            formValid,
            error: { ...this.state.error, emailError },
        });

        return formValid;
    };

    validateTmay = (tmay) => {
        let tmayError = this.state.error.tmayError;
        let formValid = this.state.formValid;

        if (tmay.trim() == "") {
            tmayError = "This is required";
            formValid = false;
        } else if (tmay.trim().length > 255) {
            tmayError = "This is invalid";
            formValid = false;
        } else {
            tmayError = "";
            formValid = true;
        }

        this.setState({
            tmay,
            formValid,
            error: { ...this.state.error, tmayError },
        });

        return formValid;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (
          this.validateName(this.state.name) &&
          this.validateDob(this.state.dob) &&
          this.validateEmail(this.state.email) &&
          this.validateCn(this.state.cn) &&
          this.validateTmay(this.state.tmay)
        ) {
          alert("Form is submitted");
    
          this.props.formUser(this.state);
    
          this.setState({
            name: "",
            dob: "",
            email: "",
            cn: "",
            tmay: ""
          });
        }
      };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <p>
                    <input
                        type="text"
                        placeholder="Please enter name"
                        id="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                </p>
                <p id="error" style={{ color: "red", fontSize: "16px" }}>
                    {this.state.error.nameError}
                </p>

                <label>Date of Birth</label>
                <p>
                    <input
                        type="date"
                        placeholder="Please enter date of birth"
                        id="dob"
                        onChange={this.handleChange}
                        value={this.state.dob}
                        max={new Date().toISOString().split("T")[0]}
                    />
                </p>
                <p id="error" style={{ color: "red", fontSize: "16px" }}>
                    {this.state.error.dobError}
                </p>

                <label>Email Address</label>
                <p>
                    <input
                        type="email"
                        placeholder="Please enter email"
                        id="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                </p>
                <p id="error" style={{ color: "red", fontSize: "16px" }}>{this.state.error.emailError}</p>

                <label>Contact Number</label>
                <p>
                    <input
                        type="number"
                        placeholder="Please enter contact number"
                        id="cn" 
                        onChange={this.handleChange}
                        value={this.state.cn}
                    />
                </p>
                <p id="error" style={{ color: "red", fontSize: "16px" }}>{this.state.error.cnError}</p>

                <label>Tell Me About Yourself</label>
                <p>
                    <textarea
                        placeholder="Please tell me about yourself"
                        id="tmay" 
                        onChange={this.handleChange}
                        value={this.state.tmay}
                        cols="50"
                        rows="5"
                    />
                </p>
                <p id="error" style={{ color: "red", fontSize: "16px" }}>{this.state.error.tmayError}</p>

                <button>Submit</button>
            </form>
        );
    }
}

export default FormUser;
