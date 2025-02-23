import styled from "styled-components";

export const ListSkills = styled.section`
    display: flex;
    width: 100%;
`;
export const List = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 40px;
    gap: 10px;
    border-radius: 6px;
    position: relative;
    justify-content: space-between;

    h2 { font-size: 14px; color:rgb(219, 219, 219)}

    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        margin: 0;
        padding: 15px;
        gap: 15px;
        border: 1px solid rgba(242, 242, 242, 0.17);
        border-radius: 3px;
        box-shadow: 0 0 30px rgb(12 236 182 / 10%);
    }

    ul li {
        color: #fff;
        width: 100%;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
    }

    li img{
        filter: grayscale(100%);
        transition: filter 0.3s ease;
        transition: transform 0.3s ease; 
    }

    li:hover img{
        filter: grayscale(0%);
        transform: translateY(-10px);
        cursor: pointer;
    }

    @media (max-width: 576px) {
        display: flex;
        width: 100%;
        padding: 20px 20px;
        border: 1px solid #09f0b47d;
        border-radius: 5px;
        position: relative;
        ul {
            flex-wrap: wrap;
            gap: 15px;
        }
        ul li { 
            width: auto;
        }
        ul li img{ 
            width: 60px;
        }
    }
`;
export const IconSkill = styled.img`
`;