
import './App.css';
import Counter from './components/Lev1_1 Counter/Counter';

import StateFAQ from './components/Lev1_2 state FAQ/StateFAQ';
import DayNightSwitch from './components/Lev1_3 DayNightSwitch/DayNightSwitch';
import Input from './components/Lev1_6 Input/Input';

function App() {
  console.log("Render");

  return (
    <div className="App">
      <h1>Lev1_1</h1>

      <Counter />
      <h1>Lev1_2</h1>

      <StateFAQ />
      <h1>Lev1_3</h1>
      <DayNightSwitch />
      <h1>Lev1_6</h1>
      <Input />
    </div >
  );
}

export default App;
