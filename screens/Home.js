import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from '@rneui/themed';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.welcome}>
                <Text style={{ fontSize: 20 }}>Welcome!</Text>
                <Avatar
                    size={42}
                    rounded
                    title="JN"
                    containerStyle={{ backgroundColor: "purple", marginLeft: 15 }}
                />
            </View>

            <Button
                title="Go to about page"
                onPress={() => navigation.push('About')}
                type="outline"
                buttonStyle={{ borderColor: 'red', borderWidth: 2 }}
                titleStyle={{ color: 'red' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    }
});
