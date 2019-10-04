import React from 'react';


import { Redirect, Route } from 'react-router-dom';

//...rest retrieves all the variables we did not destruct 



//when route renders component, it will pass in route props
//containing match , props, history

const PublicRoute=({
    component:Component,
    ...rest
})=>{
    return(
    <Route {...rest} component={(props)=>(
            <Component {...props}/>
            )
        }/>
    )
}

export default PublicRoute;