import { useTheme } from './ThemeProvider';
import { getThemeColor } from './Theme';

export function Button({ children, onClick }) {
  const [theme] = useTheme();

  const style = {
    backgroundColor: getThemeColor(theme),
    border: 'none',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 5,
    color: 'white',
    fontFamily: 'monospace',
  };

  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}