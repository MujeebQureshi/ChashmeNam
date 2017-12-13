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
