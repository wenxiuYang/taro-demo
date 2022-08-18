import { Component } from "react";
import { View, MovableArea, MovableView } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <View>direction: horizontal</View>
        {/* 
          1. 水平方向可拖拽滑动，但拖拽滑动不流畅，按住MovableView后，只有偶尔某次可以拖拽滑动，大部分都不能拖拽滑动
        */}
        <MovableArea style="height: 200px; width: 100%; background: red;">
          <MovableView
            style="height: 50px; width: 50px; background: blue; font-size: 16px;"
            direction="horizontal"
          >
            Here!
          </MovableView>
        </MovableArea>

        <View>direction: vertical</View>
        {/* 
          1. 竖直方向不能拖拽滑动
        */}
        <MovableArea style="height: 200px; width: 100%; background: red;">
          <MovableView
            style="height: 50px; width: 50px; background: blue; font-size: 16px;"
            direction="vertical"
          >
            Here!
          </MovableView>
        </MovableArea>

        <View>direction: all</View>
        {/* 
          1. 水平方向 只有偶尔可以拖拽滑动，大部分情况都不能拖拽滑动
          2. 竖直方向不能拖拽滑动
        */}
        <MovableArea style="height: 200px; width: 100%; background: red;">
          <MovableView
            style="height: 50px; width: 50px; background: blue; font-size: 16px;"
            direction="all"
          >
            Here!
          </MovableView>
        </MovableArea>
      </View>
    );
  }
}
