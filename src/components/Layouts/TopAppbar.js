import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const TopAppbar = ({ title, toggleTheme }) => (
    <Appbar.Header>
        {/* <Appbar.BackAction onPress={() => { }} /> */}
        <Appbar.Content title={title} />
        <Appbar.Action icon="theme-light-dark" onPress={toggleTheme} />
        {/* <Appbar.Action icon={MORE_ICON} onPress={() => { }} /> */}
    </Appbar.Header>
);

export default TopAppbar;