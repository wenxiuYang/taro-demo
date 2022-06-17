export default {
  pages: ["pages/index/index", "pages/tab2/index","pages/test/index"],
  tabBar: {
    color: '#a0a0a0',
    selectedColor: '#ffffff',
    backgroundColor: '#000000',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: 'Home',
      }, {
        pagePath: 'pages/tab2/index',
        text: 'tab2',
      }
    ]
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  }
};
