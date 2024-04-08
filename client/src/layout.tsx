export function NavBar(props: React.PropsWithChildren) {
    return <div className="nav-bar">{props.children}</div>
}

export function Page(props: React.PropsWithChildren) {
    return <div className="page">{props.children}</div>
}

export function Content(props: React.PropsWithChildren) {
    return <div className="content">{props.children}</div>
}

export function ActionBar(props: React.PropsWithChildren) {
    return <div className="action-bar">{props.children}</div>
}
