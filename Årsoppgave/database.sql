-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Players`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Players` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Players` (
  `idPlayers` INT NOT NULL,
  `Firstname` VARCHAR(45) NULL,
  `Lastname` VARCHAR(45) NULL,
  `Jersey Nr.` VARCHAR(45) NULL,
  `Country` VARCHAR(45) NULL,
  `Height` VARCHAR(45) NULL,
  `Weight` VARCHAR(45) NULL,
  `Year` VARCHAR(45) NULL,
  `Fatigue` VARCHAR(45) NULL,
  PRIMARY KEY (`idPlayers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Stats`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Stats` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Stats` (
  `idStats` INT NULL AUTO_INCREMENT,
  `idPlayers` INT NOT NULL,
  `PTS` INT(4) NULL,
  `AST` INT(4) NULL,
  `REB` INT(4) NULL,
  `STL` INT(4) NULL,
  `BLK` INT(4) NULL,
  PRIMARY KEY (`idStats`, `idPlayers`),
  INDEX `fk_Stats_Players_idx` (`idPlayers` ASC),
  CONSTRAINT `fk_Stats_Players`
    FOREIGN KEY (`idPlayers`)
    REFERENCES `mydb`.`Players` (`idPlayers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
