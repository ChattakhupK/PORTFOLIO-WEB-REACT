import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import OG from "../assets/OG.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbars({ changeLanguage, t }) {
  const navigation = [
    { name: t("nav1"), current: false },
    { name: t("nav2"), current: false },
    { name: t("nav3"), current: false },
    { name: t("nav5"), current: false },
    { name: t("nav4"), current: false },
    { name: t("nav6"), current: false },
  ];

  const options = [
    { label: "English", value: "en" },
    { label: "Thai", value: "th" },
  ];

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img src={OG} className="h-8 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    activeClass="active"
                    to={`${item.name}`}
                    spy={true}
                    smooth={true}
                    duration={300}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white cursor-pointer"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <select
              onChange={(e) => {
                changeLanguage(e.target.value);
              }}
              className="appearance row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800"
            >
              {options.map((item, index) => {
                return (
                  <option key={index} value={item.value}>
                    {item.label[0] === item.label[1] ?item.label :item.label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item, index) => (
            <Link
              key={index}
              activeClass="active"
              to={`${item.name}`}
              spy={true}
              smooth={true}
              duration={300}
            >
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white cursor-pointer"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium cursor-pointer"
                )}
              >
                {item.name}
              </DisclosureButton>
            </Link>
          ))}
        </div>
        <div>
          <select
            onChange={(e) => {
              changeLanguage(e.target.value);
            }}
            className="w-full text-center py-2 appearance row-start-1 col-start-1 bg-slate-100 dark:bg-slate-700"
          >
              {options.map((item, index) => {
                return (
                  <option key={index} value={item.value}>
                    {item.label[0] === item.label[1] ?item.label :item.label}
                  </option>
                );
              })}
          </select>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
