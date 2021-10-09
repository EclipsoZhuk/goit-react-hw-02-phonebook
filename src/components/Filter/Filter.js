import { Component } from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

class Filter extends Component {
    static propTypes = {
        setFilterToState: PropTypes.func.isRequired,
    };

    setFilterValue = e => {
        const value = e.target.value.toUpperCase();
        this.props.setFilterToState(value);
    };

    render() {
        return (
            <label className={s.text}>
                Find contacts by name
                <input
                    placeholder="Search"
                    className={s.value}
                    onChange={this.setFilterValue}
                ></input>
            </label>
        );
    }
}

export default Filter;
