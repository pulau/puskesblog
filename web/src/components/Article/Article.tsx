import { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
  article: Post
}
const Article = ({ article }: Props) => {
  return (
    <>
      <article key={article.id}>
        <p className="text-lg font-bold text-gray-900">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </p>
        <p className="text-justify text-lg font-light text-gray-500 lg:mb-2 lg:text-sm">
          {article.body}
        </p>
        <div>Posted at: {article.createdAt}</div>
      </article>
    </>
  )
}

export default Article
