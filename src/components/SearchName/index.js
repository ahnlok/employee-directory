import React, { useContext } from 'react';
import './SearchName.css';
import DataAreaContext from '../../utils/DataAreaContext';

const SearchName = () => {
    const context =  useContext(DataAreaContext);

    return (
        <div className="searchbox">
            <form className="form-inline">
                <div className="input-group">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Type Employee Name..."
                        aria-label="Search"
                        onChange={e => context.handleSearchChange(e)}
                    />
                    <span className="input-group-btn">
                    <button className="btn my-2 my-sm-0" type="submit">
                        Search
                    </button>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default SearchName;