import { ThemeProvider } from './components/Case13/ThemeProvider';
import { ThemeToolbar } from './components/Case13/ThemeToolbar';
import { Label } from './components/Case13/Label';
import { ThemeLabel } from './components/Case13/ThemeLabel';
import { UserPanel } from './components/Case13/UserPanel';

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



