import { useTheme } from '../../../context/ThemeContext';
import classes from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={theme === 'blue'}
      aria-label="Сменить тему"
      className={classes.toggle}
      onClick={toggleTheme}
    >
      <span className={classes.knob} />
    </button>
  );
};

export default ThemeToggle;
