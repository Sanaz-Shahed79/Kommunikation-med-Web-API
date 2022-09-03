import { Link } from "react-router-dom";

// Styles
import '../../../assets/css/ArticleItem.css'
function ArticleItem(props) {
    console.log(props)
    return (
        <Link to={'/articles/' + props.data.id} >
            <div className="card">
                <div className="card-image">
                    <img src={props.data.image} alt={props.data.title} />
                </div>
                <div className="card-info">
                    <h4 className="card-title">{props.data.title}</h4>
                    <p className="card-date">Date : {props.data.created_at}</p>
                </div>
            </div>
        </Link>

    )
}
export default ArticleItem;