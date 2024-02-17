import React, { FC } from "react";
import Draggable from "react-draggable";

interface DesktopIconProps {
  image: string;
  title: string;
  openWindows: string[];
  closedWindows: string[];
  setOpenWindows: React.Dispatch<React.SetStateAction<string[]>>;
  setClosedWindows: React.Dispatch<React.SetStateAction<string[]>>;
  setActiveWindow: React.Dispatch<React.SetStateAction<undefined | string>>;
}

export const DesktopIcon: FC<DesktopIconProps> = ({
  image,
  title,
  openWindows,
  closedWindows,
  setOpenWindows,
  setActiveWindow,
  setClosedWindows,
}) => {
  const openApp = () => {
    if (!openWindows.includes(title)) {
      setOpenWindows([...openWindows, title]);
    }
    if (closedWindows.includes(title)) {
      const indexOfAppToRemove = closedWindows.indexOf(title);
      closedWindows.splice(indexOfAppToRemove, 1);
      setClosedWindows([...closedWindows]);
    }
    setActiveWindow(title);
  };
  return (
    <Draggable>
      <div
        tabIndex={0}
        className="desktopIcon"
        style={{
          color: "white",
          padding: "5px",
          margin: "5px",
          display: "inline-block",
          width: "50px",
          height: "50px",
          borderRadius: "3px",
        }}
        onDoubleClick={openApp}
      >
        <img
          style={{
            margin: "auto",
            display: "block",
          }}
          draggable="false"
          src={image}
          alt="icon"
        />
        <div
          style={{
            marginTop: "5px",
            textAlign: "center",
          }}
        >
          {title}
        </div>
      </div>
    </Draggable>
  );
};
