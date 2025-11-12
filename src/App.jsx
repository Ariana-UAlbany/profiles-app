import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileCard from './components/ProfileCard.jsx';
import { profiles } from './data/profiles.js';
import { useState } from 'react';

export default function App() {
  const [people, setPeople] = useState(profiles);
  function incrementLikes(id){
    setPeople(ps => ps.map(p => p.id===id? { ...p, likes: p.likes+1 } : p));
  }

  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">Profiles</h1>
      <Row xs={1} md={2} lg={3}>
        {people.map(p => (
          <Col key={p.id}>
            <ProfileCard name={p.name} likes={p.likes} 
            likeButton={()=>incrementLikes(p.id)}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

/*
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

export default function App() {
  return (
    <Container className="py-5">
      <Alert variant="primary" className="text-center mb-0">
        Hello React
      </Alert>
    </Container>
  );
}
*/
/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
