import { View, TextInput, Image, ScrollView } from 'react-native';
import { Avatar, Icon, Text } from '@rneui/themed';

export default () => {
  const colors = [

  ]


  const categories = [
    { name: 'Resort', icon: 'bonfire-outline' },
    { name: 'Homestay', icon: 'home-outline' },
    { name: 'Hotel', icon: 'business-outline' },
    { name: 'Lodge', icon: 'bed-outline' },
    { name: 'Villa', icon: 'storefront-outline' },
    { name: 'Apartment', icon: 'cube-outline' },
    { name: 'Hostel', icon: 'school-outline' },
    { name: 'See all', icon: 'apps-outline' },
  ];

  const popular = [
    { uri: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max', id: 1 },
    { uri: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max', id: 2 },
    { uri: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max', id: 3 },
  ];

  const recommended = [
    { uri: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max', id: 4 },
    { uri: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max', id: 5 },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "ffffff" }}>
      <View
        style={{
          padding: '1.5rem',
          backgroundColor: "#6155a3",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <TextInput
          placeholder="Search here ..."
          style={{
            backgroundColor: "ffffff",
            borderRadius: 15,
            paddingHorizontal: 15,
            paddingVertical: 10,
            fontSize: 16,
            marginBottom: 20
          }}
        />
        <Icon
          name="search"
          type="feather"
          size={20}
          color="#888"
          containerStyle={{
            position: 'absolute',
            right: 30,
            top: 30
          }}
        />

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Avatar
              rounded
              size={60}
              source={{ uri: 'https://randomuser.me/api/portraits/women/32.jpg' }}
            />
            <View>
              <Text style={{ color: "ffffff" }}>Welcome!</Text>
              <Text h4 h4Style={{ color: "ffffff", fontWeight: 'bold' }}>Donna Stroupe</Text>
            </View>
          </View>
          <Icon
            name="notifications-outline"
            type="ionicon"
            size={26}
            color={"ffffff"}
          />
        </View>
      </View>

      <View style={{ padding: '1.5rem' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Category</Text>
          <Icon name="menu" type="ionicon" size={24} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}
        >
          {categories.map(cat => (
            <View
              key={cat.name}
              style={{
                width: '22%',
                aspectRatio: 1,
                backgroundColor: "#6155a3",
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20
              }}
            >
              <Icon name={cat.icon} type="ionicon" color={"ffffff"} size={24} />
              <Text style={{ color: "ffffff", fontSize: 12, marginTop: 6 }}>{cat.name}</Text>
            </View>
          ))}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Popular Destination</Text>
          <Icon name="menu" type="ionicon" size={24} />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {popular.map(dest => (
            <Image
              key={dest.id}
              source={{ uri: dest.uri }}
              style={{
                width: 120,
                height: 100,
                borderRadius: 10,
                marginRight: 15
              }}
            />
          ))}
        </ScrollView>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            marginVertical: 15
          }}
        >
          Recommended
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recommended.map(dest => (
            <Image
              key={dest.id}
              source={{ uri: dest.uri }}
              style={{
                width: 180,
                height: 100,
                borderRadius: 10,
                marginRight: 15
              }}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};