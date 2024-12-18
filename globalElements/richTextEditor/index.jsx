import React, { useCallback, useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import Toolbar from "./Toolbar/Toolbar";
import { getMarked, getBlock } from "./utils/SlateUtilityFunctions.js";
import { serialize } from "./utils/serializer";
import "./styles.css";

const Element = (props) => {
  return getBlock(props);
};
const Leaf = ({ attributes, children, leaf }) => {
  children = getMarked(leaf, children);
  return <span {...attributes}>{children}</span>;
};
const SlateEditor = ({ value, setValue, onChange, placeholder  }) => {
  const [editor] = useState(() => withReact(createEditor()));

  const handleEditorChange = (newValue) => {
    setValue(newValue);
  };

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  const handleCodeToText = (partialState) => {
    setHtmlAction((prev) => ({
      ...prev,
      ...partialState,
    }));
  };

  return (
    <div className="flex w-full flex-col border rounded-lg ">
      <Slate editor={editor} initialValue={value} onChange={handleEditorChange}>
        <div className=" border-b px-2 py-2">
          <Toolbar handleCodeToText={handleCodeToText} />
        </div>
        <div className=" px-2 py-2">
          <Editable
            placeholder={placeholder}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
          />
        </div>
      </Slate>
    </div>
  );
};

export default SlateEditor;
