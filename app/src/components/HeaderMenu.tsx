import { Link } from "react-router-dom"

const HeaderMenu = () => {
    return (
        <div className="header-menu">
            <Link to='/'>各国の感染状況</Link>
            <Link to='/world'>世界の感染状況</Link>
        </div>
    )
}

export default HeaderMenu