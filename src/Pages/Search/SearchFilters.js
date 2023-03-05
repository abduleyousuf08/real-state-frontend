import React from 'react'

function SearchFilters() {
    return (
        <section className="search-bar__section">
            <div class="search-bar__location">
                <button className="multi-selection-autocomplete__root">
                    <div className="multi-selection-autocomplete  ">
                        <svg viewBox="4 4 15 15" className="multi-selection-autocomplete__search-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7399 13.6792L18.7806 17.7197C19.0735 18.0126 19.0735 18.4875 18.7806 18.7804C18.4877 19.0733 18.0128 19.0733 17.7199 18.7804L13.6792 14.7399C12.6632 15.5297 11.3865 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 11.3865 15.5297 12.6632 14.7399 13.6792ZM10 14.5C12.4853 14.5 14.5 12.4853 14.5 10C14.5 7.51472 12.4853 5.5 10 5.5C7.51472 5.5 5.5 7.51472 5.5 10C5.5 12.4853 7.51472 14.5 10 14.5Z"></path></svg>
                        <input className="multi-selection-autocomplete__input" placeholder="City, community or building" autocomplete="off"/>
                    </div>
                    <input className="multi-selection-autocomplete__hidden-input"/>
                </button>
                <button className="button-2 button-primary search-bar-find-button">Find</button>
                <div class="search-bar__secondary-filters">
                    <div className="dd dd--enabled">
                        <div className="dd__head dd--small dd--primary dd--filled">
                            <div className="dd__label dd__label--small">
                                <span class="dd__text">Buy</span>&nbsp;
                            </div>
                            <svg class="dd__icon-svg dd__icon-svg--filled" width="24" height="24"></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchFilters
