/* eslint-disable react/prop-types */
import { Drawer } from "flowbite-react";
import Leftbar from "./Leftbar";
const DrawerSidebar = ({ show, onHide }) => {
  return (
    <Drawer className="bg-sky-100" open={show} onClose={onHide}>
      <Drawer.Items>
        <Leftbar onHide={() => onHide()} />
      </Drawer.Items>
    </Drawer>
  );
};

export default DrawerSidebar;
