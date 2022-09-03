import { APIContextProvider } from "../../context/ArticlesContext";

// Components
import Intro from './home/Intro';
import ArticlesList from "./home/ArticlesList";
// Styles
import '../../assets/css/Home.css';



function Home() {

    return (
        <>
            <APIContextProvider>

                <Intro />
                <ArticlesList />
            </APIContextProvider>

        </>

    )
}

export default Home;