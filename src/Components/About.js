import React, { Component } from 'react';

class About extends Component {
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
                    <script
                        src="https://topmate-embed.s3.ap-south-1.amazonaws.com/v1/topmate-embed.js"
                        user-profile="https://topmate.io/embed/profile/aakash_neve?theme=008080"
                        btn-style='{"backgroundColor":"#000","color":"#fff","border":"1px solid #000"}'
                        embed-version="v1"
                        button-text="Let's Connect on Topmate"
                        position-right="30px"
                        position-bottom="30px"
                        custom-padding="0px"
                        custom-font-size="16px"
                        custom-font-weight="500"
                        custom-width="200px"
                        async=""
                        defer=""
                    ></script>
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
            </div>
         </div>
            </div>
   </section>
    );
  }
}

export default About;
