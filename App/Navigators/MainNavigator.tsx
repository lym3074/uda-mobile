import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Main/Home";
import MyInfo from "../Screens/Main/Myinfo";
import Diary from "../Screens/Main/Story";
import Story from "../Screens/Main/Story";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
    <Tab.Navigator
        screenOptions={{}}
    >
        <Tab.Screen name="홈" component={Home} options={{}}/>
        <Tab.Screen name="일정" component={Diary} options={{}}/>
        <Tab.Screen name="이야기" component={Story} options={{}}/>
        <Tab.Screen name="설정" component={MyInfo} options={{}}/>
    </Tab.Navigator>
    )
}

export default MainNavigator;