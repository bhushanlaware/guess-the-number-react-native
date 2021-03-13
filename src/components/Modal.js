import * as React from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';

const Modal = ({ onCancel, onOkay, children, title }) => {
  return (
    <View>
      <Portal>
        <Dialog visible >
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Content>
            {children}
          </Dialog.Content>
          <Dialog.Actions>
            {/* <Button onPress={onOkay}>Ok</Button> */}
            <Button onPress={onCancel}>Play again</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default Modal;