import React from "react"
import Detail from "./Detail"

function EmployeeContainer(items) {
    return (
        <section className='cards'>
            {items.map((item) => (
                <Detail key={name.id} item={item}></Detail>
            ))}
        </section>
    )
}

export default EmployeeContainer;