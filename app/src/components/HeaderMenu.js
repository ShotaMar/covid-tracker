import { Link } from "react-router-dom"

const HeaderMenu = () => {
    return (
        <>
            <Link to='/'>各国の感染状況</Link>
            <Link to='/world'>世界の感染状況</Link>
        </>
    )
}

export default HeaderMenu