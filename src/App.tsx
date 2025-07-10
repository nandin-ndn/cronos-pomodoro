import './/styles/theme.css';
import './/styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
 
  return (
  <>
  <Heading>Ola mundo 2
    <button>
      <TimerIcon/>
    </button>
  </Heading>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi corporis adipisci praesentium at totam delectus, perspiciatis nihil fugiat accusantium explicabo repellendus laudantium reiciendis eos, assumenda necessitatibus! Vitae corrupti doloremque quae?</p>
  </>
  )
}
