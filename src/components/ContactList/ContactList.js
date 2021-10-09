import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

class ContactList extends Component {
    static defaultProps = {
        contacts: [],
    };

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        deleteContact: PropTypes.func.isRequired,
    };

    render() {
        const { contacts, deleteContact } = this.props;

        return (
            <ul>
                {contacts.map(({ id, name, number }) => {
                    return (
                        <li key={id} id={id}>
                            {`${name}: ${number}`}
                            <button
                                className={s.buttonDelete}
                                data-id={id}
                                onClick={() => deleteContact(id)}
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ContactList;
