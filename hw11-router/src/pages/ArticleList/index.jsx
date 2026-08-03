import { Link } from "react-router-dom";
import { articles } from "../../data/articles";
import styles from "./ArticleList.module.css"

function ArticleList() {

    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Список статей</h2>

            <div className={styles.grid}>
                {articles.map((article)=>(
                    <div key={article.id} className={styles.card}>
                        <h3 className={styles.cardTitle}>{article.title}</h3>
                        <Link to={`/articleList/${article.id}`} className={styles.linkButton}>Статья {article.id}</Link>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default ArticleList