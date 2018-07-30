import React, {Component} from 'react';
import Routes from '../app/Routes';

class Body extends Component
{
    render()
    {
        return (
            <div style={{padding:20, display:'flex',flex:90,flexDirection:'column', backgroundColor:NIKE_OFFWHITE}}>
                <Routes />
            </div>
        );
    }
}

export default Body;