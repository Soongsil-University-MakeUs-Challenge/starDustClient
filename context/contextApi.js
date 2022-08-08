const { createContext, useState } = require("react");

export const ContextApi = createContext(null);

const ContextStore = (props) => {
  const [example, setExample] = useState("hello context api");
  const [exCount, setExCount] = useState(0);
  return (
    <ContextApi.Provider
      value={{
        example,
        setExample,
        exCount,
        setExCount,
      }}
    >
      {props.children}
    </ContextApi.Provider>
  );
};

export default ContextStore;
