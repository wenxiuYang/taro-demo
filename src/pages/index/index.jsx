import React, { useState } from "react";
import { View, Input } from "@tarojs/components";
import "./index.scss";

/**
 * 
 * 复现步骤（使用讯飞输入法）Android
 * 将输入切换至 手写模式
 * 聚焦 Input 框，手写模式输入内容，步骤如下：
 * 1. 输入第一个字 正常
 * 2. 输入第二个字时，onInput 未触发，在候选词手动选择字后，仍不能触发onInput获取到输入内容
 * 
 * 所有第偶数个字都不能正常获取到
 * 
 * 示例视频在 '../../assets'
 * 
 */

export default function Index() {
  const [content, setContent] = useState("");

  const handleInput = e => {
    console.log(e.detail);
    setContent(e.detail.value); // 注释掉此行，第偶数个字的输入可以正常触发input 事件
  };

  return (
    <View className="input-page">
      <View>Input Demo</View>
      <Input placeholder="请输入..." value={content} onInput={handleInput} />
    </View>
  );
}
