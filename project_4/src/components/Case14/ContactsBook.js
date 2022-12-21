import { ContactsProvider } from './ContactsProvider';
import { ContactsGrid } from './ContactsGrid';
import { ContactsToolbar } from './ContactsToolbar';

export function ContactsBook() {
  return (
    <ContactsProvider>
      <ContactsGrid />
      <ContactsToolbar />
    </ContactsProvider>
  );
}