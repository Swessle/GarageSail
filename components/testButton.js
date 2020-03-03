import { Button } from 'react-native-elements';
import styled from 'styled-components/native';

export const TestButton = styled(Button).attrs(props => ({
    textAlign: props.align ? props.align : 'center',
    containerStyle: {
        width: '65%',
    }                                   
}))``;
