import React from 'react'
import{Card, Tag, Image} from 'antd'

const HomeBlog = () =>{
    return(
        <Card className="intro ">
            <div className="Container">
                <h2>Blog</h2>
                <p><a href="https://github.com/surajondev/">View All</a></p>
            </div>

            <Card className="Container blogpost" href="https://dev.to/surajondev/40-useful-resources-for-mastering-web-1i0h">
                <div className="blog">
                    <div>
                        <a href="https://surajondev.wordpress.com/2021/04/12/40-useful-resources-for-mastering-web%f0%9f%8e%81/">
                            <Image className="blog-img" preview={false} width="350px" src="https://surajondev.files.wordpress.com/2021/04/40-resources-to-help-you.png"></Image>
                        </a>
                    </div>

                    <div className="blog-description">
                        <h2>40+ Useful Resources for Mastering Web🎁</h2>
                        <Tag color="#AC7A64">Resources</Tag>
                        <Tag color="#293E5C">WebDev</Tag>
                        <p></p>
                        <p>
                            We have a list of various resources that can help you to solve many problems that you are 
                            facing or might face in the future.
                        </p>
                    </div>
                </div>
            </Card>
            <Card className="Container blogpost" >
                <div className="blog">
                    <div>
                        <a href="https://surajondev.wordpress.com/2021/02/15/algorithms-every-programmer-should-know-part-1-searching-algorithm/">
                            <Image className="blog-img" preview={false} width="350px" src="https://surajondev.files.wordpress.com/2021/02/searching-algorithm.png"></Image>
                        </a>
                    </div>

                    <div className="blog-description">
                        <h2>Algorithms Every Programmer Should Know</h2>
                        <Tag color="#AACCAD">Algorithm</Tag>
                        <Tag color="#FC8C04">Search</Tag>
                        <p></p>
                        <p>
                            Today starting with the very first part of the series with the Searching Algorithm. We are going to look into 
                            4 searching algorithms that every programmer should know. Now let’s Started.
                        </p>
                    </div>
                </div>
            </Card>
            <Card className="Container blogpost" >
                <div className="blog">
                    <div>
                        <a href="https://surajondev.wordpress.com/2021/04/01/4-best-ui-framework-for-reactjs/">
                            <Image className="blog-img" preview={false} width="350px" src="https://surajondev.files.wordpress.com/2021/04/ui-framework-for-react.png"></Image>
                        </a>
                    </div>

                    <div className="blog-description">
                        <h2>4 Best UI Framework For ReactJS</h2>
                        <Tag color="#64DCFC">React</Tag> 
                        <Tag color="#20047A">Search</Tag>
                        <p></p>
                        <p>
                        Building any project from scratch is painful as it takes a lot of time, causes frustration and 
                        we spent a lot of time on positioning components than improving functionality. 
                        It is also a waste of time as we write code that is already written and available to you.
                        </p>
                    </div>
                </div>
            </Card>
        </Card>
    )
}

export default HomeBlog