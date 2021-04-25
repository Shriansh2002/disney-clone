import React from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    This Page Says
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h4 style={{ textAlign: 'center' }}>Login To Continue</h4>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
const Login = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (<Container>
        <Content>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                <SignUp onClick={() => setModalShow(true)}>GET ALL THERE</SignUp>
                <Description>
                    💎💎 Made With ❤️ by Shriansh Agarwal 💎💎
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
            </CTA>
            <BgImage />
        </Content>
        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </Container >);
};


const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction:column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/images/login-background.jpg');
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const CTALogoOne = styled.img`
    margin-botttom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-top: 10px;   
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0,0%,95.3%, 1.0);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5em;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
    
`;

export default Login;