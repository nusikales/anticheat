const ServerConfig = {
    
    BlacklistedEntities: [
        // cars
        "deluxo", 
        "nightshark",
        "TrophyTruck2",
        "Technical2",
        "Technical3",
        "Insurgent2",
        "Insurgent",
        "insurgent3",
        "Dune5",
        "Dune4",
        "Dune3",
        "Dune2",
        "Dune",
        "Besra",
        "Blimp",
        "Blimp2",
        "CargoPlane",
        "Cuban800",
        "Dodo",
        "Duster",
        "Hydra",
        "Jet",
        "Lazer",
        "Luxor",
        "Luxor2",
        "Mammatus",
        "Milijet",
        "Nimbus",
        "Shamal",
        "Stunt",
        "Titan",
        "Velum",
        "Velum2",
        "Vestra",
        "ArmyTanker",
        "ArmyTrailer",
        "ArmyTrailer2",
        "BaleTrailer",
        "BoatTrailer",
        "CableCar",
        "DockTrailer",
        "GrainTrailer",
        "PropTrailer",
        "RakeTrailer",
        "TR2",
        "TR3",
        "TR4",
        "TRFlat",
        "TVTrailer",
        "Tanker",
        "Tanker2",
        "TrailerLogs",
        "TrailerSmall",
        "Trailers",
        "Trailers2",
        "Trailers3",
        "Freight",
        "FreightCar",
        "FreightCont1",
        "FreightCont2",
        "FreightGrain",
        "FreightTrailer",
        "TankerCar",
        "Boxville5",
        "Annihilator",
        "Buzzard",
        "Cargobob",
        "Cargobob2",
        "Cargobob3",
        "Cargobob4",
        "Frogger",
        "Frogger2",
        "Maverick",
        "Savage",
        "Skylift",
        "Supervolito",
        "Supervolito2",
        "Valkyrie",
        "Valkyrie2",
        "XLS2",
        "Schafter5",
        "Schafter6",
        "Baller5",
        "Baller6",
        "Kuruma2",
        "patrolboat",
        "dinghy5",
        "avisa",
        "cerberus2",
        "cerberus3",
        "phantom2",
        "terbyte",
        "volatus",
        "annihilator2",
        "rhino",
        "minitank",
        "khanjali",
        "scarab",
        "scarab2",
        "scarab3",
        "thruster",
        "trailersmall2",
        "apc",
        "barrage",
        "chernobog",
        "halftrack",
        "oppressor2",
        "dominator6",
        "monster4",
        "menacer",
        "rcbandito",
        "technical",
        "trophytruck2",
        "zhaba",
        "formula",
        "formula2",
        "openwheel1",
        "openwheel2",
        "alphaz1",
        "avenger",
        "avenger2",
        "blimp3",
        "bombushka",
        "tula",
        "cognoscenti2",
        "brickade",
        "vigilante",
        "trailers4",
        "trailerlarge",

        // pickups
        "PICKUP_VEHICLE_WEAPON_APPISTOL", "PICKUP_VEHICLE_WEAPON_ASSAULTSMG", "PICKUP_VEHICLE_WEAPON_COMBATPISTOL", "PICKUP_VEHICLE_WEAPON_GRENADE", "PICKUP_VEHICLE_WEAPON_MICROSMG", "PICKUP_VEHICLE_WEAPON_MOLOTOV", "PICKUP_VEHICLE_WEAPON_PISTOL", "PICKUP_VEHICLE_WEAPON_PISTOL50", "PICKUP_VEHICLE_WEAPON_SAWNOFF", "PICKUP_VEHICLE_WEAPON_SMG", "PICKUP_VEHICLE_WEAPON_SMOKEGRENADE", "PICKUP_VEHICLE_WEAPON_STICKYBOMB", "PICKUP_WEAPON_ADVANCEDRIFLE", "PICKUP_WEAPON_APPISTOL", "PICKUP_WEAPON_ASSAULTRIFLE", "PICKUP_WEAPON_ASSAULTRIFLE_MK2", "PICKUP_WEAPON_ASSAULTSHOTGUN", "PICKUP_WEAPON_ASSAULTSMG", "PICKUP_WEAPON_AUTOSHOTGUN", "PICKUP_WEAPON_BAT", "PICKUP_WEAPON_BATTLEAXE", "PICKUP_WEAPON_BOTTLE", "PICKUP_WEAPON_BULLPUPRIFLE", "PICKUP_WEAPON_BULLPUPRIFLE_MK2", "PICKUP_WEAPON_BULLPUPSHOTGUN", "PICKUP_WEAPON_CARBINERIFLE", "PICKUP_WEAPON_CARBINERIFLE_MK2", "PICKUP_WEAPON_COMBATMG", "PICKUP_WEAPON_COMBATMG_MK2", "PICKUP_WEAPON_COMBATPDW", "PICKUP_WEAPON_COMBATPISTOL", "PICKUP_WEAPON_COMPACTLAUNCHER", "PICKUP_WEAPON_COMPACTRIFLE", "PICKUP_WEAPON_CROWBAR", "PICKUP_WEAPON_DAGGER", "PICKUP_WEAPON_DBSHOTGUN", "PICKUP_WEAPON_DOUBLEACTION", "PICKUP_WEAPON_FIREWORK", "PICKUP_WEAPON_FLAREGUN", "PICKUP_WEAPON_FLASHLIGHT", "PICKUP_WEAPON_GolfClub", "PICKUP_WEAPON_GRENADE", "PICKUP_WEAPON_GRENADELAUNCHER", "PICKUP_WEAPON_GUSENBERG", "PICKUP_WEAPON_HAMMER", "PICKUP_WEAPON_HATCHET", "PICKUP_WEAPON_HEAVYPISTOL", "PICKUP_WEAPON_HEAVYSHOTGUN", "PICKUP_WEAPON_HEAVYSNIPER", "PICKUP_WEAPON_HEAVYSNIPER_MK2", "PICKUP_WEAPON_RPG", "PICKUP_WEAPON_KNIFE", "PICKUP_WEAPON_KNUCKLE", "PICKUP_WEAPON_MACHETE", "PICKUP_WEAPON_MACHINEPISTOL", "PICKUP_WEAPON_MARKSMANPISTOL", "PICKUP_WEAPON_MARKSMANRIFLE", "PICKUP_WEAPON_MARKSMANRIFLE_MK2", "PICKUP_WEAPON_MG", "PICKUP_WEAPON_MICROSMG", "PICKUP_WEAPON_MINIGUN", "PICKUP_WEAPON_MINISMG", "PICKUP_WEAPON_MOLOTOV", "PICKUP_WEAPON_MUSKET", "PICKUP_WEAPON_NIGHTSTICK", "PICKUP_WEAPON_PETROLCAN", "PICKUP_WEAPON_PIPEBOMB", "PICKUP_WEAPON_PISTOL", "PICKUP_WEAPON_PISTOL_MK2", "PICKUP_WEAPON_PISTOL50", "PICKUP_WEAPON_POOLCUE", "PICKUP_WEAPON_PROXMINE", "PICKUP_WEAPON_PUMPSHOTGUN", "PICKUP_WEAPON_PUMPSHOTGUN_MK2", "PICKUP_WEAPON_RAILGUN", "PICKUP_WEAPON_REVOLVER", "PICKUP_WEAPON_REVOLVER_MK2", "PICKUP_WEAPON_RPG", "PICKUP_WEAPON_SAWNOFFSHOTGUN", "PICKUP_WEAPON_SMG", "PICKUP_WEAPON_SMG_MK2", "PICKUP_WEAPON_SMOKEGRENADE", "PICKUP_WEAPON_SNIPERRIFLE", "PICKUP_WEAPON_SNSPISTOL", "PICKUP_WEAPON_SNSPISTOL_MK2", "PICKUP_WEAPON_SPECIALCARBINE", "PICKUP_WEAPON_SPECIALCARBINE_MK2", "PICKUP_WEAPON_STICKYBOMB", "PICKUP_WEAPON_STONE_HATCHET", "PICKUP_WEAPON_STUNGUN", "PICKUP_WEAPON_SWITCHBLADE", "PICKUP_WEAPON_VINTAGEPISTOL", "PICKUP_WEAPON_WRENCH", "PICKUP_AMMO_BULLET_MP", "PICKUP_AMMO_FIREWORK", "PICKUP_AMMO_FIREWORK_MP", "PICKUP_AMMO_FLAREGUN", "PICKUP_AMMO_GRENADELAUNCHER", "PICKUP_AMMO_GRENADELAUNCHER_MP", "PICKUP_AMMO_HOMINGLAUNCHER", "PICKUP_AMMO_MG", "PICKUP_AMMO_MINIGUN", "PICKUP_AMMO_MISSILE_MP", "PICKUP_AMMO_PISTOL", "PICKUP_AMMO_RIFLE", "PICKUP_AMMO_RPG", "PICKUP_AMMO_SHOTGUN", "PICKUP_AMMO_SMG", "PICKUP_AMMO_SNIPER",
    ],

    WeaponDamage: {
        "453432689": 25.0, // WEAPON_PISTOL
        "1593441988": 26.0, // WEAPON_COMBATPISTOL
        "584646201": 24.0, // WEAPON_APPISTOL
        "-1716589765": 50.0, // WEAPON_PISTOL50
        "324215364": 20.0, // WEAPON_MICROSMG
        "736523883": 21.0, // WEAPON_SMG
        "-270015777": 22.0, // WEAPON_ASSAULTSMG
        "-1074790547": 29.0, // WEAPON_ASSAULTRIFLE
        "-2084633992": 31.0, // WEAPON_CARBINERIFLE
        "-1357824103": 33.0, // WEAPON_ADVANCEDRIFLE
        "-1660422300": 39.0, // WEAPON_MG
        "2144741730": 44.0, // WEAPON_COMBATMG
        "487013001": 28.0, // WEAPON_PUMPSHOTGUN
        "2017895192": 39.0, // WEAPON_SAWNOFFSHOTGUN
        "-494615257": 31.0, // WEAPON_ASSAULTSHOTGUN
        "-1654528753": 13.0, // WEAPON_BULLPUPSHOTGUN
        "100416529": 100.0, // WEAPON_SNIPERRIFLE
        "205991906": 215.0, // WEAPON_HEAVYSNIPER
        "1119849093": 29.0, // WEAPON_MINIGUN
        "-1076751822": 27.0, // WEAPON_SNSPISTOL
        "1627465347": 33.0, // WEAPON_GUSENBERG
        "-1063057011": 31.0, // WEAPON_SPECIALCARBINE
        "-771403250": 39.0, // WEAPON_HEAVYPISTOL
        "2132975508": 31.0, // WEAPON_BULLPUPRIFLE
        "137902532": 33.0, // WEAPON_VINTAGEPISTOL
        "-1466123874": 164.0, // WEAPON_MUSKET
        "984333226": 116.0, // WEAPON_HEAVYSHOTGUN
        "-952879014": 64.0, // WEAPON_MARKSMANRIFLE
        "1198879012": 9.0, // WEAPON_FLAREGUN
        "171789620": 27.0, // WEAPON_COMBATPDW
        "-598887786": 219.0, // WEAPON_MARKSMANPISTOL
        "-619010992": 26.0, // WEAPON_MACHINEPISTOL
        "-275439685": 29.0, // WEAPON_DBSHOTGUN
        "1649403952": 33.0, // WEAPON_COMPACTRIFLE
        "317205821": 26.0, // WEAPON_AUTOSHOTGUN
        "-1121678507": 21.0, // WEAPON_MINISMG
        "-2009644972": 29.0, // WEAPON_SNSPISTOL_MK2
        "-1768145561": 31.5, // WEAPON_SPECIALCARBINE_MK2
        "-2066285827": 32.0, // WEAPON_BULLPUPRIFLE_MK2
        "1432025498": 31.0, // WEAPON_PUMPSHOTGUN_MK2
        "1785463520": 74.0, // WEAPON_MARKSMANRIFLE_MK2
        "961495388": 39.0, // WEAPON_ASSAULTRIFLE_MK2
        "-86904375": 32.0, // WEAPON_CARBINERIFLE_MK2
        "-608341376": 46.0, // WEAPON_COMBATMG_MK2
        "177293209": 229.0, // WEAPON_HEAVYSNIPER_MK2
        "-1075685676": 31.0, // WEAPON_PISTOL_MK2
        "2024373456": 24.0 // WEAPON_SMG_MK2
    },

    BlockedExplosions: [0,1,2,3,4,5,18,19,20,21,29,31,32,33,34,37,38,70],

}