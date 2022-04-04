git clone https://github.com/jc578271/react-native-boilerplate.git YourApp

rm -rf .git

yarn global add react-native-rename react-native

yarn install

npx react-native-rename <newName>
  
eg: npx react-native-rename "YourApp"

cd ios && pod install && cd ..
  
watchman watch-del-all
  
npm start --reset-cache

rm -rf android/local.properties
