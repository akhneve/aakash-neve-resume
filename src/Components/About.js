import React, { Component } from 'react';

class About extends Component {


  componentDidMount() {
      // Dynamically append the Topmate script
      const script = document.createElement('script');
      script.src = "https://topmate-embed.s3.ap-south-1.amazonaws.com/v1/topmate-embed.js";
      script.setAttribute("user-profile", "https://topmate.io/embed/profile/aakash_neve?theme=008080");
      script.setAttribute("btn-style", '{"backgroundColor"#008080","color":"#fff","border":"1px solid #000"}');
      script.setAttribute("embed-version", "v1");
      script.setAttribute("button-text", "Connect on Topmate");
      script.setAttribute("custom-padding", "0px");
      script.setAttribute("custom-font-size", "16px");
      script.setAttribute("custom-font-weight", "500");
      script.setAttribute("custom-width", "500px");
      script.async = true;
      script.defer = true;

      // Append the script to the Topmate container div
      const targetDiv = document.getElementById("topmate-container");
        if (targetDiv) {
            targetDiv.appendChild(script);
        }
  }

  render() {
    if(this.props.data){
      var name = this.props.data.name;
      //var profilepic_avatar = $(location).attr('href')+"/images/"+this.props.data.avatar;
      var bio = this.props.data.bio;
      //var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
                    {/* }<img className="profile-pic"  src={profilepic_avatar} alt="Aakash Neve Profile Pic" />*/}
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
                                <span>{/*{street}*/}{city}<br />
                                    {/*{city}, */}{state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload}  target="_blank" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
               <div className = "Topmate"> 
                            <p>
                                <a
                                    onClick={() => window.open("https://topmate.io/embed/profile/aakash_neve?theme=008080", "TopmatePopup", "width=600,height=600,resizable,scrollbars")}
                                    className="button"
                                    style={{ cursor: "pointer" }}
                                >
                                    <i className="fa fa-link" style={{ marginRight: "8px" }}></i>Let's Connect on Topmate
                                </a>
                            </p>
                </div>
            </div>
         </div>
            </div>
   </section>
    );
  }
}

export default About;
