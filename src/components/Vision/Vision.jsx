import { Card, Col, Row, Typography } from "antd";
import './Vision.css';
export default function Vision(){
    return(
        <div className="vision"><Row>
            <Col lg={1} xs={0}></Col>
       <Col lg={23} xs={24}>
            <Card className="card">
                <div className="main-div">
                    <div className="items"><div className="focus"><img src="focus-innovation-icon.png" width="35px" height="35px"/></div>
                    <Typography className="text-title">Focus on Innovation</Typography>
                    <Typography>
                    Stay ahead with the latest <br/>advancements in VR technology,<br/> bringing new dimensions to<br/> immersive experiences.</Typography>
                    </div>
                    <div className="items"><div className="building"><img src="building-the-future-icon.png" width="35px" height="35px"/></div>
                    <Typography className="text-title">Building the Future</Typography>
                    <Typography>
                    Explore the foundational elements<br/> that drive VR, from cutting-edge<br/> hardware to revolutionary software<br/> solutions.
                    </Typography>
                    </div>
                    <div className="items"><div className="connect"><img src="connected-worlds-icon.png" width="35px" height="35px"/></div>
                    <Typography className="text-title">Connected Worlds</Typography>
                    <Typography>
                    Discover the seamless integration<br/> of virtual reality with other emerging<br/> technologies, creating<br/> interconnected digital ecosystems.
                   </Typography>
                    </div>
                </div>
            </Card>
            </Col>
            </Row>
        </div>
    )
}