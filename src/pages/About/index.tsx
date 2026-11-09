import React from 'react';
import { View, Text } from 'react-native';
export default function AboutScreen() {
return (
<View style={{ flex: 1, alignItems: 'center',
justifyContent: 'center', gap: 8 }}>
<Text style={{ fontSize: 24, fontWeight: 'bold' }}>
Sobre o app
</Text>
<Text>Feito por: Pedro Brasil C 34-DS</Text>
</View>
);
}