import React from "react";
import { Button, Icon } from "./ButtonImportStyle";
import { useState } from "react";
import ImportField from "../ImportField/ImportField";

const ButtonImport = () => {
  const [isImportingOn, setIsImportingOn] = useState(false);

  const isImportingOnHandler = (): void => setIsImportingOn(isImportingOn => !isImportingOn);

  return (
    <div>
      {isImportingOn && (
        <ImportField closeImportingView={isImportingOnHandler} />
      )}
      <Button onClick={isImportingOnHandler}><Icon /><p>Import Image</p></Button>
    </div>
  );
};

export default ButtonImport;
