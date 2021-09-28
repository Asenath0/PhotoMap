import React, { FC } from "react";
import { On, Off } from "./ImportFieldAnimationStyle";

interface ImportFieldAnimationInterafce {
  isImportingOn: boolean;
  child: React.ReactNode;
}

const ImportFieldAnimation: FC<ImportFieldAnimationInterafce> = ({
  isImportingOn,
  child,
}) => {
  return <>{isImportingOn ? <On>{child}</On> : <Off>{child}</Off>}</>;
};

export default ImportFieldAnimation;
