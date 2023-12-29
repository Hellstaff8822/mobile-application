import React from 'react';
import { Head } from '../profile-pages/Head';
import { Footer } from '../components/Footer';

export const Profile = () => {
  return (
    <div className="wrapper">
      <Head />
      <div className="profile">
        <div className="profile__info">
          <img src="/src/assets/photo-profile.png" alt="photo" />
          <div className="profile__about">
            <div className="profile__name">Angelica Jackson</div>
            <div className="profile__pos">Analyzer</div>
            <a href="/" className="profile__change">
              Change profile
            </a>
          </div>
        </div>
        <div className="sides">
          <div className="sides__strong">
            <div className="sides__title">Strong side:</div>
            <div className="sides-list">
              <a href="/" className="sides-list__item">
                Analytics
              </a>
              <a href="/" className="sides-list__item">
                Perfectionism
              </a>
              <a href="/" className="sides-list__item">
                Analytics
              </a>
            </div>
          </div>
          <div className="sides__weak">
            <div className="sides__title">Weak side:</div>
            <div className="sides-list ">
              <a href="/" className="sides-list__item weak">
                Perfectionism
              </a>
              <a href="/" className="sides-list__item weak">
                Analytics
              </a>
            </div>
          </div>
        </div>
        <div className="reports">
          <div className="reports__title">My Reports:</div>
          <div className="reports__items">
            <div className="reports-item">
              <div className="reports-item__info">
                <div className="reports-item__icon">
                  <img src="/src/assets/user (8) 1.png" alt="user" />
                </div>
                <div className="reports-item__title">
                  Astro- psychological report
                </div>
              </div>
              <div className="reports-item__sub">
                <div className="reports-item__desc">
                  Some short description of this type of report.
                </div>
              </div>
            </div>
            <div className="reports-item item-tow">
              <div className="item-tow__info">
                <div className="item-tow__icon">
                  <img src="/src/assets/calendar (1) 1.png" alt="check" />
                </div>
                <div className="item-tow__title">Monthly prediction report</div>
              </div>
              <div className="item-tow__sub">
                <div className="item-tow__desc">
                  Some short description of this type of report.
                </div>
              </div>
            </div>
            <div className="reports-item item-three">
              <div className="item-three__info">
                <div className="item-three__icon">
                  <img src="/src/assets/check-square 1.png" alt="check" />
                </div>
                <div className="item-three__title">Daily Prediction</div>
              </div>
              <div className="item-three__sub">
                <div className="item-three__desc">
                  Some short description of this type of report.
                </div>
              </div>
            </div>
            <div className="reports-item item-four">
              <div className="item-four__info">
                <div className="item-four__icon">
                  <img src="/src/assets/heart (4) 1.png" alt="heart" />
                </div>
                <div className="item-four__title">Love reportt</div>
              </div>
              <div className="item-four__sub">
                <div className="item-four__desc">
                  Some short description of this type of report.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Profile;
