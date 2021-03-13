import * as React from 'react';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';

const MyBanner = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'Fix it',
          onPress: () => setVisible(false),
        },
        {
          label: 'Learn more',
          onPress: () => setVisible(false),
        },
      ]}
      icon='book'>
      There was a problem processing a transaction on your credit card.There was a problem processing a transaction on your credit card.
      There was a problem processing a transaction on your credit card.
    </Banner>
  );
};

export default MyBanner;