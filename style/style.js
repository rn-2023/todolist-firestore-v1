import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 20
  },
  todosContainer: {
    flexShrink: 1,
    marginTop: 15,
    marginBottom: 5
  },
  header: {
    marginTop: 40,
    fontSize: 30
  },
  subheader: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold'
  },
  newItem: {
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  infoText: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 15
  },
  buttonStyle: {
    width: '90%'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#afafaf',
    width: '90%',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginVertical: 15,
    fontSize: 18
  },
  todoItem: {
    flexDirection: 'row',
    marginVertical: 10
  },
  todoText: {
    borderColor: '#afafaf',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 10,
    minWidth: '65%'
  }
});