import React, { useEffect } from "react";

const Alert = ({ text, setIsAlert }) => {
  function dismissAlert() {
    setIsAlert((prev) => !prev);
  }
  useEffect(() => {
    setTimeout(dismissAlert, 1500);
  }, []);
  return (
    <section className="alert">
      <p className="alert__text">{text}</p>
    </section>
  );
};

export default Alert;
