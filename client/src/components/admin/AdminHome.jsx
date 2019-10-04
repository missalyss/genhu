import React from 'react';
import { Header, } from 'semantic-ui-react';
import AdminNav from './AdminNav';
import { Container, } from "semantic-ui-react";

const AdminHome = () => (
  < Container>
    <AdminNav />
    <Header as="h3" textAlign="center">GenHu Admin Home</Header>
  </Container>
)

export default AdminHome;