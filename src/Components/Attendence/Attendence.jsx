import React, { Component } from 'react';
import http from '../../Services/httpService';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import {
    AttendencesContainer,
    Title,
    SubTitle,
    AttendancesGroup,
    AttendenceCardsGroup,
    AttendancesSearch,
    SearchInput,
    SearchIcon
} from './AttendenceStyledComponents';
import AttendenceCard from '../AttendenceCard/AttendenceCard';

class Attendence extends Component {
    state = {
        attendences: [],
        filteredAll: [],
        filteredAIn: [],
        filteredAOut: [],
        isAllSearch: false,
        isCheckedInSearch: false,
        isCheckedOutSearch: false,
        searchAll: "",
        searchIn: "",
        searchOut: "",
    }


    async componentDidMount() {
        const attendences = await http.get('data.json')
            .then(res => res.data.data);
        this.setState({ attendences, filteredAll: attendences, filteredAIn: attendences, filteredAOut: attendences });
    }

    handleCheckIn(id) {
        const { attendences } = this.state;
        const _attendces = attendences.map(attendence => {
            const _attendence = attendence.id === id ? { ...attendence, checked_in: "true" } : { ...attendence };
            return _attendence;
        });
        this.setState({ attendences: _attendces, filteredAll: _attendces, filteredAIn: _attendces, filteredAOut: _attendces });
    }

    handleCheckOut(id) {
        const { attendences } = this.state;
        const _attendces = attendences.map(attendence => {
            const _attendence = attendence.id === id ? { ...attendence, checked_out: "true" } : { ...attendence };
            return _attendence;
        });
        this.setState({ attendences: _attendces, filteredAll: _attendces, filteredAIn: _attendces, filteredAOut: _attendces });
    }

    handleDelete(id) {
        const { attendences } = this.state;
        const index = attendences.findIndex(a => a.id === id)
        attendences.splice(index, 1);
        this.setState({ attendences, filteredAll: attendences, filteredAIn: attendences, filteredAOut: attendences });

    }

