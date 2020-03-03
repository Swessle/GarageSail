import { Input } from 'react-native-elements';
import styled from 'styled-components/native';

export const TextField = styled(Input).attrs(props => ({
    textAlign: props.align ? props.align : 'center',
    containerStyle: {
        width: '65%',
    },
    color: 'black'                                     
}))``;
