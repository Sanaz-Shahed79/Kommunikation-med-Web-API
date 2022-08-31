
import '../../../assets/css/ArticleAdd.css'
import { useNavigate } from 'react-router-dom';

function ArticleAdd() {
    const navigate = useNavigate();
    async function addPost(event){
        event.preventDefault();
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;


        let sendArticle = await fetch('http://localhost:5013/api/articles/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                description: description,
            })
        })
        let newArticle = await sendArticle.json();
        if(newArticle.title){
            alert('POSTED!')
            event.target.reset();
            navigate("/")

        }

    }
    return (
        
        <form id='aritcleForm' onSubmit={addPost}>
            <input type="text" name="title" placeholder="Article Title"/>
            <textarea name="description" placeholder="Article Description"></textarea>
            <input type="submit" value="POST" />
        </form>

    )
}

export default ArticleAdd;
