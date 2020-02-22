import React, {Component} from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import {
    CardContainer,
    ImgContainer,
    Img,
    InfoContainer,
    Name,
    IqamaPhoneContainer,
    Phone,
    Iqama,
    GenderEmaiContainer,
    Gender,
    Email,
    MoreIcon,
    MoreMenu,
    IconButton,
    Lable,
    CheckInIcon,
    CheckoutIcon,
    DeleteIcon,
} from './AttendenceCardStyledComponents';

class AttendenceCard extends Component {
    constructor(props){
        super(props);
        this.state = { showMenu: false, id:"" };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this._isMounted = false;

    };
    componentDidMount() {
        this._isMounted = true;
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    showMenu(event){
        event.preventDefault();
        if(this._isMounted) {
            this.setState({ showMenu: true }, () => {
                document.addEventListener('click', this.closeMenu);
            });
        }
        
    };
    closeMenu(event) {
        if(this._isMounted) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
              }); 
        }
         
      }
    render() { 
        const {checkedIn, checkedOut,firstName, lastName, email, phoneNumber, iqamaNumber, gender, profileImg, handleCheckIn, handleCheckOut, handleDelete} = this.props;
        return ( 
            <CardContainer>
            <Row>
                <Col xs={2} sm={2} md={2} lg={2} >
                    <ImgContainer>
                        <Img src={profileImg} alt="profile"></Img>
                    </ImgContainer>
                </Col>
                <Col xs={10} sm={10} md={10} lg={10}>
                    <InfoContainer>
                        <Row>
                            <Col col={10} offset={0}>
                                <Name>{firstName} {lastName} </Name>
                            </Col>
                            <Col col={1}>
                                <MoreIcon onClick={this.showMenu}></MoreIcon>
                                {this.state.showMenu && 
                                    <MoreMenu ref={(element) => {this.dropdownMenu = element;}}>
                                        {checkedIn === "false" && 
                                            <IconButton onClick={handleCheckIn}>
                                                <Row>
                                                    <CheckInIcon></CheckInIcon>
                                                    <Lable>Check In</Lable>
                                                </Row>  
                                            </IconButton>
                                        }
                                        {checkedOut === "false" &&  checkedIn === "true" &&
                                            <IconButton onClick={handleCheckOut}>
                                                <Row>
                                                    <CheckoutIcon></CheckoutIcon>
                                                    <Lable>Check Out</Lable>
                                                </Row>  
                                            </IconButton>
                                        }
                                        <IconButton onClick={handleDelete}>
                                                <Row>
                                                    <DeleteIcon></DeleteIcon>
                                                    <Lable>Delete</Lable>
                                                </Row>  
                                            </IconButton>
                                    </MoreMenu>
                                }
                                

                            </Col>
                        </Row>
                        <IqamaPhoneContainer>
                            <Row>
                                <Col xs={10} xsOffset={2} sm={4} smOffset={1} md={3} mdOffset={2} lg={8} lgOffset={2}>
                                    <Iqama>{phoneNumber},</Iqama>
                                </Col>
                                <Col xs={10} xsOffset={2} sm={4} smOffset={1} md={3} lg={8} mdOffset={1} lgOffset={2}>
                                    <Phone>{iqamaNumber}</Phone>
                                </Col>
                            </Row>
                        </IqamaPhoneContainer>
                        <GenderEmaiContainer>
                            <Row>
                                <Col xs={2} xsOffset={2} sm={2} smOffset={1} md={2} mdOffset={2} lg={2} lgOffset={0}>
                                    <Gender> {gender}, </Gender>
                                </Col>
                                <Col xs={8} xsOffset={2} sm={9} md={8} >
                                    <Email> {email} </Email>
                                </Col>
                            </Row>
                        </GenderEmaiContainer>
                    </InfoContainer>
                </Col>
            </Row>
        </CardContainer>
         );
    }
}
 
export default AttendenceCard;

