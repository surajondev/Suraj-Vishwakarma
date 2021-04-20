import {PageHeader, Button} from 'antd'
import {Link} from 'react-router-dom'

const Header = ({home, blog, contact, project})=>{
    return(
        <PageHeader className="pageHeader">
            <Link to="/">
                <Button className="header-btn" type={home}>Home</Button>
            </Link>
            <Link to="/projects">
                <Button className="header-btn" type={project} >Projects</Button>
            </Link>
            <Link to="/blog">
                <Button className="header-btn" type={blog} >Blog</Button>
            </Link>
            <Link >
                <Button className="header-btn" type={contact} href="https://dev.to/surajondev">Contact</Button>
            </Link>  
        </PageHeader>
    )
}


export default Header