import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();
export function APIContextProvider({ children }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `http://localhost:5013/api/articles`
      );
      console.log('DATA DATA')
      setArticles(data.reverse());
    }
    fetchData();
  }, []);
  return (
    <APIContext.Provider
      value={{
        articles
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
