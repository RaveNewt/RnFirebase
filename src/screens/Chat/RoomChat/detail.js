import React from 'react';
import {FlatList, View} from 'react-native';
import {Appbar, TextInput, useTheme} from 'react-native-paper';
import LeftBubble from '../../../components/ChatBubble/LeftBubble';
import RightBubble from '../../../components/ChatBubble/RightBubble';
import Divider from '../../../components/Divider';

const Detail = ({
  currentUserId,
  chats = [],
  message,
  onMessageChange,
  onBackPress,
  onSendChat,
}) => {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Appbar.Header style={{backgroundColor: theme.colors.primaryContainer}}>
        <Appbar.BackAction onPress={onBackPress} />
        <Appbar.Content title="Room Chat" />
      </Appbar.Header>
      <FlatList
        data={chats}
        contentContainerStyle={{
          flexGrow: 1,
          padding: 16,
        }}
        keyExtractor={(_, index) => `message-${index}`}
        ItemSeparatorComponent={() => <Divider height={12} />}
        renderItem={({item}) =>
          item.userId !== currentUserId ? (
            <LeftBubble data={item} />
          ) : (
            <RightBubble data={item} />
          )
        }
      />
      <TextInput
        mode="outlined"
        placeholder="Chat"
        value={message}
        onChangeText={text => onMessageChange(text)}
        textColor={theme.colors.onSecondaryContainer}
        right={
          <TextInput.Icon
            icon="send"
            color={theme.colors.onSecondaryContainer}
            onPress={onSendChat}
          />
        }
        style={{
          margin: 16,
          marginTop: 0,
        }}
        outlineStyle={{
          borderRadius: 32,
          backgroundColor: theme.colors.secondaryContainer,
          borderColor: 'transparent',
        }}
      />
    </View>
  );
};

export default Detail;
