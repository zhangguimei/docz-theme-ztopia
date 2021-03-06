import React, { FunctionComponent, useState } from 'react';
import className from 'classnames/bind';
import { useConfig } from 'docz';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useTheme } from '../../helpers';

import Brand from './components/Brand';
import Search from './components/Search';
import styles from './Header.css';

const cx = className.bind(styles);

const Header: FunctionComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme, switchTheme } = useTheme();
  const {
    themeConfig: { colors },
  } = useConfig();
  return (
    <header
      className={cx('container')}
      style={{
        backgroundColor:
          theme === 'light' ? colors.whiteDark : colors.blackLight,
      }}
    >
      <Brand />
      <Search />
      <div className={cx('buttons')}>
        <button
          className={cx('button')}
          style={{
            color: isHovered ? colors.primary : 'inherit',
          }}
          onClick={switchTheme}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <FontAwesomeIcon
            icon={[theme === 'light' ? 'far' : 'fas', 'lightbulb']}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
