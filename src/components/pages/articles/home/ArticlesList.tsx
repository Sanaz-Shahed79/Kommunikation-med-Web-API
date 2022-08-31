import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// API
import { useAPI } from "../../../context/ArticlesContext";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
// Components
import ArticleItem from './ArticleItem';


function ArticlesList() {
    const { articles } = useAPI();
    let articlesInfo = articles ? articles : {};


    return (
        <section id="articles-wrapper">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        articlesInfo.map((article) => {
                            return <Grid item xs={3}>
                                <ArticleItem data={article} key={article.id} />
                            </Grid>
                        })
                    }
                </Grid>
            </Box>

        </section>

    )
}

export default ArticlesList;
