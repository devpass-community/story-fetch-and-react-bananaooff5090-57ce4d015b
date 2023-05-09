import { useState } from "react";
import axios from "axios"
import Container from "./components/Container";
import Spinner from "./components/Spinner";

function App() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = async (event) => {
    // TODO
    setIsLoading(false)
    
    try {
      const response = await axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1');
      const result = response.data
      setQuote(result.text)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <button data-testid="button" onClick={e => handleClick(e)}>
        <span>get a fact</span>
      </button>
      {isLoading || quote === '' ? 
        ( <Spinner /> ) : ( <span data-testid="quote">{quote}</span> )
      }
    </Container>
  );
}

export default App;