export const CA_TestCases = [
    ['Username', 'NightWing', "Username should be more than 5 characters long and less than 17 characters."],
    ['Email or phone', 'nightwing@gmail.com', "Please enter a valid email or phone number."],
    ['Enter Password', 'P@ssW0rd', "Password should with of length 5 with digits, symbols, lowercase and uppercase characters."],
    ['Re-enter Password', 'P@ssW0rd', "Please enter same password as above."],
    ['Password hint', 'Random pass', 'Random pass', "no warnings in this case"],
];

export const CA_FailingTestCases = [
    ['Username', 'Sam', "Username should be more than 5 characters long and less than 17 characters."],
    ['Email or phone', 'nightwing@.com', "Please enter a valid email or phone number."],
    ['Email or phone', '784', "Please enter a valid email or phone number."],
    ['Enter Password', 'PW0rd', "Password should with of length 5 with digits, symbols, lowercase and uppercase characters."],
    ['Re-enter Password', 'PsdW0rd', "Please enter same password as above."]
];