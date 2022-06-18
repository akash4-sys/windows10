import React from 'react';
import styled from 'styled-components';
import { Menu, Options, LeftSection, RightSection, Empty } from './DefaultStyle';

function TaskbarMenu({ anchorPoint, CxtMenu, OptionClick }) {
    return (
        <Menu2 style={{ bottom: anchorPoint.maxHeight - anchorPoint.y, left: anchorPoint.x }} >
            {
                CxtMenu.map((option, i) => (

                    (option.length !== 1) ?
                        <Options2 key={i} className={option[0]} onClick={() => OptionClick(option[5])}>
                            <LeftSection2>
                                {
                                    (option[1]) ? <img src={option[1]} alt="a" /> : <Empty />
                                }
                                <div>{option[2]}</div>
                            </LeftSection2>
                            <RightSection>
                                {option[3] && <div>{option[3]}</div>}
                                {
                                    (option[4]) && <img src={option[4]} alt="a" />
                                }
                            </RightSection>
                        </Options2>
                        :
                        <hr key={i} />
                ))
            }
        </Menu2 >
    )
}

export default TaskbarMenu;

const Menu2 = styled(Menu)`
    background-color:var(--primary-color);
    z-index:10000;
    color:white;
`

const Options2 = styled(Options)`
    height:2rem;
    &:not(.disable):hover{
        background-color: var(--hover-color);
    }
`

const LeftSection2 = styled(LeftSection)`
    img{
        height:16px;
        width:16px;
    }
`