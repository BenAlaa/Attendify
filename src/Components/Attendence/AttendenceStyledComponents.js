import styled from 'styled-components';
import {Search} from 'styled-icons/boxicons-regular/Search'


export const AttendencesContainer = styled.div.attrs({})`
    margin-top: 100px;
    padding: 30px;
    border-radius: 20px;
    transition: all 250ms ease-in-out;
    -webkit-box-shadow: 0px 5px 20px 1px #b7b5bb4d;
    -moz-box-shadow: 0px 5px 20px 1px #b7b5bb4d;
    box-shadow: 0px 5px 20px 1px #b7b5bb4d;
`

export const Title = styled.h2.attrs({})`
    color: #2F8DA9;
`
export const SubTitle = styled.h6.attrs({})`
    color: #2F8DA9;
`

export const AttendancesGroup = styled.div.attrs({})`
    border-radius:10px;
    border-width: 1.2px;
    border-style: solid;
    border-color: rgb(47, 141, 169, 0.6) ;
    height: 60vh;
    margin-top: 50px;

`;

export const AttendenceCardsGroup = styled.div.attrs({})`
    overflow: auto;
    height:90%;
    &::-webkit-scrollbar { width: 0 !important }

`

export const AttendancesSearch = styled.div.attrs({})`
    border-bottom-width: 1.2px;
    border-bottom-style: solid;
    border-bottom-color: rgb(47, 141, 169, 0.6);
    height: 40px;
    padding:5px;
`;
export const SearchInput = styled.input.attrs({})`
    margin-left: 40px;
    border: none;
    width: 75%;
    &:focus {
        outline: none;
    }
`;

export const SearchIcon = styled(Search)`
    color: rgb(47, 141, 169, 0.6) ;
    height: 20px;
    transition: all 250ms ease-in-out;
    cursor: pointer;
    &:hover {
        transform: scale(1.02);

    }

`
