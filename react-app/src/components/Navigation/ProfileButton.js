import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session'
import './NavBar.css'


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className="profile-and-dropdown">
      <div className='profile-container'>
        <img className="user-image-nav-1"
          src={user.photo}
          onClick={openMenu}
        />
      </div>
      {showMenu && (
        <div className="profile-dropdown">
          <div className='profile-dropdown-content'>
            <div className="profile-dropdown-name">
              <img className="user-image-nav-2"
                src={user.photo}
                onClick={openMenu}
              />
              <div className="profile-username">{user.username}</div>
            </div>


            <div className="line"></div>
            <div className="profile-item">Meet the developers</div>

            <div className="profile-item blue-hover">
              <div>Austin Dang</div>
              <div>
                <a className="unset" href="https://www.linkedin.com/in/austin-dang-106834191/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a className="unset" href="https://github.com/AuDang">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>

            <div className="profile-item blue-hover">
              <div>Brendan Downing</div>
              <div>
                <a className="unset" href="https://www.linkedin.com/in/brendan-downing-641672228/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a className="unset" href="https://github.com/Downster">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>

            <div className="profile-item blue-hover">
              <div>Celeste Winterton</div>
              <div>
                <a className="unset" href="https://angel.co/u/celeste-winterton">
                  <i class="fa-brands fa-angellist"></i>
                </a>
                <a className="unset" href="https://www.linkedin.com/in/celestewinterton/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a className="unset" href="https://github.com/celestewinterton">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>

            <div className="profile-item blue-hover">
              <div>Jingling Jin</div>
              <div>
                <a className="unset" href="https://github.com/ellen20">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>


            <div className="line"></div>
            <div className="profile-link-container">
              <button onClick={logout}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
