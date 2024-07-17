import styled from "styled-components"
import { Link } from "react-router-dom"


const Btn = () => {
    return (
        <div className="col-4  text-md-end">
            <Button className="py-10 px-15">
                <StyledLink to="/contacts/create">
                    ایجاد مخاطب

                </StyledLink>

            </Button>
        </div>
    )
}

export default Btn


// style

const Button = styled.button`
    background-color: #c21534;
    border-radius: 15px;
    border: none;

    &:active{
        background-color: #5e0909;
    }

`

const StyledLink = styled(Link)`
    text-decoration: none;


    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    color: white;

    }
`