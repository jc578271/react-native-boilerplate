git clone https://github.com/jc578271/react-native-boilerplate.git YourApp

cd YourApp

rm -rf .git

yarn global add react-native-rename

yarn install

npx react-native-rename "YourApp"

find entirely the project "Geolocation" (with Match case and Words), then change to "YourApp"

cd ios && pod install && cd .. // -> for MacOS
  
watchman watch-del-all // -> for MacOS
  
npm start --reset-cache
