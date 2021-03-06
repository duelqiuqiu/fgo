"use strict";
var servants = [];//定义数组
var id = 0;
function intialData() {
    //除非刷新页面，或者重新打开页面，完整的从者数据只会创建一次，提高执行效率
    let servantsStorage=window.localStorage.getItem("servants");
    if (servantsStorage) {
        servantsStorage = JSON.parse(servantsStorage);
        if(servantsStorage instanceof Array&&servantsStorage.length>0){
            servants=servantsStorage;
            return;
        }
    }

    //----------------------------------Saber---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Saber", "亚瑟・潘德拉贡〔Prototype〕", "Arthur Pendragon〔Prototype〕", 160, ["亚瑟", "旧剑", "亚瑟潘德拉贡"], "地", ["秩序", "善"], ["骑乘", "人型", "龙", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "亚瑟", "所爱之人", "王"], 12465, 13975, 13645, 15310, "AABBQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "阿尔提拉", "Artila", 8, ["阿提拉", "b提拉", "彩笔", "天元突破", "匈奴王", "大王", "阿尔提拉"], "人", ["混沌", "善"], ["骑乘", "人型", "神性", "被「天地乖离开辟之星」所克", "王"], 12343, 13907, 13511, 15236, "AABBQ", 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 175, critialPowerBuff: 0 });
    intialServant("Saber", "沖田総司", "Okita Souji", 68, ["冲田总司", "樱saber"], "人", ["中立", "中庸"], ["骑乘", "人型", "阿尔托莉雅脸", "被「天地乖离开辟之星」所克"], 12068, 13225, 13210, 14489, "ABBQQ", 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 2, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "宫本武藏", "Miyamoto Musashi", 153, ["宫本武藏"], "人", ["混沌", "善"], ["人型", "被「天地乖离开辟之星」所克"], 12037, 13635, 13176, 14938, "ABBBQ", 600, 800, 900, 950, 1000, 20, 30, 40, 50, 60, "TreasurePowerBuff", 1.5);
    intialServant("Saber", "莫德雷德", "Mordred", 76, ["莫德雷德", "小莫", "莫受", "坑爹剑", "熊孩子"], "地", ["混沌", "中庸"], ["骑乘", "人型", "龙", "阿尔托莉雅脸", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 11723, 14680, 12833, 16083, "AABBQ", 400, 500, 550, 575, 600, 180, 190, 200, 210, 220, "TreasureSpecialAttack", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "尼禄・克劳狄乌斯〔花嫁〕", "Nero Claudius（Bride)", 90, ["尼禄克劳狄乌斯", "花嫁", "嫁王", "滑稽", "嫁尼禄"], "人", ["混沌", "花嫁"], ["骑乘", "人型", "罗马", "阿尔托莉雅脸", "被「天地乖离开辟之星」所克", "王"], 11607, 14248, 12706, 15609, "AABBQ", 1200, 1500, 1650, 1725, 1800, 0, 0, 0, 0, 0, "", 1, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "阿尔托莉雅·潘德拉贡", "Altria Pendragon", 2, ["阿尔托莉雅潘德拉贡", "呆毛", "棉袄", "傻吧", "蓝saber", "吾王"], "地", ["秩序", "善"], ["骑乘", "人型", "龙", "阿尔托莉雅脸", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "亚瑟", "王"], 11221, 15150, 12283, 16597, "AABBQ", 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "两仪式", "Ryougi Shiki（Saber)", 91, ["215", "S214", "剑式"], "人", ["中立", "中庸"], ["人型", "被「天地乖离开辟之星」所克"], 10721, 15453, 11736, 16929, "AABBQ", 450, 600, 675, 712.5, 750, 0, 0, 0, 0, 0, "", 1, { cardColor: 0, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 6 });

    /******************************************4星********************************************************************/
    intialServant("Saber", "弗兰肯斯坦", "Frankenstein2", 176, ["弗兰肯斯坦", "肯娘"], "地", ["中立", "夏"], ["骑乘", "人型", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 10335, 13262, 11325, 14541, "ABBQQ", 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: -3, cardBuff: "2|12", fixedDamageBuff: 0, critialPowerBuff: 0 });


    intialServant("Saber", "阿尔托莉雅·潘德拉贡〔Alter〕", "Altria Pendragon（Alter)", 3, ["阿尔托莉雅潘德拉贡", "黑无毛", "黑saber", "黑呆", "黑傻"], "人", ["秩序", "恶"], ["人型", "龙", "阿尔托莉雅脸", "被「天地乖离开辟之星」所克", "亚瑟", "王"], 10248, 11589, 12408, 14051, "AABBQ", 450, 550, 600, 625, 650, 0, 0, 0, 0, 0, "", 1.5, null);


    intialServant("Saber", "高文", "Gawain", 123, ["大高文", "太阳骑士"], "地", ["秩序", "善"], ["骑乘", "人型", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "所爱之人"], 10173, 11419, 12317, 13845, "ABBBQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });


    intialServant("Saber", "柳生但马守宗矩", "Yagyuu Dajimanokami Munenori", 187, ["柳生但马守宗矩"], "人", ["秩序", "中庸"], ["骑乘", "人型", "被「天地乖离开辟之星」所克","所爱之人"], 9999, 11135, 12107, 13501, "AABBQ", 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });


    intialServant("Saber", "兰斯洛特", "Lancelot", 121, ["剑兰斯洛特", "S兰斯洛特", "剑长江", "岳父"], "地", ["秩序", "善"], ["骑乘", "人型", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "所爱之人"], 9949, 11589, 12046, 14051, "AABBQ", 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 }, { cardPowerBuff: 30 });
    intialServant("Saber", "伊丽莎白・巴陶里〔勇者〕", "Erzsebet Bathory（Brave)", 138, ["伊丽莎白巴陶里", "S龙娘", "剑龙娘"], "地", ["混沌", "善"], ["人型", "龙", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 9899, 11248, 11986, 13638, "AABBQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "罗摩", "Rama", 101, ["罗摩", "红阿塔"], "天", ["秩序", "善"], ["骑乘", "人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "所爱之人", "王"], 9854, 11993, 11931, 14541, "AABBQ", 600, 800, 900, 950, 1000, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: 0.8, cardBuff: 11, fixedDamageBuff: 200, critialPowerBuff: 0 });
    intialServant("Saber", "铃鹿御前", "Suzuka Gozen", 165, ["铃鹿御前"], "天", ["中立", "恶"], ["骑乘", "人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 9544, 11753, 11556, 14250, "AABBQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 200, critialPowerBuff: 0 });
    intialServant("Saber", "尼禄・克劳狄乌斯", "Nero Claudius", 5, ["尼禄克劳狄乌斯", "红saber", "暴君", "罗马之花"], "人", ["混沌", "善"], ["骑乘", "人型", "罗马", "阿尔托莉雅脸", "被「天地乖离开辟之星」所克", "王"], 9449, 11753, 11441, 14250, "AABBQ", 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "齐格弗里德", "Siegfried", 6, ["齐格弗里德", "飞哥", "对不起先生", "七个肺", "齐格飞"], "地", ["混沌", "善"], ["骑乘", "人型", "龙", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "所爱之人", "王"], 8181, 14165, 9905, 17175, "AABBQ", 400, 500, 550, 575, 600, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "阿尔托莉雅·潘德拉贡〔Lily〕", "Altria Pendragon（Lily)", 4, ["阿尔托莉雅潘德拉贡", "lily", "白saber", "莉莉"], "地", ["秩序", "善"], ["骑乘", "人型", "龙", "阿尔托莉雅脸", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "亚瑟", "王"], 7726, 10623, 9355, 12880, "AABBQ", 300, 450, 525, 562.5, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 0 });


    /******************************************3星及以下********************************************************************/
    intialServant("Saber", "贝狄威尔", "Bedwyr", 126, ["贝狄威尔", "小贝"], "星", ["秩序", "善"], ["骑乘", "人型", "被「天地乖离开辟之星」所克", "所爱之人"], 7627, 9595, 10322, 13009, "ABBQQ", 800, 1000, 1100, 1150, 1200, 30, 45, 60, 75, 90, "TreasureSpecialCardPowerAttack", 1.5, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "盖乌斯・尤里乌斯・凯撒", "Gaius Julius Caesar", 7, ["盖乌斯尤里乌斯凯撒", "胖子", "胖尼禄", "罗马之花"], "人", ["中立", "中庸"], ["骑乘", "人型", "神性", "被「天地乖离开辟之星」所克", "所爱之人", "王"], 7497, 9595, 10146, 13009, "ABBQQ", 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 150, critialPowerBuff: 0 });
    intialServant("Saber", "弗格斯・马克・罗伊", "Fergus Mac Roich", 72, ["弗格斯马克罗伊", "小刚"], "地", ["秩序", "中庸"], ["骑乘", "人型", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "所爱之人", "王"], 7460, 9786, 10096, 13268, "ABBBQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });


    //----------------------------------Archer---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Archer", "阿周那", "Arjuna", 84, ["阿周那", "阿囧那", "娜娜", "阿三兄弟"], "天", ["秩序", "中庸"], ["人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 12342, 13230, 13510, 14494, "AAABQ", 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 175, critialPowerBuff: 10 });
    intialServant("Archer", "吉尔伽美什", "Gilgamesh", 12, ["吉尔伽美什", "金闪闪", "金皮卡", "saber控", "中二闪", "杂修"], "天", ["混沌", "善"], ["人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "王"], 12280, 13097, 13442, 14348, "AABBQ", 400, 500, 550, 575, 600, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 175, critialPowerBuff: 11 });
    intialServant("Archer", "伊修塔尔", "Ishtar", 142, ["伊修塔尔", "伊斯塔凛", "弓凛", "魔鬼筋肉凛", "庄主"], "天", ["秩序", "善"], ["人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克"], 12252, 13965, 13412, 15299, "AABBQ", 300, 400, 450, 475, 500, 20, 30, 40, 50, 60, "TreasureSpecialCardPowerAttack", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 225, critialPowerBuff: 10 });
    intialServant("Archer", "尼古拉・特斯拉", "Nikola Tesla", 77, ["尼古拉特斯拉", "祖师爷", "特总", "磁暴步兵"], "星", ["混沌", "善"], ["人型", "所爱之人"], 11781, 13825, 12896, 15146, "AABBQ", 400, 500, 550, 575, 600, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });
    intialServant("Archer", "詹姆斯·莫里亚蒂", "James Moriarty", 156, ["詹姆斯莫里亚蒂", "莫教授", "骚老头", "绅士"], "人", ["混沌", "恶"], ["人型", "被「天地乖离开辟之星」所克"], 11781, 13685, 12896, 14992, "AAABQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 11 });
    intialServant("Archer", "阿尔托莉雅・潘德拉贡〔Archer〕", "Altria Pendragon2", 129, ["阿尔托莉雅潘德拉贡", "弓呆"], "地", ["秩序", "善"], ["人型", "龙", "阿尔托莉雅脸", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "亚瑟", "王"], 11276, 14553, 12343, 15943, "AABQQ", 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Archer", "俄里翁", "Orion", 60, ["俄里翁", "月神", "奶茶"], "天", ["混沌", "中庸"], ["人型", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "希腊神话系男性"], 11107, 14553, 12158, 15943, "AABQQ", 1200, 1500, 1650, 1725, 1800, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 11 });

    /******************************************4星********************************************************************/
    intialServant("Archer", "巴御前", "Tomoe Gozen", 184, ["巴御前"], "地", ["中立", "中庸"], ["人型","魔性","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 9946, 10804, 12043, 13100, "AABBQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor:1.5, cardBuff: 2, fixedDamageBuff: 0, critialPowerBuff: 10 });


    intialServant("Archer", "克洛伊·冯·爱因兹贝伦", "Chloe・von・Einzbern", 137, ["克洛伊冯爱因兹贝伦", "小黑"], "天", ["混沌", "善"], ["人型", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 9845, 10914, 11920, 13233, "AABQQ", 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });
    intialServant("Archer", "特里斯坦", "Tristan", 122, ["特里斯坦", "老崔", "崔悲伤"], "地", ["秩序", "善"], ["人型", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 9735, 11637, 11787, 14110, "AABQQ", 1600, 2000, 2200, 2300, 2400, 0, 0, 0, 0, 0, "", 0.8, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });
    intialServant("Archer", "织田信长", "Oda Nobunaga", 69, ["织田信长", "第六天萌王", "Nobu", "钉宫"], "人", ["中立", "中庸"], ["人型", "被「天地乖离开辟之星」所克", "王"], 9494, 11637, 11495, 14110, "AABBQ", 300, 400, 450, 475, 500, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });

    intialServant("Archer", "海伦娜・布拉瓦茨基", "Helena Blavatsky2", 180, ["海伦娜布拉瓦茨基", "外星萝莉", "奥特曼"], "人", ["混沌", "善"], ["人型", "被「天地乖离开辟之星」所克"], 9446, 11404, 11437, 13827, "AABQQ", 450, 600, 675, 712.5, 750, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 6 });


    intialServant("Archer", "安妮・伯妮&玛丽・里德", "Anne Bonny&Mary Read2", 131, ["安妮伯妮玛丽里德", "A双子"], "人", ["混沌", "中庸"], ["人型", "被「天地乖离开辟之星」所克"], 9446, 11521, 11437, 13969, "AABBQ", 600, 800, 900, 950, 1000, 600, 600, 600, 600, 600, "TreasureSpecialRemainHpAttack", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Archer", "卫宫", "Emiya", 11, ["卫宫", "红A", "核弹剑仙"], "人", ["中立", "中庸"], ["人型", "被「天地乖离开辟之星」所克", "所爱之人"], 9398, 11521, 11379, 13969, "AAABQ", 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });
    intialServant("Archer", "卫宫〔Alter〕", "Emiya〔Alter〕", 157, ["卫宫", "黑A"], "人", ["混沌", "恶"], ["人型", "被「天地乖离开辟之星」所克"], 8996, 12250, 10892, 14853, "AABQQ", 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Archer", "阿塔兰忒", "Atalanta", 14, ["阿塔兰忒", "阿塔", "猫茶"], "地", ["中立", "恶"], ["人型", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 8633, 12476, 10453, 15127, "AABQQ", 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 0.8, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });



    /******************************************3星及以下********************************************************************/
    intialServant("Archer", "大卫", "David", 63, ["大卫", "所罗门他爸", "卫日天", "制杖弓兵"], "天", ["秩序", "中立"], ["人型", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "王"], 7736, 8643, 10470, 11719, "AAABQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Archer", "幼吉尔", "Child Gil", 95, ["幼吉尔", "幼闪"], "天", ["混沌", "善"], ["人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "王"], 7696, 8731, 10415, 11838, "AABBQ", 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 175, critialPowerBuff: 10 });
    intialServant("Archer", "尤瑞艾莉", "Euryale", 15, ["尤瑞艾莉", "二姐"], "天", ["混沌", "善"], ["人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 7032, 9506, 9517, 12889, "AABQQ", 1200, 1200, 1200, 1200, 1200, 250, 250, 250, 250, 250, "TreasureSpecialAttack", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 300, critialPowerBuff: 11 });

    intialServant("Archer", "俵藤太", "Tawara Toda", 125, ["俵藤太", "送水工", "送米工"], "人", ["中立", "善"], ["人型", "被「天地乖离开辟之星」所克", "所爱之人"], 7032, 9800, 9517, 13287, "AABBQ", 400, 500, 550, 575, 600, 50, 62, 75, 87, 100, "SpecialAttackPowerBuff", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });

    intialServant("Archer", "比利小子", "Billy the Kid", 105, ["比利小子"], "人", ["混沌", "中庸"], ["骑乘", "人型", "被「天地乖离开辟之星」所克"], 6890, 9506, 9325, 12889, "AABQQ", 1600, 2000, 2200, 2300, 2400, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 7, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Archer", "罗宾汉", "Robin Hood", 13, ["罗宾汉", "绿茶", "种树茶"], "人", ["中立", "善"], ["人型", "被「天地乖离开辟之星」所克", "所爱之人"], 6715, 10187, 9088, 13812, "AABQQ", 900, 1200, 1350, 1425, 1500, 200, 212.5, 225, 237.5, 250, "TreasureSpecialAttack", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Archer", "阿拉什", "Arash", 16, ["阿拉什", "自爆弓", "流星一条"], "地", ["混沌", "中庸"], ["人型", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "所爱之人"], 5816, 7122, 9037, 10979, "AABBQ", 800, 1000, 1100, 1150, 1200, 0, 200, 400, 600, 800, "TreasureSpecialExplosionAttack", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 6 });

    //----------------------------------Lancer---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Lancer", "迦尔纳", "Karna", 85, ["迦尔纳", "阿三", "小太阳", "大太阳"], "天", ["秩序", "善"], ["骑乘", "人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "所爱之人"], 11976, 13632, 13110, 14934, "ABBQQ", 400, 500, 550, 575, 600, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 200, critialPowerBuff: 0 });
    intialServant("Lancer", "布伦希尔德", "Brynhildr", 88, ["布伦希尔德", "布姐", "飞嫂", "病娇枪"], "天", ["中立", "善"], ["骑乘", "人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 11432, 14825, 12514, 16241, "ABBQQ", 800, 1000, 1100, 1150, 1200, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 100, critialPowerBuff: 0 });
    intialServant("Lancer", "斯卡哈", "Scathach", 70, ["斯卡哈", "bba", "师匠", "哈斯卡"], "星", ["秩序", "善"], ["人型", "被「天地乖离开辟之星」所克", "王"], 11375, 14825, 12452, 16241, "ABBQQ", 1600, 2000, 2200, 2300, 2400, 0, 0, 0, 0, 0, "", 0.8, null);
    intialServant("Lancer", "阿尔托莉雅・潘德拉贡〔Lancer〕", "Altria Pendragon(Lancer)", 119, ["阿尔托莉雅潘德拉贡", "白枪呆", "乳上", "北半球"], "天", ["秩序", "善"], ["骑乘", "人型", "龙", "阿尔托莉雅脸", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "亚瑟", "王"], 10995, 15606, 12036, 17097, "ABBQQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Lancer", "恩奇都", "Enkidu", 143, ["恩奇都", "小恩"], "天", ["中立", "中庸"], ["人型", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 10780, 15300, 11800, 16762, "ABQQQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, null);
    intialServant("Lancer", "玉藻前", "Tamamo no Mae2", 128, ["玉藻前", "L狐", "水狐", "水壶"], "天", ["中立", "夏"], ["骑乘", "人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 10726, 15147, 11741, 16594, "ABBQQ", 600, 800, 900, 950, 1000, 150, 162, 175, 187, 200, "TreasureSpecialAttack", 1.5, { cardColor: -2, cardBuff: "10|10", fixedDamageBuff: 230, critialPowerBuff: 0 });

    /******************************************4星********************************************************************/
    intialServant("Lancer", "阿尔托莉雅・潘德拉贡〔Alter〕", "Altria Pendragon（Alter)2", 78, ["阿尔托莉雅潘德拉贡", "黑枪呆", "乳下", "南半球"], "天", ["秩序", "善"], ["骑乘", "人型", "龙", "阿尔托莉雅脸", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "亚瑟", "王"], 9968, 11761, 12069, 14260, "ABBQQ", 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Lancer", "神枪 李书文", "Li Shu Wen", 102, ["神枪李书文", "李大师"], "人", ["中立", "恶"], ["人型", "被「天地乖离开辟之星」所克"], 9653, 11360, 11688, 13774, "AABQQ", 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, null);
    


    intialServant("Lancer", "哪吒", "Nezha", 193, ["哪吒"], "天", ["中立", "善"], ["人型", "被「天地乖离开辟之星」所克", "被「神秘杀」所克"], 9284, 12112, 11241, 14686, "ABBQQ", 300, 400, 450, 475, 500, 20, 30, 40, 50, 60, "TreasurePowerBuff", 1.5, null);
    


    intialServant("Lancer", "贞德・Alter・Santa・Lily", "Jeanne d'Arc・Alter・Santa・Lily", 141, ["贞德", "童贞", "幼贞", "黑贞Lily"], "人", ["混沌", "善"], ["人型", "阿尔托莉雅脸", "被「天地乖离开辟之星」所克"], 9261, 11870, 11213, 14392, "ABBQQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, null);

    intialServant("Lancer", "源赖光", "Minamoto Yorimitsu2", 181, ["源赖光", "L奶光", "枪奶光"], "天", ["秩序", "善"], ["骑乘", "人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 9168, 12112, 11100, 14686, "ABBQQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -3, cardBuff: "6|11", fixedDamageBuff: 150, critialPowerBuff: 0 });


    intialServant("Lancer", "伊丽莎白・巴陶里", "Erzsebet Bathory", 18, ["伊丽莎白巴陶里", "L龙娘", "爱抖露"], "人", ["混沌", "恶"], ["人型", "龙", "被「天地乖离开辟之星」所克"], 9122, 11870, 11045, 14392, "ABBQQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Lancer", "清姬", "Kiyohime2", 134, ["L清姬", "L种田"], "地", ["混沌", "恶"], ["人型", "龙", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 8936, 11870, 10820, 14392, "ABBQQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 12, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Lancer", "芬恩・麦克库尔", "Fionn mac Cumhaill", 87, ["芬恩麦克库尔", "ntr事主", "苦主", "神代主任"], "天", ["中立", "中庸"], ["人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 8930, 12750, 10812, 15459, "AABQQ", 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 125, critialPowerBuff: 0 });
    intialServant("Lancer", "弗拉德三世〔Extra〕", "Vlad III(Extra)", 140, ["弗拉德三世", "枪大公", "L大公"], "地", ["秩序", "善"], ["人型", "被「天地乖离开辟之星」所克", "王"], 8775, 13005, 10625, 15769, "ABBQQ", 600, 800, 900, 950, 1000, 150, 162, 175, 187, 200, "TreasureSpecialAttack", 1.5, null);
    intialServant("Lancer", "美杜莎〔Lancer〕", "Medusa(Lancer)", 146, ["美杜莎Lily"], "地", ["中立", "善"], ["人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 8253, 13119, 9993, 15907, "AABQQ", 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 250, critialPowerBuff: 0 });
    

    intialServant("Lancer", "帕尔瓦蒂", "Parvati", 183, ["帕尔瓦蒂","雪山神女"], "天", ["秩序", "善"], ["人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克"], 8127, 13253, 9840, 17059, "ABBQQ", 600, 800, 900, 950, 1000,0, 0, 0, 0, 0, "", 0.8, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 225, critialPowerBuff: 0 });

    /******************************************3星及以下********************************************************************/
    intialServant("Lancer", "库・丘林", "Cu Chulainn", 17, ["库丘林", "大狗"], "天", ["秩序", "中庸"], ["人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "所爱之人"], 7239, 9593, 9797, 13007, "ABBQQ", 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 175, critialPowerBuff: 0 });
    intialServant("Lancer", "罗穆路斯", "Romulus", 22, ["罗穆路斯", "罗马"], "星", ["混沌", "中立"], ["人型", "罗马", "王"], 7239, 9883, 9797, 13400, "ABBQQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, null);
    intialServant("Lancer", "库・丘林〔Prototype〕", "Cu Chulainn（Prototype)", 20, ["库丘林", "旧狗"], "天", ["秩序", "中庸"], ["人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 7082, 10098, 9584, 13691, "ABBQQ", 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 175, critialPowerBuff: 0 });
    intialServant("Lancer", "豹人", "Jaguar Man", 148, ["豹人", "老虎", "藤姐", "大河"], "地", ["混沌", "中庸"], ["人型", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "猛兽"], 7022, 9593, 9503, 13007, "ABBQQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 2, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Lancer", "赫克托耳", "Hector", 64, ["赫克托耳", "友尽的证明", "赫叔"], "人", ["秩序", "中立"], ["骑乘", "人型", "被「天地乖离开辟之星」所克", "希腊神话系男性"], 6928, 10200, 9376, 13829, "ABBQQ", 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Lancer", "迪尔姆德・奥迪纳", "Diarmuid Ua Duibhne", 71, ["迪尔姆德奥迪纳", "刷子"], "地", ["秩序", "中庸"], ["人型", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "所爱之人"], 6877, 10098, 9307, 13691, "AABQQ", 1600, 2000, 2200, 2300, 2400, 0, 0, 0, 0, 0, "", 0.8, null);

    intialServant("Lancer", "宝藏院胤舜", "Houzouin Insyun", 186, ["宝藏院胤舜"], "人", ["中立", "中庸"], ["人型", "被「天地乖离开辟之星」所克", "所爱之人"], 6791, 9996, 9191, 13553, "ABQQQ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "", 1, null);


    //----------------------------------Rider---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Rider", "魁札尔·科亚特尔", "Quetzalcoatl", 144, ["魁札尔科亚特尔", "羽蛇神大姐姐"], "天", ["秩序", "善"], ["骑乘", "人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "王"], 12001, 12960, 13137, 14198, "AABBQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 12, fixedDamageBuff: 300, critialPowerBuff: 0 });
    intialServant("Rider", "奥兹曼迪亚斯", "Ozymandias", 118, ["奥兹曼迪亚斯", "拉二"], "天", ["混沌", "中庸"], ["骑乘", "人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "所爱之人", "王"], 11971, 12830, 13104, 14056, "AABBQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 11, fixedDamageBuff: 175, critialPowerBuff: 0 });
    intialServant("Rider", "伊斯坎达尔", "Iskandar", 108, ["伊斯坎达尔", "大帝"], "人", ["中立", "善"], ["骑乘", "人型", "神性", "被「天地乖离开辟之星」所克", "所爱之人", "王", "希腊神话系男性"], 11560, 13219, 12654, 14482, "AABBQ", 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 11, fixedDamageBuff: 150, critialPowerBuff: 0 });
    intialServant("Rider", "弗朗西斯・德雷克", "Francis Drake", 65, ["弗朗西斯德雷克", "船长", "bba"], "星", ["混沌", "恶"], ["骑乘", "人型"], 11326, 12830, 12398, 14056, "AABBQ", 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });


    intialServant("Rider", "阿尔托莉雅・潘德拉贡〔Alter〕", "Altria Pendragon（Alter）3", 179, ["阿尔托莉雅潘德拉贡", "R有毛"], "人", ["秩序", "恶"], ["骑乘", "人型", "龙", "阿尔托莉雅脸", "被「天地乖离开辟之星」所克", "亚瑟", "王"], 10776, 14256, 11796, 15618, "AABQQ", 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 12 });


    intialServant("Rider", "女王梅芙", "Medb", 99, ["女王梅芙", "碧池"], "地", ["混沌", "恶"], ["骑乘", "人型", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "王"], 10296, 13968, 11270, 15303, "AABBQ", 800, 1000, 1100, 1150, 1200, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });

    /******************************************4星********************************************************************/
    intialServant("Rider", "坂田金时", "Sakata Kintoki2", 115, ["坂田金时", "R金时", "飙车老司机", "秋名山车神"], "地", ["秩序", "善"], ["人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "所爱之人"], 9819, 10800, 11889, 13095, "ABBQQ", 1200, 1600, 1800, 1900, 2000, 10, 30, 50, 70, 90, "TreasureSpecialCardPowerAttack", 0.8, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 150, critialPowerBuff: 0 });
    intialServant("Rider", "伊修塔尔", "Ishtar2", 182, ["伊修塔尔", "R凛"], "天", ["秩序", "善"], ["骑乘", "人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克"], 9603, 10692, 11627, 12964, "AABQQ", 600, 800, 900, 950, 1000, 20, 30, 40, 50, 60, "TreasureSpecialCardPowerAttack", 0.8, { cardColor: 0.8, cardBuff: 12, fixedDamageBuff: 225, critialPowerBuff: 10 });

    intialServant("Rider", "阿尔托莉雅・潘德拉贡〔Santa Alter〕", "Altria Pendragon（Santa Alter)", 73, ["阿尔托莉雅潘德拉贡", "R无毛"], "人", ["秩序", "善"], ["骑乘", "人型", "龙", "阿尔托莉雅脸", "被「天地乖离开辟之星」所克", "亚瑟", "王"], 9258, 11286, 11209, 13684, "AABBQ", 450, 550, 600, 625, 650, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Rider", "莫德雷德", "Mordred2", 132, ["莫德雷德", "R小莫"], "地", ["混沌", "善"], ["人型", "龙", "阿尔托莉雅脸", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 9212, 11400, 11154, 13822, "AABQQ", 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 5, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Rider", "安妮・伯妮&玛丽・里德", "Anne Bonny&Mary Read", 66, ["安妮伯妮玛丽里德", "R双子"], "人", ["混沌", "恶"], ["人型", "被「天地乖离开辟之星」所克"], 9029, 11286, 10932, 13684, "AABQQ", 1600, 2000, 2200, 2300, 2400, 1200, 1600, 1800, 1900, 2000, "TreasureSpecialRemainHpAttack", 0.8, null);
    intialServant("Rider", "阿斯托尔福", "Astolfo", 94, ["阿斯托尔福", "阿福", "乌鸦坐飞机"], "地", ["混沌", "善"], ["骑乘", "人型", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 8937, 11172, 10821, 13546, "ABQQQ", 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 11, fixedDamageBuff: 0, critialPowerBuff: 8 });
    intialServant("Rider", "玛丽・安托瓦内特", "Marie Antoinette", 29, ["玛丽安托瓦内特", "蛋糕"], "人", ["秩序", "善"], ["骑乘", "人型", "被「天地乖离开辟之星」所克"], 8293, 12348, 10041, 14972, "AABQQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 11, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Rider", "马大", "Marthe", 30, ["马大", "屠龙圣女", "屠龙剩女"], "人", ["秩序", "善"], ["骑乘", "人型", "神性", "被「天地乖离开辟之星」所克"], 8014, 13068, 9703, 15845, "AAABQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 11.5, fixedDamageBuff: 150, critialPowerBuff: 0 });

    /******************************************3星及以下********************************************************************/
    intialServant("Rider", "亚历山大", "Alexander", 28, ["亚历山大", "幼帝"], "人", ["中立", "善"], ["骑乘", "人型", "神性", "被「天地乖离开辟之星」所克", "王", "希腊神话系男性"], 7356, 8640, 9955, 11714, "AABQQ", 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 100, critialPowerBuff: 0 });
    intialServant("Rider", "美杜莎", "Medusa", 23, ["美杜莎", "R姐"], "地", ["混沌", "善"], ["骑乘", "人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 7200, 8937, 9744, 12117, "AABQQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 11, fixedDamageBuff: 95, critialPowerBuff: 6 });
    intialServant("Rider", "牛若丸", "Ushiwakamaru", 27, ["牛若丸", "牛肉丸"], "人", ["混沌", "中庸"], ["骑乘", "人型", "被「天地乖离开辟之星」所克", "所爱之人"], 7076, 9028, 9576, 12240, "AABQQ", 1600, 2000, 2200, 2300, 2400, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 11, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Rider", "克里斯托弗·哥伦布", "Cristoforo Colombo", 172, ["克里斯托弗哥伦布"], "人", ["中立", "恶"], ["骑乘", "人型", "被「天地乖离开辟之星」所克"], 6552, 9600, 8867, 13016, "AABBQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Rider", "爱德华・蒂奇", "Edward Teach", 25, ["爱德华蒂奇", "黑胡子", "死宅"], "人",["混沌","恶"],["人型","被「天地乖离开辟之星」所克"], 6188, 7907, 8967, 11411, "AABBQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5,null);
    intialServant("Rider", "圣乔治", "Georgius", 24, ["圣乔治", "冠希乔治", "你也是龙", "乔老师"], "人", ["秩序", "善"], ["骑乘", "人型", "被「天地乖离开辟之星」所克", "所爱之人"], 5236, 9200, 7587, 13278, "AABQQ", 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });

    //----------------------------------Caster---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Caster", "玄奘三蔵", "Genjou Sanzou", 113, ["玄奘三蔵", "师傅"], "人", ["秩序", "善"], ["人型", "神性", "被「天地乖离开辟之星」所克"], 11658, 12965, 12761, 14204, "AAABQ", 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1, cardBuff: 12, fixedDamageBuff: 125, critialPowerBuff: 0 });
    intialServant("Caster", "尼禄・克劳狄乌斯", "Nero Claudius2", 175, ["尼禄克劳狄乌斯", "C尼禄"], "人", ["混沌", "夏"], ["骑乘", "人型", "罗马", "阿尔托莉雅脸", "被「天地乖离开辟之星」所克", "王"], 10857, 13685, 11885, 14992, "AABBQ", 300, 400, 450, 475, 500, 20, 30, 40, 50, 60, "TreasurePowerBuff", 1.5, { cardColor: -2, cardBuff: "8|11", fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "伊莉雅斯菲尔", "Illyasviel", 136, ["伊莉雅斯菲尔", "马猴烧酒", "魔伊"], "人", ["中立", "善"], ["人型", "被「天地乖离开辟之星」所克"], 10857, 13825, 11885, 15146, "AAABQ", 800, 1000, 1100, 1150, 1200, 20, 40, 60, 80, 100, "TreasureSpecialCardPowerAttack", 1.5, null);
    intialServant("Caster", "莱昂纳多・达・芬奇", "Leonardo da Vinci", 127, ["莱昂纳多达芬奇"], "星", ["混沌", "善"], ["人型", "被「天地乖离开辟之星」所克"], 10598, 14259, 11601, 15621, "AAABQ", 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "诸葛孔明〔艾尔梅洛伊二世〕", "El-Melloi II", 37, ["诸葛孔明", "村夫", "孔日天", "王妃", "为所欲为"], "人", ["中立", "善"], ["人型", "被「天地乖离开辟之星」所克", "所爱之人"], 10598, 14259, 11601, 15621, "AAABQ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });

    intialServant("Caster", "梅林", "Merlin", 150, ["梅林", "马猴烧酒梅林", "梅日天", "为所欲为"], "地", ["秩序", "善"], ["人型", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克"], 10546, 14259, 11544, 15621, "AAABQ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 0 });

    intialServant("Caster", "山鲁佐德", "Scheherazade", 169, ["山鲁佐德", "1001"], "人", ["秩序", "中庸"], ["人型", "被「天地乖离开辟之星」所克"], 9212, 15846, 10084, 17360, "AAABQ", 450, 600, 675, 712, 750, 200, 225, 250, 275, 300, "TreasureSpecialAttack", 1, { cardColor: 1, cardBuff: 11.5, fixedDamageBuff: 0, critialPowerBuff: 0 }, { treasurePowerBuff: 20 });

    /******************************************4星********************************************************************/
    intialServant("Caster", "尼托克丽丝", "Nitocris", 120, ["尼托克丽丝", "埃及娘", "女法老", "屁股", "黑皮"], "地", ["秩序", "善"], ["人型", "神性", "被「天地乖离开辟之星」所克", "被「人类神话雷电降临」所克", "被「神秘杀」所克", "王"], 9060, 11288, 10970, 13686, "AAABQ", 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 175, critialPowerBuff: 0 });
    intialServant("Caster", "玛丽・安托瓦内特", "Marie Antoinette2", 130, ["玛丽安托瓦内特", "蛋糕"], "人", ["秩序", "善"], ["人型","被「天地乖离开辟之星」所克"], 9060, 11404, 10970, 13827, "AAABQ", 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    
    intialServant("Caster", "喀耳刻", "Circe", 192, ["喀耳刻"], "天",["混沌","中庸"],["人型","被「天地乖离开辟之星」所克","被「神秘杀」所克"], 8671, 12250, 10499, 14853, "AAABQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });


    intialServant("Caster", "童谣", "Nursery Rhyme", 74, ["童谣"], "人",["中立","中庸"],["人型","被「天地乖离开辟之星」所克"], 8629, 11882, 10448, 14407, "AAABQ", 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "海伦娜・布拉瓦茨基", "Helena Blavatsky", 100, ["海伦娜布拉瓦茨基", "外星萝莉"], "人",["混沌","善"],["人型","被「天地乖离开辟之星」所克"], 8629, 11882, 10448, 14407, "AAABQ", 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    
    intialServant("Caster", "示巴女王", "Queen of Sheba", 194, ["示巴女王", "所罗门老婆"], "人",["中立","善"],["人型","被「天地乖离开辟之星」所克","王"], 8629, 12127, 10448, 14704, "AAABQ", 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 0 });


    intialServant("Caster", "伊丽莎白・巴陶里〔万圣节〕", "Erzsebet Bathory（Halloween)", 61, ["伊丽莎白巴陶里", "C龙娘"], "人",["混沌","恶"],["人型","龙","被「天地乖离开辟之星」所克"], 8616, 11404, 10432, 13827, "AAABQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "吉尔伽美什〔Caster〕", "Gilgamesh(Caster)", 145, ["吉尔伽美什", "C闪"], "人",["秩序", "善"],["人型","神性","被「天地乖离开辟之星」所克","所爱之人","王"], 8460, 12005, 10243, 14556, "AAABQ", 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 175, critialPowerBuff: 0 });
    intialServant("Caster", "托马斯・爱迪生", "Thomas Edison", 103, ["托马斯爱迪生", "托马狮", "艾迪牲", "大总统"], "人",["秩序","中庸"],["人型","被「天地乖离开辟之星」所克"], 7952, 11882, 9628, 14407, "AAABQ", 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 4, fixedDamageBuff: 0, critialPowerBuff: 0 });

    /******************************************3星及以下********************************************************************/
    intialServant("Caster", "美狄亚", "Medea", 31, ["美狄亚", "C妈", "Saber控"], "地",["中立","恶"],["人型","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 7418, 8643, 10039, 11719, "AAABQ", 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "杰罗尼莫", "Geronimo", 104, ["杰罗尼莫", "萨满"], "人",["中立","善"],["人型","被「天地乖离开辟之星」所克","所爱之人"], 6857, 9123, 9280, 12369, "AABBQ", 400, 550, 625, 662.5, 700, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "梅菲斯托费勒斯", "Mephistopheles", 35, ["梅菲斯托费勒斯", "子安", "梅菲斯特"], "地",["混沌","恶"],["人型","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 6839, 9216, 9255, 12495, "AAABQ", 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1, cardBuff: 7, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "冯・霍恩海姆・帕拉塞尔苏斯", "Von Hohenheim Paracelsus", 79, ["冯霍恩海姆帕拉塞尔苏斯", "豆爸"], "人",["混沌","善"],["人型","被「天地乖离开辟之星」所克","所爱之人"], 6711, 9506, 9082, 12889, "AAABQ", 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "库・丘林", "Cu Chulainn2", 38, ["库丘林", "C狗", "法狗"], "天",["秩序","中庸"],["人型","神性","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克","所爱之人"], 6580, 9604, 8905, 13022, "AAABQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1, cardBuff: 8, fixedDamageBuff: 175, critialPowerBuff: 0 });
    intialServant("Caster", "吉尔・德・雷", "Gilles de Rais2", 32, ["吉尔德雷", "C元帅"], "人",["混沌","恶"],["人型","被「天地乖离开辟之星」所克"], 6514, 9506, 8816, 12889, "AAABQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "查尔斯・巴贝奇", "Charles Babbage", 80, ["查尔斯巴贝奇", "蒸汽王", "庄司妈", "高达", "扎古"], "人",["混沌","中庸"],["人型","被「天地乖离开辟之星」所克"], 5996, 10887, 8115, 14761, "AABBQ", 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5,null);
    intialServant("Caster", "威廉・莎士比亚", "William Shakespeare", 34, ["威廉莎士比亚", "莎翁", "文豪"], "人",["中立","中庸"],["人型","被「天地乖离开辟之星」所克"], 5798, 8080, 8402, 11661, "AAABQ", 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 0 });


    //----------------------------------Assassin---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Assassin", "酒吞童子", "Shuten Doji", 112, ["酒吞童子", "umb", "凹酱"], "地",["混沌","恶"],["人型","神性","魔性","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克","龙"], 11993, 12825, 13128, 14050, "AABQQ", 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 150, critialPowerBuff: 0 });
    intialServant("Assassin", "“山之翁”", "Yama no okina", 154, ["山之翁", "王哈桑", "狂战信条"], "人",["秩序","恶"],["人型","被「天地乖离开辟之星」所克","所爱之人"], 11848, 13338, 12969, 14612, "ABBBQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });
    intialServant("Assassin", "谜之女主角X", "Mysterious Heroine X", 86, ["谜之女主角X", "X毛", "蜜汁女主角", "星战呆毛"], "星",["混沌","善"],["骑乘","人型","龙","阿尔托莉雅脸","亚瑟","王"], 11761, 12696, 12874, 13909, "AABQQ", 1600, 2000, 2200, 2300, 2400, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 0.8, { cardColor: 0.8, cardBuff: 12, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Assassin", "开膛手杰克", "Jack the Ripper", 75, ["开膛手杰克", "女儿"], "地",["混沌","恶"],["人型","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 11557, 12696, 12651, 13909, "ABQQQ", 1400, 1800, 2000, 2100, 2200, 50, 62.5, 75, 87.5, 100, "SpecialAttackPowerBuff", 0.8,null);
    intialServant("Assassin", "克利奥帕特拉", "Cleopatra", 139, ["克利奥帕特拉", "超高校的艳后"], "人",["秩序","中庸"],["人型","神性","被「天地乖离开辟之星」所克","王"], 11088, 13402, 12138, 14682, "ABBQQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 125, critialPowerBuff: 0 });



    intialServant("Assassin", "刑部姫", "Osakabehime", 189, ["刑部姫", "家里蹲"], "地",["混沌","中庸"],["人型","神性","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 10824, 13822, 11849, 15143, "AABQQ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 1, cardBuff: 11, fixedDamageBuff: 150, critialPowerBuff: 0 });


    /******************************************4星********************************************************************/
    intialServant("Assassin", "尼托克丽丝", "Nitocris2", 177, ["尼托克丽丝", "智慧的凝视", "女法老", "梅杰德神"], "天",["秩序","善"],["人型","神性","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克","王"], 9737, 12737, 10670, 13965, "AABQQ", 450, 600, 675, 712.5, 750, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 185, critialPowerBuff: 0 });

    intialServant("Assassin", "卡米拉", "Carmilla", 46, ["卡米拉", "大龙娘", "铁处女"], "地",["混沌","恶"],["人型","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 9408, 10473, 11391, 12698, "ABQQQ", 600, 800, 900, 950, 1000, 120, 132.5, 145, 157.5, 170, "TreasureSpecialAttack", 1.5,null);
    intialServant("Assassin", "斯卡哈", "Scathach2", 133, ["斯卡哈", "bba", "师匠"], "星",["中立","善"],["人型","被「天地乖离开辟之星」所克","王"], 9049, 11168, 10956, 13541, "ABQQQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 0.8,null);
   

    intialServant("Assassin", "斯忒诺", "Stheno", 41, ["大姐", "斯忒诺"], "天",["混沌","善"],["人型","神性","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 8985, 11518, 10879, 13965, "ABQQQ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 300, critialPowerBuff: 0 });


    intialServant("Assassin", "武则天", "Wu Ze Tian", 170, ["武则天"], "人",["秩序","恶"],["人型","被「天地乖离开辟之星」所克","王"], 8981, 10942, 10874, 13267, "ABBQQ", 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8,null);
    intialServant("Assassin", "卫宫〔Assassin〕", "Emiya（Assassin)", 109, ["卫宫", "切丝", "Papa"], "人",["混沌","恶"],["人型","被「天地乖离开辟之星」所克","所爱之人"], 8958, 11168, 10846, 13541, "AABQQ", 1200, 1500, 1650, 1725, 1800, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });
    
    intialServant("Assassin", "加藤段藏", "Katou Danzou", 188, ["加藤段藏"], "地",["中立","中庸"],["人型","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 8935, 11055, 10818, 13404, "ABBQQ", 300, 400, 450, 475, 500, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5,null);


    intialServant("Assassin", "两仪式〔Assassin〕", "Ryougi Shiki（Assassin)", 92, ["两仪式", "214", "A214", "哈根女王", "杀式"], "人",["混沌","善"],["人型","被「天地乖离开辟之星」所克"], 8867, 11055, 10736, 13404, "AABQQ", 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Assassin", "燕青", "Yan Qing", 159, ["燕青", "燕小乙", "天巧星"], "人",["混沌","恶"],["人型","被「天地乖离开辟之星」所克","所爱之人"], 8661, 11637, 10487, 14110, "ABQQQ", 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 5, fixedDamageBuff: 0, critialPowerBuff: 5 });

    intialServant("Assassin", "望月千代女", "Mochizuki Chiyome", 185, ["望月千代女"], "地",["混沌","恶"],["人型","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 8510, 11637, 10304, 14110, "AABQQ", 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 0 });


    /******************************************3星及以下********************************************************************/
    intialServant("Assassin", "荆轲", "Jing Ke", 42, ["荆轲"], "人",["混沌","善"],["人型","被「天地乖离开辟之星」所克"], 7207, 8293, 9754, 11244, "ABQQQ", 1600, 2000, 2200, 2300, 2400, 0, 0, 0, 0, 0, "", 0.8,null);

    intialServant("Assassin", "风魔小太郎", "Fuuma Koutarou", 117, ["风魔小太郎"], "人",["混沌","恶"],["人型","被「天地乖离开辟之星」所克"], 7091, 8844, 9597, 11991, "ABQQQ", 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 0.8,null);

    intialServant("Assassin", "百貌的哈桑", "Hassan of Hundred Faces", 110, ["百貌的哈桑"], "人",["秩序","恶"],["人型","被「天地乖离开辟之星」所克"], 6686, 9310, 9049, 12623, "AABQQ", 1200, 1500, 1650, 1725, 1800, 0, 0, 0, 0, 0, "", 1,null);
    intialServant("Assassin", "静谧的哈桑", "Hassan of Serenity", 124, ["静谧的哈桑"], "人",["秩序","恶"],["人型","被「天地乖离开辟之星」所克"], 6636, 9310, 8981, 12623, "AABQQ", 1200, 1500, 1650, 1725, 1800, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Assassin", "咒腕的哈桑", "Hassan of the Cursed Arm", 40, ["咒腕的哈桑"], "人",["秩序","恶"],["人型","被「天地乖离开辟之星」所克"], 6280, 7594, 9100, 10960, "ABQQQ", 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8,null);
    intialServant("Assassin", "佐佐木小次郎", "Sasaki Koujirou", 39, ["佐佐木小次郎", "屠龙剑圣"], "人",["中立","恶"],["人型","被「天地乖离开辟之星」所克"], 5735, 6220, 8912, 9588, "ABQQQ", 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8,null);
    intialServant("Assassin", "歌剧魅影", "Phantom of the Opera", 44, ["歌剧魅影", "赛巴斯"], "地",["混沌","恶"],["人型","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 5654, 8393, 8193, 12112, "ABQQQ", 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1,null);
    intialServant("Assassin", "夏尔・亨利・桑松", "Charles Henri Sanson", 43, ["夏尔亨利桑松"], "人",["秩序","恶"],["人型","被「天地乖离开辟之星」所克"], 5456, 8309, 7906, 11991, "ABQQQ", 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 1.5,null);

    //----------------------------------Berserker---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Berserker", "库・丘林〔Alter〕", "Cu Chulainn（Alter)", 98, ["库丘林", "黑狗", "狂狗"], "地",["混沌","恶"],["人型","神性","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克","所爱之人"], 12805, 12210, 14017, 13377, "ABBBQ", 600, 800, 900, 950, 1000, 30, 40, 50, 60, 70, "TreasureSpecialAtkPowerAttack", 1.5, { cardColor: 1.5, cardBuff: 6, fixedDamageBuff: 150, critialPowerBuff: 0 });
    intialServant("Berserker", "坂田金时", "Sakata Kintoki", 51, ["B金时","坂田金时", "狗蛋", "金爸爸"], "人",["秩序","善"],["人型","神性","被「天地乖离开辟之星」所克","所爱之人"], 12712, 12150, 13915, 13311, "ABBBQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 2, fixedDamageBuff: 125, critialPowerBuff: 0 });
    intialServant("Berserker", "土方岁三", "Hijikata Toshizou", 161, ["土方岁三", "食堂开饭啦"], "人",["秩序","恶"],["人型","被「天地乖离开辟之星」所克"], 12089, 12028, 13234, 13178, "ABBQQ", 600, 800, 900, 950, 1000, 600, 800, 900, 950, 1000, "TreasureSpecialRemainHpAttack", 1.5, { cardColor: 1.5, cardBuff: 5, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "源赖光", "Minamoto Yorimitsu", 114, ["源赖光", "B奶光", "金妈"], "天",["混沌","善"],["骑乘","人型","神性","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 11556, 13500, 12650, 14790, "AABBQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -3, cardBuff: "12|11", fixedDamageBuff: 150, critialPowerBuff: 0 });
    intialServant("Berserker", "弗拉德三世", "Vlad III", 52, ["弗拉德三世", "大公"], "地",["混沌","恶"],["人型","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克","所爱之人","王"], 11499, 13770, 12587, 15086, "AABBQ", 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: 1.5, cardBuff: 12, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "谜之女主角X〔Alter〕", "Mysterious Heroine X〔Alter〕", 155, ["谜之女主角X", "黑x毛", "bx毛"], "星",["中立","恶"],["人型","龙","阿尔托莉雅脸","亚瑟","王"], 11113, 14175, 12165, 15529, "ABBQQ", 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 1.5, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 0 });

    intialServant("Berserker", "南丁格尔", "Nightingale", 97, ["护士", "南丁格尔"], "人",["秩序","善"],["人型","被「天地乖离开辟之星」所克"], 10184, 15221, 11148, 16675, "AABBQ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "", 1, { cardColor: 1.5, cardBuff: 12, fixedDamageBuff: 0, critialPowerBuff: 0 });


    /******************************************4星********************************************************************/
    intialServant("Berserker", "赫拉克勒斯", "Hercules", 47, ["赫拉克勒斯", "B叔", "海叔", "萝莉控"], "天",["混沌","狂"],["人型","神性","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克","希腊神话系男性"], 10655, 10327, 12901, 12521, "ABBBQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 8, fixedDamageBuff: 200, critialPowerBuff: 0 });
    intialServant("Berserker", "彭忒西勒亚", "Penthesilea", 171, ["彭忒西勒亚", "亚马逊女王"], "地",["秩序","善"],["人型","神性","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克","王"], 10502, 10175, 12716, 12337, "ABBBQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 12, fixedDamageBuff: 175, critialPowerBuff: 0 });
    intialServant("Berserker", "兰斯洛特", "Lancelot2", 48, ["兰斯洛特", "狂兰", "B兰"], "地",["秩序","狂"],["人型","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 10477, 10327, 12685, 12521, "ABBBQ", 600, 800, 900, 950, 1000, 10, 15, 20, 25, 30, "TreasureSpecialAtkPowerAttack", 0.8, { cardColor: 1.5, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "贝奥武夫", "Beowulf", 89, ["贝奥武夫", "贝爷", "狼叔"], "地",["混沌","善"],["人型","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克","所爱之人","王"], 10247, 10327, 12407, 12521, "ABBBQ", 700, 900, 1000, 1050, 1100, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 1, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "织田信长", "Oda Nobunaga2", 178, ["织田信长", "Nobu", "钉宫"], "人",["混沌","夏"],["人型","被「天地乖离开辟之星」所克","王"], 10146, 10023, 12285, 12153,"ABBBQ", 600, 800, 900, 950, 1000, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: 1.5, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 0 });


    intialServant("Berserker", "茨木童子", "Ibaraki Doji", 116, ["茨木童子"], "地",["混沌","恶"],["人型","魔性","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 9636, 10954, 11667, 13282, "ABBBQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "弗兰肯斯坦", "Frankenstein", 82, ["弗兰肯斯坦", "肯娘"], "地",["混沌","中庸"],["人型","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 9441, 10687, 11431, 12958, "ABBBQ", 900, 1100, 1200, 1250, 1300, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 1.5, cardBuff: 4, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "玉藻猫", "Tamamo Cat", 58, ["玉藻猫", "B玉"], "地",["混沌","善"],["人型","猛兽","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 9026, 11458, 10929, 13893, "ABBBQ", 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 1.5, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "茶茶", "Cha Cha", 162, ["茶茶"], "人",["混沌","中庸"],["人型","被「天地乖离开辟之星」所克"], 8945, 11025, 10831, 13368, "ABBBQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 3, fixedDamageBuff: 0, critialPowerBuff: 0 });

    /******************************************3星及以下********************************************************************/
    intialServant("Berserker", "吕布奉先", "Lu Bu Feng Xian", 49, ["吕布奉先", "吕高达"], "人",["混沌","恶"],["人型","被「天地乖离开辟之星」所克"], 8119, 8302, 10988, 11256, "ABBBQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "大流士三世", "Darius III", 55, ["大流士三世", "酋长", "真黑无毛", "酒精灯", "大流士三岁"], "人",["秩序","中庸"],["人型","被「天地乖离开辟之星」所克","王"], 7608, 8763, 10297, 11881, "ABBBQ", 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "清姬", "Kiyohime", 56, ["B清姬", "狂清姬"], "地",["混沌","恶"],["人型","龙","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 6644, 9166, 8992, 12428, "ABBBQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 12, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "血斧埃里克", "Eric Bloodaxe", 57, ["血斧埃里克", "成龙"], "人",["混沌","中庸"],["人型","被「天地乖离开辟之星」所克","王"], 6290, 7688, 9115, 11095, "ABBBQ", 300, 400, 450, 475, 500, 30, 35, 40, 45, 50, "TreasureSpecialAtkPowerAttack", 1.5, { cardColor: 1.5, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "保罗•班扬", "Paul Bunyan", 174, ["保罗班扬"], "地",["中立","中庸"],["人型","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 6044, 6196, 9391, 9551, "ABBBQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 4, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "斯巴达克斯", "Spartacus", 50, ["斯巴达克斯", "抖M", "微笑兄贵", "肌肉兄贵"], "人",["中立","中庸"],["人型","罗马","被「天地乖离开辟之星」所克"], 5073, 7722, 7883, 11904, "ABBBQ", 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 12, fixedDamageBuff: 0, critialPowerBuff: 0 });

    //----------------------------------Shielder---------------------------------------------------------------------//
    /******************************************4星********************************************************************/
    intialServant("Shielder", "玛修・基列莱特", "Matthew Kyrielite", 1, ["玛修基列莱特"], "地",["秩序","善"],["骑乘","人型","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克"], 8730, 12877, 10575, 15619, "AABBQ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "", 1,null);


    //----------------------------------Ruler---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Ruler", "夏洛克·福尔摩斯", "Sherlock Holmes", 173, ["夏洛克福尔摩斯"], "星",["中立","善"],["人型"], 11495, 13365, 12583, 14642, "AABQQ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "", 1,null);
    intialServant("Ruler", "天草四郎", "Shirou Kotomine", 93, ["天草四郎"], "人",["秩序","善"],["人型","被「天地乖离开辟之星」所克"], 10972, 14107, 12011, 15455, "AABBQ", 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5,null);
    intialServant("Ruler", "贞德", "Jeanne d'Arc", 59, ["白贞德", "村姑"], "星",["秩序","善"],["人型","阿尔托莉雅脸","被「天地乖离开辟之星」所克"], 9593, 16500, 10501, 18076, "AAABQ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "", 1,null);



    /******************************************4星********************************************************************/
    intialServant("Ruler", "马大", "Marthe2", 135, ["马大", "铁拳剩女", "铁拳圣女"], "人",["秩序","善"],["人型","被「天地乖离开辟之星」所克"], 9546, 11250, 11558, 13640, "ABBBQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5,null);


    //----------------------------------Avenger---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Avenger", "贞德〔Alter〕", "Jeanne d'Arc（Alter)", 106, ["黑贞德"], "人",["混沌","恶"],["人型","阿尔托莉雅脸","被「天地乖离开辟之星」所克"], 13244, 11761, 14498, 12885, "AABBQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Avenger", "岩窟王 爱德蒙・唐泰斯", "Edmond Dantes", 96, ["岩窟王爱德蒙唐泰斯", "伯爵", "狛枝"], "人",["混沌","恶"],["人型","被「天地乖离开辟之星」所克"], 12641, 12177, 13838, 13340, "ABBQQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });

    /******************************************4星********************************************************************/
    intialServant("Avenger", "戈尔贡", "Gorgon", 147, ["戈尔贡", "魔神R姐"], "地",["混沌","恶"],["人型","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 10706, 10197, 12963, 12364, "AABBQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 6 });
    intialServant("Avenger", "海森・罗伯", "Hyesons Robert", 158, ["海森罗伯", "无头骑士", "狼王"], "地",["混沌","恶"],["人型","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克","猛兽"], 10628, 9949, 12868, 12063, "AABQQ", 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });

    //----------------------------------MoonCancer---------------------------------------------------------------------//
    /******************************************4星********************************************************************/
    intialServant("MoonCancer", "BB", "BB", 166, ["BB"], "人",["混沌","善"],["人型","被「天地乖离开辟之星」所克"], 8197, 13643, 9925, 16542, "AABQQ", 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });

    //----------------------------------Altergo---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Altergo", "梅尔特莉莉丝（溶解莉莉丝）", "Meltlilith", 163, ["梅尔特莉莉丝溶解莉莉丝"], "地",["秩序","善"],["骑乘","人型","神性","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 11692, 13402, 12799, 14682, "ABBQQ", 1200, 1600, 1800, 1900, 2000, 10, 15, 20, 25, 30, "TreasureSpecialCardPowerAttack", 0.8, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 225, critialPowerBuff: 10 });
    intialServant("Altergo", "杀生院祈荒", "Sesshouin Kiara", 167, ["杀生院祈荒"], "兽",["混沌","恶"],["人型","被「天地乖离开辟之星」所克"], 11668, 14606, 12772, 16001, "AABBQ", 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });

    /******************************************4星********************************************************************/
    intialServant("Altergo", "帕森莉普（热情迷唇）", "Passionlip", 164, ["帕森莉普热情迷唇"], "地",["秩序","中庸"],["人型","神性","被「天地乖离开辟之星」所克","被「人类神话雷电降临」所克","被「神秘杀」所克"], 10299, 10901, 12470, 13217, "ABBBQ", 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 200, critialPowerBuff: 6 });
    

    intialServant("Altergo", "机械伊丽酱", "mekaerichan", 190, ["机械伊丽酱","机械龙娘I号"], "人",["秩序","善"],["人型","被「天地乖离开辟之星」所克"], 9997, 10901, 12104, 13217, "ABBBQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Altergo", "机械伊丽酱Ⅱ号机", "mekaerichan", 191, ["机械伊丽酱Ⅱ号机","机械龙娘II号"], "人",["秩序","善"],["人型","被「天地乖离开辟之星」所克"], 9997, 10901, 12104, 13217, "ABBBQ", 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 0 });

    //----------------------------------Foreigner---------------------------------------------------------------------//
    /******************************************5星********************************************************************/


    //加载各等级atk和hp
    loadLvs();  

    //设置缓存
    window.localStorage.setItem("servants", JSON.stringify(servants));

}

//加载各等级atk和hp
function loadLvs(){
    servants.forEach(function(s){
        let lvArr=[];
        lvs.forEach(function(l){
            if(l.n==s.servantNo){
                lvArr.push(l);
            }
        })
        s.lvs=lvArr;
    })
}


/**
* 初始化从者数据
* @param {String} career 职介
* @param {String} name 从者名
* @param {String} eName 从者英文名
* @param {Number} servantNo 从者编号(茹西教王的理想鄉和wiki从者编号都一样的)
* @param {Array} keys 搜索关键词
* @param {String} camp 阵营
* @param {Array} attributes 属性
* @param {Array} characteristics 特性
* @param {Number} atk ATK
* @param {Number} hp HP
* @param {Number} maxAtk 100级ATK
* @param {Number} maxHp  100级HP
* @param {Number} cards 配卡
* @param {Number} tl1 1宝倍率
* @param {Number} tl2 2宝倍率
* @param {Number} tl3 3宝倍率
* @param {Number} tl4 4宝倍率
* @param {Number} tl5 5宝倍率
* @param {Number} oc1 100 OC
* @param {Number} oc2 200 OC
* @param {Number} oc3 300 OC
* @param {Number} oc4 400 OC
* @param {Number} oc5 500 OC
* @param {String} type 特攻类型，目前有以下8种
*    TreasureSpecialAttack：宝具特攻
*    SpecialAttackPowerBuff：特攻威力Buff，比如杰克女性特攻
*    ""：无特攻
*    TreasureSpecialRemainHpAttack：双子宝具特攻
*    TreasureSpecialExplosionAttack：自爆弓宝具特攻
*    TreasureSpecialCardPowerAttack：R金时OC绿魔放
*    TreasureSpecialAtkPowerAttack：B兰OC加攻
*    TreasurePowerBuff：宫本半藏OC宝具威力提升
* @param {Number} cardColor 卡牌倍率(B卡：1.5，A卡：1，Q卡：0.8)
* @param {Object} careerSkill 职介技能(比如狂化EX、神性Debuff) 
*    cardColor: 0.8(Quick)，1(Arts)，1.5(Buster)，0(All)，-1(None)，-2(Quick和Arts)，-3(Buster和Quick)
*    cardBuff: 10(卡牌Buff), 
*    fixedDamageBuff: 0(神性Debuff), 
*    critialPowerBuff: 0(暴击威力Buff)
* @param {Object} treasureSideEffect 宝具副效果(oc特攻只能显示一种副效果，所以剩余其他的副效果存储到这个对象里)
*    treasurePowerBuff：宝具威力buff
*    cardPowerBuff：卡牌buff
*/
function intialServant(career, name, eName, servantNo, keys, camp, attributes, characteristics, atk, hp, maxAtk, maxHp, cards, tl1, tl2, tl3, tl4, tl5, oc1, oc2, oc3, oc4, oc5, type, cardColor, careerSkill, treasureSideEffect) {
    //id++;//下标最好还是从0开始
    let tl = {};
    tl["tl1"] = tl1;
    tl["tl2"] = tl2;
    tl["tl3"] = tl3;
    tl["tl4"] = tl4;
    tl["tl5"] = tl5;

    let oc = {};
    oc["oc1"] = oc1;
    oc["oc2"] = oc2;
    oc["oc3"] = oc3;
    oc["oc4"] = oc4;
    oc["oc5"] = oc5;

    oc["type"] = type;

    let model = {
        id: id,
        career: career,
        name: name,
        eName: eName,
        servantNo: servantNo,
        keys: keys,
        camp: camp,
        attributes: attributes,
        characteristics:characteristics,
        atk: atk,
        hp: hp,
        maxAtk: maxAtk,
        maxHp: maxHp,
        cards: cards,
        tl: tl,
        oc: oc,
        cardColor: cardColor,
        careerSkill: careerSkill,
        treasureSideEffect: treasureSideEffect
    }
    servants[id] = model;
    id++;
}

