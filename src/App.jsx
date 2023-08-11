import RootLayout from './layout/RootLayout';
import Practice from './pages/Practice/Practice';
import FilterableList from './pages/Practice/parts/FilterableList';

function App() {
  return (
    <div className="App">
      <RootLayout>
        {/* <Practice /> */}
        <FilterableList />
      </RootLayout>
    </div>
  );
}

export default App;
