import {PageHeader, Button} from 'antd'

const Header = ()=>{
    return(
        <PageHeader className="pageHeader">
            <Button type="primary" >Home</Button>
            <Button type="default" >Project</Button>
            <Button type="default" >Blog</Button>
            <Button type="default" >Contact</Button>
        </PageHeader>
    )
}


export default Header