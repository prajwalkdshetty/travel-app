import React, { Component } from 'react';
import './booking-header.scss'
import Filters from '../filters/filters';
import { withTranslation } from "react-i18next";

class BookingHeader extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }
    render() {        
        const { t } = this.props;
        return (
            <section class="booking-container">
                <div class="wrapper">
                    <div class="booking-header">
                        <div class="selected-header"><div class="sel-title" title="{t('Check In')}">{t('Check In')}</div><div class="sel-value">19 Jan 2020</div></div>
                        <div class="selected-header"><div class="sel-title" title={t('Check Out')}>{t('Check Out')}</div><div class="sel-value">20 Jan 2020</div></div>
                        <div class="selected-header"><div class="sel-title" title={t('City')}>{t('City')}</div><div class="sel-value">Leipzig, Germany</div></div>
                        <div class="selected-header"><div class="sel-title">{t('Rooms')}|{t('Adults')}|{t('Children')} </div><div class="sel-value">1|2|0</div></div>
                        <button class="button button-small" id="filter-btn" title={t('Filter')} onClick={() => this.toggleFilter()}>{t('Filter')}</button>
                    </div>
                    <Filters ref={this.child} />
                </div>
            </section>
        )
    }

    toggleFilter() {
        this.child.current.toggleFilter();
    }
}

export default withTranslation()(BookingHeader);