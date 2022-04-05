git clone https://github.com/jc578271/react-native-boilerplate.git YourApp

rm -rf .git

yarn global add react-native-rename react-native

yarn install

npx react-native-rename "YourApp"

find thoughtout the project the "Geolocation", then change to "YourApp"

cd ios && pod install && cd .. (IOS)

rm -rf android/local.properties
  
watchman watch-del-all
  
npm start --reset-cache
