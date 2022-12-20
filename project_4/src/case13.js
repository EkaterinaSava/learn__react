import { ThemeProvider } from './components/ThemeProvider';
import { ThemeToolbar } from './components/ThemeToolbar';
import { Label } from './components/Label';
import { ThemeLabel } from './components/ThemeLabel';
import { UserPanel } from './components/UserPanel';

export function ContextExample() {
  return (
    <div>
      <ThemeProvider>
        <Label>useContext Provider</Label>
        <UserPanel />
        <ThemeLabel />
        <ThemeToolbar />
      </ThemeProvider>
    </div>
  )
}



