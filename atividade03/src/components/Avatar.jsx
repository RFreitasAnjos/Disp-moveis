import { View } from "react-native-web";

function Avatar() {
  return (
    <View>
      <Avatar
        rounded
        size={60}
        souce={{uri: 'https://randomuser.me/api/portraits/men/32.jpg'}}>
      </Avatar>
    </View>
  )
}


export default Avatar;