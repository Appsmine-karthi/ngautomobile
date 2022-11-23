import React from 'react'
import '../../assets/css/style.css'
import '../../assets/css/polyglot-language-switcher.css'
import '../../assets/css/magnific-popup.css'
import '../../assets/css/responsive.css'
function TopHeader()
{
    return(<div className="header-top ">
                <div className="auto-container clearfix">
                    <div className="pull-right right-info">
                        <div id="polyglotLanguageSwitcher">
                            <li className="ct-language">
                                <ul className="list-unstyled ct-language__dropdown">
                                    <li>
                                 <a href="#" className="lang-en lang-select" data-lang="en"><img src="https://www.solodev.com/assets/google-translate/flag-usa.png" alt="USA"/> English </a>
                                    </li>
                                </ul>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            )
}
export default TopHeader