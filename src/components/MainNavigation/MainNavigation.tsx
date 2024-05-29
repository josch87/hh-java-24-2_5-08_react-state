import {Link} from "react-router-dom";
import styled from "styled-components";
import {NavigationItemType} from "../../model/model.ts";

const StyledUnorderedList = styled.ul`
    display: flex;
    gap: 10px;

`;

const StyledListItem = styled.li`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const StyledLink = styled(Link)`
    color: inherit;
    background-color: white;
    text-decoration: none;
    border: 1px solid black;
    padding: 10px 20px;

    &:hover {
        background-color: #ecebeb;
    }
`;

const navigationItems: NavigationItemType[] = [
    {
        title: "Home",
        link: "/",
        sort: 1
    },
    {
        title: "Characters",
        link: "/characters",
        sort: 2
    },
    {
        title: "Locations",
        link: "/locations",
        sort: 3
    }
]

export default function MainNavigation() {
    return (
        <nav>
            <StyledUnorderedList>
                {navigationItems.sort((a,b) => a.sort - b.sort)
                    .map((item) => { return (
                        <StyledListItem key={item.sort}>
                            <StyledLink to={item.link}>{item.title}</StyledLink>
                        </StyledListItem>

                        )
                    })}
            </StyledUnorderedList>
        </nav>
    )
}