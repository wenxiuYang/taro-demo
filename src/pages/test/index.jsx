import Taro from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import "./index.scss";

export default function Index() {
  const handleClick = () => {
    Taro.switchTab({
      url: `pages/index/index`
    });
  };
  return (
    <View className="test-page" style={{ fontSize: "30px" }}>
      <View>test page</View>

      <Button onClick={handleClick}>{"Go to tabbar page: home page"}</Button>
    </View>
  );
}
