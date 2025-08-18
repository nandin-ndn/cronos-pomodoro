import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon} from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState <AvailableThemes> ('dark');

  function handleThemeChange(event :React.MouseEvent<HTMLAnchorElement, MouseEvent>){
    event.preventDefault();
    console.log('Clicado', Date.now());
  }

  return (
    <div className={styles.menu}>
      
      <a className={styles.menuLink} href='#'  aria-label='Ir para a home'
        title='Ir para a home'>
        <HouseIcon />
      </a>
    
      <a className={styles.menuLink} href='#' aria-label='Ir para o histórico'
        title='Ir para o histórico'>
        <HistoryIcon />
      </a>
      
      <a className={styles.menuLink} href='#'  aria-label='Configurações'
        title='Configurapções' >
        <SettingsIcon />
      </a>
      
      <a className={styles.menuLink} href='#'  aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handleThemeChange}>
        <SunIcon />
      </a>
    </div>
  );
}