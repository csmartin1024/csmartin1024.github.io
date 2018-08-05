import React, {Component} from 'react';
// import Body from '../components/Body';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import MediaQuery from 'react-responsive';
import Responsive from 'react-responsive';

import "typeface-open-sans";
import "typeface-josefin-sans";

class Desktop extends Component
{
  render()
  {
    return (
      <Responsive minWidth={992}>{this.props.children}</Responsive>
    )
  }
}

class Tablet extends Component
{
  render()
  {
    return (
      <Responsive minWidth={768} maxWidth={991}>{this.props.children}</Responsive>
      // <Responsive minWidth={768} maxWidth={991}>{this.props.children}</Responsive>
    )
  }
}

class Mobile extends Component
{
  render()
  {
    return (
      <Responsive maxWidth={499}>{this.props.children}</Responsive>
    )
  }
}

class LandscapeMobile extends Component
{
  render()
  {
    return (
      <Responsive orientation="landscape" maxWidth={767}>{this.props.children}</Responsive>
    )
  }
}


class Default extends Component
{
  render()
  {
    return (
      <Responsive minWidth={768}>{this.props.children}</Responsive>
    )
  }
}


// class Landscape extends Component
// {
//   render()
//   {
//     return (
//       <Responsive maxWidth={499}>{this.props.children}</Responsive>
//     )
//   }
// }

// const Desktop = props => <Responsive {...props} minWidth={992}>{...props.children}</Responsive>;
// const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
// const Mobile = props => <Responsive {...props} maxWidth={767} />;
// const Default = props => <Responsive {...props} minWidth={768}></Responsive>;



