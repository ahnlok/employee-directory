import React from "react"
import Detail from "./Detail"

const EmployeeContainer =( {items }) => {
    return (
        <section className='cards'>
            {items.map((item) => (
                <Detail key={item.id} item={item}></Detail>
            ))}
        </section>
    )
}

export default EmployeeContainer;