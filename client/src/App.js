import logo from './logo.svg';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import UserData from './Components/User';
import Movie from './Components/Movie';
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql',
  });
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <UserData />
        <Movie />
      </div>
    </ApolloProvider>
  );
}

export default App;
