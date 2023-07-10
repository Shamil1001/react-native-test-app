/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import KeyEvent from 'react-native-keyevent';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        Shamil
        {/* {title} */}
      </Text>

      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [number, setNumber] = useState<number>(0);
  useEffect(() => {
    KeyEvent.onKeyUpListener((keyEvent: any) => {
      handleTVRemoteEvent(keyEvent.keyCode);
    });

    return () => {
      KeyEvent.removeKeyUpListener();
    };
  }, []);

  const handleTVRemoteEvent = (keyCode: any) => {
    // Handle remote control button events here
    // switch (keyCode) {
    //   case KeyEvent.VK_LEFT:
    //     // Handle left button press
    //     break;
    //   case KeyEvent.VK_RIGHT:
    //     // Handle right button press
    //     break;
    //   case KeyEvent.VK_UP:
    //     // Handle up button press
    //     break;
    //   case KeyEvent.VK_DOWN:
    //     // Handle down button press
    //     break;
    //   case KeyEvent.VK_ENTER:
    //     // Handle select button press
    //     break;
    //   case KeyEvent.VK_MEDIA_PLAY_PAUSE:
    //     // Handle play/pause button press
    //     break;
    //   case KeyEvent.VK_MENU:
    //     // Handle menu button press
    //     break;
    // }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleButtonClick = () => {
    setNumber(number + 1);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button title="Click me" onPress={handleButtonClick} />
          <Text>Welcome to Android TV App!</Text>
          {/* <Text>Click me</Text> */}
          <Text>{number}</Text>
          {/* <Button>Click me</Button> */}
          {/* <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section> */}
          {/* <LearnMoreLinks /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
