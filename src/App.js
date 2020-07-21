import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getArticlesAction,
  addArticleAction,
  deleteArticleAction,
  updateArticleAction
} from "./redux/actions";
const App = ({ getArticles, articles, addArticle, delArticle,editArticle }) => {
  const [input, setInput] = useState("");
  const [article, setArticle] = useState({});

  const [editArticles, setEditArticles] = useState({isEdit: false,key:0});
  
  
  useEffect(() => {
    getArticles();
    // eslint-disable-next-line
  }, []);
  const handleClick = () => {
    if (input !== "") {
      addArticle({
        id: 4,
        title: input
      });
      setInput("");
    }
  };
  const editHandle =(article,key)=>{
    setEditArticles({isEdit:true,key: key});
    setArticle(article)
    setInput(article.title);

  }
const editArticleHandle =()=>{
let temp = article;
temp.title = input; 
  setArticle(temp)
  editArticle(article,editArticles.key);
  setEditArticles({isEdit:false});
  setInput('')
}
  const handleInput = e => {
    setInput(e.target.value);
  };
  return (
    <div className="App">
      <div className="content">
        <div className="title">
          <input placeholder="article" value={input} onChange={handleInput} />
          {editArticles.isEdit?<button onClick={editArticleHandle }>edit article</button>
          :<button onClick={handleClick}>add article</button>}
        </div>
        <ul>
          {articles.map((article,key) => (
            <li key={key}>
              <span>{article.title}</span>
              <button onClick={data => delArticle(article)}> Del</button>
              <button onClick={()=> editHandle(article,key)}> Edit</button>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  getArticles: () => dispatch(getArticlesAction()),
  addArticle: data => dispatch(addArticleAction(data)),
  delArticle: data => dispatch(deleteArticleAction(data)),
  editArticle: (data,key) => dispatch(updateArticleAction(data,key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
