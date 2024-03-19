import React from "react";

const Footer = ({ length }) => {
  const year = new Date();
  return (
    <div>
      <footer>
        <h2>
          {" "}
          Totally we have {length} list {length > 1 ? "Items" : "Item"}
        </h2>

        <h4> All the Copyrights &copy; {year.getFullYear()}</h4>
      </footer>
    </div>
  );
};

export default Footer;
