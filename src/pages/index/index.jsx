import { useState } from "react";
import { View, Picker } from "@tarojs/components";
import "./index.scss";

// 以下示例中
// 将 end / start 取消注释， Picker 将不能使用，详情报错信息请查看控制台-Console
// taro V3.4.11 或 V3.4.12 都有这个问题

// 补充：H5 picker mode=date 设置 end/start时， value初始值不能为非日期格式，且取值要在 end-start 之间

export default function Index() {
  const [selectedDate, setSelectedDate] = useState("2022-06-12");

  const pickerChange = e => {
    setSelectedDate(e.detail.value);
  };

  return (
    <View className="home-page">
      <Picker
        mode="date"
        end={"2022-06-12"}
        // start={'1990-06-12'}
        value={selectedDate}
        onChange={pickerChange}
      >
        <View className="picker-date">
          <View className="picker-date-text">你选择的日期：{selectedDate}</View>
        </View>
      </Picker>
    </View>
  );
}
