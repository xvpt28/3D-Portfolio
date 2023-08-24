// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { navLinks } from "../constants";

const Menu = ({ setmenuVisible }) => {
  return (
    <section
      className="menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center"
      style={{ visibility: "hidden" }}
    >
      <div className="flex-none overflow-hidden flex items-center justify-center">
        <div className="text-center opacity-0 overflow-y-auto flex flex-none justify-center items-center max-h-screen">
          <ul
            className="list-none py-4 px-0 m-0 block max-h-screen"
            role="menu"
          >
            {navLinks.map((nav) => (
              <li
                className="sm:p-4 m-6 sm:text-5xl text-3xl p-3 block"
                key={nav.id}
                role="menuitem"
              >
                <a
                  className="link relative inline font-bold text-5xl duration-500 hover:no-underline"
                  href={`#${nav.id}`}
                  onClick={setmenuVisible.bind(null, false)}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
