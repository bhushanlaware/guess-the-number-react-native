import * as React from 'react';
import { Card, List } from 'react-native-paper';

const ListItem = ({ title, icon }) => (
  <Card elevation={1} style={{ padding: 3, marginBottom: 3 }}>
    <List.Item
      title={title}
      left={props1 => <List.Icon {...props1} icon={icon} />}
    />
  </Card>
);

export default ListItem;