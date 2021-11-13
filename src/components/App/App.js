// import { connect } from 'react-redux';
import Container from '../Container';
import Form from '../Form';
import Filter from '../Filter';
import ContactList from '../ContactsList';
// import actions from '../../redux/Phonebook/phonebook-actions';
import s from './App.module.css';

function App() {
  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      <Filter />
      <h2 className={s.contactTitle}>Contacts</h2>
      <ContactList />
    </Container>
  );
}
// const mapStateToProps = state => {
//   return {
//     contacts: state,
//   };
// };
// const mapDispatchToProps = dispatch => ({
//   addNote: text => dispatch(actions.addContact(text)),
// });
export default App;
