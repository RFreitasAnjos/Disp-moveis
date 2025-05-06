import React from 'react';

import Chat from './Chat';
import Voyage from './Voyage';
import Medecin from './Medecin';

import { View } from 'react-native';
import { Tab, TabView } from '@rneui/themed';

export default () => {
  const [index, setIndex] = React.useState(0);

  const viewMap = [
    {
      title: 'Mensagens',
      icon: 'chatbubbles-sharp',
      element: Chat,
    },
    {
      title: 'Médicos',
      icon: 'medical-sharp',
      element: Medecin,
    },
    {
      title: 'Viagens',
      icon: 'airplane-sharp',
      element: Voyage,
    },
  ]

  return (
    <>
      <TabView 
        value={index}
        onChange={setIndex} 
        animationType="timing"
      >
        {
          viewMap.map(view => {
            const ViewElement = view.element

            return (
              <View
                style={{ flex: 1 }}
                key={view.title}                
              >
                <TabView.Item>
                  <ViewElement />
                </TabView.Item>
              </View>              
            )
          })
        }
      </TabView>

      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
            backgroundColor: "#6155a3",
            height: 3,
        }}
        containerStyle={{
            backgroundColor: "#000000"
        }}
      >
        {
          viewMap.map(item => {
            return (
              <Tab.Item
                key={item.title}
                title={item.title}
                titleStyle={{ fontSize: 12, color: "ffffff" }}
                icon={{ name: item.icon, type: 'ionicon', color: "ffffff" }}
              />
            )
          })
        }
      </Tab>
    </>
  );
};