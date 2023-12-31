/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Sidebar.css';
import NavItem from './NavItem';

function Sidebar(props) {
  const [isPressed, setIsPressed] = useState(false);

  // function renderSidebar() {
  //   if (isPressed) {
  //     return (
  //       <>
  //         <div
  //           className="inset-sidebar-container"
  //           // style={
  //           //   isPressed
  //           //     ? {
  //           //         width: '100%',
  //           //         height: '100%',
  //           //       }
  //           //     : {
  //           //         width: 0,
  //           //         height: 0,
  //           //       }
  //           // }
  //           data-bs-toggle="collapse"
  //           href="#collapsible"
  //           onClick={() => {
  //             setIsPressed(!isPressed);
  //           }}
  //         ></div>
  //       </>
  //     );
  //   }
  // }

  return (
    <div className="sidebar-container">
      <button
        type="button"
        className="btn btn-dark button-collapse "
        data-bs-toggle="collapse"
        href="#collapsible"
        onClick={() => {
          setIsPressed(!isPressed);
        }}
        style={{
          width: isPressed ? '280px' : 'fit-content',
          borderTopRightRadius: isPressed ? 0 : '0.375rem',
          borderBottomRightRadius: isPressed ? 0 : '0.375rem',
          borderColor: isPressed ? '#212529' : '#2b3035',
          backgroundColor: isPressed ? '#212529' : '#2b3035',
          boxShadow: isPressed
            ? 'none'
            : '2px 2px 2px 0.1rem rgba(12, 13, 14, 0.15)',
        }}
      >
        <i
          className={`fa-solid ${isPressed ? 'fa-bars-staggered' : 'fa-bars'}`}
        ></i>
      </button>
      <div className="container collapse" id="collapsible">
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
          style={{
            backgroundColor: '#fff',
            width: '280px',
            height: '100%',
            position: 'absolute',
            left: '0',
          }}
        >
          <a
            href="#"
            className="sidebar-title d-flex align-items-center mt-5 mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <img
              className="profile-image"
              src="https://i.ibb.co/8NSGhT4/FOTO-FORMAL-DEF.png"
            ></img>

            <span className="fs-4">Gonzalo Zanelli</span>
          </a>

          <ul className="nav nav-pills flex-column mb-auto mt-5">
            <NavItem
              href="https://github.com/l0ku"
              classes="fa-brands fa-github"
              title="GitHub"
              openWindow={true}
            />
            <NavItem
              href="https://linkedin.com/in/gzanelli"
              classes="fa-brands fa-linkedin"
              title="LinkedIn"
              openWindow={true}
            />
            <NavItem
              href="https://wa.me/5491169099995"
              classes="fa-brands fa-whatsapp"
              title="WhatsApp"
              openWindow={true}
            />
            <NavItem
              href="mailto:gonzalozanelli1@gmail.com"
              classes="fa-solid fa-envelope"
              title="Email me"
              openWindow={true}
            />
            <NavItem
              href="javascript:void(0);"
              classes="fa-regular fa-circle-question"
              title="About this project"
              onClick={() => {
                props.clickedAbout();
                console.log(`Clicked`);
              }}
              openWindow={false}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
