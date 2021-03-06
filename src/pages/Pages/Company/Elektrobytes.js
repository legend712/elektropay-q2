// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../../components/Shared/page-breadcrumb";
import BlogBox from "../../../components/Shared/blog-box";

// import images
import blog01 from '../../../images/blog/01.jpg';
import blog02 from '../../../images/blog/02.jpg';
import blog03 from '../../../images/blog/03.jpg';
import blog04 from '../../../images/blog/04.jpg';
import blog05 from '../../../images/blog/05.jpg';
import blog06 from '../../../images/blog/06.jpg';
import blog07 from '../../../images/blog/07.jpg';
import blog08 from '../../../images/blog/08.jpg';

class Elektrobytes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Home", link : "/index" },
                { id : 2, name : "ElektroBytes" },
            ],
            blogs : [
                { id : 1, image : blog01, title : "Design your apps in your own way", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
                { id : 2, image : blog02, title : "How apps is changing the IT world", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
                { id : 3, image : blog03, title : "Smartest Applications for Business", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
                { id : 4, image : blog04, title : "Design your apps in your own way", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
                { id : 5, image : blog05, title : "How apps is changing the IT world", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
                { id : 6, image : blog06, title : "Smartest Applications for Business", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
                { id : 7, image : blog07, title : "Design your apps in your own way", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
                { id : 8, image : blog08, title : "How apps is changing the IT world", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
            ]
        }
    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);

        var blogs = document.getElementsByName("blog");
        for(var i=0; i<blogs.length; i++){
            blogs[i].classList.remove("mt-4");
            blogs[i].classList.add("mb-4");
        }
    }
     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation, true);
     }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>

                {/* breadcrumb */}
                <PageBreadcrumb title="Blog" pathItems = {this.state.pathItems} />
                    <div className="position-relative">
                        <div className="shape overflow-hidden text-white">
                            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>

                <section className="section">
                    <Container>
                        <Row>
                            {/* blog box */}
                            <BlogBox blogs={this.state.blogs} />

                            <Col xs="12">
                                        <Pagination className="pagination justify-content-center mb-0 list-unstyled">
                                            <PaginationItem><PaginationLink href="#" className="pr-3 pl-3 pt-2 pb-2">Prev</PaginationLink></PaginationItem>
                                            <PaginationItem active><PaginationLink href="#" className="pr-3 pl-3 pt-2 pb-2">1</PaginationLink></PaginationItem>
                                            <PaginationItem><PaginationLink href="#" className="pr-3 pl-3 pt-2 pb-2">2</PaginationLink></PaginationItem>
                                            <PaginationItem><PaginationLink href="#" className="pr-3 pl-3 pt-2 pb-2">3</PaginationLink></PaginationItem>
                                            <PaginationItem><PaginationLink href="#" className="pr-3 pl-3 pt-2 pb-2">Next</PaginationLink></PaginationItem>
                                        </Pagination>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default Elektrobytes;
