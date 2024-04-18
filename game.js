/* global Phaser */

// Copyright (c) 2024 Calista.E ALL Rights reserved
//
// Created by: Mr. Coxall
// Created on: Apr 2024
// This is the Phaser3 game configuration file

/** 
 * Start Phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    }
  },
  // set backgroud color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  }
}

const game = new Phaser.GAME(config)
console.log(game)