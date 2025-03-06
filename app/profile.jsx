import { View, Text, Image } from 'react-native';

export default function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 900, marginLeft: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#e65503' }}>Olá, Anna Balico.</Text>
            <Image 
                source={{ uri: 'https://img.freepik.com/fotos-premium/personagem-de-desenho-animado-laranja_625492-1714.jpg?w=360' }} 
                style={{ width: 100, height: 100, marginTop: 100, borderRadius: 50, marginRight: 320 }} 
            />
        </View>
    );
}