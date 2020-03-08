import { StyleSheet, Dimensions, Platform} from 'react-native';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    root: {
        flex: 1, 
    },
    title: {
        textAlign: 'center', 
        fontSize: 24
    },
    codeFiledRoot: {
        marginTop: 20,
        marginLeft:16,
        marginRight:16
    },
    cell: {
      width: 50,
      height: 50,
      borderRadius:10,
      lineHeight: 45,
      fontSize: 17,
      borderWidth: 2,
      textAlign: 'center',
    },
    focusCell: {
      borderColor: '#008BFF',
    },
});

export default styles;