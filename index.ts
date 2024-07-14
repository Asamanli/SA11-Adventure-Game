#! /usr/bin/env node

import inquirer from "inquirer";

//Games varaiable
let enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"]
let maxEnemyHealth = 75
let enemyAttackDamageToHero = 25

//Player variable
let HeroHealth = 100
let attackDamageToEnemy = 50
let numHealthPotion = 3 //live saving
let healthPotionHealAmount = 30 //it will increase 30 in health
let healthPotionDropChance = 50

//while loop condition

let gameRun = true

console.log("----------------Welcome to DeadZone----------------");

Gameile:
while(gameRun){
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth +1)
    let enemyIndex = Math.floor(Math.random() * enemies.length)
    let enemy = enemies[enemyIndex]

    console.log(`${enemy} has appeared`);

    while(enemyHealth > 0){
        console.log(`----------------Your Health: ${HeroHealth}----------------`);
        console.log(`----------------${enemy} Health: ${enemyHealth}----------------`);

        let option = await inquirer.prompt([
            {
                name: "ans",
                type: "list",
                message: "what would you like to do",
                choices: ["Attack", "Take Health potion", "Run"]
            }
        ]);

        if(option.ans === "Attack"){
            let damageToEnemy = Math.floor(Math.random() * attackDamageToEnemy + 1 )
            let damageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1)

            enemyHealth -= damageToEnemy
            HeroHealth -= damageToHero

            console.log(`You strike the ${enemy} for ${damageToEnemy}`);
            console.log(`${enemy} strike you for ${damageToHero}`);

            if(HeroHealth <1){
                console.log("you are damaged too much and not able to continue");
                break;
            }
        }

        else if(option.ans === "Take Health potion"){
            if(numHealthPotion > 0){
                HeroHealth += healthPotionHealAmount
                numHealthPotion--

                console.log(`You use health potion for ${healthPotionHealAmount}`);
                console.log(`You now have ${HeroHealth} health`);
                console.log(`You have ${numHealthPotion} health potion left`);
            }else{
                console.log("No health potions left. Defeat enemy for a chance to get health potion");
            }
        }
        else if(option.ans === "Run"){
            console.log(`You run away from ${enemy}`);
            continue Gameile;
        }
    }
    if(HeroHealth < 1){
        console.log("You are out of battle due to weakness");
        break
    }

    console.log(`${enemy} was defeated`);
    console.log(`You have ${HeroHealth} health.`);

    let randomNumber = Math.floor(Math.random() * 100 +1)
    if(randomNumber < healthPotionDropChance){
        numHealthPotion++

        console.log(`enemy give you health potion`);
        console.log(`Your health is ${HeroHealth}`);
        console.log(`Your health potion is ${numHealthPotion}`);
    }



    let userOption = await inquirer.prompt([
        {
            name: "ans",
            type: "list",
            message: "Select your option:",
            choices: ["Continue", "Exit"]
        }
    ]);

    if(userOption.ans === "Continue"){
        console.log("Keep going adventure");
    }else{
        console.log("You have successfully exit from DEADZONE.");
        break;
    }

    console.log("THANK YOU FOR PLAYING");
    
}