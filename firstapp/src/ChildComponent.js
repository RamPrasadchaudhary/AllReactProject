import React from 'react'
//import Parentcomponent from './parentcomponent'
function ChildComponent(props){
    return(
        <div>
            <button onClick={()=>props.greetHandler('Child')}>Greet</button>
        </div>
    )
}
export default ChildComponent