import React, { FC, PropsWithChildren } from "react";
import Draggable from "react-draggable";

interface DesktopWindowProps {
  title: string;
  activeWindow: string | undefined;
  closedWindows: string[];
  setActiveWindow: React.Dispatch<React.SetStateAction<undefined | string>>;
  setClosedWindows: React.Dispatch<React.SetStateAction<string[]>>;
}

export const DesktopWindow: FC<PropsWithChildren<DesktopWindowProps>> = ({
  title,
  activeWindow,
  closedWindows,
  setActiveWindow,
  setClosedWindows,
  children,
}) => {
  const isActiveWindow = activeWindow === title;

  return (
    <Draggable
      handle="div.title-bar"
      onMouseDown={() => setActiveWindow(title)}
    >
      <div
        style={{
          zIndex: isActiveWindow ? 2 : 1,
          position: "absolute",
        }}
        className="window"
      >
        <div className={`title-bar ${isActiveWindow ? "" : "inactive"}`}>
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button
              aria-label="Close"
              onClick={() => setClosedWindows([...closedWindows, title])}
            />
          </div>
        </div>
        <div className="window-body">{children}</div>
      </div>
    </Draggable>
  );
};
