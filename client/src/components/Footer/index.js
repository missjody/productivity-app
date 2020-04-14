import React from 'react';

const footerStyle = {
  backgroundColor: "#E27D60",
  fontSize: "20px",
  color: "white",
  borderTop: "1px solid #E27D60",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

const Footer = ({ children }) => {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}

      </div>
    </div>
  );
}

export default Footer;

