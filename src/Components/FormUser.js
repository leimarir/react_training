import React, {  useState } from "react";

function FormUser() {
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [cn, setCn] = useState("");
    const [tmay, setTmay] = useState("");
    const [error, setError] = useState({
        nameError: "",
        dobError: "",
        emailError: "",
        cnError: "",
        tmayError: ""
    });
    const [formValid, setFormValid] = useState(false);

    let nameInput;
    let dobInput;
    let emailInput;
    let cnInput;
    let tmayInput;

    // Converted
    // state = {
    //     name: "",
    //     dob: "",
    //     email: "",
    //     cn: "",
    //     tmay: "",
    //     error: {
    //         nameError: "",
    //         dobError: "",
    //         emailError: "",
    //         cnError: "",
    //         tmayError: "",
    //     },
    //     formValid: false,
    // };

    const handleChange = (e) => {
        if (e.target.id == "name") {
            validateName(e.target.value);
        } else if (e.target.id == "dob") {
            validateDob(e.target.value);
        } else if (e.target.id == "email") {
            validateEmail(e.target.value);
        } else if (e.target.id == "cn") {
            validateCn(e.target.value);
        } else if (e.target.id == "tmay") {
            validateTmay(e.target.value);
        }
    };

    const validateName = (name1) => {
        let pattern = /^[A-Za-z]+$/;

        if (name1.trim() == "") {
            setError({ nameError: "This is required" });
            setFormValid(false);
        } else if (name1.trim().length < 3 || !pattern.test(name1)) {
            setError({ nameError: "This is invalid name" });
            setFormValid(false);
        } else {
            setError({ nameError: "" });
            setFormValid(true);
        }

        // former format
        // //spread operator (...)
        // this.setState({
        //     name,
        //     formValid,
        //     error: { ...this.state.error, nameError },
        // });

        setName(name1);
        return formValid;
    };

    const validateDob = (dob1) => {

        if (!dob1) {
            setError({ dobError: "This is required" });
            setFormValid(false);
        } else {
            setError({ dobError: "" });
            setFormValid(true);
        }

        setDob(dob1);
        return formValid;
    };

    const validateCn = (cn1) => {
        let pattern = /^[0-9]*$/;

        if (cn1.trim() == "") {
            setError({ cnError: "This is required" });
            setFormValid(false);
        } else if (cn1.trim().length != 10 || !pattern.test(cn1)) {
            setError({ cnError: "This is invalid" });
            setFormValid(false);
        } else {
            setError({ cnError: "" });
            setFormValid(true);
        }

        setCn(cn1);
        return formValid;
    };

    const validateEmail = (email1) => {

        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        //regex
        if (!pattern.test(email1)) {
            setError({ emailError: "Please enter valid email" });
            setFormValid(false);
        } else {
            setError({ emailError: "" });
            setFormValid(true);
        }

        setEmail(email1);
        return formValid;
    };

    const validateTmay = (tmay1) => {

        if (tmay1.trim() == "") {
            setError({ tmayError: "This is required" });
            setFormValid(false);
        } else if (tmay1.trim().length > 255) {
            setError({ tmayError: "This is invalid" });
            setFormValid(false);
        } else {
            setError({ tmayError: "" });
            setFormValid(true);
        }

        setTmay(tmay1);
        return formValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            validateName(nameInput) &&
            validateDob(dobInput) &&
            validateEmail(emailInput) &&
            validateCn(cnInput) &&
            validateTmay(tmayInput)
        ) {
            alert("Form is submitted");

            this.props.formUser({
                name: name,
                dob: dob,
                email: email,
                cn: cn,
                tmay: tmay,
                error: error,
                formValid: formValid,
            });

            setName("");
            setDob("");
            setEmail("");
            setCn("");
            setTmay("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <p>
                <input
                    type="text"
                    placeholder="Please enter name"
                    id="name"
                    onChange={handleChange}
                    value={nameInput}
                />
            </p>
            <p id="error" style={{ color: "red", fontSize: "16px" }}>
                {error.nameError}
            </p>

            <label>Date of Birth</label>
            <p>
                <input
                    type="date"
                    placeholder="Please enter date of birth"
                    id="dob"
                    onChange={handleChange}
                    value={dobInput}
                    max={new Date().toISOString().split("T")[0]}
                />
            </p>
            <p id="error" style={{ color: "red", fontSize: "16px" }}>
                {error.dobError}
            </p>

            <label>Email Address</label>
            <p>
                <input
                    type="email"
                    placeholder="Please enter email"
                    id="email"
                    onChange={handleChange}
                    value={emailInput}
                />
            </p>
            <p id="error" style={{ color: "red", fontSize: "16px" }}>{error.emailError}</p>

            <label>Contact Number</label>
            <p>
                <input
                    type="number"
                    placeholder="Please enter contact number"
                    id="cn"
                    onChange={handleChange}
                    value={cnInput}
                />
            </p>
            <p id="error" style={{ color: "red", fontSize: "16px" }}>{error.cnError}</p>

            <label>Tell Me About Yourself</label>
            <p>
                <textarea
                    placeholder="Please tell me about yourself"
                    id="tmay"
                    onChange={handleChange}
                    value={tmayInput}
                    cols="50"
                    rows="5"
                />
            </p>
            <p id="error" style={{ color: "red", fontSize: "16px" }}>{error.tmayError}</p>

            <button>Submit</button>
        </form>
    );
}

export default FormUser;
