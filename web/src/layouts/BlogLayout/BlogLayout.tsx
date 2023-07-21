import { Link, routes } from "@redwoodjs/router"

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return <><header transparent >
    <h1>Redwood Blog</h1>
    <nav>
      <ul>
        <li>
          <Link to={routes.home()}>Home</Link>
        </li>
        <li>
          <Link to={routes.about()}>About</Link>
        </li>
      </ul>
    </nav>
  </header>
    <main>
      <main>{children}</main>
    </main></>
}

export default BlogLayout