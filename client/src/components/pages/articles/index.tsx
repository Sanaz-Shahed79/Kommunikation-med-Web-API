
import { APIContextProvider } from "../../../context/ArticlesContext";

import ArticleShow from "./Show";
function ArticleIndex() {
  
    return (
        <APIContextProvider>
            <ArticleShow />
        </APIContextProvider>

    )
}

export default ArticleIndex;