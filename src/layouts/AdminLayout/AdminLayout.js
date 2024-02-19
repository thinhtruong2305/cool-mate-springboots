import { Row, Col } from 'react-bootstrap';
import Header from '~/components/Admin/Header';

function AdminLayout({ children }) {
    return (
        <div className="wrapper">
            <Row>
                <Header></Header>
            </Row>
            <Row>
                <Col md={6}>
                    <h2>Side bar</h2>
                </Col>
                <Col md={6}>{children}</Col>
            </Row>
            <Row>
                <h2>Footer</h2>
            </Row>
        </div>
    );
}

export default AdminLayout;
