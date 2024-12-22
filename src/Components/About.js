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
                            <p>
                                <a
                                    onClick={() => {
                                        const modal = document.createElement("div");
                                        modal.style.position = "fixed";
                                        modal.style.top = "0";
                                        modal.style.left = "0";
                                        modal.style.width = "100%";
                                        modal.style.height = "100%";
                                        modal.style.backgroundColor = "rgba(0,0,0,0.8)";
                                        modal.style.display = "flex";
                                        modal.style.justifyContent = "center";
                                        modal.style.alignItems = "center";
                                        modal.style.zIndex = "1000";

                                        const iframe = document.createElement("iframe");
                                        iframe.src = "https://topmate.io/embed/profile/aakash_neve?theme=008080";
                                        iframe.style.width = "80%";
                                        iframe.style.height = "80%";
                                        iframe.style.border = "none";

                                        const closeButton = document.createElement("button");
                                        closeButton.innerText = "×";
                                        closeButton.style.position = "absolute";
                                        closeButton.style.top = "20px";
                                        closeButton.style.right = "20px";
                                        closeButton.style.background = "#fff";
                                        closeButton.style.border = "none";
                                        closeButton.style.fontSize = "24px";
                                        closeButton.style.cursor = "pointer";
                                        closeButton.addEventListener("click", () => {
                                            document.body.removeChild(modal);
                                        });

                                        modal.appendChild(iframe);
                                        modal.appendChild(closeButton);
                                        document.body.appendChild(modal);
                                    }}
                                    className="button"
                                    style={{ cursor: "pointer" }}
                                >
                                    <i className="fa fa-calandar" style={{ marginRight: "8px" }}></i>Schedule a call
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
