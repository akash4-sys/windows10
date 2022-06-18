import React from 'react';
import { Menu, Options, LeftSection, RightSection, Empty } from './DefaultStyle';

function ActionBarMenu({ anchorPoint, CxtMenu, OptionClick }) {
    return (
        <Menu style={{ top: anchorPoint.y, left: anchorPoint.x, backgroundColor:"black" }} >
            {
                CxtMenu.map((option, i) => (

                    (option.length !== 1) ?
                        <Options key={i} className={option[0]} onClick={() => OptionClick(option[5])}>
                            <LeftSection>
                                {
                                    (option[1]) ? <img src={option[1]} alt="a" /> : <Empty />
                                }
                                <div>{option[2]}</div>
                            </LeftSection>
                            <RightSection>
                                {option[3] && <div>{option[3]}</div>}
                                {
                                    (option[4]) && <img src={option[4]} alt="a" />
                                }
                            </RightSection>
                        </Options>
                        :
                        <hr key={i} />
                ))
            }
        </Menu >
    )
}

export default ActionBarMenu;