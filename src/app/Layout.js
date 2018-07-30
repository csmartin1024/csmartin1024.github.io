import React, {Component} from 'react';
// import Body from '../components/Body';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import MediaQuery from 'react-responsive';
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
      <Responsive minWidth={500} maxWidth={991}>{this.props.children}</Responsive>
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

// const Desktop = props => <Responsive {...props} minWidth={992}>{...props.children}</Responsive>;
// const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
// const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;



class Layout extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {height:window.innerHeight, width:window.innerWidth};
        this.updateDimensions = this.updateDimensions.bind(this);
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

    render()
    {
        return (
            <div style={{display:'flex', flexDirection:'column', flex:1, height:this.state.height}}>
                <Desktop>
                  {/* <Header />
                  <Body />
                  <Footer /> */}
                  <h2>Desktop</h2>
                </Desktop>
                <Tablet><h2>Tablet</h2></Tablet>
                <Mobile>
                  <div style={{flex:1, justifyContent:'center', display:'flex', backgroundColor:'#292929', minHeight:20, maxHeight:50}}>
                    <h3 style={{fontFamily:'Josefin Sans', paddingLeft:10, color:'white'}}>Cody Martin</h3>
                  </div>
                  <div style={{flex:3, backgroundColor:'#292929'}} />
                  <div style={{flex:1, backgroundColor:'#292929', minHeight:20, maxHeight:25}} />
                </Mobile>
          </div>
        );
    }
}

export default Layout;