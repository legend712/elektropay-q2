import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

//Import Images
import software from "../../images/software/software.png";
import bgimg from "../../images/software/bg.jpg";

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this);
    }   
    
    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 bg-light d-table w-100" style={{background: `url(${bgimg}) center center`}}>
                    <div className="bg-overlay bg-overlay-gradient2"></div>
                    <Container>
                        <Row className="align-items-center position-relative mt-5" style={{zIndex: "1"}}>
                            <Col lg="6" md="12">
                                <div className="title-heading mt-4 text-center text-lg-left">
                                    <h1 className="heading mb-3 text-white">Best Software For Your Work Monitor</h1>
                                    <p className="para-desc text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                    <div className="mt-4">
                                        <Link to="" className="btn btn-light"><i className="mdi mdi-download"></i> Download Now</Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="6" md="12" className="mt-4 pt-2">
                                <div className="position-relative">
                                    <div className="software_hero">
                                        <img src={software} className="img-fluid d-block" alt=""/>
                                    </div>
                                    <div className="play-icon">
                                        <Link to="#" className="play-btn video-play-icon" onClick={this.openModal}>
                                            <i className="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId='287684225' onClose={() => this.setState({ isOpen: false })} />
                </section>
            </React.Fragment>
        );
    }
}

export default Section;