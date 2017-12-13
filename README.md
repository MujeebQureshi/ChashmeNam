# ChashmeNam
To Enable Google Sign In for App, follow these steps:
1) Make sure you are logged into your (company's) gmail account
2) Go to this link: https://developers.google.com/mobile/add?platform=android&cntapi=signin 
3) Fill in your App Name
4) Fill in your App's package name
5) Choose Google Sign In
6) To enable signin, type in your SHA1 key.
7) To get SHA1 key, make sure you have JAVA jre installed.
8) Cd (go) to your jre bin directory from cmd (command prompt). (example: C:\Program Files (x86)\Java\jre1.8.0_151\bin)
9) type in this command : keytool -exportcert -list -v -alias androiddebugkey -keystore %USERPROFILE%\.android\debug.keystore
10) %USERPROFILE% --> (example: C:\Users\isd)
11) The command would print SHA1 on cmd, copy this SHA1 key and paste it the inputbox provided by google.
12) Go to https://console.developers.google.com/ , select your App and verify if the services are enabled. (check credentials tab)

#####################
echo "# ChashmeNam" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/MujeebQureshi/ChashmeNam.git
git push -u origin master
#####################

To enable Facebook login
1) Make sure you are logged in to your (company's) facebook account
2) go to https://developers.facebook.com/
3) Add new App, an AppID would be generated automatically
4) generate a 28 character key hash using the following command on cmd (command prompt):
	keytool -exportcert -alias androiddebugkey -keystore C:\Users\isd\.android\debug.keystore | openssl sha1 -binary | openssl base64
(Note: you should have openssl on your system. Here is the download link: https://code.google.com/archive/p/openssl-for-windows/downloads 
Moreover, the architecture (x32 or x64) must be consistent with your installed jre's/ jdk's architecture.
5) Go to settings of App (in developers.facebook.com) and add new platform for the app. (Android / iOS)
6) Add Package Name and 28 character hash and then save the settings.
