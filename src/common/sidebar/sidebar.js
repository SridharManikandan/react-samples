import React, { Component } from 'react';
import data from '../../samples.json';
import { Link } from 'react-router-dom';
const samples = data.samples;

class Sidebar extends Component {
    onHomeClick() {
        var homePageUrl = window.location.origin.indexOf('demos.boldreports.com') !== -1 ? '/home/' : '/';
        window.location.href = window.location.origin + homePageUrl + '';
    }
    tocSelection(routerPath) {
        var currentLocation = document.location.href;
        return currentLocation.includes(routerPath) ? 'toc-selected' : '';
    }
    componentDidMount() {
        document.getElementsByClassName('toc-selected')[0].focus();
    }
    render() {
        return (
            <ej-Sidebar>
                <div className="ej-sidebar-content">
                    <div className="ej-sb-home ej-sb-icons" onClick={this.onHomeClick}>
                        <span className="ej-sb-home-text">Home</span>
                    </div>
                    <div className="ej-sb-toc">
                        {samples.map((sample, index) => (<div data-uid={index} key={index} onClick={this.props.onClick} className={`ej-sb-toc-card ${this.tocSelection(sample.routerPath)} `} tabIndex={-1}>
                            <Link to={`/${sample.basePath}/${sample.routerPath}`} >
                                <div className={sample.imageDetails.isLandscape ? "ej-landscape-img" : "ej-portrait-img"} style={{ backgroundPositionY: `-${sample.imageDetails.isLandscape ? sample.imageDetails.index * 70 : sample.imageDetails.index * 120}px` }}>
                                </div></Link>
                            <div className="ej-sb-toc-title">{sample.sampleName}</div>
                            {
                                (sample.status !== undefined && sample.status !== null && (sample.status.toLowerCase() === "updated" || sample.status.toLowerCase() === "new")) ? <span className={`${sample.imageDetails.isLandscape ? 'ej-landscape ' : 'ej-portrait'} ej-status-label ${'ej-' + sample.status.toLowerCase()}`}>{sample.status}</span> : ''
                            }
                        </div>))}
                    </div>
                </div>
            </ej-Sidebar>
        );
    }
}

export default Sidebar;