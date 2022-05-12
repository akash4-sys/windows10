import styled from 'styled-components';

const SearchBar = styled.div`
    width: 394px;

    .gsc-control-cse{
        margin: 0px;
        padding: 0px;
        overflow: hidden;
    }
    .gsc-search-button {
        padding-right: 15px;
        padding-left: 5px;
    }
    .gsc-search-button-v2, .gsc-search-button-v2:hover, .gsc-search-button-v2:focus {
        padding: 0px;
    }
    .gsc-input-box{
        border: 0px solid #dfe1e5;
    }
    form.gsc-search-box{
        margin-bottom:0px;
    }
    table.gsc-search-box td{
        height:27.5px;
    }
    .gsc-results-wrapper-overlay{
        bottom: 1.36rem;
        left: 3.1rem;
        border: none;
        background-color:var(--startbg);
        box-shadow:none;
        width:50%;
    }
    .gsc-modal-background-image{
        background-color:transparent;
    }
    .gsc-selected-option-container{
        color:white;
        background-color:grey;
    }
    .gsc-control-cse .gsc-option-selector {
        padding: 1px 3px 1px 3px;
        background-color: white;
        border-radius: 50%;
    }
    .gsc-results-close-btn-visible {
        opacity:0;
    }
    .gsc-webResult.gsc-result, .gsc-results .gsc-imageResult{
        background-color:var(--startbg);
        border:none;
    }
    .gsc-result-info {
        color: white;
    }
    .gsc-orderby-label {
        color: white;
    }
    .gsc-results .gsc-cursor-box .gsc-cursor-page {
        background-color: var(--startbg);
        color: var(--textcolor);
    }

    .gsc-search-button-v2 svg {
        fill: var(--textcolor);
    }
`

export default SearchBar;