import React from 'react'
import { Container, Card, Button } from 'react-bootstrap';

const Hero = () => {
  return (
        <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>CERT</h1>
          <p className='text-center mb-4'>
          This is MERN Authentication app that stores a JWT in a HTTP-Only cookie
                .It also uses Redux Toolkit for State Management and MongoDB for DataBase
               <p class=' pt-5 font-bold'>Created By Dhirendra Singh 2023</p>
          </p>
          <div className='d-flex'>
            <Button variant='primary' href='/login' className='me-3'>
              Sign In
            </Button>
            <Button variant='secondary' href='/register'>
              Register
            </Button>
          </div>
        </Card>
      </Container>
    </div>

  )
}

export default Hero