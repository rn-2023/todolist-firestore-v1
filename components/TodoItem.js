import { View, Text } from 'react-native';
import styles from '../style/style';

const UNCHECKED_TODO_BACKGROUND_COLOR = "lightblue";

export const TodoItem = ({todoItem: todoItem}) => {

  return (
    <View style={styles.todoItem}>
      <Text 
      style={
        [styles.todoText,
        {backgroundColor: UNCHECKED_TODO_BACKGROUND_COLOR}]}>
          {todoItem}
      </Text>
    </View>
  );
}