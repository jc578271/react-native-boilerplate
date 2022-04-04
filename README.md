git clone https://github.com/jc578271/react-native-boilerplate.git YourApp

rm -rf .git

yarn global add react-native-rename react-native

yarn install

npm react-native-rename <newName>
  
eg: react-native-rename "YourApp"

cd ios && pod install && cd ..

in local.properties update: sdk.dir=/Users/<username>/Library/Android/sdk