class Layout extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
          height:window.innerHeight, 
          width:window.innerWidth,
          currentHeader:'WHO'
        };
        this.updateDimensions = this.updateDimensions.bind(this);
        this.changeHeader = this.changeHeader.bind(this);
    }
    
    componentDidMount()
    {
      window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount()
    {
      window.removeEventListener("resize", this.updateDimensions);
    }
    updateDimensions()
    {
      this.setState({height:window.innerHeight, width:window.innerWidth});
    }

    renderMobile()
    {

    }

    render5() {
      return (
        <div>
          
          
          <Mobile>Mobile</Mobile>
          <Default>Not mobile (desktop or laptop or tablet)</Default>
      </div>
      )
    }

    // render3() {
    //   return (
    //     <div>
    //       <div>Device Test!</div>
    //     <MediaQuery minDeviceWidth={1224}>
    //       <div>You are a desktop or laptop</div>
    //       <MediaQuery minDeviceWidth={1824}>
    //         <div>You also have a huge screen</div>
    //       </MediaQuery>
    //       <MediaQuery maxWidth={1224}>
    //         <div>You are sized like a tablet or mobile phone though</div>
    //       </MediaQuery>
    //     </MediaQuery>
    //     <MediaQuery maxDeviceWidth={1224}>
    //       <div>You are a tablet or mobile phone</div>
    //     </MediaQuery>
    //     <MediaQuery orientation="portrait">
    //       <div>You are portrait</div>
    //     </MediaQuery>
    //     <MediaQuery orientation="landscape">
    //       <div>You are landscape</div>
    //     </MediaQuery>
    //     <MediaQuery minResolution="2dppx">
    //       <div>You are retina</div>
    //     </MediaQuery>
    //   </div>
    //   )
    // }

    changeHeader(header)
    {
      this.setState({currentHeader:header});
    }

    render()
    {
        return (
            <div style={{display:'flex', backgroundColor:'#292929',flexDirection:'column', flex:1, height:this.state.height}}>
                {/* <Default>
                <h2>Default</h2>
                </Default> */}
                <LandscapeMobile>
                  <div style={{flex:1, justifyContent:'center', alignItems:'center', display:'flex', backgroundColor:'#292929', minHeight:20, maxHeight:100}}>
                    <h3 style={{fontFamily:'Josefin Sans', paddingTop:10,paddingLeft:10, color:'white'}}>Cody Martin</h3>
                  </div>

                  <div style={{display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center', flex:2, backgroundColor:'#292929', padding:0}}>
                    <h3 onClick={()=>this.changeHeader('WHO')} style={{color:'white', opacity:this.state.currentHeader === 'WHO' ? 1 : .2}}>Who</h3>
                    <h3 style={{paddingLeft:10, paddingRight:10, color:'white', opacity:.2}}> • </h3>
                    <h3 onClick={()=>this.changeHeader('WHAT')} style={{color:'white', opacity:this.state.currentHeader === 'WHAT' ? 1 : .2}}>What</h3>
                    <h3 style={{paddingLeft:10, paddingRight:10, color:'white', opacity:.2}}> • </h3>
                    <h3 onClick={()=>this.changeHeader('WHY')} style={{color:'white', opacity:this.state.currentHeader === 'WHY' ? 1 : .2}}>Why</h3>
                  </div>
                  
                  <div style={{display:'flex',flexDirection:'row', alignItems:'center', flex:8, backgroundColor:'#292929', padding:15}}>
                    <div style={{flex:this.state.currentHeader === 'WHY'  ? 3 : 1, textAlign:'center'}}>
                      {this.state.currentHeader === 'WHO' && <span style={{fontFamily:'Open Sans',borderTop:'solid', borderTopWidth:0, borderColor:'rgba(255,255,255,.5)', color:'white', lineHeight:3}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,. This is a </span>}
                      {this.state.currentHeader === 'WHAT' && <span style={{fontFamily:'Open Sans',borderTop:'solid', borderTopWidth:0, borderColor:'rgba(255,255,255,.5)', color:'white', lineHeight:3}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</span>}
                      {this.state.currentHeader === 'WHY' && <span style={{fontFamily:'Open Sans',borderTop:'solid', borderTopWidth:0, borderColor:'rgba(255,255,255,.5)', color:'white', lineHeight:3}}>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span>}
                    </div>
                  </div>
                  <div style={{ alignItems:'center', display: 'flex', justifyContent: 'center', flex:1, textAlign:'center',backgroundColor:'#292929', minHeight:20, maxHeight:50}}>
                    <span style={{fontFamily:'Josefin Sans', paddingLeft:10, color:'white'}}>© DymoTech</span>
                  </div>
                </LandscapeMobile>
                <Desktop>
                  <div style={{flex:1, justifyContent:'center', display:'flex', backgroundColor:'#292929', minHeight:20, maxHeight:50}}>
                      <h2 style={{fontFamily:'Josefin Sans', paddingLeft:10, color:'white'}}>Cody Martin</h2>
                    </div>

                    <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', alignItems:'center', flex:2, backgroundColor:'#292929', padding:0}}>
                      <h1 onClick={()=>this.changeHeader('WHO')} style={{color:'white', opacity:this.state.currentHeader === 'WHO' ? 1 : .2}}>Who</h1>
                      <h1 onClick={()=>this.changeHeader('WHAT')} style={{color:'white', opacity:this.state.currentHeader === 'WHAT' ? 1 : .2}}>What</h1>
                      <h1 onClick={()=>this.changeHeader('WHY')} style={{color:'white', opacity:this.state.currentHeader === 'WHY' ? 1 : .2}}>Why</h1>
                    </div>
                    
                    <div style={{display:'flex',flexDirection:'row', alignItems:'center', flex:8, backgroundColor:'#292929', padding:25, paddingBottom:50}}>
                      <div style={{flex:this.state.currentHeader === 'WHY'  ? 3 : 1, textAlign:'center'}}>
                        {this.state.currentHeader === 'WHO' && <div>
                          <img style={{float:'left',borderRadius: '50%'}} src={require('../images/face.jpg')} />
                          <span style={{fontSize:22, fontFamily:'Open Sans',borderTop:'solid', borderTopWidth:0, borderColor:'rgba(255,255,255,.5)', color:'white', lineHeight:4}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,. This is </span></div>}
                        {this.state.currentHeader === 'WHAT' && <span style={{fontSize:22, fontFamily:'Open Sans',borderTop:'solid', borderTopWidth:0, borderColor:'rgba(255,255,255,.5)', color:'white', lineHeight:4}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of .</span>}
                        {this.state.currentHeader === 'WHY' && <span style={{fontSize:22, fontFamily:'Open Sans',borderTop:'solid', borderTopWidth:0, borderColor:'rgba(255,255,255,.5)', color:'white', lineHeight:4}}>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span>}
                      </div>
                    </div>
                    <div style={{ alignItems:'center', display: 'flex', justifyContent: 'center', flex:1, textAlign:'center',backgroundColor:'#292929', minHeight:20, maxHeight:50}}>
                      <span style={{fontFamily:'Josefin Sans', paddingLeft:10, color:'white'}}>© DymoTech</span>
                    </div>
                </Desktop>
                <Tablet>
                  <div style={{flex:1, justifyContent:'center', display:'flex', backgroundColor:'#292929', minHeight:20, maxHeight:50}}>
                    <h2 style={{fontFamily:'Josefin Sans', paddingLeft:10, color:'white'}}>Cody Martin</h2>
                  </div>

                  <div style={{paddingTop:10, display:'flex',flexDirection:'row', justifyContent:'space-around', alignItems:'center', flex:2, backgroundColor:'#292929'}}>
                    <div onClick={()=>this.changeHeader('WHO')} style={{display:'flex', alignItems:'center',justifyContent:'center',width: 120, height: 120, borderRadius: '50%', background: 'transparent', border: '2px solid white'}}>
                      <h3 style={{color:'white', opacity:this.state.currentHeader === 'WHO' ? 1 : .2}}>Who</h3>
                    </div>
                    <div onClick={()=>this.changeHeader('WHAT')} style={{display:'flex', alignItems:'center',justifyContent:'center',width: 120, height: 120, borderRadius: '50%', background: 'transparent', border: '2px solid white'}}>
                      <h3 style={{color:'white', opacity:this.state.currentHeader === 'WHAT' ? 1 : .2}}>What</h3>
                    </div>
                    <div onClick={()=>this.changeHeader('WHY')} style={{display:'flex', alignItems:'center',justifyContent:'center',width: 120, height: 120, borderRadius: '50%', background: 'transparent', border: '2px solid white'}}>
                      <h3 style={{color:'white', opacity:this.state.currentHeader === 'WHY' ? 1 : .2}}>Why</h3>
                    </div>
                  </div>

                  <div style={{display:'flex',flexDirection:'row', alignItems:'center', flex:3, backgroundColor:'#292929', padding:15, paddingBottom:50}}>
                    <div style={{flex:this.state.currentHeader === 'WHY'  ? 3 : 1, textAlign:'center'}}>
                      {this.state.currentHeader === 'WHO' && <span style={{fontSize:18,fontFamily:'Open Sans',borderTop:'solid', borderTopWidth:0, borderColor:'rgba(255,255,255,.5)', color:'white', lineHeight:4}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,registed to. He maybe tgought about cat</span>}
                      {this.state.currentHeader === 'WHAT' && <span style={{fontSize:18,fontFamily:'Open Sans',borderTop:'solid', borderTopWidth:0, borderColor:'rgba(255,255,255,.5)', color:'white', lineHeight:4}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</span>}
                      {this.state.currentHeader === 'WHY' && <span style={{fontSize:18,fontFamily:'Open Sans',borderTop:'solid', borderTopWidth:0, borderColor:'rgba(255,255,255,.5)', color:'white', lineHeight:4}}>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span>}
                    </div>
                  </div>

                  <div style={{ alignItems:'center', display: 'flex', justifyContent: 'center', flex:1, textAlign:'center',backgroundColor:'#292929', minHeight:20, maxHeight:50}}>
                    <span style={{fontFamily:'Josefin Sans', paddingLeft:10, color:'white'}}>© DymoTech Tablet</span>
                  </div>
                  
                </Tablet>
                <Mobile>
                  <div style={{flex:1, justifyContent:'center', display:'flex', backgroundColor:'#292929', minHeight:20, maxHeight:50}}>
                    <h2 style={{fontFamily:'Josefin Sans', paddingLeft:10, color:'white'}}>Cody Martin</h2>
                  </div>

                  <div style={{display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center', flex:2, backgroundColor:'#292929', padding:0}}>
                    <h2 onClick={()=>this.changeHeader('WHO')} style={{color:'white', opacity:this.state.currentHeader === 'WHO' ? 1 : .2}}>Who</h2>
                    <h2 style={{paddingLeft:10, paddingRight:10, color:'white', opacity:.2}}> • </h2>
                    <h2 onClick={()=>this.changeHeader('WHAT')} style={{color:'white', opacity:this.state.currentHeader === 'WHAT' ? 1 : .2}}>What</h2>
                    <h2 style={{paddingLeft:10, paddingRight:10, color:'white', opacity:.2}}> • </h2>
                    <h2 onClick={()=>this.changeHeader('WHY')} style={{color:'white', opacity:this.state.currentHeader === 'WHY' ? 1 : .2}}>Why</h2>
                  </div>
                  
                  <div style={{display:'flex',flexDirection:'row', alignItems:'center', flex:8, backgroundColor:'#292929', padding:15, paddingBottom:50}}>
                    <div style={{flex:this.state.currentHeader === 'WHY'  ? 3 : 1, textAlign:'center'}}>
                      {this.state.currentHeader === 'WHO' && <span style={{fontFamily:'Open Sans',borderTop:'solid', borderTopWidth:0, borderColor:'rgba(255,255,255,.5)', color:'white', lineHeight:3}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,. This is </span>}
                      {this.state.currentHeader === 'WHAT' && <span style={{fontFamily:'Open Sans',borderTop:'solid', borderTopWidth:0, borderColor:'rgba(255,255,255,.5)', color:'white', lineHeight:3}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</span>}
                      {this.state.currentHeader === 'WHY' && <span style={{fontFamily:'Open Sans',borderTop:'solid', borderTopWidth:0, borderColor:'rgba(255,255,255,.5)', color:'white', lineHeight:3}}>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span>}
                    </div>
                  </div>
                  <div style={{ alignItems:'center', display: 'flex', justifyContent: 'center', flex:1, textAlign:'center',backgroundColor:'#292929', minHeight:20, maxHeight:50}}>
                    <span style={{fontFamily:'Josefin Sans', paddingLeft:10, color:'white'}}>© DymoTech</span>
                  </div>
                </Mobile>
          </div>
        );
    }
}

export default Layout;