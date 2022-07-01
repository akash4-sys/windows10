import React from 'react';
import styled from 'styled-components';
import validator from 'validator';
import InputTag from './InputTag';

function Input({ placeholder, type, setAuthorized, name, authorized }) {

    function defaultCase(e) {
        setAuthorized({ ...authorized, [name]:{ valid:true, val: e.target.value, alert: "" } });
    }

    function failedCase(val, alert) {
        setAuthorized({ ...authorized, [name]:{ valid:false, val, alert } });
    }

    function handleChange(e) {

        let input = e.target.value;
        switch (placeholder) {
            case "Username":
                if (input.length > 5 && input.length <= 16) {
                    defaultCase(e);
                    break;
                }
                failedCase(input, "Username should be more than 5 characters long and less than 17 characters.");
                break;
            case "Enter Password":
                if (validator.isStrongPassword(input)) {
                    defaultCase(e);
                    break;
                }
                failedCase(input, "Password should contain symbols, digits, and atleast 5 characters." );
                break;
            case "Email or phone":
                if (validator.isEmail(input) || validator.isMobilePhone(input)) {
                    defaultCase(e);
                    break;
                }
                failedCase(input, "Please enter a valid email or phone number.");
                break;
            case "Re-enter Password":
                if (document.querySelectorAll("input")[2].value === input) {
                    defaultCase(e);
                    break;
                }
                failedCase(input, "Please enter same password as above.");
                break;
            default: defaultCase(e);
                break;
        }
    }

    return (
        <Container>
            <InputTag type={type} name={name} placeholder={placeholder}
                value={authorized[name].val} onChange={handleChange} autoComplete="off" required
                style={{
                    borderColor: authorized[name].color,
                    backgroundColor: authorized[name].val && "white"
                }}
            />
            {authorized[name].alert && <Alert>{authorized[name].alert}</Alert>}
        </Container>
    )
}

export default Input;

const Container = styled.div`
    display:flex;
    align-items: center;
`
const Alert = styled.div`
    height: 2rem;
    box-sizing: border-box;
    line-height: 3rem;
    padding: 0px 7px;
    color: yellow;
    width: max-content;
`