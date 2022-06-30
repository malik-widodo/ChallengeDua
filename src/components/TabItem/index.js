import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconHomeActive,
  IconHome,
  IconList,
  IconListActive,
  IconUser,
  IconUserActive,
} from '../../assets';
import {COLOR_PRIME, COLOR_SECOND} from '../../utils/constant';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') return isFocused ? <IconHomeActive /> : <IconHome />;

    if (label === 'Daftar Mobil')
      return isFocused ? <IconListActive /> : <IconList />;

    if (label === 'Akun') return isFocused ? <IconUserActive /> : <IconUser />;

    return <IconHome />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 10,
    color: {isFocused} ? COLOR_PRIME : COLOR_SECOND,
    marginTop: 2,
  }),
});
