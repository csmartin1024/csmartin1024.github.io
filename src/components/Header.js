import React, {Component} from 'react';
// import { connect } from 'react-redux'

export default class Header extends Component 
{
    render() {
        return (
            <div style={{flex:5, display:'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'row', minHeight:50, backgroundColor:NIKE_DARKGREY}}>
                <div className="ncss-brand text-color-white fs14-sm fs14-md fs16-lg"><i className="g72-swoosh" style={{color:'white', paddingRight:10}}></i> Innovation</div>
                <div className="ncss-brand text-color-white fs14-sm fs14-md fs16-lg"></div> 
                <div className="ncss-brand text-color-white fs14-sm fs14-md fs16-lg"></div>                
          </div>
        )
    }
};