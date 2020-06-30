# MicroRestapiNodesql
micro rest api base build using nodejs and mysql database 

# table
CREATE TABLE IF NOT EXISTS `person` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NOT NULL DEFAULT '0',
  `last_name` VARCHAR(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
)


#install
npm install

# run 
node server.js


