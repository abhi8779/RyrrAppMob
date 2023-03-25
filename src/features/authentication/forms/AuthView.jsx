import * as React from 'react';
import {Button, Card, Text, TextInput} from 'react-native-paper';
import UnifiedAuth from './UnifiedAuth';

const AuthView = () => {
  const imageSource = require('./rytt-logo.png');

  return (
    <Card style={{margin: 16, padding: 16}}>
      <Card.Cover source={imageSource} />
      <Card.Content
        style={{alignItems: 'center', display: 'flex', marginTop: 16}}>
        <Text variant="titleLarge">Login/Signup</Text>
        <Text variant="bodyMedium" style={{marginBottom: 16, marginTop: 8}}>
          Please verify your number to get started
        </Text>
      </Card.Content>
      <UnifiedAuth />
    </Card>
  );
};


export default AuthView;
