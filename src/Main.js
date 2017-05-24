import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DetailsPage from './DetailsPage'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: true
    }
  }

  render() {
    return (
      <Router>
        <div>
        {this.state.articles.map((article, idx) => {
          return <div key={idx} className="row container">
                    <div className="col s12 m7">
                      <div className="card">
                        <div className="card-image">
                          <img src={article.urlToImage} />
                          <span className="card-title teal">{article.title}</span>
                        </div>
                        <div className="card-content">
                          <p>Published: {article.publishedAt}</p>
                        </div>
                        <div className="card-action">
                          <a href="#">Details</a>
                          { /*  */ }
                        </div>
                      </div>
                    </div>
                  </div>
        })}
        </div>
      </Router>
      
    )
  }

  componentWillMount() {
    return (
      <h1>Loading...</h1>
    )
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=234b1f59513948499b5f8f009a8c22fb`).then(res => {
      console.log(res.data.articles);
      this.setState({
        articles: res.data.articles,
        loading: false
      })
    })
  }
}

export default Main;