import { Download, Home, Info } from '@mui/icons-material';

import { Drawer } from '@/components/Drawer';
import { urls } from '@/constants/urls';

import { NavbarItem } from '../NavbarItem';
import classes from './index.module.scss';
import { NavbarDrawerProps } from './models';

export const NavbarDrawer = ({ isOpen, onClose }: NavbarDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <div className={classes.item_container}>
        <NavbarItem title='Home' link='/'>
          <Home />
        </NavbarItem>
      </div>
      <div className={classes.item_container}>
        <NavbarItem title='About' link='/about'>
          <Info />
        </NavbarItem>
      </div>
      <div className={classes.item_container}>
        <NavbarItem title='Check out my CV' link={urls.cv} target='_blank'>
          <Download />
        </NavbarItem>
      </div>
    </Drawer>
  );
};
