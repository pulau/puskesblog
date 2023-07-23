import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type LayoutProps = {
  title: string
  titleTo: string
  buttonLabel: string
  buttonTo: string
  children: React.ReactNode
}

const ScaffoldLayout = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  children,
}: LayoutProps) => {
  return (
    <div className="mx-auto">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <nav className="mb-10 border-gray-200 px-2">
        <h1 className="mb-10 border-gray-200 px-2">
          <Link to={routes[titleTo]()} className="rw-link">
            {title}
          </Link>
        </h1>
        <Link to={routes[buttonTo]()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> {buttonLabel}
        </Link>
      </nav>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ScaffoldLayout
