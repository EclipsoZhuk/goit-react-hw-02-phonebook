import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import initialContacts from './contacts.json';
import s from './App.module.css';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
    state = {
        contacts: initialContacts,
        filter: '',
    };

    formSubmitHandler = data => {
        this.repeatControl(data);
    };

    repeatControl = data => {
        const nameArray = this.state.contacts.map(cur => cur.name);
        if (!nameArray.includes(data.name)) {
            let arrayCont = [
                ...this.state.contacts,
                { id: uuidv4(), name: data.name, number: data.number },
            ];
            return this.setState({ ...this.state, contacts: arrayCont });
        } else {
            alert(' Контакт вже є у телефонній книзі!!!');
        }
    };

    elementDelete = (arr, idContact) =>
        arr.filter(elem => elem.id !== idContact);

    deleteContactFromContactList = idContact => {
        let newArrAfterDel = this.elementDelete(this.state.contacts, idContact);
        this.setState({
            ...this.state,
            contacts: [...newArrAfterDel],
        });
    };

    setFilterToState = filterData =>
        this.setState({ ...this.state, filter: `${filterData}` });

    filterArr = fArr => {
        return fArr.filter(({ name }) =>
            name.toUpperCase().includes(this.state.filter),
        );
    };

    render() {
        const {
            formSubmitHandler,
            setFilterToState,
            deleteContactFromContactList,
            filterArr,
        } = this;
        const { contacts } = this.state;

        return (
            <Container>
                <h1 className={s.title}>Phonebook</h1>
                <ContactForm onSubmitData={formSubmitHandler} />
                <h2 className={s.contactTitle}>Contacts</h2>
                <Filter setFilterToState={setFilterToState} />
                <ContactList
                    contacts={filterArr(contacts)}
                    deleteContact={deleteContactFromContactList}
                />
            </Container>
        );
    }
}

export default App;
