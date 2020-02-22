import styled from 'styled-components';

export const Nav = styled.nav.attrs({
    className: "navbar navbar-expand-lg navbar-light  navbar-inner fixed-top"
})`
    padding: 0px;
    max-height: 80px;
    background-color: rgb(255, 255, 255);
    -webkit-box-shadow: 0px -13px 51px -2px rgba(0,0,0,0.32);
    -moz-box-shadow: 0px -13px 51px -2px rgba(0,0,0,0.32);
    box-shadow: 0px -13px 30px -2px rgba(0,0,0,0.32);
`;

export const NavLogo = styled.img.attrs({
    alt: "logo",
})`
    width: 50px;
    height: 50px;
    margin-right: 10px;
    src: url(${props => props.src});
`;

export const NavbarBrand = styled.div.attrs({
    className: "navbar-brand"
})`
    color: #3b8a96 !important;
    padding: 10px !important;
    font-weight: bold;
`

export const NavButton = styled.button.attrs({
    className: "navbar-toggler  offset-md-7 offset-sm-6 offset-xs-6",
    type: "button",
})`
    margin-right: 10px;

`;

export const NavbarToggelerIcon = styled.span.attrs({
    className: "navbar-toggler-icon"
})``;


export const NavBarCollapse = styled.div.attrs({
    id: "navbarNavDropdown",
    className: "collapse navbar-collapse"
})`
    background-color: #fff !important;

`;

export const NavBarNav = styled.ul.attrs({
    className: "navbar-nav ml-auto  mt-2 mt-lg-0"
})`
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    background-color: #fff !important;
`;

export const NavBarItem = styled.li.attrs({
    className: "nav-item navbar-item"
})`
    margin-right: 10px;
    margin-left: 10px;
    padding: 10px;
`
export const NavBarItemActive = styled.li.attrs({
    className: "nav-item active navbar-item col-lg-2"
})`
    margin-right: 80px;
    margin-left: 10px;
    padding: 10px;
`

export const NavBarLink = styled.div.attrs({
    className: "nav-link"
})`
    font-size: 18px;
    text-decoration: none;
`;

export const NavDropDown = styled.li.attrs({
    className: "nav-item dropdown navbar-item"
})`
    margin-top: 7px;
    margin-right: 10px;
    margin-left: 10px;
    padding: 10px;
`;

export const NavDropdownItems = styled.div.attrs({
    className: "dropdown-menu"
})``;