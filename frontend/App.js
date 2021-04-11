import React, {useState} from 'react';
import {Node} from 'react'; // TODO learn this
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Button
} from 'react-native';

const BACKEND_URL = 'http://127.0.0.1:8000'

const App = () => {
  const [backendResponse, setBackendResponse] = useState("")

  const fetchServer = async () => {
    try {
      let response = await fetch(
        BACKEND_URL + '/api/ping'
      );
      setBackendResponse(await response.text());
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Button
            onPress={fetchServer}
            title="Talk to Server!!">
          </Button>
          <Text>
            Backend response:
          </Text>
          <Text>
            {backendResponse}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
