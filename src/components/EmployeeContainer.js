import React, { Component } from "react";
import Container from "./Container";
import EmployeeSearch from "./EmployeeSearch";
import API from "../utils/API";

class EmployeeContainer extends components {
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
                <Col size="md-8">
                <Card
                    heading={this.state.result.name || "Search for the Employee"}
                >
                    {this.state.result.name ? (
                        <EmployeeInformation
                            name={this.state.result.name[1,2]}
                            email={this.state.result.email}
                            phone={this.state.result.cell}
                            gender={this.state.result.gender}
                            birthday={this.state.result.dob[0]}
                            src={this.state.result.picture[1]}
                            location={this.state.result.location[0,1,2,3]}
                        />
                    ) : (
                        <h3>No Employee Result Found</h3>
                    )}
                    </Card>
                </Col>
                <Col size="md-4">
                    <Card heading="Search">
                        <EmployeeSearch
                            value={this.state.search}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                        />
                    </Card>
                </Col>
            </Container>
        )
    }
}

export default EmployeeContainer;