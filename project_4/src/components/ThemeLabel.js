import { Label } from './Label';
import { useTheme } from './ThemeProvider';

export function ThemeLabel() {
  const [theme] = useTheme();

  return <Label>Current theme: {theme}</Label>;
}