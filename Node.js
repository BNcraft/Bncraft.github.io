const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const MODS = [
    {
        name: 'Actions & Stuff',
        type: 'Texture Pack',
        imageUrl: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/ddae3b71-5292-4f86-8b09-f6a119d78ef5/actionsandstuff_Thumbnail_0.jpg',
        downloadUrl: 'https://lootdest.org/s?nc4bVpwI',
        size: '30.12 MB'
    },
    {
        name: 'Villagers++',
        type: 'Add-On',
        imageUrl: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/e7c672fd-3a8e-42f9-83ad-2cf8bb83af88/Villagers_Thumbnail_0.jpg',
        downloadUrl: 'https://lootdest.org/s?1AHUxjHP',
        size: '4.65 MB'
    },
    {
        name: 'Realistic Biomes',
        type: 'Add-On',
        imageUrl: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/a22c83c4-484f-4fad-b37f-b4a651048df2/realisticbiomes_Thumbnail_0.jpg',
        downloadUrl: 'https://loot-link.com/s?HXrawDnI',
        size: '40.47 MB'
    },
    {
        name: 'animations+',
        type: 'Add-On',
        imageUrl: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/4496a1cc-1b3e-4bd5-8b03-d29a4bb25029/A_Thumbnail_0.jpg',
        downloadUrl: 'https://loot-link.com/s?UUrpUAgN',
        size: '2.23 MB'
    },
    {
    
        name: 'ANIME JUTSU',
        type: 'Add-On',
        imageUrl: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/2836457b-ce73-41b0-a21b-c7a7c0dce3b1/ANIMEJUTSU_Thumbnail_0.jpg',
        downloadUrl: 'https://lootdest.org/s?dDtQ8MzI',
        size: '18.72 MB'
    },
    {
        name: 'BLASTERS',
        type: 'Add-On',
        imageUrl: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/696b5658-cc90-4169-9871-fea16126910b/Blasters_Thumbnail_0.jpg',
        downloadUrl: 'https://loot-link.com/s?f9TgA6US',
        size: '82.32 MB'
    },
    {
        name: 'BOSSES+',
        type: 'Add-On',
        imageUrl: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/8029ca57-bea8-4eb5-9362-3ea1a07eb59a/BPL_Thumbnail_0.jpg',
        downloadUrl: 'https://lootdest.org/s?NVsmppYI',
        size: '9.48 MB'
    },
    {
        name: 'CAVE DWELLER',
        type: 'Add-On',
        imageUrl: 'https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/ea4548c8-6aa1-469f-aac3-918d0f82ac60/CaveDweller_Thumbnail_0.jpg',
        downloadUrl: 'https://lootdest.org/s?z0fqRAhk',
        size: '13.48 MB'
    },
    {
        name: 'Skibidi Toilet Raids',
        type: 'Add-On',
        imageUrl: 'https://d1wzdj81h1hubn.cloudfront.net/resources/42816341d366cef4.jpeg',
        downloadUrl: 'https://lootdest.org/s?dsakyDLk',
        size: '21.01 MB'
    },
    {
        name: 'Smartphones',
        type: 'Add-On',
        imageUrl: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/bf15d767-94e5-4bac-8784-cb3b3079888c/SmartphonesAddOn_Thumbnail_0.jpg',
        downloadUrl: 'https://loot-link.com/s?S4BSgKgq',
        size: '48.44 MB'
    },
    {
        name: 'Towers and Dungeons',
        type: 'Add-On',
        imageUrl: 'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/efe6380d-f13d-48b7-b77c-a14667c4a55c/TowersAndDungeons_Thumbnail_0.jpg',
        downloadUrl: 'https://lootdest.org/s?i0Ea7Z3q',
        size: '40.06 MB'
    },
    {
        name: 'Black x Gold',
        type: 'Skin Pack',
        imageUrl: 'https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/save-20250105-061920-copy-800x450_orig.jpg',
        downloadUrl: 'https://lootdest.org/s?gZMUJM24',
        size: '54.2 KB'
    },
    {
        name: 'ANIME WEAPONS',
        type: 'Template',
        imageUrl: 'https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/animeweapons-thumbnail-0_orig.jpg',
        downloadUrl: 'https://lootdest.org/s?rVYZJ363',
        size: '48.15 MB'
    },
    {
        name: 'MarsCraft',
        type: 'Template',
        imageUrl: 'https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/img-20250104-wa0093-1_orig.jpg',
        downloadUrl: 'https://lootdest.org/s?HrL4ESpA',
        size: '19.86 MB'
    },
    {
        "name": "ZOMBIES",
        "type": "Template",
        "imageUrl": "https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/img-20250104-wa0101-copy-800x450_orig.jpg",
        "downloadUrl": "https://loot-link.com/s?jQfipBsx",
        "size": "34.02 MB"
    },
    {
        "name": "dragons",
        "type": "Add-On",
        "imageUrl": "https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/3b527cc4ec09809b_orig.jpeg",
        "downloadUrl": "https://lootdest.org/s?uBUuIbts",
        "size": "11.75 MB"
    },
    {
        "name": "THE EXPLORER'S WAYSTONES",
        "type": "Add-On",
        "imageUrl": "https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/explorerswaystones-thumbnail-0-copy-800x450_orig.jpg",
        "downloadUrl": "https://loot-link.com/s?WmxkoEuF",
        "size": "1.84 MB"
    },
    {
        "name": "ULTRA Mob Totems",
        "type": "Add-On",
        "imageUrl": "https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/img-20241231-wa0017_orig.jpg",
        "downloadUrl": "https://lootdest.org/s?Q5IJ2Ujx",
        "size": "3.84 MB"
    },
    {
        "name": "Advanced Dragons",
        "type": "Template",
        "imageUrl": "https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/img-20250105-wa0007-1_orig.jpg",
        "downloadUrl": "https://lootdest.org/s?ePoe1dnW",
        "size": "52.66 MB"
    },
    {
        "name": "black",
        "type": "Skin Pack",
        "imageUrl": "https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/save-20250105-081914_orig.jpg",
        "downloadUrl": "https://loot-link.com/s?WMusVXSG",
        "size": "47.87 KB"
    },
    {
        "name": "Hafen",
        "type": "Texture Pack",
        "imageUrl": "https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/img-20241229-wa0158_orig.jpg",
        "downloadUrl": "https://lootdest.org/s?Va81R97o",
        "size": "6.61 MB"
    },
    {
        "name": "Ender Ghosts",
        "type": "Skin Pack",
        "imageUrl": "https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/save-20250105-085753_orig.jpg",
        "downloadUrl": "https://lootdest.org/s?njPb1tqv",
        "size": "56.25 KB"
    },
    {
        "name": "Pumpkin Halloween",
        "type": "Texture Pack",
        "imageUrl": "https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/img-20241228-wa0173_orig.jpg",
        "downloadUrl": "https://lootdest.org/s?1xuoDioX",
        "size": "3.91 MB"
    },
    {
        "name": "SECRET DOORS",
        "type": "Add-On",
        "imageUrl": "https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/img-20250106-wa0023_orig.jpg",
        "downloadUrl": "https://loot-link.com/s?cu7iK11q",
        "size": "401.21 KB"
    },
    {
        "name": "Megalodon",
        "type": "Template",
        "imageUrl": "https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/img-20250106-wa0029_orig.jpg",
        "downloadUrl": "https://lootdest.org/s?i8RSJAC0",
        "size": "13.9 MB"
    },
    {
        "name": "DRAGONS EVOLVE",
        "type": "Template",
        "imageUrl": "https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/img-20250104-wa0042_orig.jpg",
        "downloadUrl": "https://loot-link.com/s?PmQoEhTa",
        "size": "4.25 MB"
    },
    {
        "name": "HORROR SURVIVAL",
        "type": "Add-On",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/302089be-7eb9-4294-8a80-a8a6778adb57/Survival_But_Horror_Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?qdCVrCDv",
        "size": "29.76 MB"
    },
    {
        "name": "GAMER MOBS UNITE",
        "type": "Skin Pack",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/1cc9d5f8-b244-4aec-a98f-c6c0331a87ab/GAMERMOBSUNITE_Thumbnail_0.jpg",
        "downloadUrl": "https://lootdest.org/s?nih7oZOv",
        "size": "29.11 KB"
    },
    {
        "name": "SUPERHERO MODE",
        "type": "Template",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/58ed2dd3-ad29-47e1-914b-ae6de7fe9ff5/SUPERHEROMODE_Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?pOelbSUQ",
        "size": "79.63 MB"
    },
    {
        "name": "Amethyst Expansion",
        "type": "Add-On",
        "imageUrl": "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/c712562c-ef36-44ff-9df2-76c11aea2c08/AE_Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?PnTrFmsG",
        "size": "1.4 MB"
    },
    {
        "name": "DragonFire 3 Beyond",
        "type": "Template",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/54ec0f13-20ce-4e26-bb83-be849d591243/my_dragon_life_Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?DkPKsUVt",
        "size": "83.18 MB"
    },
    {
        "name": "Anime Weapons",
        "type": "Add-On",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/766462a1-fe79-4be2-9c7e-31b965605a87/AnimeWeapons_Thumbnail_0.jpg",
        "downloadUrl": "https://lootdest.org/s?47iRNDsN",
        "size": "17.6 MB"
    },
    {
        "name": "Demon Slayers",
        "type": "Skin Pack",
        "imageUrl": "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/487e1bd2-d1f7-4a58-af87-861789660a5b/Demon_Slayers_Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?emBIVniy",
        "size": "83.52 KB"
    },
    {
        "name": "Solar sword",
        "type": "Texture Pack",
        "imageUrl": "https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/img-20250109-wa0071_orig.jpg",
        "downloadUrl": "https://loot-link.com/s?EJAPyTIW",
        "size": "136.9 KB"
    },
    {
        "name": "Noble PVP 16X",
        "type": "Texture Pack",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/6332d00d-7630-43fb-87f8-f7676d121038/NPVPTP_thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?YRrO18zu",
        "size": "52.86 MB"
    },
    {
        "name": "Hacker Texture Pack",
        "type": "Texture Pack",
        "imageUrl": "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/4426d0ca-068d-493f-83e9-343ec86b8b7b/HckrTxtrPck_thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?qfL0b4kF",
        "size": "33.89 MB"
    },
    {
        "name": "Demon Weapons",
        "type": "Template",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/a3a8e2b2-4936-4ae5-a3f1-2e307ff1c4d5/DemonWeapons_Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?ivunluxT",
        "size": "22.91 MB"
    },
    {
        "name": "Cute Vibes Texture Pack",
        "type": "Texture Pack",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/5be1147b-99af-4bd0-8106-e016c4a8d7e3/CuteVibes_thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?THotYkYC",
        "size": "82.95 MB"
    },
    {
        "name": "Tinkers' Construct",
        "type": "Add-On",
        "imageUrl": "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/a1d2aa26-42f6-405b-ad53-76b2b872c5df/Tinkers_Construct-Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?a37uSpo9",
        "size": "40.23 MB"
    },
    {
        "name": "PLAYER TRAILS",
        "type": "Add-On",
        "imageUrl": "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/f88f3dc4-e90c-4769-88d8-c6689d839a9e/PT_Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?a7RcVxb2",
        "size": "1.36 MB"
    },
    {
        "name": "Black and Pink Frenzy",
        "type": "Skin Pack",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/e569037f-cd9a-4125-9f6c-df4084c15add/BlackandPinkFrenzy_Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?Etli5IqQ",
        "size": "46.87 KB"
    },
    {
        "name": "Core Armor",
        "type": "Skin Pack",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/7e82c37c-c759-4f1e-a605-990c14dbba46/CoreArmor_Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?d2u4SAnO",
        "size": "254.12 KB"
    },
    {
        "name": "RealismCraft",
        "type": "Template",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/77298d88-d2d0-4819-a33d-020df6469882/RealismCraft_Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?ct7edLXP",
        "size": "106.84 MB"
    },
    {
        "name": "DRAGONS",
        "type": "Add-On",
        "imageUrl": "https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/img-20250103-wa0029_orig.jpg",
        "downloadUrl": "https://loot-link.com/s?PbHAVp71",
        "size": "24.17 MB"
    },
    {
        "name": "Super Tools",
        "type": "Template",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/6e8abcc5-8c16-4bc5-acc9-602d384f2fde/SuperTools_Thumbnail_0.jpg",
        "downloadUrl": "https://lootdest.org/s?80Q1ERpP",
        "size": "54.04 MB"
    },
    {
        "name": "Basic Machinery",
        "type": "Add-On",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/7b78f8a6-67f6-4a85-aa4b-d6d24c775f4e/Basic_Machinery_Thumbnail_0.jpg",
        "downloadUrl": "https://lootdest.org/s?vE2KcLxu",
        "size": "5.9 MB"
    },
    {
        "name": "PARASITE OUTBREAK",
        "type": "Add-On",
        "imageUrl": "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/cba26129-f0f3-46c5-9088-6cdacb1d03e1/PARASITE_SURVIVAL__Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?kGJjz4ve",
        "size": "16.17 MB"
    },
    {
        "name": "One Piece",
        "type": "Add-On",
        "imageUrl": "https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/img-20250110-wa0010_orig.jpg",
        "downloadUrl": "https://lootdest.org/s?MsEXiEtQ",
        "size": "590.02 KB"
    },
    {
        "name": "OP TRADERS PACK",
        "type": "Template",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/cfc8abf2-5bf9-4980-8407-0f4890f2dda3/OpTradersPack_Thumbnail_0.jpg",
        "downloadUrl": "https://lootdest.org/s?qRNtiMRR",
        "size": "81.06 MB"
    },
    {
        "name": "Dragon Bosses",
        "type": "Template",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/336213b6-3cd6-4d8e-8aed-ddf0cb1b511a/Dragon-Bosses_thumbnail_0.jpg",
        "downloadUrl": "https://lootdest.org/s?RZ8suhmv",
        "size": "104.31 MB"
    },
    {
        "name": "BEDROCK TOOLS",
        "type": "Template",
        "imageUrl": "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/d8a2dbf6-1974-44ff-a2b8-bdb4e713ffa2/Thumbnail_0.jpg",
        "downloadUrl": "https://lootdest.org/s?VbcX6Wqp",
        "size": "36.55 MB"
    },
    {
        "name": "Tinycraft",
        "type": "Template",
        "imageUrl": "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/cc7c387f-e450-4f84-a534-97d50d5c2ec9/Tinycraft_Thumbnail_0.jpg",
        "downloadUrl": "https://lootdest.org/s?Q4vtArMv",
        "size": "84.9 MB"
    },
    {
        "name": "Feed the Bees",
        "type": "Add-On",
        "imageUrl": "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/a36a7a24-00af-417b-bf0a-29867258298b/feed_the_bees-Thumbnail_0.jpg",
        "downloadUrl": "https://lootdest.org/s?Ufo2YgGl",
        "size": "27.31 MB"
    },
    {
        "name": "Ghast Expansion",
        "type": "Add-On",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/e4089f3a-7dad-489e-83d5-1dce1a6d12e2/GE_Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?kYnEtIqV",
        "size": "614.84 KB"
    },
    {
        "name": "Dream Kawaii",
        "type": "Texture Pack",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/7d99ce20-2ebc-4082-b5aa-527fd0b74db2/Cute_32x_Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?rlagzLvB",
        "size": "7.54 MB"
    },
    {
        "name": "Blue Archive 2V",
        "type": "Add-On",
        "imageUrl": "https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/picsart-25-01-11-05-56-26-044-copy-800x450_orig.jpg",
        "downloadUrl": "https://loot-link.com/s?1jjJlvAL",
        "size": "17.62 MB"
    },
    {
        "name": "Ink Horror",
        "type": "Skin Pack",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/81107ea7-1329-4a11-8104-d0474f059488/Ink_Horror_Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?SsdMNoBv",
        "size": "40.41 MB"
    },
    {
        "name": "Vehicles Pro",
        "type": "Add-On",
        "imageUrl": "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/344ff0bc-11d6-45d0-abe9-d905bb7a85cd/vehiclespro_Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?fSL2kweq",
        "size": "14.36 MB"
    },
    {
        "name": "Storage++",
        "type": "Add-On",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/2107dfb8-d47c-442d-93c1-001d6ccb7f8a/Storage_Thumbnail_0.jpg",
        "downloadUrl": "https://lootdest.org/s?XHaflBQH",
        "size": "754.89 KB"
    },
    {
        "name": "Seasons Realism",
        "type": "Texture Pack",
        "imageUrl": "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/0f8b41a1-767d-4b85-85e3-c4f2b3dca43d/FourSeasons_thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?BJL29cPI",
        "size": "24.63 MB"
    },
    {
        "name": "Rainbow Monster Friends",
        "type": "Template",
        "imageUrl": "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/39ec0e9b-c480-4c03-890f-77533261b79b/rainbowmonsterfriends_thumbnail_0.jpg",
        "downloadUrl": "https://lootdest.org/s?oE3YRNa9",
        "size": "46.08 MB"
    },
    {
        "name": "PVP PRO",
        "type": "Texture Pack",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/edf35ccd-30cb-4c14-8862-14622fbf21f5/pvp_Thumbnail_0.jpg",
        "downloadUrl": "https://lootdest.org/s?6pF9I736",
        "size": "24.26 MB"
    },
    {
        "name": "Mountable Pets!",
        "type": "Add-On",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/3ebb7d05-ffc0-413b-8001-74c949b0ab91/MP_Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?BU5AqKPi",
        "size": "852.72 KB"
    },
    {
        "name": "Moana 2",
        "type": "Template",
        "imageUrl": "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/f247a0b7-7075-4093-be35-428cd9658df8/Moana2_Thumbnail.jpg",
        "downloadUrl": "https://lootdest.org/s?6u4u9vPJ",
        "size": "205.69 MB"
    },
    {
        "name": "Mage Mania",
        "type": "Add-On",
        "imageUrl": "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/4ab5c8fb-158e-471a-a541-901c21fecd03/WitchesNWizards_Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?VGhgrnM2",
        "size": "13.9 MB"
    },
    {
        "name": "Incredible Horses",
        "type": "Template",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-title-b63a0803d3653643-20ca2/ea057c8f-e23d-42fc-93da-635e1152c42b/MoreHorses2_Thumbnail_0.jpg",
        "downloadUrl": "https://lootdest.org/s?8yFeUEK2",
        "size": "20.71 MB"
    },
    {
        "name": "Immersion: Chicago",
        "type": "Template",
        "imageUrl": "https://xforgeassets002.xboxlive.com/pf-title-b63a0803d3653643-20ca2/9840a213-d825-4b4a-8aa3-eee3cf64831f/Chicago_thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?PgRAIzuG",
        "size": "14.79 MB"
    },
    {
        "name": "Essentials",
        "type": "Add-On",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/6ae9dc2c-4e89-424a-8a59-d9acaca7c275/essentials_Thumbnail_0.jpg",
        "downloadUrl": "https://loot-link.com/s?z9c4zy1D",
        "size": "1.95 MB"
    },
    {
        "name": "Cute & Cozy Pack",
        "type": "Add-On",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/a7a52cf0-6dce-4c78-8a52-34d773bb1d09/CuteACozy_Pack_Thumbnail_0.jpg",
        "downloadUrl": "https://lootdest.org/s?y5Mmqd4W",
        "size": "82.95 MB"
    },
    {
        "name": "RPG Skills",
        "type": "Add-On",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/ef82677e-507f-4dea-9489-dc70258f7a5f/RPG_Skills_Thumbnail_0.jpg",
        "downloadUrl": "https://lootdest.org/s?xtkTvTmy",
        "size": "500.9 KB"
    },
    {
        "name": "My Cozy Cottage Life",
        "type": "Template",
        "imageUrl": "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/e08dcd6d-72f2-4cae-a8a4-6ed6caae99cf/mycozycottagelife_Thumbnail_0.jpg",
        "downloadUrl": "https://lootdest.org/s?dIm1dnMX",
        "size": "107.81 MB"
    },
    {
        "name": "DYNAMIC LIGHT",
        "type": "Add-On",
        "imageUrl": "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/a8faddf9-dc12-450c-91b8-e716beb85ea6/DynamicLight_Thumbnail_0.jpg",
        "downloadUrl": "https://lootdest.org/s?kxHJKn5b",
        "size": "12.74 MB"
    },
    {
        name: "Radium's Armament",
        type: 'Add-On',
        imageUrl: 'https://bncraft9.weebly.com/uploads/1/5/1/8/151839741/picsart-25-01-01-14-41-26-492-copy-1280x750_orig.jpg',
        downloadUrl: 'https://loot-link.com/s?qFXJR28M',
        size: '69.24 MB'
    }
];

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('messageCreate', async message => {
    // Kullanıcı sadece bir ! komutu (örneğin: !rastgele) yazarsa, uyarı mesajı gönder
    if (message.content.startsWith('!') && message.content.split(' ').length === 1) {
        return message.channel.send('You must use !mod <mod_name> to search for mods.');
    }

    // Eğer mesaj !mod komutunu içeriyorsa
    if (message.content.toLowerCase().startsWith('!mod')) {
        const modName = message.content.slice(5).trim();

        // Eğer mod adı 4 harften kısa ise, uyarı mesajı gönder
        if (modName.length < 4) {
            return message.channel.send('Please specify at least 4 characters to search for a mod.');
        }

        // Modları filtrele
        const foundMods = MODS.filter(mod => mod.name.toLowerCase().includes(modName.toLowerCase()));

        // Eğer modlar bulunduysa, her biri için embed mesajı gönder
        if (foundMods.length > 0) {
            for (const mod of foundMods) {
                const embed = new EmbedBuilder()
                    .setTitle(mod.name)
                    .setDescription(`**Type**: ${mod.type}\n**Size**: ${mod.size}`)
                    .setImage(mod.imageUrl) // Fotoğrafı ortalamak için büyük resim olarak ayarlandı
                    .setColor('#00AAFF');

                const row = new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setLabel('Download')
                        .setStyle(ButtonStyle.Link)
                        .setURL(mod.downloadUrl)
                );

                await message.channel.send({ embeds: [embed], components: [row] });
            }
        } else {
            message.channel.send('No mods found matching your search.');
        }
    }
});

client.login('MTMyODkyMDUwMDc3NjMzNzQ4MQ.GfHBpY.L3APr65PiGXecI9ko01IQjdK8EyjD0udpiMEyU'); // Bot tokeninizi buraya ekleyin
