import React from 'react';
function Footer(){
    let currentTime = new Date();
    let currentYear =currentTime.getFullYear()
    return(
        <div className="footer-container">
             <p>Contributed by ...</p>
             <p>&copy;{currentYear} GiveAway </p>
        </div>
    )
}
export default Footer;