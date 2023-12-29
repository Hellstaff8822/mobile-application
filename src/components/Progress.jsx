import React, { useState } from 'react';

export const Progress = () => {
  const [progress, setProgress] = useState(60);
  const progressBarStyle = {
    width: `${progress}%`,
    background: '#c93f8d',
    height: '8px',
    borderRadius: '5px',
    position: 'relative',
  };
  const handleSetProgress = (newProgress) => {
    const clampedProgress = Math.min(newProgress, 100);
    setProgress(clampedProgress);
  };

  return (
    <div className="progress">
      <div className="news">
        <div className="news__title">News</div>
        <div className="news-show">
          <div className="news-show__item">Short news title will be here</div>
          <div className="news-show__item primary-item">
            Short news title will be here
          </div>
        </div>
      </div>
      <div className="tasks">
        <div className="tasks__title">Daily Tasks:</div>
        <div className="tasks__card">
          <div className="tasks-item third">
            <div className="tasks-item__title">Daily astromeditation</div>
            <div className="tasks-item__number">3</div>
          </div>
          <div className="tasks-item second">
            <div className="tasks-item__title">Daily astromeditation</div>
            <div className="tasks-item__number">2</div>
          </div>
          <div className="tasks-item first">
            <div className="tasks-item__title">Daily mantra</div>
            <div className="tasks-item__number">1</div>
          </div>
        </div>
      </div>
      <div className="overall">
        <div className="overall__title">
          Your overall progress is <span>{progress}%</span>
        </div>
        <div
          onClick={() => handleSetProgress(progress + 5)}
          style={progressBarStyle}
          className="overall__progress"></div>
      </div>

      <div className="questions">
        <div className="questions-item">
          <div className="questions-item__info">
            <div className="questions-item__icon">
              <img src="/src/assets/calendar 1.png" alt="" />
            </div>
            <div className="questions-item__title">How was your day?</div>
          </div>
          <div className="questions-item__sub">
            <div className="questions-item__desc">
              Lorem ipsum dolor sit amet, consectetur adipscing elit. Ut vel
              odio en urna ultrice...
            </div>
            <div className="questions-item__arrow">
              <a href="/">
                <img src="/src/assets/arrow-right 1.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="questions-item item-two">
          <div className="item-two__info">
            <div className="item-two__icon">
              <img src="/src/assets/clock.svg" alt="" />
            </div>
            <div className="item-two__title">Current Transist: 3rd House</div>
          </div>
          <div className="item-two__sub">
            <div className="item-two__desc">
              This is demonstrate siblings, hobbies, efforts, confidence,
              friends and short tr...
            </div>
            <div onClick={() => handleSetProgress(progress + 5)} className="item-two__arrow">
              <a href="/">
                <img src="/src/assets/arrow-right 2.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
