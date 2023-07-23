import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <header>
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-white">Redwood Blog</div>
              <ul className="flex space-x-4">
                <li className="text-white">
                  <Link to={routes.home()}>Home</Link>
                </li>
                <li className="text-white">
                  <Link to={routes.about()}>About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <main>{children}</main>
      </main>
    </>
  )
}

export default BlogLayout
