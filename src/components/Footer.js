import React from 'react';

export default (props) => {
    return (
        <footer style={{flex:5, display:'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'row', minHeight:20, backgroundColor:NIKE_DARKGREY}}>
            <div className="ncss-brand text-color-white fs12-sm fs12-md fs12-lg"></div> 
            <div className="ncss-brand text-color-white fs12-sm fs12-md fs12-lg">&copy; Nike 2018</div>
            <div className="ncss-brand text-color-white fs12-sm fs12-md fs12-lg"></div> 
        </footer>
    )
}