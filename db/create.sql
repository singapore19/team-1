DROP SCHEMA IF EXISTS rough_sleepers;
CREATE SCHEMA rough_sleepers;
USE rough_sleepers;

create table sleepers (
	`id` int(11) NOT NULL AUTO_INCREMENT,
    `lon` float NOT NULL, 
    `lat` float NOT NULL,
    `gender` char(1),
    `race` varchar(10),
    `age` varchar(10),
    `belongings` text,
    `appearance` text,
    PRIMARY KEY (`id`)
);

INSERT INTO `sleepers` 
VALUES
(NULL,1.440585001,103.8009982,'M','Chinese','Adult','shoes indigo','short messy hair'),
(NULL,1.316432612,103.882893,'F','Chinese','Child','bags violet','medium mohawk hair'),
(NULL,1.369933175,103.8495535,'M','Caucasian','Adult','shoes blue','medium messy hair'),
(NULL,1.388092704,103.9054179,'F','Malay','Adult','bags green','medium combed hair'),
(NULL,1.380017897,103.7726667,'M','Caucasian','Adult','shoes violet','short clean hair'),
(NULL,1.342828338,103.8797462,'F','Indian','Child','bags blond','medium clean hair'),
(NULL,1.281873788,103.8590733,'M','Malay','Adult','bags green','short clean hair'),
(NULL,1.281873788,103.8590733,'F','Indian','Adult','bags yellow','short messy hair'),
(NULL,1.341223176,103.77581,'M','Indian','Adolescence','shoes yellow','short mohawk hair'),
(NULL,1.323979969,103.9299587,'F','Caucasian','Adult','bags red','short unkempt hair'),
(NULL,1.334742117,103.9179554,'M','Indian','Adolescence','bags green','medium clean hair'),
(NULL,1.33660783,103.9322077,'F','Caucasian','Adolescence','shoes blond','medium unkempt hair'),
(NULL,1.29886427,103.8503799,'M','Chinese','Adult','shoes yellow','medium messy hair'),
(NULL,1.313672233,103.8629702,'F','Caucasian','Child','bags blond','short mohawk hair'),
(NULL,1.35130868,103.84915,'M','Caucasian','Adolescence','bags violet','short mohawk hair'),
(NULL,1.350838988,103.8481398,'F','Chinese','Adult','bags indigo','medium mohawk hair'),
(NULL,1.319395706,103.861679,'M','Malay','Child','shoes indigo','short combed hair'),
(NULL,1.338604054,103.7060994,'F','Chinese','Adult','shoes indigo','medium combed hair'),
(NULL,1.322423979,103.8161362,'M','Indian','Adult','bags green','short unkempt hair'),
(NULL,1.322110193,103.8149876,'F','Indian','Child','bags blond','medium mohawk hair'),
(NULL,1.340471684,103.8467942,'M','Malay','Adolescence','bags indigo','medium messy hair'),
(NULL,1.296861687,103.8506629,'F','Caucasian','Adolescence','bags blond','medium clean hair'),
(NULL,1.382877858,103.8931042,'M','Caucasian','Child','shoes green','medium clean hair'),
(NULL,1.299550746,103.8568623,'F','Chinese','Adolescence','bags green','short messy hair'),
(NULL,1.300465076,103.8557007,'M','Caucasian','Child','shoes blond','medium combed hair'),
(NULL,1.349034109,103.74959,'F','Malay','Adult','shoes green','medium unkempt hair'),
(NULL,1.333728882,103.8306903,'M','Indian','Child','shoes violet','short messy hair'),
(NULL,1.358761857,103.7519164,'F','Chinese','Child','bags green','short mohawk hair'),
(NULL,1.377909898,103.763034,'M','Malay','Adult','shoes green','medium clean hair'),
(NULL,1.379002117,103.7615559,'F','Chinese','Adult','shoes blond','short messy hair'),
(NULL,1.307183467,103.7902028,'M','Malay','Child','shoes red','medium messy hair'),
(NULL,1.306491669,103.7906645,'F','Chinese','Adolescence','bags blond','short unkempt hair'),
(NULL,1.337674508,103.8395281,'M','Malay','Child','shoes green','short unkempt hair'),
(NULL,1.369369831,103.764714,'F','Malay','Child','bags yellow','medium mohawk hair'),
(NULL,1.357314545,103.9883212,'M','Malay','Child','shoes yellow','medium mohawk hair'),
(NULL,1.396277631,103.8937792,'F','Indian','Adult','shoes blond','short combed hair'),
(NULL,1.284359578,103.8434242,'M','Indian','Adolescence','bags yellow','medium messy hair'),
(NULL,1.284748969,103.8444484,'F','Caucasian','Adult','bags indigo','short messy hair'),
(NULL,1.342352821,103.7326244,'M','Indian','Adult','bags blond','short messy hair'),
(NULL,1.38483636,103.7445797,'F','Malay','Child','shoes indigo','short mohawk hair'),
(NULL,1.385361693,103.744367,'M','Malay','Adult','shoes green','short clean hair'),
(NULL,1.292936243,103.852581,'F','Caucasian','Child','bags indigo','short mohawk hair'),
(NULL,1.292936243,103.852581,'M','Malay','Child','bags red','short messy hair'),
(NULL,1.288386024,103.8465519,'F','Chinese','Child','shoes green','medium mohawk hair'),
(NULL,1.314954492,103.7653168,'M','Caucasian','Child','shoes red','short unkempt hair'),
(NULL,1.302438735,103.7983136,'F','Indian','Child','shoes indigo','medium combed hair'),
(NULL,1.394493046,103.9004726,'M','Malay','Child','bags indigo','short combed hair'),
(NULL,1.393909226,103.9125574,'F','Indian','Adolescence','shoes blond','medium messy hair'),
(NULL,1.399281985,103.9059403,'M','Chinese','Adult','shoes violet','short clean hair'),
(NULL,1.30838264,103.888648,'F','Caucasian','Adult','bags violet','medium mohawk hair'),
(NULL,1.405234836,103.9085809,'M','Indian','Child','bags indigo','short combed hair'),
(NULL,1.298701307,103.8461119,'F','Chinese','Adolescence','shoes indigo','short combed hair'),
(NULL,1.299705459,103.8454851,'M','Malay','Adolescence','bags violet','short unkempt hair'),
(NULL,1.298842816,103.8462358,'F','Caucasian','Child','shoes red','short clean hair'),
(NULL,1.311405293,103.7786522,'M','Malay','Adolescence','bags violet','short mohawk hair'),
(NULL,1.27944619,103.8528356,'F','Indian','Child','shoes blond','medium messy hair'),
(NULL,1.293321608,103.8554985,'M','Caucasian','Adult','shoes blue','short clean hair'),
(NULL,1.319778952,103.9032339,'F','Chinese','Child','shoes red','medium mohawk hair'),
(NULL,1.334549778,103.9615134,'M','Indian','Adolescence','shoes blond','short mohawk hair'),
(NULL,1.335382137,103.9623407,'F','Chinese','Adolescence','shoes blond','medium messy hair'),
(NULL,1.384520796,103.7708268,'M','Caucasian','Child','shoes green','medium messy hair'),
(NULL,1.397170196,103.8892882,'F','Malay','Child','bags blue','short unkempt hair'),
(NULL,1.31235984,103.8541717,'M','Caucasian','Adult','bags blond','medium mohawk hair'),
(NULL,1.317510612,103.8075929,'F','Chinese','Adolescence','shoes blue','medium messy hair'),
(NULL,1.391885888,103.8762959,'M','Chinese','Child','bags violet','short clean hair'),
(NULL,1.292478928,103.8443255,'F','Indian','Adult','shoes indigo','short combed hair'),
(NULL,1.321505838,103.8718904,'M','Malay','Child','bags indigo','short combed hair'),
(NULL,1.319505215,103.6605988,'F','Caucasian','Child','bags blue','short combed hair'),
(NULL,1.26547264,103.821446,'M','Indian','Adult','bags yellow','medium clean hair'),
(NULL,1.26547264,103.821446,'F','Indian','Adolescence','shoes blond','medium clean hair'),
(NULL,1.282542157,103.7818234,'M','Indian','Adolescence','bags indigo','medium messy hair'),
(NULL,1.362344869,103.7674369,'F','Caucasian','Child','bags violet','medium combed hair'),
(NULL,1.31183479,103.7962016,'M','Indian','Adult','bags violet','medium combed hair'),
(NULL,1.371292292,103.8923636,'F','Indian','Adolescence','shoes blond','short mohawk hair'),
(NULL,1.305403642,103.8554713,'M','Indian','Adult','bags blue','short messy hair'),
(NULL,1.386703025,103.7645235,'F','Caucasian','Child','shoes blue','short combed hair'),
(NULL,1.327717173,103.6784167,'M','Malay','Child','shoes violet','medium messy hair'),
(NULL,1.33315262,103.7423112,'F','Malay','Adult','bags yellow','medium mohawk hair'),
(NULL,1.33315262,103.7423112,'M','Indian','Adult','bags green','medium mohawk hair'),
(NULL,1.399584853,103.9164619,'F','Indian','Adolescence','shoes blue','medium clean hair'),
(NULL,1.334967302,103.9084393,'M','Malay','Adult','shoes yellow','medium messy hair'),
(NULL,1.31148891,103.8713766,'F','Caucasian','Adolescence','bags blond','medium unkempt hair'),
(NULL,1.383978902,103.9021539,'M','Caucasian','Adult','bags green','medium messy hair'),
(NULL,1.378602766,103.7490799,'F','Chinese','Child','bags blond','short combed hair'),
(NULL,1.321038249,103.9129282,'M','Malay','Child','bags yellow','medium messy hair'),
(NULL,1.293462633,103.7846438,'F','Indian','Adult','bags green','medium clean hair'),
(NULL,1.41738337,103.83298,'M','Chinese','Adult','bags green','medium messy hair'),
(NULL,1.335665121,103.7838201,'F','Malay','Adolescence','bags violet','short unkempt hair'),
(NULL,1.360179171,103.8850503,'M','Malay','Child','shoes yellow','short combed hair'),
(NULL,1.425177699,103.7621874,'F','Indian','Adolescence','bags red','short unkempt hair'),
(NULL,1.398212828,103.881242,'M','Chinese','Adult','bags violet','short combed hair'),
(NULL,1.272332732,103.8029471,'F','Indian','Adult','shoes violet','short unkempt hair'),
(NULL,1.344259249,103.7209802,'M','Caucasian','Adolescence','shoes yellow','short messy hair'),
(NULL,1.30735702,103.8628215,'F','Caucasian','Adult','bags blue','short unkempt hair'),
(NULL,1.392079839,103.8800158,'M','Indian','Child','bags blue','medium mohawk hair'),
(NULL,1.303916484,103.8524167,'F','Indian','Child','shoes blue','short clean hair'),
(NULL,1.307198223,103.8485807,'M','Indian','Adult','shoes blue','short unkempt hair'),
(NULL,1.351612171,103.8641434,'F','Caucasian','Adult','shoes red','medium clean hair'),
(NULL,1.326345372,103.8902718,'M','Caucasian','Child','bags red','medium combed hair'),
(NULL,1.326076883,103.8893356,'F','Chinese','Adult','bags indigo','short combed hair'),
(NULL,1.276427355,103.8545925,'M','Malay','Child','bags indigo','short messy hair'),
(NULL,1.276150637,103.8550886,'F','Malay','Adult','bags violet','short combed hair'),
(NULL,1.271336711,103.8628525,'M','Indian','Adult','bags red','medium messy hair'),
(NULL,1.432514421,103.77409,'F','Chinese','Child','bags green','short combed hair'),
(NULL,1.348707263,103.8394214,'M','Malay','Adolescence','shoes indigo','medium unkempt hair'),
(NULL,1.326876715,103.8832341,'F','Chinese','Adolescence','shoes blue','medium mohawk hair'),
(NULL,1.396912053,103.9089277,'M','Malay','Adolescence','bags blue','short messy hair'),
(NULL,1.306201905,103.8825153,'F','Chinese','Child','bags green','medium clean hair'),
(NULL,1.313607102,103.8378098,'M','Malay','Adolescence','shoes blue','medium clean hair'),
(NULL,1.3123201,103.8379841,'F','Chinese','Child','bags green','short unkempt hair'),
(NULL,1.411870458,103.9002935,'M','Malay','Adult','bags blue','medium mohawk hair'),
(NULL,1.299766835,103.8636292,'F','Malay','Adolescence','bags violet','short combed hair'),
(NULL,1.320440791,103.8438228,'M','Malay','Child','bags indigo','short mohawk hair'),
(NULL,1.402286677,103.9127036,'F','Indian','Child','bags yellow','short clean hair'),
(NULL,1.299759879,103.7874693,'M','Malay','Adolescence','bags violet','medium mohawk hair'),
(NULL,1.303981012,103.8322417,'F','Caucasian','Adolescence','bags green','short mohawk hair'),
(NULL,1.28140498,103.839125,'M','Chinese','Adolescence','shoes green','medium clean hair'),
(NULL,1.279764543,103.8395732,'F','Caucasian','Adolescence','bags blond','medium clean hair'),
(NULL,1.276213523,103.7913607,'M','Chinese','Adolescence','bags indigo','short unkempt hair'),
(NULL,1.372983774,103.9492348,'F','Indian','Adolescence','shoes red','medium messy hair'),
(NULL,1.318112082,103.8930446,'M','Caucasian','Adult','bags yellow','medium clean hair'),
(NULL,1.317430268,103.8921633,'F','Indian','Adult','shoes green','short mohawk hair'),
(NULL,1.376142883,103.7712881,'M','Caucasian','Adult','bags yellow','medium combed hair'),
(NULL,1.377750334,103.7666882,'F','Malay','Adult','shoes violet','medium combed hair'),
(NULL,1.378618844,103.7580559,'M','Malay','Child','shoes blond','short clean hair'),
(NULL,1.337586882,103.6973586,'F','Chinese','Child','shoes indigo','medium unkempt hair'),
(NULL,1.331379525,103.869046,'M','Indian','Child','shoes violet','medium clean hair'),
(NULL,1.292891552,103.860846,'F','Caucasian','Adult','shoes green','medium unkempt hair'),
(NULL,1.293218051,103.8609921,'M','Chinese','Adolescence','bags blond','medium clean hair'),
(NULL,1.405194701,103.9023911,'F','Indian','Adult','shoes red','short clean hair'),
(NULL,1.404546728,103.902052,'M','Indian','Adult','shoes yellow','medium unkempt hair'),
(NULL,1.41684852,103.9066284,'F','Caucasian','Adolescence','shoes blue','short clean hair'),
(NULL,1.294860933,103.8058913,'M','Caucasian','Child','bags violet','short combed hair'),
(NULL,1.284125611,103.8514572,'F','Chinese','Child','shoes blue','short combed hair'),
(NULL,1.284125611,103.8514572,'M','Caucasian','Adult','bags violet','short combed hair'),
(NULL,1.384233561,103.897176,'F','Indian','Adult','bags blond','short mohawk hair'),
(NULL,1.289562726,103.8168209,'M','Caucasian','Adult','bags yellow','medium clean hair'),
(NULL,1.386723922,103.8905227,'F','Caucasian','Adolescence','bags red','medium messy hair'),
(NULL,1.394524496,103.9161415,'M','Chinese','Adult','bags yellow','short clean hair'),
(NULL,1.306800025,103.8496427,'F','Caucasian','Child','bags yellow','short messy hair'),
(NULL,1.391468497,103.9059522,'M','Caucasian','Child','shoes blond','short mohawk hair'),
(NULL,1.409612685,103.9048099,'F','Malay','Adult','bags red','short messy hair'),
(NULL,1.415901719,103.9021353,'M','Caucasian','Adolescence','shoes blue','medium mohawk hair'),
(NULL,1.387772131,103.7696171,'F','Malay','Child','bags green','short clean hair'),
(NULL,1.449050821,103.8200504,'M','Malay','Adolescence','bags indigo','short clean hair'),
(NULL,1.391609364,103.8954243,'F','Malay','Adult','bags blond','medium clean hair'),
(NULL,1.391694626,103.8954664,'M','Chinese','Adult','shoes blond','medium combed hair'),
(NULL,1.382692296,103.7623879,'F','Malay','Adolescence','shoes red','short clean hair'),
(NULL,1.350595256,103.8723572,'M','Malay','Adolescence','bags blond','short mohawk hair'),
(NULL,1.349707875,103.8735637,'F','Caucasian','Child','bags indigo','short combed hair'),
(NULL,1.343202895,103.9533387,'M','Indian','Adult','bags blue','short combed hair'),
(NULL,1.330786387,103.7972561,'F','Indian','Adolescence','bags indigo','short messy hair'),
(NULL,1.300260055,103.8390737,'M','Malay','Adult','bags blond','medium clean hair'),
(NULL,1.405088585,103.8971904,'F','Malay','Child','bags violet','medium combed hair'),
(NULL,1.380298287,103.7453173,'M','Malay','Child','shoes blue','medium messy hair'),
(NULL,1.30284063,103.8753395,'F','Caucasian','Child','bags red','short messy hair'),
(NULL,1.320065557,103.8260263,'M','Malay','Adult','bags green','short clean hair'),
(NULL,1.408452426,103.8985387,'F','Caucasian','Adolescence','bags green','short unkempt hair'),
(NULL,1.335433322,103.88818,'M','Malay','Adult','shoes red','short unkempt hair'),
(NULL,1.356191483,103.9546005,'F','Chinese','Adolescence','shoes indigo','short unkempt hair'),
(NULL,1.353301356,103.9451175,'M','Chinese','Adolescence','shoes yellow','short clean hair'),
(NULL,1.355077429,103.9430298,'F','Malay','Child','bags blond','medium messy hair'),
(NULL,1.345515305,103.938408,'M','Malay','Adult','bags blue','short clean hair'),
(NULL,1.325883209,103.8073292,'F','Chinese','Adult','bags red','medium unkempt hair'),
(NULL,1.327187135,103.9463161,'M','Caucasian','Adult','shoes red','short unkempt hair'),
(NULL,1.276521247,103.8458611,'F','Caucasian','Adolescence','shoes green','medium messy hair'),
(NULL,1.412770894,103.9065554,'M','Malay','Child','bags green','medium clean hair'),
(NULL,1.376684679,103.7537352,'F','Malay','Adolescence','bags red','medium clean hair'),
(NULL,1.282289536,103.8482991,'M','Indian','Adult','shoes yellow','short combed hair'),
(NULL,1.270753211,103.8097544,'F','Indian','Adolescence','bags indigo','medium combed hair'),
(NULL,1.380321008,103.760161,'M','Indian','Adult','bags green','medium clean hair'),
(NULL,1.397318155,103.8756226,'F','Malay','Adult','shoes indigo','short clean hair'),
(NULL,1.286193393,103.827021,'M','Malay','Adolescence','bags blue','short unkempt hair'),
(NULL,1.332628987,103.8474979,'F','Indian','Adult','shoes blond','medium unkempt hair'),
(NULL,1.389347953,103.8858287,'M','Chinese','Child','shoes indigo','short combed hair'),
(NULL,1.321026553,103.6491245,'F','Caucasian','Adult','bags blond','short combed hair'),
(NULL,1.340463766,103.6369324,'M','Indian','Adult','bags blue','medium clean hair'),
(NULL,1.329989089,103.6396662,'F','Indian','Adolescence','bags indigo','short unkempt hair'),
(NULL,1.329956826,103.8992348,'M','Chinese','Adolescence','shoes indigo','medium combed hair'),
(NULL,1.341737484,103.9614367,'F','Chinese','Child','bags blue','medium mohawk hair'),
(NULL,1.436875128,103.7864999,'M','Caucasian','Child','bags red','short combed hair'),
(NULL,1.436066981,103.7879451,'F','Caucasian','Adult','shoes yellow','medium messy hair'),
(NULL,1.427259979,103.7938631,'M','Malay','Child','bags blond','short combed hair'),
(NULL,1.339190046,103.8708081,'F','Indian','Adult','shoes blue','medium combed hair'),
(NULL,1.397535018,103.7474307,'M','Caucasian','Adolescence','shoes yellow','medium messy hair'),
(NULL,1.381756046,103.8449439,'F','Chinese','Adult','shoes violet','medium mohawk hair'),
(NULL,1.429443081,103.8350045,'M','Indian','Child','bags green','short messy hair');

-- select * from sleepers;
-- 