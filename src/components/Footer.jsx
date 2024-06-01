import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop: {""}
            <span className="underline text-blue">
              Find an Apple Store {""}
            </span>
            or {""}
            <span className="underline text-blue">other retailer</span> {""}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 000-8900-1966
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <div
                key={link.name}
                className="flex items-center font-semibold text-gray text-xs"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img
                    src={link.icon}
                    alt={`${link.name} icon`}
                    className="w-4 h-4 mr-2"
                  />
                  {link.name}
                </a>
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
