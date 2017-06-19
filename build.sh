echo "Clean up project dir"
cd ~/dev/irt-io
git pull

echo "Install app packages"
cd ~/dev/irt-io
npm install
bower install

echo "Build app and export"
ng build
rm -r /var/www/irt-io/*
cp -R ~/dev/irt-io/dist/* /var/www/irt-io/
