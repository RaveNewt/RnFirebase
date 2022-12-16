import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Avatar, Card} from 'react-native-paper';

const ChatItem = ({chat, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card.Title
        title={chat.username}
        subtitle={chat.lastMessage}
        left={props => <Avatar.Icon {...props} icon="account" />}
      />
    </TouchableOpacity>
  );
};

export default ChatItem;
