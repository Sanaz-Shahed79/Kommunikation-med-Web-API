
import { useAPI } from "../../../context/ArticlesContext";
import '../../../assets/css/ArticleShow.css'
function ArticleShow(props) {
    console.log(props)
    let url = location.href.split('/');
    let id = url[url.length - 1];
    const { articles } = useAPI();

    let articlesInfo = articles ? articles : {};
    let article = articlesInfo.filter((article) => article.id == `${id}`)[0] ?? {};
    return (
        <>
            <section id="article-show">
                <img src={article.image} alt={article.title} />
                <h1 className="article-title">{article.title}</h1>
                <p className="article-description">{article.description}</p>
                <small>Date : <span className="article-date">{article.created_at}</span></small>
            </section>
            
        </>

    )
}

export default ArticleShow;
