import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { useState } from 'react';
import { bookStore } from '../data/book';
import { Avatar, Button } from '@rneui/themed';
export default function About({ navigation }) {

    const [data, setData] = useState();

    const addingData = () => {
        console.log("Started")
        setData(bookStore);
    }

    return (
        <View style={styles.container}>
            <Text>Welcome to the dashboard</Text>
            <Avatar
                size={42}
                rounded
                title="JN"
                containerStyle={{ backgroundColor: "purple", marginLeft: 15, marginVertical: 20 }}
            />
            <Button title="Show data" onPress={() => addingData()}
                type="outline"
                buttonStyle={{ borderColor: 'green', borderWidth: 2 }}
                titleStyle={{ color: 'green' }} />
            {
                data && data.books.map((b, index) => {
                    if (b.category.toLowerCase() == 'java') {
                        return (
                            <View key={index}>
                                <Text>{b.title}</Text>
                                {
                                    b.authors && b.authors.map((a, ind) => {
                                        return (
                                            <View key={ind}>
                                                <Text>{a}</Text>
                                            </View >
                                        )
                                    })
                                }
                            </View >
                        )
                    }
                })
            }
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
});
