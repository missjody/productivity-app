import React from 'react';

export default ({events})=>{
    return <>
    <h1>tasks</h1>
    {events.map(a=> <h5><button>{a.title}</button></h5>)}
    </>
}