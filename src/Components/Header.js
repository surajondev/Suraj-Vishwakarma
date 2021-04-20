import {PageHeader, Button} from 'antd'

const Header = ()=>{
    return(
        <PageHeader className="pageHeader">
            <Button className="header-btn" type="primary" href="https://surajondev.netlify.app/">Home</Button>
            <Button className="header-btn" type="default" href="https://github.com/surajondev?tab=repositories">Project</Button>
            <Button className="header-btn" type="default" href="https://dev.to/surajondev">Blog</Button>
            <Button className="header-btn" type="default" href="https://dev.to/surajondev">Contact</Button>
        </PageHeader>
    )
}


export default Header