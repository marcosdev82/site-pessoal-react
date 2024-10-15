import styled from "styled-components";

export const ListSkills = styled.section`
    display: flex;
    width: 100%;
`;
export const List = styled.div`
    display: flex;
    width: 100%;
    padding: 40px 20px;
    border: 1px solid ${props => props.theme.colors.border100};
    border-radius: 5px;
    position: relative;

    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
    }
    ul li {
        color: #fff;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    li img{
        filter: grayscale(100%);
        transition: filter 0.3s ease;
    }

    li:hover img{
        filter: grayscale(0%);
    }
`;
export const IconSkill = styled.img`


`;