import React, { useEffect, useState } from "react";

export const ProjectBadge = ({ state }: { state: string }): JSX.Element => {
  const [backgroundColor, setBackgroundColor] = useState("#ACEBCE");
  const handleBadgeColor = (projectState: string) => {
    switch (projectState) {
      case "at risk":
        setBackgroundColor("#F4D8AC");
        break;
      case "off track":
        setBackgroundColor("#EFA3A6");
        break;
      case "on hold":
        setBackgroundColor("#9DB7EE");
        break;
      case "complete":
        setBackgroundColor("#129DA4");
        break;
      default:
        setBackgroundColor("#ACEBCE");
    }
  };
  useEffect(() => {
    handleBadgeColor(state);
  }, [state]);
  return (
    <div>
      <span className="badge" style={{ backgroundColor: backgroundColor }}>
        {state}
      </span>
    </div>
  );
};
