import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Surface } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const SimpleCard = () => (
  <Surface style={styles.surface}>
    <Card elevation={2}>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
      {/* <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content> */}
      <Card.Cover source={require('../../assets/cardTemp.jpg')} />
      <Card.Actions>
        <Button onPress={() => { alert('Cancel') }}>Cancel</Button>
        <Button onPress={() => { alert('ok') }}>Ok</Button>
      </Card.Actions>
    </Card></Surface>
);
const styles = StyleSheet.create({
  surface: {
    padding:10
  }
})
export default SimpleCard;