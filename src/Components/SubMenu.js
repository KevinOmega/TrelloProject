import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import { links } from "../variables";

const SubMenu = () => {
  const { NavId, openSubMenu } = useGlobalContext();
  const [list, setList] = useState({});

  useEffect(() => {
    if (NavId !== 0 && NavId !== 4) {
      setList(links.find((link) => link.id === NavId));
    }
  }, [NavId]);

  return (
    <div id="subMenu" className={openSubMenu ? "activeSubMenu" : undefined}>
      {Object.keys(list).length > 0
        ? list.content.map((item) => {
            const { id, logo, title, info } = item;
            return (
              <div className="submenu-item" key={id}>
                <div className="item-header">
                  <span>{logo}</span>
                  <p>{title}</p>
                </div>
                <div className="info">{info}</div>
              </div>
            );
          })
        : undefined}
    </div>
  );
};

export default SubMenu;
