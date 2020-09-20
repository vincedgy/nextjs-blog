import React from "react";

const TitleComponent = ({title}) => {
  return (
    <div>
      <h1 className="title"><a>{title}</a></h1>

      <style jsx>{`
        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          cursor: pointer;
          text-decoration: underline;
          color: purple;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
      `}</style>
    </div>
  );
};

export default TitleComponent