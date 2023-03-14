import React from 'react'
import Row from '../components/Row'

function Home(props) {
    if (props.data.length > 0){
        const result = props.data.map((item, i)=>{
            return(
                <Row id={item["id"]} key={i}
                    name={item["name"]}
                    email={item["email"]}
                    phone={item["phone"]}
                    address={item["address"]["street"] + ", " + item["address"]["city"]}
                ></Row>
            )
        })
        return (
            <div>
                {result}
            </div>
        );
    }
    else {
        return (
            <div>
                <h5>Sorry, no data found...</h5>
            </div>
        )
    }
}

export default Home