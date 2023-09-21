import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from '@rneui/themed';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.welcome}>
                <Text style={{ fontSize: 20 }}>About</Text>
                <Avatar
                    size={42}
                    rounded
                    title="JN"
                    containerStyle={{ backgroundColor: "purple", marginLeft: 15 }}
                />
            </View>

            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
                type="outline"
                buttonStyle={{ borderColor: 'green', borderWidth: 2 }}
                titleStyle={{ color: 'green' }}
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

