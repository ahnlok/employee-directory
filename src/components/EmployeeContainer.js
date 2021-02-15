import React, { Component } from "react";
import Container from "./Container";
import EmployeeSearch from "./EmployeeSearch";
import API from "../utils/API";

class OmdbContainer extends components {
    state = {
        result: {},
        search: ""
    };
    componentDidMount() {
        this.searchEmployee("John Mcguiness");
    }

    searchEmployee = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    handleInputChange =  event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        });
    };
    // When the form is submitted, search the Random User Generator API for the value for `this.sate.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search);
    };

    render() {
        return (
            <Container>
                <Card
            </Container>
        )
    }
}