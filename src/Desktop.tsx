import { FC, useState } from "react";
import { About } from "./components/Apps/About";
import { apps } from "./components/Apps/appConfig";
import { Credits } from "./components/Apps/Credits";
import { DesktopIcon } from "./components/DesktopIcon";
import { DesktopWindow } from "./components/DesktopWindow";
import FloodIt from "./components/Apps/FloodIt/FloodIt";

export const Desktop: FC = () => {
  const [activeWindow, setActiveWindow] = useState<undefined | string>();
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [closedWindows, setClosedWindows] = useState<string[]>([]);

  const getWindowFromName = (title: string) => {
    if (title === "Credits") return <Credits />;
    if (title === "About") return <About />;
    if (title === "Flood It") return <FloodIt />;
  };

  const renderedIcons = apps.map((app) => (
    <DesktopIcon
      image={app.image}
      title={app.title}
      openWindows={openWindows}
      closedWindows={closedWindows}
      setOpenWindows={setOpenWindows}
      setClosedWindows={setClosedWindows}
      setActiveWindow={setActiveWindow}
    />
  ));

  const renderedWindows = openWindows
    .filter((windowName) => !closedWindows.includes(windowName))
    .map((windowName) => (
      <DesktopWindow
        key={windowName}
        title={windowName}
        activeWindow={activeWindow}
        closedWindows={closedWindows}
        setActiveWindow={setActiveWindow}
        setClosedWindows={setClosedWindows}
      >
        {getWindowFromName(windowName)}
      </DesktopWindow>
    ));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#007a7a",
      }}
    >
      {...renderedIcons}
      {...renderedWindows}
    </div>
  );
};
