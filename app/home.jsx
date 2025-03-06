import { View, Text } from 'react-native';

export default function Home() {
    return (
        <View style ={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'orange' }}> Bem-vindo(a) </Text>
            <Text style={{ color: 'black' }}> A nossa pagina inicial!</Text>
        </View>
    );
}