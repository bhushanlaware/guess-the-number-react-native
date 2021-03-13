import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Avatar, Button, Card, Headline, HelperText, List, Paragraph, Surface, TextInput, Title } from 'react-native-paper';
import ListItem from '../components/ListItem';
import Modal from '../components/Modal';

class HomeScreen extends Component {
  state = {
    number: Math.round(Math.random() * 100),
    currentValue: '',
    errorText: '',
    turn: 7,
    history: [],
    status: ''
  }
  intializeGame = () => {
    this.setState({
      number: Math.round(Math.random() * 100),
      currentValue: '',
      errorText: '',
      turn: 7,
      history: [],
      status: ''
    })
  }
  handleCurrentValueChange = (value) => {
    if (value > 100) return;
    this.setState({ currentValue: value })
    this.setState({ errorText: '' })

  }
  handleGuesss = () => {
    const { currentValue, history, turn, number } = this.state;
    if (currentValue == number) {
      this.setState({ status: 'win' });
    }
    else if (turn === 0) {
      this.setState({ status: 'lost' });
    }
    else {
      if (currentValue) {
        this.setState({
          turn: turn - 1,
          currentValue: '',
          history: [currentValue > number ? `${currentValue} is too high` : `${currentValue} is too low`, ...history]
        })
      } else {
        this.setState({ errorText: 'Please enter number' })
      }
    }
  }
  renderWinModal = () => <Modal
    title="😃 You won!"
    onOkay={this.intializeGame}
    onCancel={this.intializeGame}
  >
    <View style={{ alignItems: 'center' }}>
      <Avatar.Text color='#f4f4f4' size={50} label='🎁' />
      <Paragraph>Well done! You correctly guess the number {this.state.number}</Paragraph>
    </View>
  </Modal>

  renderLoseModal = () => <Modal
    title="😕 You Lost! "
    onOkay={this.intializeGame}
    onCancel={this.intializeGame}
  >
    <View style={{ alignItems: 'center' }}>
      <Avatar.Text color='#f4f4f4' size={50} label='💔' />
      <Paragraph>Oops! Number was {this.state.number}</Paragraph>
    </View>
  </Modal>
  render() {
    const { currentValue, errorText, turn, history, status } = this.state;
    return (<Surface style={{ height: '100%' }}>
      <Card
        elevation={2}
        style={{ padding: 10 }}
      >
        <Headline style={{ alignSelf: 'center' }}>Turns Remaning {turn + 1}</Headline>
        <TextInput
          label='Enter your number'
          value={currentValue}
          onChangeText={this.handleCurrentValueChange}
          mode='outlined'
          error={!!errorText}
          keyboardType='number-pad'
        />
        <HelperText type='error' visible={!!errorText}>{errorText}</HelperText>
        <View style={{ paddingTop: 2, paddingBottom: 5, elevation: 0, alignItems: 'center' }}>
          <Button
            onPress={this.handleGuesss}
            mode='contained'
            style={{ width: 150 }}
            icon='check'
            disabled={turn < 0}
          >
            Guess
        </Button>
        </View>
      </Card>
      <ScrollView style={{ padding: 5 }}>
        <List.Section>
          {history.map((item, index) =>
            <ListItem title={item} icon={item.includes('high') ? "arrow-up" : 'arrow-down'} key={index}></ListItem>
          )}
        </List.Section>
      </ScrollView>
      { !!status ? status === 'win' ? this.renderWinModal() : this.renderLoseModal() : null}
    </Surface>);
  }
}

export default HomeScreen;