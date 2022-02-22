import { useState } from "react";
import { View, Textarea } from "@tarojs/components";
import "./index.scss";

export default function Index() {
  const [content, setContent] = useState("");

  return (
    <View className="home-page">
      <Textarea
        className="textarea"
        placeholder="请输入内容"
        autoHeight
        value={content}
        // onInput={(e: any) => {
        // 	setContent(e.detail.value);
        // }}
      ></Textarea>
    </View>
  );
}
