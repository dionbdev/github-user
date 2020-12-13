import React from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';

const Show = (props) => {
  

			return (

					
					  
					      <Container className="my-4">
							      <Form.Group>
								      <form onSubmit={props.handleSearch} >
								      	
									        <input
									          type="text"
									          onChange={props.handleSearch2 }
									          value={props.query}
									          ref={props.searchInputRef}
									          
									        />
									        <Button 
									        type="submit" 
									        variant="success"
									        >
									          Search
									        </Button>
									        <Button
									          type="button"
									          onClick={props.handleClearSearch}
									          variant="light"
									        >
									          Clear
									        </Button>
								        
								      </form>
								  </Form.Group>
					      {props.loading ? (
					        <div>Loading results...</div>
					      ) : (
					        <ul>
					        	
						          {props.results && props.results.map(result => (
						            
						          		<Card style={{ width: '18rem' }}>
										  
										  <Card.Img variant="top" alt='image' src={result.avatar_url}  />
										  <Card.Body>
										    <Card.Title>{result.login}</Card.Title>
										    <Button variant="primary" href={result.html_url}>Github profile</Button>
										  </Card.Body>
										</Card>
						          ))}
						        
					        </ul>
					      )}

					      {props.error && <div>{props.error.message}</div>}
					  </Container>
					  

			  );
}

export default Show;
