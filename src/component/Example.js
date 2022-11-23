import React,{useState} from 'react'

function Example()
{

    const [count,setCount] = useState(0)

    return(
        <div>
            <a href="#" onClick={()=>setCount(count+1)}>Click Here</a>
        </div>
    )

}

export default Example