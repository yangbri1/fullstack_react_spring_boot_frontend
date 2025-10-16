import fb_logo from "../images/icons8-facebook-50.png";
import twitter_logo from "../images/icons8-twitter-50.png";
import gmail_logo from "../images/icons8-gmail-50.png";
import wechat_logo from "../images/icons8-wechat-50.png";
import qq_logo from "../images/icons8-qq-50.png";

// Aside: decided to directly export default function here since there was only 1 function on this component page
export default function Footer(){
    return(
        <>
            <div className="pulse">
                <nav aria-label="primary"></nav>
                {/* clicking on any of these social media icons would re-direct you to their associated website */}
                <a href="https://www.facebook.com/" target="_blank" title="Facebook"> 
                    <img src={fb_logo} alt="facebook" />
                </a>
                <a href="https://www.twitter.com/" target="_blank" title="Twitter"> 
                    <img src={twitter_logo} alt="twitter" />
                </a>
                <a href="https://www.gmail.com/" target="_blank" title="Gmail"> 
                    <img src={gmail_logo} alt="gmail" />
                </a>
                <a href="https://www.wechat.com/" target="_blank" title="Wechat"> 
                    <img src={wechat_logo} alt="wechat" />
                </a>
                <a href="https://www.qq.com/" target="_blank" title="QQ"> 
                    <img src={qq_logo} alt="qq" />
                </a>
                <p ><i>This website is neither endorsed nor affiliated by any means to any country, institution, or third party entity.</i></p>
            </div>
        </>
    )
}

// the other way is to export the function after defining it which works as well
// works for exporting multiple components on this page ... tho each when importing each component name must match
// export { Footer, (otherComponents), ... }; 
// export default Footer;