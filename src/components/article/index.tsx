import './Article.scss'

const Article = ({imgUrl, date, cta, desc}:{imgUrl:string, date:string, cta:string, desc:string}) => {
  return (
    <div className='gpt3__blog-container_article'>
        <div className='gpt3__blog-container_article-image'>
          <img src={imgUrl} alt="" />
        </div>
        <div className='gpt3__blog-container_article-content'>
            <div>
            <p>{date}</p>
            <h1>{desc}</h1>
            </div>
            <p>Read Full article</p>
        </div>
    </div>
  )
}

export default Article