    handleClickSearchIcon(type) {
        const { isAllSearch, isCheckedInSearch, isCheckedOutSearch } = this.state;
        switch (type) {
            case "all":
                this.setState({ isAllSearch: isAllSearch ? false : true });
                break;
            case "in":
                this.setState({ isCheckedInSearch: isCheckedInSearch ? false : true });
                break;
            case "out":
                this.setState({ isCheckedOutSearch: isCheckedOutSearch ? false : true });
                break;
            default:
                break;
        }
    }
    onSearchChange(e) {
        console.log(this.state);
        const { searchAll, searchIn, searchOut, isAllSearch, isCheckedInSearch, isCheckedOutSearch } = this.state;
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'all':
                searchAll = value;
                isAllSearch = true;
                break;
            case 'in':
                searchIn = value;
                isCheckedInSearch = true;
                break;
            case 'out':
                searchOut = value;
                isCheckedOutSearch = true;
                break;
            default:
                break;
        }

    }
    render() {
        const {
            filteredAll,
            filteredAIn,
            filteredAOut,
            isAllSearch,
            isCheckedInSearch,
            isCheckedOutSearch,
            searchAll,
            searchIn,
            searchOut
        } = this.state;

        return (
            <Container>
                <Row>
                    <Col>
                        <AttendencesContainer>
                            <Title>iPhone 11 Launching</Title>
                            <SubTitle>Attendance</SubTitle>
                            <Row>
                                <Col xs={12} sm={10} smOffset={1} lg={4} lgOffset={0} >
                                    <AttendancesGroup>
                                        <AttendancesSearch>
                                            {isAllSearch && <SearchInput placeholder="All Resources" id="all" name="all" value={searchAll} onChange={this.onSearchChange}></SearchInput>}
                                            <SearchIcon onClick={() => this.handleClickSearchIcon('all')}></SearchIcon>
                                        </AttendancesSearch>
                                        <AttendenceCardsGroup>
                                            {filteredAll.map(attendence => {
                                                const { id } = attendence;
                                                const { first_name, last_name, email, phone_number, iqama_number, gender, profile_picture } = attendence.resource;
                                                const { checked_in, checked_out } = attendence;
                                                return <AttendenceCard
                                                    key={id}
                                                    firstName={first_name}
                                                    lastName={last_name}
                                                    email={email}
                                                    phoneNumber={phone_number}
                                                    iqamaNumber={iqama_number}
                                                    gender={gender}
                                                    checkedIn={checked_in}
                                                    checkedOut={checked_out}
                                                    profileImg={profile_picture}
                                                    handleCheckIn={() => { this.handleCheckIn(id) }}
                                                    handleCheckOut={() => { this.handleCheckOut(id) }}
                                                    handleDelete={() => { this.handleDelete(id) }}
                                                ></AttendenceCard>
                                            })}
                                        </AttendenceCardsGroup>

                                    </AttendancesGroup>
                                </Col>
                                <Col xs={12} sm={10} smOffset={1} lg={4} lgOffset={0}>
                                    <AttendancesGroup>
                                        <AttendancesSearch>
                                            {isCheckedInSearch && <SearchInput placeholder="Checked In" id="in" name="in" value={searchIn} onChange={this.onSearchChange}></SearchInput>}
                                            <SearchIcon onClick={() => this.handleClickSearchIcon('in')}></SearchIcon>
                                        </AttendancesSearch>
                                        <AttendenceCardsGroup>
                                            {filteredAIn.map(attendence => {
                                                const { id } = attendence;
                                                const { first_name, last_name, email, phone_number, iqama_number, gender, profile_picture } = attendence.resource;
                                                const { checked_in, checked_out } = attendence;
                                                if (checked_in === "true" && checked_out === "false") {
                                                    return <AttendenceCard
                                                        key={id}
                                                        firstName={first_name}
                                                        lastName={last_name}
                                                        email={email}
                                                        phoneNumber={phone_number}
                                                        iqamaNumber={iqama_number}
                                                        gender={gender}
                                                        checkedIn={checked_in}
                                                        checkedOut={checked_out}
                                                        profileImg={profile_picture}
                                                        handleCheckIn={() => { this.handleCheckIn(id) }}
                                                        handleCheckOut={() => { this.handleCheckOut(id) }}
                                                        handleDelete={() => { this.handleDelete(id) }}
                                                    ></AttendenceCard>
                                                } else { return null }


                                            })}
                                        </AttendenceCardsGroup>
                                    </AttendancesGroup>
                                </Col>
                                <Col xs={12} sm={10} smOffset={1} lg={4} lgOffset={0}>
                                    <AttendancesGroup>
                                        <AttendancesSearch>
                                            {isCheckedOutSearch && <SearchInput placeholder="Checked Out" id="out" name="out" value={searchOut} onChange={this.onSearchChange}></SearchInput>}
                                            <SearchIcon onClick={() => this.handleClickSearchIcon('out')}></SearchIcon>
                                        </AttendancesSearch>
                                        <AttendenceCardsGroup>
                                            {filteredAOut.map(attendence => {
                                                const { id } = attendence;
                                                const { first_name, last_name, email, phone_number, iqama_number, gender, profile_picture } = attendence.resource;
                                                const { checked_in, checked_out } = attendence;
                                                if (checked_in === "true" && checked_out === "true") {
                                                    return <AttendenceCard
                                                        key={id}
                                                        firstName={first_name}
                                                        lastName={last_name}
                                                        email={email}
                                                        phoneNumber={phone_number}
                                                        iqamaNumber={iqama_number}
                                                        gender={gender}
                                                        checkedIn={checked_in}
                                                        checkedOut={checked_out}
                                                        profileImg={profile_picture}
                                                        handleCheckIn={() => { this.handleCheckIn(id) }}
                                                        handleCheckOut={() => { this.handleCheckOut(id) }}
                                                        handleDelete={() => { this.handleDelete(id) }}
                                                    ></AttendenceCard>
                                                } else { return null }

                                            })}
                                        </AttendenceCardsGroup>
                                    </AttendancesGroup>
                                </Col>
                            </Row>
                        </AttendencesContainer>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Attendence;