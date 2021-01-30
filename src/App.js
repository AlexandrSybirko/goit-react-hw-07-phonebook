import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLoader } from 'redux/selectors';
import contactsOperations from 'redux/operations';



import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';



export default function App() {
  
  const dispatch = useDispatch();

  const isFirstRender = useRef(true);
  const onFirstLoad = () => dispatch(contactsOperations.fetchContacts());
  const loader = useSelector(getLoader);

  useEffect(() => {
    if (isFirstRender.current) {
      onFirstLoad();

      isFirstRender.current = false;
      return;
    }
  },);

  
  
    return (
      <>
      <Section title="Phonebook">
          <ContactForm />
          {loader && <p>PLEASE WAIT</p>}
      </Section>
      <Section title="Phonebook">
      <Filter />
          <ContactList />
          </Section>
      </>
    );
  }


