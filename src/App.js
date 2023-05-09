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
      const response = await axios.get('https://meowfacts.herokuapp.com');
      const result = response.data
      setQuote(result.data[0])
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