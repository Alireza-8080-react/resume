import { Drawer } from '@/components/Drawer';

import { NavbarItem } from '../NavbarItem';
import classes from './index.module.scss';
import { NavbarDrawerProps } from './models';

export const NavbarDrawer = ({ isOpen, onClose }: NavbarDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <div className={classes.item_container}>
        <NavbarItem title='Home' link='/' icon='bx bxs-home' />
      </div>
      <div className={classes.item_container}>
        <NavbarItem title='About' link='/about' icon='bx bxs-info-circle' />
      </div>
      <div className={classes.item_container}>
        <NavbarItem title='Download CV' link='/CV' icon='bx bxs-download' />
      </div>
    </Drawer>
  );
};
