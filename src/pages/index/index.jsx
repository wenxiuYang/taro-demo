import Taro from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import "./index.scss";

export default function Index() {
  const handleClick = (key = 2) => {
    Taro.navigateTo({
      url: `pages/test/index`
    });
  };

  return (
    <View className="home-page">
      <View>home page, tabbar page</View>

      <Button onClick={handleClick}>
        {"Go to non tabbar page: test page"}
      </Button>
    </View>
  );
}
