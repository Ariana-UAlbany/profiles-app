import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileCard from './components/ProfileCard.jsx';
import { profiles } from './data/profiles.js';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';


export default function App() {
  const [people, setPeople] = useState(profiles);
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  function incrementLikes(id){
    setPeople(ps => ps.map(p => p.id===id? { ...p, likes: p.likes+1 } : p));
  }
  function addNewProfile(formEntry){
    formEntry.preventDefault();
    const trimmed = name.trim();
    const exists = people.some(p => p.name.toLowerCase()===trimmed.toLowerCase());
    if (!trimmed || exists) {
      setError(true);
      return;
    }
    setError(false);
    setPeople(ps => [...ps, { id: Date.now(), name: trimmed, likes: 0 }]);
    setName('');
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

      <Form onSubmit={addNewProfile} className="mb-4 d-flex justify-content-center">
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={formEntry => setName(formEntry.target.value)}
          isInvalid={error}
          style={{ maxWidth: '300px', marginRight: '0.5rem' }}
        />
        <button type="submit">Add Profile</button>
        <Form.Control.Feedback type="invalid">
          Name is required and must be unique!
        </Form.Control.Feedback>
      </Form>
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
