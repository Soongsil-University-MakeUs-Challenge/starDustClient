const { createContext, useState } = require("react");

export const ContextApi = createContext(null);

const ContextStore = (props) => {
  const [example, setExample] = useState("hello context api");
  return (
    <ContextApi.Provider
      value={{
        example,
        setExample,
      }}
    >
      {props.children}
    </ContextApi.Provider>
  );
};

export default ContextStore;
