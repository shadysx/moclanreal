import React ,{useContext, useRef, useState} from 'react'
import { Form, Button, Card, Container, Alert} from 'react-bootstrap'
import { AuthContext, useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'


export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const {currentUser, login} = useAuth()
    const history = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            console.log('login succes')
            console.log(currentUser.email)
            history("/")
        }
        catch {
            setError("Failed to login")
        }

        setLoading(false)
    }

    return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>            
        <div className="w-100" style={{maxWidth: "400px"}}>
            <Card>
                <Card.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <h2 className="text-center mb-4">Log In</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control ref={emailRef}  type="email"></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" ></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-4" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card> 
            <div className="w-100 text-center mt-2">Need an account? <Link to="/signup">Sign Up</Link></div>
        </div>
    </Container>
    )
}
