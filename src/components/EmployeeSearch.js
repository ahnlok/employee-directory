import React from "react";

function EmployeeSearch(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                    <input
                        onChange={props.handleInputChange}
                        value="search"
                        type="text"
                        className="form-control"
                        placeholder="Search Employee"
                        id="search"
                    />
                    <button onClick={props.handleFormSubmit}
                    className="btn btn-primary">search
                    </button>
            </div>
        </form>
    );
};

export default EmployeeSearch;