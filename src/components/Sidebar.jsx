import React from "react";

const Sidebar = (props) => {
  const { toggleSidebar, data } = props;
  return (
    <div className="sidebar">
      <div onClick={() => toggleSidebar()} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div>
          <p className="sidebarDate">{data?.date}</p>
          <p className="sidebarExplanation">{data?.explanation}</p>
        </div>
        <button onClick={() => toggleSidebar()}>
          <i className="fa-solid fa-arrow-right "></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
