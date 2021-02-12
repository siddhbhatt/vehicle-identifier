import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

import Colors from "../constants/Colors";
import GetResults from "../screens/GetResults";
import SelectPhoto from "../screens/SelectPhoto";

const ScreensNavigator = createStackNavigator({
    SelectPhoto: SelectPhoto,
    GetResults: GetResults
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.secondary
        },
        headerTintColor: Colors.primary
    }
});

export default createAppContainer(ScreensNavigator);