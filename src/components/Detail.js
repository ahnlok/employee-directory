import React from "react"

const Detail = ( {item }) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <h1 className="employee-name">{item.name}</h1>   
                    <img src={item.picture[1]} alt='' />   
                </div>
                <div className="card-back">
                    <h1>{item.name}'s Detail</h1>
                    <ul>
                        <li>
                            <strong>Email:</strong> {item.email}
                        </li>
                        <li>
                            <strong>Phone:</strong> {item.cell}
                        </li>
                        <li>
                            <strong>Date of Birth:</strong> {item.dob[0]}
                        </li>
                        <li>
                            <strong>Location:</strong> {item.location[0,1,2,3]}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Detail;