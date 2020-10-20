import * as React from 'react';
import { ArticleListResponse } from '../common/ArticleListResponce'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const ArticleList = () => {
  const [articles, setArticles] = useState<string[]>([])

  useEffect(() => {
    fetch('/api/article')
      .then<ArticleListResponse>(res => res.json())
      .then(article => setArticles(article))
  }, [])

  return (
    <nav>
      <ul>
        {articles.map((node) => (
          <li>
            <Link to={`/article/${node}`}>{node}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}