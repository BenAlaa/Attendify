import styled from 'styled-components';
import {MoreVert} from 'styled-icons/material/MoreVert';
import {CheckCircle} from 'styled-icons/boxicons-regular/CheckCircle';
import {RadioUnchecked} from 'styled-icons/icomoon/RadioUnchecked';
import {DeleteBin6} from 'styled-icons/remix-line/DeleteBin6';

export const CardContainer = styled.div.attrs({})`
    border-radius: 5px;
    min-height: 80px;
    margin: 10px 10px 0px 10px;
    overFlow: hidden;
    transition: all 250ms ease-in-out;
    -webkit-box-shadow: 0px 4px 5px 0px rgba(148,175,194,0.44);
    -moz-box-shadow: 0px 4px 5px 0px rgba(148,175,194,0.44);
    box-shadow: 0px 4px 5px 0px rgba(148,175,194,0.44);
    
`;

export const ImgContainer = styled.div.attrs({})`
    border-radius: 30px;
    height: 60px;
    width: 60px;
    padding: 2px;
    margin: 10px 10px 0px 10px;
    transition: all 250ms ease-in-out;
    -webkit-box-shadow: 0px 4px 5px 0px rgba(148,175,194,0.44);
    -moz-box-shadow: 0px 4px 5px 0px rgba(148,175,194,0.44);
    box-shadow: 0px 4px 5px 0px rgba(148,175,194,0.44);
`;

export const Img = styled.img.attrs({})`
    height: 100%;
    width: 100%;
    border-radius: 28px;
    src: url(${props => props.src});
`;

export const InfoContainer = styled.div.attrs({})`
    padding: 10px;
`;

export const Name = styled.div.attrs({
})`
    color: gray;
    font-weight: 600 !important;
    display:flex;
    justify-content: center;

    @media (max-width: 300px){
        font-size: 10px !important;

    }
    @media (max-width: 374px){
        font-size: 10px !important;

    }
    @media (max-width: 767px){
        font-size: 12px !important;

    }
    @media (max-width: 992px){
        font-size: 16px !important;

    }
    @media (max-width: 1199px){
        font-size: 16px ;

    }
    
`;




export const IqamaPhoneContainer = styled.div.attrs({})`
`;

export const Phone = styled.div.attrs({})`
    font-size: 11px;
    margin-right: 10px;
    color: gray;

`;

export const Iqama = styled.div.attrs({})`
    font-size: 11px;
    color: gray;

`;
export const GenderEmaiContainer = styled.div.attrs({})`

`;

export const Gender = styled.div.attrs({})`
    font-size: 11px;
    color: gray;
`

export const Email = styled.div.attrs({})`
    font-size: 11px;
    color: gray;

`;

export const MoreIcon = styled(MoreVert)`
    color: #2F8DA9;
    font-size: 20px;
    cursor: pointer;
    height:20px;
    width: 20px;
`;

export const MoreMenu = styled.div.attrs({})`
    z-index: 10;
    position: absolute;
    padding: 5px;
    border-radius: 5px;
    margin-left: -110px;
    background-color: white;
    width:120px !important;
    color: #2F8DA9;

    transition: all 250ms ease-in-out;
    -webkit-box-shadow: 0px 4px 5px 0px rgba(148,175,194,0.44);
    -moz-box-shadow: 0px 4px 5px 0px rgba(148,175,194,0.44);
    box-shadow: 0px 4px 5px 0px rgba(148,175,194,0.44);
`;

export const IconButton = styled.div.attrs({})`
    cursor: pointer;
    transition: all 250ms ease-in-out;
    margin-bottom: 5px;
    &:hover {
        background-color: rgb(220, 241, 245, 0.6);
        border-radius: 5px;
        transform: scale(1.02);

    }
`

export const CheckInIcon = styled(CheckCircle)`
    color: #2F8DA9;
    font-size: 10px;
    margin-left: 20px;
    height: 20px;
`;

export const Lable = styled.div.attrs({})`
    font-size: 12px;
    font-weight: 600;
    margin-left: 10px;
`

export const CheckoutIcon = styled(RadioUnchecked)`
    color: #2F8DA9;
    font-size: 10px;
    margin-left: 20px;
    height: 20px;
`;

export const DeleteIcon = styled(DeleteBin6)`
    color: #2F8DA9;
    font-size: 10px;
    margin-left: 20px;
    height: 20px;
`



