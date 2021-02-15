import { getSuggestedQuery } from "@testing-library/react"
import React, { useState } from "react"

function Search() {
    const [text, setText] = useState("")

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        // Adding input 
        <section className="search">
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Employees by Names"
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search;