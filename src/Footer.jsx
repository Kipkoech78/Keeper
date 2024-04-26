import React from "react";
const time = new Date();
const year = time.getFullYear();
function Footer() {
  return (
    <div className="footer">
      <p> Copyright &copy; {year} </p>
    </div>
  );
}
export default Footer;
