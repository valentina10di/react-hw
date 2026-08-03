
import { Link, useParams } from 'react-router-dom';
import styles from './ArticleDetails.module.css'
import { articles } from '../../data/articles';


function ArticleDetails() {
    const {articleId} = useParams()

    const article = articles.find((article) => article.id === Number(articleId)
    )
    if (!article){
        return(
            <div className={styles.container}>
                <h3>Статья не найдена</h3>
                <Link to ='/articleList' className={styles.backLink}>Назад
                </Link>
            </div>
        )
    }

    return(
        <div className={styles.container}>
            <h3 className={styles.title}>{article.title}</h3>
            <p className={styles.content}>{article.content}</p>

            <Link to='/articleList' className={styles.backButton}>Назад
            </Link>

        </div>
    )
}

export default ArticleDetails;