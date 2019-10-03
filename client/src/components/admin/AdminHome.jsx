import React from 'react';
import { Header, } from 'semantic-ui-react';
import Navbar from '../shared/Navbar';
import { Container, } from "semantic-ui-react";

const AdminHome = () => (
  < Container>
    <Navbar />
    <Header as="h3" textAlign="center">GenHu Admin Home</Header>
  </Container>
)

export default AdminHome;