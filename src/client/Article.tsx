import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import * as ReactMarkdown from 'react-markdown';

export const Article = () => {
  const {name} = useParams();
  const [article, setArticle] = useState<string>('');

  useEffect(() => {
    fetch(`/api/article/${name}`)
      .then((response) => response.text())
      .then((article) => setArticle(article));
  }, [])

  return (
    <div>
      <ReactMarkdown source={article} />
    </div>
  )
}