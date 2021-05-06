import {Card, Tag} from 'antd'


const Project = ({name, desc, tech, live})=>{
    return(
            <Card className="Card-project" title={name} bordered={false}>
                <p>Description : {desc}</p>
                <p>Technology : 
                    <Tag color="#64DCFC">{tech}</Tag>
                </p>
                <p>Live : <a href={live}>{name}</a></p>
            </Card>
    )
}


export default Project