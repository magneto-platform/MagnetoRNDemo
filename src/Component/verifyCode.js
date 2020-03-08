import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import styles from './style';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 5;
const VerifyCode = (prop) => {
  const [value, setValue] = useState('00000');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const handleSetVal  = e => {
    console.log('code val : '+e);
    setValue(e);
    if(e.length == 5){
      prop.onComplete(value);
    }
  };
  return (
    <SafeAreaView style={[styles.root,{marginTop:prop.MarginTop}]}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={handleSetVal}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={   
              isFocused ? [styles.cell,{borderColor:'#008BFF',color:'#008BFF'}] :
              symbol !=='0' && value.length < 5 ? [styles.cell,{borderColor:prop.borderColor,color:'#008BFF'}]  :  [styles.cell,{borderColor:prop.borderColor,color:prop.TextColor} ] }
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default VerifyCode;