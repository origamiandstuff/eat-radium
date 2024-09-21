const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
const g = require('../gunvals.js')

//return console.log('[Arms Race Addon] Disabled by default.');

// Removes the desmos branch and adds the single branch to be upgradable from basic.
// Removes single from assassin branch.
Class.assassin.UPGRADES_TIER_3 = Class.assassin.UPGRADES_TIER_3.filter(assassin => assassin !== 'single');
Class.basic.UPGRADES_TIER_1 = Class.basic.UPGRADES_TIER_1.filter(basic => basic !== 'desmos');
Class.basic.UPGRADES_TIER_2.push('single');

// Branches

Class.single.UPGRADES_TIER_3 = ['duo','autoSingle'];

// Tanks

// Singles
Class.duo = {
  PARENT: 'genericTank',
  LABEL: 'Duo',
  GUNS: [
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                Y: 5.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                Y: -5.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single]),
                TYPE: "bullet"
            }
        },
    ],
  
};

Class.autoSingle = makeAuto('single');


console.log('[Arms Race Addon] Loaded Arms Race.')