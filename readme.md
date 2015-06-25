Complete Setup for fresh machines
----------------------------

*all list items are terminal commands unless otherwise noted.*
*npm commands may require sudo (e.g. sudo npm install)*

 1. install homebrew - ruby -e "$(curl -fsSL 
 https://raw.githubusercontent.com/Homebrew/install/master/install)"
 2. brew update (if you already have brew installed please run this command regardless)
 3. install rbenv - brew install rbenv ruby-build
 4. rbenv install 2.2.0-dev
 5. rbenv global 2.2.0.dev
 6. [install node](http://nodejs.com/)
 7. npm cache clean
 8. npm install -g bower
 9. npm install -g yo
 10. npm install -g grunt-cli
 11. brew install mongodb (wait until each install finishes before moving to the next, install may error out on .lock file existing in /.npm)
 12. mkdir -p /data/db (Add directory for mongodb)
 13. chmod 777 /data/db (Change permission for the folder)
 14. get added to the repo https://github.com/SFCRD
 15. git clone git@github.com:SFCRD/facepages.git
 16. go to root directory of cloned project
 17. npm install 
  - run 'rm -rf node_modules' if 'npm install' complains about permission errors
 18. bower install
 19. gem install bundler
 20. mongod
 21. grunt serve
 
 Setup for devs with all the node, bower, rbenv, mongodb dependencies already installed
 ----------------------------
 1. (sudo) npm install
 2. bower install
 3. (sudo) mongod (seperate tab)
 3. grunt serve