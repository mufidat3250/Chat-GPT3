import { Article } from "../../components";
import "./Blog.scss";
import { blog1, blog2, blog3, blog4, blog5 } from ".";

const blogs = [
  {
    date: `Sep 26, 2021`,
    img: blog2,
    desc: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    cta: "Read Full Article",
  },
  {
    date: `Sep 26, 2021`,
    img: blog3,
    desc: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    cta: "Read Full Article",
  },
  {
    date: `Sep 26, 2021`,
    img: blog4,
    desc: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    cta: "Read Full Article",
  },
  {
    date: `Sep 26, 2021`,
    img: blog5,
    desc: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    cta: "Read Full Article",
  },
];
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog1}
            date={"Sep 26, 2021"}
            cta={"Read Full Article"}
            desc={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          {blogs.map((blog)=> <Article imgUrl={blog.img} date={blog.date} cta={blog.cta} desc={blog.desc}  />)}
        </div>
      </div>
    </div>
  );
};

export default Blog;
