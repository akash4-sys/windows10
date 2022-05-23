import React from 'react';
import styled from 'styled-components';

function ThispcToolbar() {
    return (
        <Container className="WindowToolBar">
            <SubSection>
                <AppSection>
                    <App>
                        <img src="Images/properties.ico" alt="prop" />
                        <div>Properties</div>
                    </App>
                    <App>
                        <img src="Images/fileexplorer.png" alt="prop" />
                        <div>Open</div>
                    </App>
                    <App>
                        <img src="Images/rename.ico" alt="prop" />
                        <div>Rename</div>
                    </App>
                </AppSection>
                <SectionName>Location</SectionName>
            </SubSection>
            <SubSection>
                <AppSection>
                    <App style={{width:"40px"}}>
                        <img src="Images/thispc/accessmedia.ico" alt="media" />
                        <div>Access media <i className="fas fa-caret-down"></i></div>
                    </App>
                    <App>
                        <img src="Images/thispc/mapnetworkdrive.ico" alt="net" />
                        <div>Map network drive <i className="fas fa-caret-down"></i></div>
                    </App>
                    <App>
                        <img src="Images/thispc/networkloc.ico" alt="netloc" />
                        <div>Add a network location</div>
                    </App>
                </AppSection>
                <SectionName>Network</SectionName>
            </SubSection>
            <SubSection>
                <AppSection>
                    <App style={{width:"40px"}}>
                        <img src="Images/winsettings.png" alt="set" />
                        <div>Open Settings</div>
                    </App>
                    <div>
                        <ListApps>
                            <img src="Images/thispc/uninstall.ico" alt="set" />
                            <div>Uninstall or change a program</div>
                        </ListApps>
                        <ListApps>
                            <img src="Images/displayset.ico" alt="set" />
                            <div>System Properties</div>
                        </ListApps>
                        <ListApps>
                            <img src="Images/thispc/manage.ico" alt="set" />
                            <div>Manage</div>
                        </ListApps>
                    </div>
                </AppSection>
                <SectionName>System</SectionName>
            </SubSection>
        </Container>
    )
};

export default ThispcToolbar;

const Container = styled.div`
    width:100%;
    height:6rem;
    background-color:var(--WindowtoolBarBGC);
    display:flex;
    border-top: 1px solid var(--linecolor);
    border-bottom: 1px solid var(--linecolor);
    font-size:var(--WindowtoolBarFontSize);
`

const SubSection = styled.div`
    height: 100%;
    border-right: 1px solid var(--linecolor);
`

const AppSection = styled.div`
    height:82%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 6px;
    gap: 5px;
`

const App = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80%;
    padding: 0px 4px;
    text-align: center;
    max-width: 72px;

    &:hover{
        background-color: var(--windowsHover);
        outline: 0.001px solid var(--windowsSelect);
    }

    img{
        height:30px;
        width:30px;
    }
`

const ListApps = styled.div`
    display: flex;
    gap: 5px;
    margin: 7px 0px;

    &:hover{
        background-color: var(--windowsHover);
        outline: 0.001px solid var(--windowsSelect);
    }

    img{
        height:16px;
        width:16px;
    }
`

const SectionName = styled.div`
    height:18%;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    text-align: center;
`