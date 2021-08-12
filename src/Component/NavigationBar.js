import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/**
 * @param {string} title required [string] title for navbar
 * @param {object} navigationlink required [object] { "_linkname": { "icon": "_fontawesomeiconname", "link": "_httpsurloflink" } }
 */
export default class NavigationBar extends React.Component {
    render(){   

        const linkList = [];

        for (const [title, meta] of Object.entries(this.props.navigationlink)) {
            linkList.push(
                <li key={title}>
                    <a href={meta.link} alt={title} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={meta.icon}/>
                    </a>
                </li>
            );
        }

        return(
            <nav>
                <div className={"nav-wrapper " + this.props.colour}>
                    <a href="/contact" className="brand-logo left">&nbsp;{this.props.title}</a>
                    <ul id="nav-mobile" className="right">{linkList}</ul>
                </div>
            </nav>
        ); 
    }
}