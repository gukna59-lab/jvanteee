export interface Anime {
  id: number;
  title: string;
  rating: number;
  rank: number;
  img: string;
  type: 'Сериалы' | 'Фильмы' | 'ONA';
  plot: string;
  screenshots: string[];
  episodes: number;
  voiceovers: string[];
  videoSrc: string;
  shikimori_id: string;
}

export const animeData: Anime[] = [
  {
    "id": 1,
    "title": "Провожающая в последний путь Фрирен",
    "rating": 9.27,
    "rank": 1,
    "type": "Сериалы",
    "shikimori_id": "52991",
    "img": "https://shikimori.one/system/animes/original/52991.jpg?1710731127",
    "plot": "Одержав победу над Королём демонов, отряд героя [character=186854]Химмеля[/character] вернулся домой. Приключение, растянувшееся на десятилетие, подошло к завершению. Волшебница-эльф [character=184947]Фрирен[/character] и её отважные товарищи принесли людям мир и разошлись в разные стороны, чтобы спокойно прожить остаток жизни. Однако не всех членов отряда ждёт одинаковая участь. Для эльфов время течёт иначе, поэтому [character=184947]Фрирен[/character] вынуждена стать свидетелем того, как её спутники один за другим постепенно уходят из жизни. Девушка осознала, что годы, проведённые в отряде героя, пронеслись в один миг, как падающая звезда в бескрайнем космосе её жизни, и столкнулась с сожалениями об упущенных возможностях. Сможет ли она смириться со смертью друзей и понять, что значит жизнь для окружающих её людей? [character=184947]Фрирен[/character] начинает новое путешествие, чтобы найти ответ.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/b8a37b9a2b5e01e581f3313278a4e38bee9a1527.jpg?1696000681",
      "https://shikimori.one/system/screenshots/original/de4d563c7524eb560351c6a166078f0a5f44407c.jpg?1696000683",
      "https://shikimori.one/system/screenshots/original/a222e9ed6510a0b8cb0bc9e9d2291beb306e4b5c.jpg?1696000685",
      "https://shikimori.one/system/screenshots/original/ad4f61192d399270a923c49a6a96b77a7f9343f6.jpg?1696000686"
    ],
    "episodes": 28,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 2,
    "title": "Невероятное приключение ДжоДжо: Гонка «Стальной шар»",
    "rating": 9.13,
    "rank": 2,
    "type": "ONA",
    "shikimori_id": "61469",
    "img": "https://shikimori.one/assets/globals/missing_original.jpg",
    "plot": "Конец девятнадцатого века. Крупный предприниматель [character=23652]Стивен Стил[/character] решает организовать событие, которое всколыхнёт мир. По всей Америке разносятся слухи о том, что на западе страны начинаются величайшие в истории скачки. Отвесные скалы, песчаные дюны, раскалённое солнце и путешествие по бескрайним пустошам длиною в шесть тысяч километров — это гонка «Стальной шар». Лучшие скакуны со всего света готовы попытать удачу ради всемирной славы и главного приза в пятьдесят миллионов долларов.\n[character=19492]Джонни Джостар[/character] — бывший жокей, в прошлом снискавший немалый успех на своём поприще. К его огромному сожалению, судьба сыграла с ним злую шутку, из-за чего юноша оказался прикован к инвалидной коляске и был вынужден завязать с конным спортом. Прибыв в Сан-Диего он, как и тысячи других зевак, с нетерпением ожидал грандиозного мероприятия, но прямо перед началом стал свидетелем конфликта между местным вором-карманником и эксцентричным молодым человеком с двумя стальными шарами на поясе. Случайно коснувшись одного из шаров, Джонни впервые за два года почувствовал прилив сил в своих, казалось бы, неизлечимо парализованных ногах. Безудержное желание узнать секрет загадочных шаров сподвигло [character=19492]ДжоДжо[/character] снова оседлать лошадь, чтобы принять участие в гонке и начать своё невероятное приключение!",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/767498a53be31a460d66f9231b6e9ad852288efe.jpg?1773934597",
      "https://shikimori.one/system/screenshots/original/a289b0fc1f9ebcd75c27a13d570e8ca85d4d117a.jpg?1773934598",
      "https://shikimori.one/system/screenshots/original/67dc45ccdfd96fbdf429be136fa5dd2da9a2b8f5.jpg?1773934598",
      "https://shikimori.one/system/screenshots/original/d445d3950e532c7df6eaf42944a9a405df8aa47e.jpg?1773934598"
    ],
    "episodes": 1,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 3,
    "title": "Стальной алхимик: Братство",
    "rating": 9.11,
    "rank": 3,
    "type": "Сериалы",
    "shikimori_id": "5114",
    "img": "https://shikimori.one/system/animes/original/5114.jpg?1711949773",
    "plot": "Ремейк одноимённого аниме-сериала «[anime=121]Стальной алхимик[/anime]» 2003 года, более строго следующий событиям, описанным в манге.\n\nВ этом мире существуют алхимики — люди, владеющие искусством алхимии, способностью манипулировать материей и преобразовывать вещество. Все они ограничены основным Законом алхимии: нельзя алхимическим путём получить что-то, не пожертвовав чем-то равноценным полученному. Лишь с помощью легендарного философского камня, способ создания которого утерян, можно обойти этот Закон.\nГлавные герои, братья Эдвард [エドワード・エルリック] и Альфонс [アルフォンス・エルリック] Элрики, пострадали в детстве при попытке вернуть к жизни свою мать, умершую от болезни. Они забыли основной Закон алхимии и жестоко поплатились за это: Альфонс потерял всё своё тело, а Эдвард — руку и ногу. Эдвард сумел спасти лишь душу Альфонса, запечатав её в старинных доспехах.\nСпустя много лет Эдвард сдаёт государственный экзамен на звание алхимика и получает прозвище «Стальной Алхимик». Братья начинают путешествие с целью найти философский камень и вернуть с его помощью утраченное много лет назад.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/109e67ae974e1950b16ea58abacfa79c78ae39b2.jpg?1578674893",
      "https://shikimori.one/system/screenshots/original/bab2700a71b2b2d1b24a20d3b409d3f18aedd08e.jpg?1578674894",
      "https://shikimori.one/system/screenshots/original/70a7a1ebb749494b36ce9f5279fa82d8fa897e3e.jpg?1578674895",
      "https://shikimori.one/system/screenshots/original/44f1247bdaae6691b255d4f9f45914ea04713458.jpg?1578674896"
    ],
    "episodes": 64,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 4,
    "title": "Человек-бензопила: Резе",
    "rating": 9.08,
    "rank": 4,
    "type": "Фильмы",
    "shikimori_id": "57555",
    "img": "https://shikimori.one/system/animes/original/57555.jpg?1718698511",
    "plot": "[character=170732]Дэндзи[/character], который уже некоторое время работает в Бюро общественной безопасности, целыми днями только и думает о том, как стать ближе к [character=170734]Макиме[/character] — не только его начальнице, но и объекту его воздыханий. [character=170732]Дэндзи[/character] уверен в искренности своих чувств и даже не допускает мысли, что кто-то может затмить красоту и очарование его возлюбленной. По крайней мере, он так думал, пока не встретил [character=174751]Резе[/character]. Милая девушка, которая подрабатывает в кофейне, неожиданно заставила сердце Человека-бензопилы биться чаще. Но к добру ли это? \n\n[i]«А кем бы ты хотел быть? Мышкой полевой или мышью городской?»[/i]",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/cecc71af652f0c68dc9c7c9c784365049badbe92.jpg?1766256269",
      "https://shikimori.one/system/screenshots/original/e5caf861425d77017aecd4fe96bfafc0bdfceed2.jpg?1766256269",
      "https://shikimori.one/system/screenshots/original/7e4eaba188451e4bc6520b5700143079abbd805c.jpg?1766256270",
      "https://shikimori.one/system/screenshots/original/61b0c9455354e7272cec0f11119d458ff68a41ed.jpg?1766256270"
    ],
    "episodes": 1,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 5,
    "title": "Врата Штейна",
    "rating": 9.07,
    "rank": 5,
    "type": "Сериалы",
    "shikimori_id": "9253",
    "img": "https://shikimori.one/system/animes/original/9253.jpg?1711975211",
    "plot": "Сняв в Акихабаре квартиру, самопровозглашённый сумасшедший учёный [character=35252]Окабэ Ринтаро[/character] устроил там «лабораторию» и в компании своей подруги детства [character=35253]Сины Маюри[/character] и хакера-отаку [character=35258]Хасиды Итару[/character] изобретает «гаджеты будущего». Троица отлично проводит время вместе, работая над совместным проектом — «мобиловолновкой», которой можно управлять с помощью текстовых сообщений.\nВскоре «сотрудники лаборатории» сталкиваются с чередой загадочных инцидентов, которые приводят к открытию, изменившему правила игры: «мобиловолновка» может отправлять электронные письма в прошлое и таким образом изменять историю.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/98e4f835e3f2ae3d32f94322b02220001bb4f5e9.jpg?1656764254",
      "https://shikimori.one/system/screenshots/original/d7a06183cbd282a74d0a4b35bf9b3600416b99f1.jpg?1656764254",
      "https://shikimori.one/system/screenshots/original/85a22fa7048ea5d61e298dd6d029d83322d503b5.jpg?1656764255",
      "https://shikimori.one/system/screenshots/original/b8624ab8ea57a18cff1affb6aba932798fbbbf92.jpg?1656764255"
    ],
    "episodes": 24,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 6,
    "title": "Гинтама: Финал",
    "rating": 9.05,
    "rank": 6,
    "type": "Фильмы",
    "shikimori_id": "39486",
    "img": "https://shikimori.one/system/animes/original/39486.jpg?1711951459",
    "plot": "Два года минуло с последних событий. Пути Ёродзуи разошлись: [character=672]Гинтоки[/character] исследует Альтану, [character=674]Кагура[/character] ��о всему космосу ищет способ вернуть прежнее состояние [character=2651]Садахару[/character], а [character=673]Шинпачи[/character] пытается сохранить то немногое, что осталось от их общего дома. \nНо тучи сгущаются, остатки Тендошу, благодаря банановой атаке [character=2943]Гориллы[/character], падают на Центральный терминал и собираются вновь использовать Альтану в своих целях.\nПришла пора друзьям в последний раз встать на защиту Эдо, чтобы исполнить желание [character=28144]Шоё Йошиды[/character] и заодно спасти своё будущее.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/cf492d49d5897300ccfeb0b4fd4d381343e20a7f.jpg?1626512007",
      "https://shikimori.one/system/screenshots/original/b76d0a91e4b85816a908051dcdd14e36650635d5.jpg?1626512007",
      "https://shikimori.one/system/screenshots/original/16575698ad057cba4f7dc08f06c540b4f9d3f376.jpg?1626512008",
      "https://shikimori.one/system/screenshots/original/7716b007e0c61906228380713d316f156ab8a818.jpg?1626512008"
    ],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 7,
    "title": "Гинтама 4",
    "rating": 9.05,
    "rank": 7,
    "type": "Сериалы",
    "shikimori_id": "28977",
    "img": "https://shikimori.one/system/animes/original/28977.jpg?1711951367",
    "plot": "Никто этого уже не ждал и не надеялся, но...\n«Простите, что сняли четвертый сезон!», — возвестила студия [i]Sunrise[/i] и вернула любимых героев, по которым все уже успели соскучиться, на экраны. Гинтама снова с нами, и она лучше, чем когда-либо прежде! В ролях: Ёродзуя, Шинсенгуми, Джои, пришельцы — все наши старые-добрые и новые-злые герои. В Эдо, как обычно, случаются катастрофы местного и вселенского масштаба, а предотвращать их и спасать мир вновь придется нашим веселым и бесшабашным героям.\nВ основе аниме юмор самого разного калибра: от туалетных шуток до изысканных острот, а кроме того куча отсылок и пародий. Мысль «Как всю съемочную группу в полном составе до сих пор не засудили?» сломает ваш мозг. Так что приготовьтесь! Ваши стереотипы об аниме будут разрушены навсегда. А сами вы будете рыдать от смеха, наблюдая за невероятными приключениями самурая с серебряными волосами и его необыкновенными соседями!",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/69c56cdaebdc9e422b3a41879ee332132b8f80fe.jpg?1668316385",
      "https://shikimori.one/system/screenshots/original/d6fa799fb5e2cf5f1de44643361d221940120136.jpg?1668316385",
      "https://shikimori.one/system/screenshots/original/f8000ecd10956dc7c1e7d733e08b1cf26ff67c58.jpg?1668316386",
      "https://shikimori.one/system/screenshots/original/d8744db1f0e7458a68eb9725f0ddfa3b8fd87997.jpg?1668316386"
    ],
    "episodes": 51,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 8,
    "title": "Атака титанов 3. Часть 2",
    "rating": 9.05,
    "rank": 8,
    "type": "Сериалы",
    "shikimori_id": "38524",
    "img": "https://shikimori.one/system/animes/original/38524.jpg?1711973463",
    "plot": "Прямое продолжение аниме «[anime=35760]Атака титанов 3[/anime]». Экранизация седьмой по счёту сюжетной арки манги за авторством [person=11705]Хадзимэ Исаямы[/person].\n\nВнутри стен снова настали мирные времена, и разведотряд готовится к новой вылазке за стену «Роза», прямиком в Шиганшину. Благодаря [character=71121]Ханджи[/character] разработка нового оружия для убийства титанов почти без участия людей идёт полным ходом, а к солдатам вернулась давно утраченная надежда на спасение всего человечества. Но в Шиганшине наших героев подстерегает невиданная опасность, способная уничтожить все планы [character=46496]Эрвина[/character] на возвращение стены «Мария» и разрушить все мечты узнать, что же таится в секретном подвале старого дома [character=40882]Эрена[/character] и [character=40881]Микасы[/character].",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/ee848c6c4fa926f5ac82025e7374604e7968589a.jpg?1664382382",
      "https://shikimori.one/system/screenshots/original/a7ab037a757987543404add6545a206eca63389e.jpg?1664382382",
      "https://shikimori.one/system/screenshots/original/0652a435b8ad8612b4d3a6ad74ed35309a65afd1.jpg?1664382383",
      "https://shikimori.one/system/screenshots/original/84fba2dad1b04277ed3bf4b2f5879084152ef497.jpg?1664382383"
    ],
    "episodes": 10,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 9,
    "title": "Охотник х Охотник (2011)",
    "rating": 9.03,
    "rank": 9,
    "type": "Сериалы",
    "shikimori_id": "11061",
    "img": "https://shikimori.one/system/animes/original/11061.jpg?1711954447",
    "plot": "Охотник — это тот, кто путешествует по миру, выполняя различные опасные миссии: от поимки преступников до поиска сокровищ в неизведанных землях. Главный герой — мальчик по имени Гон [ゴン＝フリークス]. Его отец [character=26]Джин[/character] был охотником, но исчез много лет назад. Гон считает, что если пойдёт по стопам отца и станет охотником, то рано или поздно вновь встретится с ним. Мальчик надеется, что, повстречав отца, наконец сможет задать ему один-единственный вопрос: почему он предпочёл жизнь охотника своему маленькому сынишке.\nКогда ему исполняется двенадцать, Гон, как в своё время и его отец, покидает родной остров с целью сдать официальный экзамен на охотника. Но экзамен очень сложен, и каждый год множество людей погибают, пытаясь получить это звание. Во время своего путешествия Гон знакомится с [character=28]Курапикой[/character], [character=29]Леорио[/character] и [character=27]Киллуа[/character], вместе с которыми ступает на тернистый путь охотника.\n[i]Ремейк аниме-сериала «[anime=136]Охотник х Охотник[/anime]» 1999 года.[/i]",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/e76dcc2a194302cc5c2f7f6cdd7e0fbb4bb7eb21.jpg?1702972747",
      "https://shikimori.one/system/screenshots/original/897db7de6a34762d9f7c62ece518c982667f6041.jpg?1702972748",
      "https://shikimori.one/system/screenshots/original/28bd6398ac98f00279ce183c82e820daf3ec0d17.jpg?1702972748",
      "https://shikimori.one/system/screenshots/original/dbb6d3465bfc70a52c4abca9fddb04678c0ae1dd.jpg?1702972749"
    ],
    "episodes": 148,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 10,
    "title": "Легенда о героях Галактики",
    "rating": 9.02,
    "rank": 10,
    "type": "ONA",
    "shikimori_id": "820",
    "img": "https://shikimori.one/system/animes/original/820.jpg?1711951161",
    "plot": "Десятилетиями Галактическая Империя воюет в межзвездной войне против Альянса Свободных Планет. В конфликте участвуют тысячи космических кораблей и миллионы солдат с обеих сторон.\nПроходит время, появляются молодые и амбициозные офицеры: Райнхард фон Лоэнграмм в Галактической Империи и Вэньли Ян в Альянсе Свободных Планет. Им предстоит пройти через множество испытаний, преодолевать сопротивление начальства и подчиненных, маневрировать в сложнейших политических ситуациях, выигрывать битвы и в конце концов полностью изменить облик современной космической войны.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/6ab906cfdf6c6c890034a9b6f2656fb6a3c221d7.jpg?1631719260",
      "https://shikimori.one/system/screenshots/original/90c27908b1461d698443a78322aa75d7f5d66dba.jpg?1631719260",
      "https://shikimori.one/system/screenshots/original/2c86d6bac2ab0630ed7ef5b25c7e7ff9bf2dcd70.jpg?1631719260",
      "https://shikimori.one/system/screenshots/original/a4733b5e29d9484587585bc2f82faabe1e229a51.jpg?1631719261"
    ],
    "episodes": 110,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 11,
    "title": "Гинтама 2",
    "rating": 9.02,
    "rank": 11,
    "type": "Сериалы",
    "shikimori_id": "9969",
    "img": "https://shikimori.one/system/animes/original/9969.jpg?1711951325",
    "plot": "Продолжение приключений Гинтоки [Gintoki Sakata] и его команды из агентства «Мастера на все руки» в окружении альтернативно-исторической феодальной Японии.",
    "screenshots": [],
    "episodes": 51,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 12,
    "title": "Гинтама 3",
    "rating": 9.02,
    "rank": 12,
    "type": "Сериалы",
    "shikimori_id": "15417",
    "img": "https://shikimori.one/system/animes/original/15417.jpg?1711951342",
    "plot": "Третье пришествие знаменитой троицы мастеров на все руки [[Ёродзуя]]. Гинтоки [坂田銀時] по-прежнему ленив и кучеряв, у малышки Кагуры [神楽] остался прежний взрывной характер (и бездонный желудок тоже), а Шинпачи [志村新八] всё так же выступает в команде голосом разума. Почему всё осталось по-прежнему? Потому что сериал представляет из себя повторный показ избранных эпизодов из предыдущих сезонов, однако не обойдётся и без новых серий. Восстав аки феникс из пепла, сериал вновь раздаст пинки здравому смыслу, поиздевается над моралью и порвёт не один шаблон. Приготовьтесь, театр абсурда в декорациях футуристически-средневекового Эдо ещё никогда не был таким весёлым!",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/89907f62a4ac44c74e7f0a21b364e0dfdb7553b3.jpg?1648270321",
      "https://shikimori.one/system/screenshots/original/79d23e6238bc440f60d8ff2712699ff1a0680b60.jpg?1648270321",
      "https://shikimori.one/system/screenshots/original/a357ee08fd08efc1359b07b428cdbf4ec65c8175.jpg?1648270322",
      "https://shikimori.one/system/screenshots/original/55302632c6e4a223817d981ffda275919cf95a46.jpg?1648270323"
    ],
    "episodes": 13,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 13,
    "title": "Блич: Тысячелетняя кровавая война",
    "rating": 8.98,
    "rank": 13,
    "type": "Сериалы",
    "shikimori_id": "41467",
    "img": "https://shikimori.one/system/animes/original/41467.jpg?1711944193",
    "plot": "Сообщество душ получает множество сообщений о тревоге: число пустых, уничтоженных в мире живых, растёт с каждой минутой; всё больше жителей района Руконгай числятся пропавшими; грань между миром живых и Сообществом душ под угрозой исчезновения. Вскоре и само Сообщество подвергается нападению группы людей, которые называют себя «Ванденрейх». Во главе с [character=68537]Яхве[/character], отцом всех квинси, который был запечатан много лет, «Ванденрейх» объявляет войну всем синигами и грозится через пять дней стереть Сообщество душ в порошок.\n\n[character=5]Ичиго Куросаки[/character], временно исполняющему обязанности синигами, предстоит вновь взять в руки меч и стать на защиту мира людей и Сообщества душ. Враг будет силён, но верные друзья [character=5]Ичиго[/character], [character=564]Урю Исида[/character], [character=7]Орихимэ Иноуэ[/character] и [character=575]Ясутора Садо[/character], не останутся в стороне, они готовы дать отпор в любой момент!",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/721106db44acdf1a44eb868114c57dbfc74c658c.jpg?1665411591",
      "https://shikimori.one/system/screenshots/original/d3f689db94b85bc52e390c7af79c0cdcdd7a2a6e.jpg?1665411592",
      "https://shikimori.one/system/screenshots/original/14ed979a331bbfe46a5b7d7bfcb34360b1b74739.jpg?1665411592",
      "https://shikimori.one/system/screenshots/original/a5de5de8395f5de5f901226f04c0717f999631e1.jpg?1665411592"
    ],
    "episodes": 13,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 14,
    "title": "Гинтама 5",
    "rating": 8.98,
    "rank": 14,
    "type": "Сериалы",
    "shikimori_id": "34096",
    "img": "https://shikimori.one/system/animes/original/34096.jpg?1711951316",
    "plot": "В Японии эпохи Эдо, захваченной пришельцами, небоскрёбы, скоростные поезда и шумные мотоциклы, казалось бы, давно стёрли из умов землян воспоминания об обычной жизни. Единственный человек, в котором сохранился дух самурая, — Гинтоки Саката. Как обычно, в своей неторопливой манере, Гинтоки продолжает, валяясь на диване, читать [url=http://ru.wikipedia.org/wiki/Weekly_Shonen_Jump]Jump[/url], бродить по кабакам, прятать остатки денег от [character=5970]Отосэ[/character] и спасать мир в перерывах между ковырянием в носу.\n\nНеизвестно, что готовит ему судьба на этот раз, но верные Кагура и Шинпачи [志村 新八] всегда рядом.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/d68b124dacdcefc626f12f6b762c63c1a8273ac3.png?1484365500",
      "https://shikimori.one/system/screenshots/original/f1736b25c28a9572776a517147503cfa2f1b8329.png?1484365522",
      "https://shikimori.one/system/screenshots/original/93e9ec679bf414e622345aff2dfef3a8b5afe0fb.png?1484365547",
      "https://shikimori.one/system/screenshots/original/93ca25a3dae6744802909bccc1a040dad66cfd44.png?1484365568"
    ],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 15,
    "title": "Госпожа Кагуя: в любви как на войне 3",
    "rating": 8.96,
    "rank": 15,
    "type": "Сериалы",
    "shikimori_id": "43608",
    "img": "https://shikimori.one/system/animes/original/43608.jpg?1711956970",
    "plot": "«Любовь — это война!»\n[character=136685]Миюки Сироганэ[/character] и [character=136359]Кагуя Синомия[/character] знают об этом не понаслышке. И пусть за время, проведённое вместе в студенческом совете академии Сютин, они стали ближе, уступать никто не желает, ведь признание равносильно поражению!\nВыборы главы совета позади, и весь прошлый состав вернулся к своим привычным должностям, обзаведясь новым членом — десятиклассницей [character=152052]Мико Иино[/character]. Однако время неумолимо, и школьная пора рано или поздно закончится, а что будет дальше — неизвестно никому. [character=136685]Миюки[/character] и [character=136359]Кагуя[/character] понимают это, и чем раньше они раскроют свои чувства друг другу, тем больше времени смогут провести вместе. Но как отбросить гордость и сделать первый шаг?",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/5ef3130056df892a75a487219680bed96d6c4194.jpg?1649439746",
      "https://shikimori.one/system/screenshots/original/13491d234e3620756e528bd4303c01cdf3d12955.jpg?1649439746",
      "https://shikimori.one/system/screenshots/original/2e284c9ea377b42192da7b529ce0f7cbd3227572.jpg?1649439747",
      "https://shikimori.one/system/screenshots/original/fcfbe77c2254fdedb0edd7443de533ec4523014f.jpg?1649439747"
    ],
    "episodes": 13,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 16,
    "title": "Корзинка фруктов: Финал",
    "rating": 8.93,
    "rank": 16,
    "type": "Сериалы",
    "shikimori_id": "42938",
    "img": "https://shikimori.one/system/animes/original/42938.jpg?1711949657",
    "plot": "Сотни лет назад китайские духи Зодиака и их бог поклялись вечно оставаться вместе. Объединенные этим обещанием, одержимые члены семьи Сома должны всегда и при любых обстоятельствах возвращаться друг к другу. Однако, когда эти узы сковывают их свободу, это становится нежелательным бременем — проклятием. Будучи главой клана, [character=374]Акито[/character] убеждён, что у него есть особая связь с другими Сома. Пока он отчаянно цепляется за эту фантазию, остальные члены семьи остаются изолированными и подавленными из-за страха наказания.\n\n[character=207]Тору Хонда[/character], которая привязалась к Сомам, полна решимости разорвать связывающие их цепи. Общение с семьёй и друзьями побуждает её двигаться вперёд к снятию проклятия, однако из-за сбивающих с толку откровений ей с трудом удаётся найти в себе силы продолжать свои начинания. Время медленно уходит, [character=207]Тору[/character] борется с неопределённым будущим в надежде достичь спокойствия, которое может находиться за пределами всей этой суматохи.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/2e46a6b39cfd0435c819c6ec81d9eaf2ed590bc0.jpg?1666513000",
      "https://shikimori.one/system/screenshots/original/c7af87408561a6bb96ca6e46d64984a4af20fd20.jpg?1666513001",
      "https://shikimori.one/system/screenshots/original/b246ce8f6e854745637e7b0bb152c5cc4d903bc0.jpg?1666513001",
      "https://shikimori.one/system/screenshots/original/989ccdb2404733444c52bf908c77284b1f85e6f6.jpg?1666513002"
    ],
    "episodes": 13,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 17,
    "title": "Гинтама",
    "rating": 8.93,
    "rank": 17,
    "type": "Сериалы",
    "shikimori_id": "918",
    "img": "https://shikimori.one/system/animes/original/918.jpg?1711951372",
    "plot": "Жить в феодальной Японии непросто... особенно если вас завоевали инопланетяне. Да, конечно, новая система здравоохранения хороша, но запрет на ношение меча ставит истинных самураев в безвыходное положение. Вдвойне это относится к Гинтоки Сакате [坂田 銀時], последнему самураю, в ком ещё жив истинно японский дух.\nГинтоки живёт с Кагурой [神楽], представительницей одной из сильнейших рас во вселенной, и очкариком Шинпачи Шимурой [志村新八]. Втроём они создают агентство под названием «Мастера на все руки [[Гинтоки]]-сана» и берутся за любые странные и нелепые поручения, с которыми к ним приходят, будь то поиск пропавшей кошки или спасение мира. Ведь платить им нечем не только за аренду жилья, но и за еду.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/7c897d1b0714f71cf237cca14ba5134febb5132e.jpg?1656787956",
      "https://shikimori.one/system/screenshots/original/d6fae82351175c679eccc67bc7d336bfe3125308.jpg?1656787956",
      "https://shikimori.one/system/screenshots/original/154ba1a6fdc1896ac67e3f8963320ab6bf0c3238.jpg?1656787957",
      "https://shikimori.one/system/screenshots/original/830aa8b5a7bdf69fb42268c5c101bef93e71062c.jpg?1656787957"
    ],
    "episodes": 201,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 18,
    "title": "Форма голоса",
    "rating": 8.93,
    "rank": 18,
    "type": "Фильмы",
    "shikimori_id": "28851",
    "img": "https://shikimori.one/system/animes/original/28851.jpg?1711959177",
    "plot": "Подобно миру взрослых, мир детей не терпит различий, выделяющих кого-то на фоне других, коих принято считать нормальными. Этот мир жесток, поскольку его обитатели, в отличие от обитателей мира взрослых, еще не успели научиться скрывать мерзкие мысли за напускной улыбкой. Многие вещи им непонятны, более того — неведомы. Дети прямолинейны. И поэтому очень жестоки.\nОднако все дети когда-нибудь вырастают. И оглядываясь назад, во времена школьной рутины, некоторым из них становится стыдно за свою юность.\nСложно представить, сколько лет должно пройти, пока до примерного задиры и разгильдяя дойдет, каким глупцом он был, когда веселья ради издевался над инвалидом. Кто-то об этом даже не вспомнит. А кто-то вроде Сёи [Shouya Ishida] возненавидит себя крепкой ненавистью. В младшей школе он умудрился превратить жизнь одноклассницы по имени Сёко [Shouko Nishimiya] в ад. Только потому, что та была глухая, не как все. И теперь, несколько лет спустя, хоть и запоздало, но мальчишка понял: чтобы сказать нечто важное тому, кто не может тебя услышать, вовсе не обязательно использовать голос.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/53ee568871872acd5edcdc30359db3f932dd23be.jpg?1494989983",
      "https://shikimori.one/system/screenshots/original/4703c735c143e8804c8ae9e1077ae35d8d7959fc.jpg?1494989983",
      "https://shikimori.one/system/screenshots/original/3cc883863e48c2939fafd5436a4558cc4c153a87.jpg?1494989983",
      "https://shikimori.one/system/screenshots/original/3e1a647d1902d2d2cf0771df54fc51c5067310a8.jpg?1494989984"
    ],
    "episodes": 1,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 19,
    "title": "Код Гиас: Восставший Лелуш 2",
    "rating": 8.92,
    "rank": 19,
    "type": "Сериалы",
    "shikimori_id": "2904",
    "img": "https://shikimori.one/system/animes/original/2904.jpg?1711946571",
    "plot": "Прошёл год со дня разгрома «Чёрного восстания». Остатки «Ордена Чёрных рыцарей» скрываются от Империи, рассеявшись по стране, их лидер Зеро казнён Британией, а жители Сектора-11 угнетены ещё сильнее. Основные силы Империи теперь сконцентрированы на Европейском фронте.\nВпрочем, для самих британцев в Одиннадцатом Секторе жизнь наладилась. В один прекрасный день британский студент, прогуливая занятия, отправляется играть партию шахмат на деньги. Незримо для него за ним наблюдают... Вскоре ему предстоит вернуть утраченную память и продолжить подавленное Империей восстание Зеро.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/2af02e8e168702b2a8b03c6aef19a3bf60d96244.jpg?1519936101",
      "https://shikimori.one/system/screenshots/original/426594265ff730e90166925db55fc9ebb94d9355.jpg?1519936102",
      "https://shikimori.one/system/screenshots/original/7e63d08d576a42202bbca03f3867a26c9230949f.jpg?1519936106",
      "https://shikimori.one/system/screenshots/original/8f10bc20dbc17a15220a792b5a769afd1276ea92.jpg?1519936109"
    ],
    "episodes": 25,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 20,
    "title": "Монолог фармацевта 2",
    "rating": 8.91,
    "rank": 20,
    "type": "Сериалы",
    "shikimori_id": "58514",
    "img": "https://shikimori.one/system/animes/original/58514.jpg?1711218614",
    "plot": "Прошло совсем немного времени с тех пор, как [character=155904]Маомао[/character] из скромной служанки превратилась в незаменимую фрейлину наложницы императора. Теперь её жизнь протекает в роскошных дворцовых залах, где она официально занимается своим ремеслом — созданием лекарств и расследованием загадочных недугов. Однако её новообретённые привилегии имеют и обратную сторону: каждое открытие колышет хрупкую паутину дворцовых интриг, где правят лесть и тайные заговоры.\n\nНа фоне этих событий, непростые отношения [character=155904]Маомао[/character] с загадочным капитаном дворцовой стражи [character=156096]Жэньши[/character] приобретают всё более неожиданные оттенки.\n\nДевушке предстоит не только лечить пациентов, но и учиться выживать при дворе, где её острый ум может как помочь с решением всех проблем, так и стать величайшей угрозой.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/f0a5d4c9ad49828cb8b1c6b4e4a6a21dcbd5aaa8.jpg?1736536684",
      "https://shikimori.one/system/screenshots/original/ee24a98f4d85c3a606a372f30c497836f990b03d.jpg?1736536685",
      "https://shikimori.one/system/screenshots/original/94827e8e73f3c7f92bc5ffe3532aca8ee586f347.jpg?1736536687",
      "https://shikimori.one/system/screenshots/original/b804a244fd3c766d337aa1ade421769b30873b3a.jpg?1736536689"
    ],
    "episodes": 24,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 21,
    "title": "Мартовский лев 2",
    "rating": 8.9,
    "rank": 21,
    "type": "Сериалы",
    "shikimori_id": "35180",
    "img": "https://shikimori.one/system/animes/original/35180.jpg?1711937700",
    "plot": "Мир сёги — «игры генералов» — непрост. В этом мире живут люди поистине потрясающие. Каждый день они с фанатизмом сражаются друг с другом на поле боя, которым выступает небольшая деревянная доска, проигрывают и побеждают. И боль от поражения подчас похожа на боль — ту далёкую и обидную — как от удара настоящим мечом.\nСтолько игр позади, столько эмоций, а [character=21044]Рэй[/character], кажется, едва изменился. Он всё тот же угрюмый парень, поглощённый противоречивыми мыслями и иногда наведывающийся в уютный дом семьи Кавамото. Но одновременно и воин, неистово сражающийся за победу. В мире триумфаторов и поверженных «генералов» он ещё не догадывается, кем в конце концов станет. Всё, чего ему хочется — это играть в сёги и каждый новый день встречать вместе с людьми, похожими на него самого — стремящимися, кто осознанно, а кто нет, к яркому свету победы.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/848610671541f8fb2c6116269b4155cc0335fefd.jpg?1508154899",
      "https://shikimori.one/system/screenshots/original/5f088b3dffdaced918af9278554bf628a9c35645.jpg?1508154899",
      "https://shikimori.one/system/screenshots/original/02a3d0ef13474759fffd066ed6774309034603a8.jpg?1508154900",
      "https://shikimori.one/system/screenshots/original/3a44a323c61d8e2f44e019e2b85b4898f8782307.jpg?1508154908"
    ],
    "episodes": 22,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 22,
    "title": "Гинтама: Финальная арка — Ёродзуя навсегда!",
    "rating": 8.89,
    "rank": 22,
    "type": "Фильмы",
    "shikimori_id": "15335",
    "img": "https://shikimori.one/system/animes/original/15335.jpg?1711951370",
    "plot": "Интересно, что бы случилось, если бы Белого Демона никогда не существовало?\nВ один прекрасный день мир сошёл с ума, и теперь Эдо ввергнут в настоящий хаос. Гинтоки Саката отныне живёт в альтернативной реальности, будущем, в котором ему места не нашлось. Но что же случилось с Ёродзуей? А с остальными? Но важнее всего: кто за всем этим стоит?\nПохоже, Гинтоки снова предстоит стать демоном во плоти, чтобы защитить своих друзей. Ему в одиночку придётся управляться с грандиознейшим поручением в истории Ёродзуи и постараться, чтобы оно не стало последним.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/82e44e5b70e224531f8f87afd42bff4e396b730a.jpg?1423531755",
      "https://shikimori.one/system/screenshots/original/6a66c5626358e127b8bad2974372f56a4bbd27bf.jpg?1423531756",
      "https://shikimori.one/system/screenshots/original/214dd01752612866a0e58a2a918bf88e8266a9cd.jpg?1423531756",
      "https://shikimori.one/system/screenshots/original/7ed48ae352348ad9d428e7c637e05406a28ca86c.jpg?1423531757"
    ],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 23,
    "title": "Монстр",
    "rating": 8.89,
    "rank": 23,
    "type": "Сериалы",
    "shikimori_id": "19",
    "img": "https://shikimori.one/system/animes/original/19.jpg?1711964464",
    "plot": "Действие происходит в Германии, в Дюссельдорфе. Неизвестный проникает в дом семьи Либертов, убивает родителей и простреливает их сыну голову, не трогает лишь его сестру, которая забывает всё от шока. В том же городе работает гениальный японский нейрохирург Кэндзо Тэмма, сумевший спасти жизнь мальчика.\nСпустя много лет раненого человека привозят в госпиталь. Спасши ему жизнь, Кэндзо узнаёт, что тот причастен к продолжающимся в Германии серийным убийствам. Вскоре и Кэндзо оказывается замешан в этом деле, когда у него на глазах тот самый спасённый ребёнок, выросший теперь в юношу, хладнокровно убивает спасённого человека.\nКэндзо предстоит очистить своё имя, узнать о спасённом им много лет назад ребёнке и переосмыслить саму ценность жизней, которые он спасает, работая хирургом.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/a559c5e89bc0aa0ab4955aa9b70079ea9bda4cfb.jpg?1709190732",
      "https://shikimori.one/system/screenshots/original/fd57972f18b1059765d7c9eeb947b13e7f6f9ad9.jpg?1709190733",
      "https://shikimori.one/system/screenshots/original/7aea0350dee4f6950aef086835bd78f6fcdbf476.jpg?1709190734",
      "https://shikimori.one/system/screenshots/original/cbc592c344dfeb2c58bfdc7fdb4b645fbcaead15.jpg?1709190734"
    ],
    "episodes": 74,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 24,
    "title": "Гинтама 8",
    "rating": 8.88,
    "rank": 24,
    "type": "Сериалы",
    "shikimori_id": "37491",
    "img": "https://shikimori.one/system/animes/original/37491.jpg?1711951341",
    "plot": "Пока [character=672]Гинтоки[/character] с друзьями пытается освободить Эдо от Армии освобождения, в космосе [character=1533]Котаро[/character] и [character=2945]Тацума[/character] вместе со своими верными союзниками пытаются объединить силы с [character=158097]Шиджаку[/character] и [character=7929]Принцем Хатой[/character]. Некоторые, уже знакомые нам ранее герои, тоже не останутся в стороне и присоединятся к сражению. Впереди ждёт ещё много трудностей и испытаний, но наши герои выложатся на полную катушку! Ведь на кону, без преувеличения, целая планета.\n[i]Вторая часть экранизации арки «Серебряная душа» из манги «[manga=44]Гинтама[/manga]».[/i]",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/998745ed4145c39b9a25b0ab81221bc66ab66bfb.jpg?1531088890",
      "https://shikimori.one/system/screenshots/original/ae3ded9b33327e72e25eca9b1c8aef94a5a77bae.jpg?1531088895",
      "https://shikimori.one/system/screenshots/original/bb2e8ba0935ef90119ae2eb4badf5f0252e1a2c7.jpg?1531088902",
      "https://shikimori.one/system/screenshots/original/c3cd04897a4c4aaf902e784d14490e28922fb43a.jpg?1531088907"
    ],
    "episodes": 14,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 25,
    "title": "Провожающая в последний путь Фрирен 2",
    "rating": 8.88,
    "rank": 25,
    "type": "Сериалы",
    "shikimori_id": "59978",
    "img": "https://shikimori.one/assets/globals/missing_original.jpg",
    "plot": "Эльфийская волшебница Фрирен, в прошлом одолевшая Короля демонов вместе со своими героическими товарищами [character=186854]Химмелем[/character], Хайтером и Айзеном, продолжает странствовать по миру. Пытаясь лучше понять чувства людей и исполнить последние желания ушедших друзей, Фрирен отправляется в путешествие со своей ученицей Ферн и воином Штарком. Её путь лежит на север, где леденящая опасность скрывается не только в ненастной погоде, но и в намерениях местных обитателей. По дороге к месту, которое, по преданию, является раем на земле, Фрирен и компании предстоит как встретиться с новыми друзьями, так и столкнуться лицом к лицу с могущественным злом, затаившимся в чаще непролазного леса.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/9c075644152d1352c45638794cbee1ba2c31bf92.jpg?1768579283",
      "https://shikimori.one/system/screenshots/original/c03cfde2001a2935f535765107c8b55789ebf5aa.jpg?1768579284",
      "https://shikimori.one/system/screenshots/original/d644d72b6cae80cac89e84f2c8f1769dad4b82ba.jpg?1768579284",
      "https://shikimori.one/system/screenshots/original/bd5f2375d90268dcff83b23b4002d3570a8e1646.jpg?1768579284"
    ],
    "episodes": 10,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 26,
    "title": "История финала 2",
    "rating": 8.86,
    "rank": 26,
    "type": "ONA",
    "shikimori_id": "35247",
    "img": "https://shikimori.one/system/animes/original/35247.jpg?1711968263",
    "plot": "После некоторых событий, показанных в «[anime=32268]Историях Коёми[/anime]», [character=22036]Арараги[/character] вновь встречается с [character=22052]Маёй Хатикудзи[/character], хотя, казалось бы, он уже и не думал, что когда-нибудь ещё увидит эту непоседливую и милую младшеклассницу. Но на этот раз роли поменялись местами — и именно [character=22052]Хатикудзи[/character] теперь придётся вытаскивать [character=22036]Коёми[/character] из передряги, в которую тот угодил. В конце концов, до выпуска из школы нужно ещё так много сделать! Например, окончательно разобраться в своих отношениях с [character=22037]Сэндзёгахарой[/character] и узнать тайну [character=90393]Оги Осино[/character]. Странности! Странности! И вновь странности! Наша история подходит к своему финалу.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/08b3d07af71f38dbd7dfa498b6c89fb6b2dfcebf.jpg?1502551817",
      "https://shikimori.one/system/screenshots/original/e130b8b1e0cb04dd479cf4eb576cc31be9582942.jpg?1502551818",
      "https://shikimori.one/system/screenshots/original/4016470438b677bc8fe9426466b509daff6e355b.jpg?1502551818",
      "https://shikimori.one/system/screenshots/original/15f9af3fe574917c6ecc3db6385cf804446ec050.jpg?1502551819"
    ],
    "episodes": 7,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 27,
    "title": "Атака титанов: Финал — Заключительная глава",
    "rating": 8.86,
    "rank": 27,
    "type": "ONA",
    "shikimori_id": "51535",
    "img": "https://shikimori.one/system/animes/original/51535.jpg?1716775753",
    "plot": "Противостояние титанов и людей достигло апогея. Однако теперь человечество вынуждено сражаться не только с огромными созданиями, но и друг с другом. Попытка захватить первенство в этой кровавой гонке влечёт за собой цепь событий, которые способны привести мир к гибели. В один миг враг может стать союзником, а товарищ по оружию превратиться в недруга, ведь в этом жестоком мире сила и коварство решают всё, а люди, чтобы выжить и защитить то, что им дорого, не гнушаются любыми методами. \n\nСумеет ли человечество выжить в этой борьбе?",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/57e7ed3ab8f60b2c5562827a1453aa8ef4ad7ba2.jpg?1677900868",
      "https://shikimori.one/system/screenshots/original/5b93b65897e1efb63fc6e3ca813d4055e9fe3659.jpg?1677900869",
      "https://shikimori.one/system/screenshots/original/1e6818d5fbebe37fc224cfec276e0a82258f4a06.jpg?1677900869",
      "https://shikimori.one/system/screenshots/original/0447ea96f098953e30cbf911e82d459c92799c92.jpg?1677900870"
    ],
    "episodes": 2,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 28,
    "title": "Монолог фармацевта",
    "rating": 8.85,
    "rank": 28,
    "type": "Сериалы",
    "shikimori_id": "54492",
    "img": "https://shikimori.one/system/animes/original/54492.jpg?1718587512",
    "plot": "Уже полгода прошло с того момента, как 17-летнюю Маомао похитили и заставили трудиться в императорском дворце обычной служанкой. Работа тяжёлая, но девушка решила не сдаваться, не унывать и честно вкалывать, пока её не отпустят на покой. Планы изменились, когда до Маомао дошли вести о том, что детей императора одолел серьёзный недуг. Девушка решила тайком попробовать разобраться и помочь, рассчитывая на свой опыт в фармацевтике, которой она занималась раньше, когда проживала в Квартале красных фонарей.\nНесмотря на то, что Маомао не хотела привлекать к себе внимания, её вмешательство и талант не остались незамеченными. Вскоре Маомао оказалась вхожа во внутренние покои и вступила в круг приближённых императора. Благодаря своим знаниям и эксцентричному характеру Маомао произведёт фурор во дворце!",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/c69350821cad77321b3363bdd5e1e9b0f77066c0.jpg?1697914448",
      "https://shikimori.one/system/screenshots/original/b4cb4370140e1e032c703ec363f90d5b4c643e76.jpg?1697914450",
      "https://shikimori.one/system/screenshots/original/5fb0f642f11a77f5bf6cde0f551e098efdd3dae4.jpg?1697914451",
      "https://shikimori.one/system/screenshots/original/6f8ae12f8e7fdf526b419530e4398e3d1a5e31d5.jpg?1697914451"
    ],
    "episodes": 24,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 29,
    "title": "Атака титанов: Заключительная глава — Последняя атака",
    "rating": 8.83,
    "rank": 29,
    "type": "Фильмы",
    "shikimori_id": "59571",
    "img": "https://shikimori.one/assets/globals/missing_original.jpg",
    "plot": "Война с титанами достигает своего апогея, когда Эрен Йегер [エレン・イェーガー] активирует силу «Девяти Титанов», высвобождая «Гул Земли», чтобы поглотить все народы за пределами острова Парадиз и освободить своих соратников от вечного угнетения. В это время Микаса [ミカサ・アッカーマン], Армин [アルミン・アルレルト], Леви [リヴァイ] и другие члены «Разведывательного корпуса» объединяются, чтобы остановить Эрена. Им предстоит преодолеть внутренние терзания и осознать, что их некогда близкий друг стал олицетворением разрушения.\n\n[i]Компиляция двух часовых эпизодов «[anime=51535]Атака титанов: Финал — Заключительная глава[/anime]».[/i]",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 30,
    "title": "Вайолет Эвергарден. Фильм",
    "rating": 8.83,
    "rank": 30,
    "type": "Фильмы",
    "shikimori_id": "37987",
    "img": "https://shikimori.one/system/animes/original/37987.jpg?1711979789",
    "plot": "[character=141354]Вайолет[/character] продолжает помогать другим людям писать письма, выражая все чувства клиентов на бумаге. Однако она всё никак не может забыть о майоре [character=152271]Гилберте Бугенвиллее[/character], который однажды дал ей возможность понять, что же значит «Я люблю тебя» и шанс начать жизнь с чистого листа.\nОднажды она встречает старшего брата [character=152271]Гилберта[/character] — [character=158277]Дитфрида[/character], который всё твердит ей позабыть о прошлом, связанным с майором, и идти навстречу будущему, но она, конечно же, понимает, что это крайне трудно смириться с потерей дорогого человека и подавить огромную боль в душе. Вскоре после этого поступает заказ от очередного клиента, а на складе почтового отделения оказывается письмо без адреса получателя. Достигнет ли [character=141354]Вайолет[/character] цели, и что ждёт девушку в дальнейшем?",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/6f2961f32a2732eff28381bf9c19e366fae6fac4.jpg?1621699622",
      "https://shikimori.one/system/screenshots/original/161564231d50673afdbcc53c05b69df1c76db7d4.jpg?1621699624",
      "https://shikimori.one/system/screenshots/original/feaecf5db7589f7b6814b0ec5f05c7f37a98a4e4.jpg?1621699625",
      "https://shikimori.one/system/screenshots/original/ba96263978c38661f42b848928133f30e517e7b0.jpg?1621699626"
    ],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 31,
    "title": "Твоё имя",
    "rating": 8.82,
    "rank": 31,
    "type": "Фильмы",
    "shikimori_id": "32281",
    "img": "https://shikimori.one/system/animes/original/32281.jpg?1711958651",
    "plot": "[character=137467]Мицуха Миямидзу[/character] — обычная девушка, уставшая от жизни в провинции. Её отец, мэр города, ведёт избирательную кампанию, а в семейном синтоистском храме ей приходится прилюдно исполнять древние ритуалы. И она мечтает перебраться из тесного провинциального мирка в большой город.\n[character=136805]Таки Татибана[/character] — увлекающийся архитектурой старшеклассник, вынужденный работать на полставки, чтобы обеспечивать свою жизнь в Токио. Изнурённый темпом большого города, [character=136805]Татибана[/character] мечтает о беззаботной жизни где-нибудь в горах.\nОднажды герои обнаруживают, что между ними существует странная и необъяснимая связь. Во сне они меняются телами и проживают жизни друг друга. Но однажды эта способность исчезает так же внезапно, как появилась. [character=136805]Таки[/character] решает во что бы то ни стало отыскать [character=137467]Мицуху[/character], но способны ли они узнать друг друга в реальной жизни?",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/f247a65b1cbe13700e17aaad8a759f51e23c4a3c.jpg?1501185246",
      "https://shikimori.one/system/screenshots/original/6adb4f1f174d7bf3efe3f1bf50053f61e2c988b8.jpg?1501185251",
      "https://shikimori.one/system/screenshots/original/4230584158643221bfed36bd9fa973b7022e5f66.jpg?1501185257",
      "https://shikimori.one/system/screenshots/original/684a287cac79d246c1ed6194f5335267cfe1870b.jpg?1501185262"
    ],
    "episodes": 1,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 32,
    "title": "Сага о Винланде 2",
    "rating": 8.82,
    "rank": 32,
    "type": "Сериалы",
    "shikimori_id": "49387",
    "img": "https://shikimori.one/system/animes/original/49387.jpg?1703475682",
    "plot": "Одиннадцатый век. Далёкая и холодная Исландия, окутанная морской гладью. Страна, для которой характерно не только обилие снега и северное сияние, завораживающее своей красой, но и место проживания великих воинов — викингов. Эти отважные люди, верующие в своих могущественных богов, были очень сильны, не боялись смерти, всегда стремились к познанию неизведанных земель и их завоеванию. [character=10138]Торфинн[/character] — сын великого [character=13021]Торса[/character], не был исключением. Слушая рассказы [character=19486]Лейфа Эрикссона[/character], старого друга его отца, о великих сражениях и путешествиях родителя, мальчик мечтал отправиться далеко за пределы родного дома. \n\nВскоре череда событий вынудила великого [character=13021]Торса[/character] оставить дом и вновь взять меч в руки. Юный [character=10138]Торфинн[/character] всеми силами пытался отправиться с отцом в столь желанное приключение, но в ответ слышал только твёрдое «нет». Не желая мириться с таким положением дел, мальчик тайно пробрался на драккар, и отец с опозданием обнаружил «безбилетника», пути назад уже не было. Так, юный Торфинн отправился в путь, и в скором времени корабль наткнулся на отряд [character=13020]Аскеладда[/character]. Мальчику с ужасом пришлось наблюдать за кровавым сражением с отрядом могучего [character=13020]Аскеладда[/character], но настоящим шоком стала потеря родного отца. Чудом выбравшись из жестокой бойни, [character=10138]Торфинн[/character] поклялся не только себе, но и своему врагу, отомстить за смерть [character=13021]Торса[/character]. \nТаким образом он примкнул к отряду [character=13020]Аскеладда[/character]. Не зря же говорят держать друзей близко, а врагов ещё ближе. Мальчик рос, становился всё крепче и постоянно пытался убить Аскеллада, но тщетно. А воин лишь манипулировал мальцом. Проходили годы, Торфинн стал замкнут, ожесточился, многое повидал и многих убил. Повстречал на своём пути разных людей: [character=17438]Кнуда[/character], претендующего на трон, [character=17440]Торкеля[/character], влюблённого в битвы, коварного [character=82537]Флоки[/character], преданного [character=82533]Рагнара[/character] и многих других, но цель его оставалась прежней — убить [character=13020]Аскеладда[/character].\n\nЧто же произойдёт, если Торфинн потеряет эту цель? Как повернётся судьба? Даст ли она ему новую цель, чтобы продолжать сражаться и путешествовать, или безвозвратно погубит?",
    "screenshots": [],
    "episodes": 24,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 33,
    "title": "Гинтама 7",
    "rating": 8.81,
    "rank": 33,
    "type": "Сериалы",
    "shikimori_id": "36838",
    "img": "https://shikimori.one/system/animes/original/36838.jpg?1711951349",
    "plot": "[i]Первая часть экранизации арки «Серебряная душа».[/i]\nДанная арка является прямым продолжением событий «[anime=34096]Гинтамы 5[/anime]» и знаменует собой начало последней битвы за возвращение земель самураев. Наших героев ждут невероятные и масштабные сражения, как в знакомом нам квартале Кабуки, так и, неожиданно, в космосе! Но и без абсурдного юмора, конечно же, не обойдётся! Смогут ли [character=672]Гинтоки[/character], [character=674]Кагура[/character], [character=673]Шинпачи[/character] и их союзники, оказавшиеся под перекрестным огнём внушительных вражеских сил, отбросить свои разногласия и объединиться, чтобы защитить то, что им дорого?",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/5caccb3b52d153147b2d0eae94f7395563691838.jpg?1515409016",
      "https://shikimori.one/system/screenshots/original/a92d2ef5609768663aa75db2b7382d6ca96a2bfb.jpg?1515409030",
      "https://shikimori.one/system/screenshots/original/5ba22f3f766614114d0f6d51ecac88ea2787f144.jpg?1515409043",
      "https://shikimori.one/system/screenshots/original/dd016296d549a685eb71aa1578d9704f22970e80.jpg?1515409051"
    ],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 34,
    "title": "Атака титанов: Финал",
    "rating": 8.79,
    "rank": 34,
    "type": "Сериалы",
    "shikimori_id": "40028",
    "img": "https://shikimori.one/system/animes/original/40028.jpg?1711973445",
    "plot": "Минуло три года с тех пор, как члены Разведкорпуса достигли моря. Четыре же года назад из дневников [character=62477]Гриши Йегера[/character] люди узнали, что всё это время противостояли не только титанам, но и другой нации.\n\nЗа морем, Марлия заканчивает длительную войну с войсками Средневосточного Альянса. Нация, всегда полагавшаяся на титанов в войне, осознаёт, что постепенно теряет первенство в военном противостоянии из-за наращивания другими государствами военной мощи и развития оружия, способного противостоять титанам. Чтобы удержать лидирующую позицию на мировой арене, Марлии необходима сила титана Основателя, сильнейшего из девяти изначальных титанов, способного контролировать других титанов. К несчастью для Марлии, эта сила всё ещё находится на острове Парадиз в руках Эрена [エレン・イェーガー]. Райнеру Брауну [ライナー・ブラウン], единственному воину, вернувшемуся после провальной операции по захвату Основателя, вновь предстоит столкнуться с бывшими товарищами.\n\nЭкранизация восьмой и девятой по счёту сюжетных арок одноимённой манги за авторством Хадзимэ Исаямы [諫山 創].",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/658cadd65c75c5b85863ee76fa1dd89be6c24cfb.jpg?1607283707",
      "https://shikimori.one/system/screenshots/original/40646c1878315ce8c7bdf5d69433b6743df9687d.jpg?1607283707",
      "https://shikimori.one/system/screenshots/original/ec04d5faa6cc76a35932a15597faa5c02f909646.jpg?1607283707",
      "https://shikimori.one/system/screenshots/original/cdba8e01b4560825be74ce2ca027bb91f22ea308.jpg?1607283708"
    ],
    "episodes": 16,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 35,
    "title": "Первый шаг",
    "rating": 8.78,
    "rank": 35,
    "type": "Сериалы",
    "shikimori_id": "263",
    "img": "https://shikimori.one/system/animes/original/263.jpg?1711952369",
    "plot": "Над Иппо Макуноучи [幕之内 一歩] издевались всю его жизнь: постоянно на побегушках, избиваемый одноклассниками, он мечтает измениться, но ему не хватает решимости. Однажды, в разгар очередного издевательства, Иппо спасает боксёр Мамору Такамура [鷹村 守] и приносит потерявшего от побоев сознание парня в спортивный зал. Очнувшись, тот поражён обстановкой в тренажерном зале, но не решается ступить и шагу. Такамура вешает фотографию одноклассника Макуноучи на боксёрскую грушу и заставляет Иппо ударить её. В конце концов юноша решается и просит Мамору научить его боксу, но последний, не веря в способности парня, поручает Иппо за неделю сделать невыполнимую задачу... Так и начинается восхождение Иппо к вершинам мира бокса.",
    "screenshots": [],
    "episodes": 75,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 36,
    "title": "Истории ран. Часть 3: Холодная кровь",
    "rating": 8.78,
    "rank": 36,
    "type": "Фильмы",
    "shikimori_id": "31758",
    "img": "https://shikimori.one/system/animes/original/31758.jpg?1711959009",
    "plot": "Заключительная часть из серии полнометражных фильмов «Истории ран».\n\nПосле боёв с тремя специалистами ([Драматург], [Эпизод], [Guillotinecutter]) Арараги [阿良々木 暦] получил все части тела Киссшот [忍野 忍] и готов их ей вернуть, чтобы снова стать человеком. Но остаётся много вопросов: как Киссшот сделает его человеком? Как трое специалистов победили Киссшот на пике её силы? Зачем на самом деле приехал Мэмэ Осино? И как в итоге продолжатся отношения Арараги и Ханэкавы [羽川 翼]?",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/b6c64f831cb8d01d9826d301a9281603b73ee8d3.jpg?1499804802",
      "https://shikimori.one/system/screenshots/original/e08c548f332882fc1dea25a24fe00223dc8d4458.jpg?1499804806",
      "https://shikimori.one/system/screenshots/original/12ba3c612169f80b55f4de49f304067188890a1a.jpg?1499804808",
      "https://shikimori.one/system/screenshots/original/e2d2c699e68b717099ee63f77981fa53a063edcb.jpg?1499804810"
    ],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 37,
    "title": "Моб Психо 100 2",
    "rating": 8.78,
    "rank": 37,
    "type": "Сериалы",
    "shikimori_id": "37510",
    "img": "https://shikimori.one/system/animes/original/37510.jpg?1711964224",
    "plot": "Казалось бы, иметь сверхспособности — мечта едва ли не каждого человека на Земле, однако главный герой этой истории такой ход мыслей не поддерживает. Ах да, знакомьтесь, это [character=109929]Шигэо Кагэяма[/character], он же Моб, всего лишь восьмиклассник, с детства обладающий экстрасенсорными способностями.\n\nС большой силой приходит большая ответственность, и [character=109929]Моб[/character], как никто другой, это понимает, ведь когда шкала его раздражённости достигнет отметки в 100, он впадает в неконтролируемое состояние, в котором способен разрушить всё, что находится поблизости. Но в мире, полном различных раздражителей, есть и любовь. У [character=109929]Шигэо[/character] её зовут [character=124789]Цубоми[/character]. И она, пожалуй, самая красивая девушка не только в классе, но и во всей школе. Пытаясь привлечь внимание одноклассницы, [character=109929]Моб[/character] постоянно использует различные трюки, которые скоро надоедают девушке из-за своей однообразности.\n\nЮный [character=109929]Моб[/character] примыкает к [character=109931]Аратаке Рэйгэну[/character], экстрасенсу-мошеннику, который пообещал добиться контроля над способностями. Теперь изгнание злых духов стало частью повседневной, монотонной жизни [character=109929]Моба[/character]. Однако вся та энергия, которую он скрывает, едва ли является верхушкой айсберга: если его огромный потенциал и безудержные эмоции будут высвобождены, произойдёт катастрофическое событие, способное сделать [character=109929]Шигэо Кагэяму[/character] неузнаваемо опасным экстрасенсом. Прогрессия к взрыву [character=109929]Моба[/character] возрастает, и попытка остановить его становится невыполнимой миссией.\n\nНовый сезон, а [character=109929]Моб[/character] вместе с наставником всё так же продолжают ловить злых духов и различного рода нечисть. В этот раз им предстоит встретиться с куда более опасными противниками. Не стоит забывать и о клубе по улучшению физического здоровья, в котором состоит [character=109929]Моб[/character] и который получит ещё больше экранного времени.",
    "screenshots": [],
    "episodes": 13,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 38,
    "title": "Сага о Винланде",
    "rating": 8.78,
    "rank": 38,
    "type": "Сериалы",
    "shikimori_id": "37521",
    "img": "https://shikimori.one/system/animes/original/37521.jpg?1711979804",
    "plot": "1002 год. Юный и энергичный Торфинн живёт на краю земли — в Исландии, мечтая об опасных приключениях и заморских странах. Эти мечты подогревает и друг его отца — [character=19486]Лейф[/character], известный путешественник и торговец, рассказывая детям о далёкой плодородной земле, называемой им Винландом. Мирная жизнь Торфинна и его семьи продолжалась бы и дальше, но всё меняется, когда его отец Торс спасает беглого раба.\nТем временем южнее разгорается война: англичане застают врасплох и убивают викингов в [url=http://ru.wikipedia.org/wiki/Нортумбрия]Нортумбрии[/url]. Её отголоски доходят и до Исландии: в море у деревни, где живёт Торфинн, появляется корабль йомсвикингов. Это дружина, которую возглавлял Торс до своего дезертирства в 987 году во время [url=http://ru.wikipedia.org/wiki/Битва при Хьёрунгаваге]битвы при Хьёрунгаваге[/url], и теперь они хотят, чтобы он вернулся на войну вновь. Под угрозой захвата и разорения мирной деревни викингами Торс отправляется в путешествие, чтобы защитить свою семью и деревню.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/20c6ac4efd9407e0a7961e44b05f916168dbadc3.jpg?1664385583",
      "https://shikimori.one/system/screenshots/original/9b763b8002406318bfc91c188929d5bea7d89f85.jpg?1664385583",
      "https://shikimori.one/system/screenshots/original/f596be5ed6970d47385b53aa7a149c95487a9092.jpg?1664385583",
      "https://shikimori.one/system/screenshots/original/6b3e10d783f5296fc732f64ffaedce1323fd05ad.jpg?1664385584"
    ],
    "episodes": 24,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 39,
    "title": "Волейбол!! 3",
    "rating": 8.77,
    "rank": 39,
    "type": "Сериалы",
    "shikimori_id": "32935",
    "img": "https://shikimori.one/system/animes/original/32935.jpg?1711952324",
    "plot": "Продолжение событий второго сезона аниме «[anime=28891]Волейбол!![/anime]».\nС трудом взятый реванш Карасуно над Аоба Дзёсай даёт команде последний шанс в нынешнем составе попасть на весенний турнир. Теперь перед героями стоит не менее сложная задача: им придётся завоевать победу в решающем матче. Играть Карасуно предстоит с сильнейшей командой — Академией Сираторидзава.\nСмогут ли Сёё Хината [日向 翔陽] и Тобио Кагэяма [影山 飛雄] одолеть самого сильного игрока префектуры Мияги — Вакатоси Усидзиму [牛島 若利], показав присущие Карасуно настрой и сплочённость? Пройдет ли команда старшей школы Карасуно на турнир? Об этом зрители и узнают в новом сезоне.",
    "screenshots": [],
    "episodes": 10,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 40,
    "title": "Атака титанов: Финал. Часть 2",
    "rating": 8.77,
    "rank": 40,
    "type": "Сериалы",
    "shikimori_id": "48583",
    "img": "https://shikimori.one/system/animes/original/48583.jpg?1708763764",
    "plot": "Многострадальный остров Парадиз вновь погружается в войну... После разрушительных действий [character=40882]Эрена Йегера[/character] марлийцы начинают вторжение на остров, и на их стороне без малого весь мир. Эрену вновь предстоит столкнуться в безжалостной схватке с марлийскими воинами, в том числе с [character=46484]Райнером Брауном[/character]. И это в разгар нового государственного переворота на Парадизе, учинённого радикальными сторонниками действий Эрена. И вновь в некогда родной для Эрена Сигансине разворачивается поистине судьбоносная битва, исход которой может изменить весь мир.\n\nСможет ли Эрен, отвернувшийся от друзей и товарищей, добиться цели и достичь подлинной свободы? Готов ли он уничтожить всех своих врагов? Какой выбор придётся в этой схватке сделать [character=40881]Микасе[/character], [character=46494]Армину[/character] и всем товарищам и друзьям Эрена? И каковы будут последствия для них самих и для всего мира? Эпическая драма достигнет своей кульминации.",
    "screenshots": [],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 41,
    "title": "Цикл историй: Второй сезон",
    "rating": 8.76,
    "rank": 41,
    "type": "Сериалы",
    "shikimori_id": "17074",
    "img": "https://shikimori.one/system/animes/original/17074.jpg?1711964445",
    "plot": "События второго сезона стартуют сразу после завершения сюжетной арки «Феникс Цукихи». Много чего произошло в жизни Арараги Коёми [Koyomi Araragi] за последние полгода. Его несколько раз разрывали на части, пили его кровь, бесстыдно коверкали имя и фамилию, обзывали лоликонщиком и извращенцем, угрожали канцелярскими принадлежностями... А ведь главные мучения и трудности только начинаются! \nНа личном фронте у Арараги сплошная неразбериха. [character=22037]Сэндзёгахара Хитаги[/character] начала вести себя, мягко говоря, странно. Любовные прозвища, многочисленные «смайлы» в SMS-сообщениях, беззаботное хихиканье. Парень в настоящей панике, ведь понятия не имеет, как на всё это реагировать. И куда, спрашивается, подевалось её холодное выражение лица и язвительные упрёки? Наслаждаться повседневной жизнью у нашего полувампира тоже особо не получается. Какое тут наслаждение, когда невыполненная домашняя работа на лето в конечном итоге оборачивается зомби-апокалипсисом? Мало того, его подруги вновь сталкиваются со сверхъестественным, а кто же им, интересно, должен помогать, рискуя собственной шкурой? Арараги-сэмпай, братик Коёми, Арараги-кун — да-да, ответ весьма предсказуем.\n\nНа сей раз экранизации подверглись сразу пять из шести новелл ранобэ «[ranobe=23751]Цикл историй: Второй сезон[/ranobe]»: Shiro, Kabukimonogatari, Otorimonogatari, Onimonogatari & Koimonogatari.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/a69920ddf5dc4e7b8bbaa0bf2ef3a7c1a45331b3.jpg?1676553800",
      "https://shikimori.one/system/screenshots/original/d61863b6cb2426cab93956072139cd577a79a739.jpg?1676553800",
      "https://shikimori.one/system/screenshots/original/7cf333d42ed65ba01ad4d190317a1820cec20696.jpg?1676553801",
      "https://shikimori.one/system/screenshots/original/54ac22ed635d305de59daa7a06264e2cea8a2872.jpg?1676553801"
    ],
    "episodes": 26,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 42,
    "title": "Ковбой Бибоп",
    "rating": 8.75,
    "rank": 42,
    "type": "Сериалы",
    "shikimori_id": "1",
    "img": "https://shikimori.one/system/animes/original/1.jpg?1711946754",
    "plot": "2071 год. Человечество колонизировало всю Солнечную Систему, основав колонии от Венеры до Юпитера. Но десятилетия тому назад из-за техногенной катастрофы была уничтожена Луна. Последствия оказались катастрофическими: непрерывные метеоритные дожди сделали жизнь на поверхности Земли невозможной, а в первые недели после катастрофы погибло 4,7 миллиарда человек. Большая часть выживших перебралась в колонии на другие планеты.\nСо временем по всей Солнечной Системе разрослись и набрали силу преступные синдикаты, для борьбы с которыми правительство возродило древнюю практику охоты за головами. Отныне охотники за головами разъезжают по всей Солнечной Системе в поисках целей.\nСпайк Шпигель [スパイク・スピーゲル] и Джет Блэк [ジェット・ブラック] — охотники. Волею судьбы они оказались на космическом корабле «Bebop 268710». Путешествуя вместе, они подбирают Фэй Валентайн [フェイ・バレンタイン] — очаровательную картёжницу с невероятно огромным долгом, Радикал Эдварда [エドワード・ウォン・ハウ・ペペル・チブルスキー4世] — компьютерного гения и генетически модифицированную собаку Эйн [アイン].\nНа борту «Bebop» судьба сводит четырёх человек и одну собаку, и так начинаются их совместные приключения...",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/b1276021bfb0fc514c35bb106361dd2bcb20f967.jpg?1521803518",
      "https://shikimori.one/system/screenshots/original/210f496943c6aa7c0e8d875f3d1dae235ac009b2.jpg?1521803527",
      "https://shikimori.one/system/screenshots/original/007b4cfc349afc0bc516479ed6a27ffe0422c3e7.jpg?1521803540",
      "https://shikimori.one/system/screenshots/original/625915f43102eadd283f1a5f796025c9c2ef1964.jpg?1521803552"
    ],
    "episodes": 26,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 43,
    "title": "Первородный грех Такопи",
    "rating": 8.75,
    "rank": 43,
    "type": "ONA",
    "shikimori_id": "60489",
    "img": "https://shikimori.one/assets/globals/missing_original.jpg",
    "plot": "Инопланетянин по имени [character=208263 такопи] прилетает на Землю с миссией: «делиться счастьем и дарить окружающим радость». Но его чистое стремление сталкивается с суровой реальностью, полной жестокости и одиночества. Каждая попытка [character=208263 такопи] обрадовать [character=208070]Сидзуке Кудзэ[/character] перерастает в новые несчастья. Простая игрушка или невинный совет открывают сотни путей прямиком в бездну. [character=208263 такопи] искренне верит, что способен сделать людей счастливыми, но что делать, если чужая боль слишком глубока, а каждое вмешательство лишь портит и без того тяжёлую жизнь?",
    "screenshots": [],
    "episodes": 6,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 44,
    "title": "Дневник разных стран",
    "rating": 8.74,
    "rank": 44,
    "type": "Сериалы",
    "shikimori_id": "58788",
    "img": "https://shikimori.one/system/animes/original/58788.jpg?1714751173",
    "plot": "Тридцатипятилетняя писательница Макио Кодай [高代 槙生] никогда не поддерживала хороших отношений со своей старшей сестрой Минори и осталась равнодушной, услышав новость об автокатастрофе, в которой погибли Минори и её муж. Во время процедуры опознания тел Макио встречает свою пятнадцатилетнюю племянницу Асу Такуми [田汲 朝], которую не видела уже несколько лет. Аса с трудом переживает смерть родителей, и Макио, пытаясь утешить девочку, предлагает ей начать вести дневник, чтобы справиться с потерей. Вскоре, узнав, что другие родственники не желают брать Асу на попечение, писательница решает сама стать её опекуном, несмотря на свою неопытность. Теперь им предстоит научиться жить вместе, шаг за шагом разбираясь в себе и своих давних обидах.",
    "screenshots": [],
    "episodes": 13,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 45,
    "title": "Одинокий рокер!",
    "rating": 8.73,
    "rank": 45,
    "type": "Сериалы",
    "shikimori_id": "47917",
    "img": "https://shikimori.one/system/animes/original/47917.jpg?1711944241",
    "plot": "Мечтающая в будущем играть в музыкальной группе, старшеклассница Хитори Гото взялась за уроки игры на гитаре. Ничего не мешает исполнению её мечты, кроме самой Хитори, которая настолько застенчива и зажата, что не смогла завести ни одного друга, чего уж говорить о создании собственного музыкального коллектива. Сама судьба решает помочь Хитори, и та, на своё счастье, встречает [character=206277]Нидзику Идзити[/character], которая играет на ударных в собственной группе и как раз подыскивает гитаристку!",
    "screenshots": [],
    "episodes": 12,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 46,
    "title": "Звучи, эуфониум! 3",
    "rating": 8.73,
    "rank": 46,
    "type": "Сериалы",
    "shikimori_id": "39894",
    "img": "https://shikimori.one/system/animes/original/39894.jpg?1718615729",
    "plot": "Репетиции, тренировочные лагеря, соревнования, фестивали, конкурсы. Каждый день был таким насыщенным, что [character=120015]Кумико Омаэ[/character] не заметила, как перешла на свой последний год обучения в старшей школе. Поколение, возглавляемое [character=127237]Юко Ёсикавой[/character] и [character=127235]Нацуки Накагавой[/character], выпустилось, и теперь уже на плечи [character=120015]Кумико[/character], ставшей новым президентом клуба, легла ответственность привести школьный оркестр старшей Китаудзи на национальный чемпионат. Для этого им нужно вновь получить золото на региональном соревновании, но в этот раз не «утешительное», а то самое, дарующее путёвку на встречу с ещё множеством потрясающих оркестров со всей страны.\nА вдобавок ко всему... весна ー пора новых встреч, и на третьем учебном году [character=120015]Кумико[/character] ожидает неожиданное знакомство.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/344ef381fa7a0d6efbfc4d8c3d3def4aaa447c5c.jpg?1712488744",
      "https://shikimori.one/system/screenshots/original/e797727883d8c8946934001d5d31dd45943f73e3.jpg?1712488745",
      "https://shikimori.one/system/screenshots/original/b1e0925b98247657f2d24db5e8b28ffcd45ee87a.jpg?1712488746",
      "https://shikimori.one/system/screenshots/original/ae61d44ade47e34c12f385b02e481bcd118276bb.jpg?1712488747"
    ],
    "episodes": 13,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 47,
    "title": "Восемьдесят шесть. Часть 2",
    "rating": 8.72,
    "rank": 47,
    "type": "Сериалы",
    "shikimori_id": "48569",
    "img": "https://shikimori.one/system/animes/original/48569.jpg?1708713760",
    "plot": "Остатки отряда «Остриё копья» во главе с [character=150823]Синъэем Нодзэном[/character] были отправлены в последнюю специальную миссию, цель которой — продвигаться вглубь «Легиона», пока команда не будет уничтожена. И когда конец был уже близок, их неожиданно спасли от неминуемой смерти военные Федеративной Республики Гияд. \nВ новой стране у измождённых воинов появляется возможность забыть о войне, жить счастливой жизнью и быть не «свинками», а людьми. Но что-то не даёт им покоя, словно эта новая жизнь чужая и совсем не та, какую они хотели.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/97ac0bfed4575647e2cd8591f9c06e03e4edcff8.jpg?1633198506",
      "https://shikimori.one/system/screenshots/original/7d797b892d4d26a2fb2aeb78db9c572015efaf17.jpg?1633198507",
      "https://shikimori.one/system/screenshots/original/4b32411376390221de90af97a88da6c62b3547cd.jpg?1633198507",
      "https://shikimori.one/system/screenshots/original/6cc4427d86325aea13cebe70913559af03f5fc35.jpg?1633198508"
    ],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 48,
    "title": "Моб Психо 100 3",
    "rating": 8.72,
    "rank": 48,
    "type": "Сериалы",
    "shikimori_id": "50172",
    "img": "https://shikimori.one/system/animes/original/50172.jpg?1711941849",
    "plot": "Много всего случилось и всякое произошло, но всё это не слишком повлияло на обычную жизнь [character=109929]Шигэо Кагэямы[/character]. Он, как и раньше, продолжает посещать среднюю школу «Соль», всё также подрабатывает у самопровозглашённого экстрасенса [character=109931]Аратаки Рэйгэна[/character], по-прежнему испытывает трудности в общении и осваивании социальных навыков. Как обычно, зачастую несправедливая и суровая реальность испытывает терпение [character=109929]Моба[/character] на прочность, подкидывая разные сложные ситуации и непростые задачки о взаимоотношениях с окружающими.\n\nПускай на поверхности ничего кардинально не изменилось, но изменился сам [character=109929]Моб[/character]: пережитый опыт заставил его повзрослеть, научиться самому брать ответственность за себя, свои поступки и свои экстрасенсорные силы. Жизнь, конечно, заставляет, но готов ли к этим переменам сам [character=109929]Шигэо[/character]?",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/e9d2f5083be49cef3862a536d61d7f8fc18409de.jpg?1664987421",
      "https://shikimori.one/system/screenshots/original/b11c0cdd36508c93e208641e9819220439205220.jpg?1664987421",
      "https://shikimori.one/system/screenshots/original/ff27b124cafc33ba9a47c5e77afe99cc048a3e69.jpg?1664987421",
      "https://shikimori.one/system/screenshots/original/90306042c70cf8acba7c7efb56ba943b2e0d20c0.jpg?1664987422"
    ],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 49,
    "title": "Госпожа Кагуя: в любви как на войне — Первый поцелуй никогда не заканчивается",
    "rating": 8.72,
    "rank": 49,
    "type": "Фильмы",
    "shikimori_id": "52198",
    "img": "https://shikimori.one/system/animes/original/52198.jpg?1709520163",
    "plot": "После долгожданного поцелуя [character=136685]Миюки Сироганэ[/character] и [character=136359]Кагуи Синомии[/character] на праздновании школьного фестиваля культуры могло показаться, что затянувшаяся любовная битва наконец подошла к своему логичному завершению. Однако, как это и бывает в реальной жизни, счастливый конец не приходит так внезапно!\nУже у себя дома [character=136359]Кагуя[/character] вспоминает прошедший вечер и с ужасом понимает, что сильно оплошала, и теряет своё самообладание. Неожиданно для уже облегчившего душу [character=136685]Миюки[/character] его возлюбленная холодеет и почти совсем закрывается от него. Теперь-то грядёт судьбоносный переломный момент, в ходе которого пара должна будет не только полностью изменить своё отношение к самим себе, но и закончить начатое и признаться в своих чувствах друг другу правильным способом.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/557e96ac3dd10560c1e35ebbfdd16d0e2513e8d5.jpg?1680317916",
      "https://shikimori.one/system/screenshots/original/fdf5a6111be3cf17914f4a3a00bd178c26b83add.jpg?1680317917",
      "https://shikimori.one/system/screenshots/original/54180a562029fb029b975b13426a35b2f829076d.jpg?1680317918",
      "https://shikimori.one/system/screenshots/original/946e6aab62d2da0c151223518d9a995e428f1727.jpg?1680317918"
    ],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 50,
    "title": "Мастер муси: Следующая глава 2",
    "rating": 8.72,
    "rank": 50,
    "type": "Сериалы",
    "shikimori_id": "24701",
    "img": "https://shikimori.one/system/animes/original/24701.jpg?1711965143",
    "plot": "Есть такая маленькая страна — Япония. Пока ��о всем мире идёт индустриализация, здесь всё так же остаются места, куда не ступала нога простого человека. Гора, хозяином которой является черепаха; пещера, настолько тёмная, что ее тьма поглотит солнце... Страшные бедствия и болезни, виновниками которых являются муси — создания, олицетворяющие жизнь и смерть. Гинко [ギンコ] — главный герой этой истории — один из немногих, кто видит этих мистических существ и может помочь избавиться от их влияния и спасти жизни множеству людей. Прикрыв белыми как снег волосами левый глаз, закурив сигарету, Гинко отправится в путь и поведает эту замечательную историю...",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/f773a5f2c204ca9a28a411bd15dddec392a7bc76.jpg?1449877866",
      "https://shikimori.one/system/screenshots/original/0508af8dc8338454daaf7470d725f6057d3d09eb.jpg?1449877880",
      "https://shikimori.one/system/screenshots/original/325b7a42a96df5ef53a1859d370e0c895e1a6a0e.jpg?1449877893",
      "https://shikimori.one/system/screenshots/original/0275e9dcd5ab822ddaa6b8b7991c4205835abeb7.jpg?1449877902"
    ],
    "episodes": 10,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 51,
    "title": "Ателье колдовских колпаков",
    "rating": 8.72,
    "rank": 51,
    "type": "Сериалы",
    "shikimori_id": "51553",
    "img": "https://shikimori.one/system/animes/original/51553.jpg?1714590953",
    "plot": "«Только волшебники знают, как использовать магию. Простой люд может быть лишь благословлён ею. Волшебниками им не стать», — слова матери [character=143981]Коко[/character], малышки, таящей в себе бесконечную любовь к магии, и это несмотря на то, что маги скрывают способности от посторонних взоров. Но вот незадача: девочка не владеет способностями к магии. Казалось, что грёзам о колдовском колпаке не сбыться, однако жизнь распорядилась иначе, столкнув лицом к лицу юную дочь портнихи и настоящего мага — [character=143982]Кифри[/character]. Находясь на седьмом небе от счастья, в порыве чувств Коко рассказала мужчине о давнем приобретении — книге с картинками и кистью с чернилами, купленными на дворцовой ярмарке, — чем и привлекла внимание. Позже маг уходит, но мысли его терзает эта странная книга, и тот возвращается в самый последний момент — момент, когда [character=143981]Коко[/character] использовала [url=http://ru.wikipedia.org/wiki/Глиф]глифы[/url] из своей книги, совершив нечто ужасное. \n\n[character=143982]Кифри[/character], пожалев [character=143981]Коко[/character], взял её в ученицы. Теперь девочке предстоит подружиться с другими ведьмами и научиться таинству магии во имя спасения матери. Учитель же, благодаря непутёвой воспитаннице, нападёт на след группировки «Шляпа с полями» — сборища еретиков и экспериментаторов с запретной магией, которые распространяют опасные артефакты среди народа.",
    "screenshots": [],
    "episodes": 13,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 52,
    "title": "О движении Земли",
    "rating": 8.71,
    "rank": 52,
    "type": "Сериалы",
    "shikimori_id": "52215",
    "img": "https://shikimori.one/system/animes/original/52215.jpg?1714590956",
    "plot": "Эпоха Ренессанса, время, когда в Европе произошёл скачок в развитии искусства и науки. Вместе с тем усилились гонения на тех, чьи взгляды не соответствовали церковным догмам. Молодой и талантливый [character=209983 рафал], готовящийся посвятить себя теологии — ведущей науке своего времени, внезапно сталкивается с миром, о котором раньше не имел представления. После встречи с таинственным незнакомцем, он увлёкся идеями, противоречащими церковной доктрине. Исследуя новые теории о структуре солнечной системы, Рафал открывает для себя истину, которая одновременно является и окном в будущее и угрозой для его жизни. Заниматься свободной наукой, когда любое отклонение от учений церкви может привести к обвинению в ереси и жестокой расправе — это непростой выбор. Юному учёному предстоит работать в условиях постоянной опасности, рискуя всем ради научного прогресса и благополучия будущих поколений.",
    "screenshots": [],
    "episodes": 25,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 53,
    "title": "Код Гиас: Восставший Лелуш",
    "rating": 8.71,
    "rank": 53,
    "type": "Сериалы",
    "shikimori_id": "1575",
    "img": "https://shikimori.one/system/animes/original/1575.jpg?1711946588",
    "plot": "История рассказывает о недалёком будущем, когда Британской Империей было захвачено полмира. Японии в этом варианте не существует — она завоёвана Британией годы назад и переименована в «11-й сектор», а сами японцы уничижительно зовутся «одиннадцатыми».\nГлавный герой истории, [character=417]Лелуш Ламперуж[/character], опальный отпрыск императорского рода, сослан с сестрой в 11-й сектор, где учится в академии для местных аристократов. Волею случая он оказывается втянут в атаку японских повстанцев на Британию. Империя же, не терпящая неповиновения, немедленно высылает карательные отряды солдат, уничтожающие всё на своём пути. Спасаясь от имперцев, [character=417]Лелуш[/character] пересекается с таинственной зеленоволосой девушкой, называющей себя [character=1111]С.С[/character]. Оказавшись загнанной в угол и окружённой солдатами, [character=1111]С.С.[/character] передаёт [character=417]Лелушу[/character] Великий дар, называемый гиасом...\nТеперь Империя заплатит за всё!",
    "screenshots": [],
    "episodes": 25,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 54,
    "title": "Моя геройская академия: Финал",
    "rating": 8.71,
    "rank": 54,
    "type": "Сериалы",
    "shikimori_id": "60098",
    "img": "https://shikimori.one/assets/globals/missing_original.jpg",
    "plot": "Начинается последняя и самая отчаянная битва за будущее всего общества героев. После побега [character=122103]Томуры Сигараки[/character] и падения общества героев Япония погрузилась в хаос.[character=122103]Сигараки[/character], окончательно ставший совершенным сосудом для [character=141358]Все За Одного[/character], теперь обладает невероятной силой, способной уничтожить всё на своём пути. Против него выходят все оставшиеся герои, включая студентов академии «Юэй», которым приходится быстро взрослеть в условиях настоящей войны.\n\nВ центре этого апокалипсиса оказывается [character=117909]Идзуку Мидория[/character], вынужденный использовать все скрытые возможности своей причуды «Один за всех», чтобы остановить надвигающуюся угрозу. Ему предстоит не только сразиться с [character=122103]Сигараки[/character], но и попытаться достучаться до того человека, который когда-то скрывался внутри монстра. Эта битва станет проверкой не только его силы, но и самой идеи героизма, за которую он всегда боролся. Судьба общества героев висит на волоске, и цена, которую придётся заплатить за мир, может оказаться слишком высока.",
    "screenshots": [],
    "episodes": 11,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 55,
    "title": "Опасность в моём сердце 2",
    "rating": 8.7,
    "rank": 55,
    "type": "Сериалы",
    "shikimori_id": "55690",
    "img": "https://shikimori.one/system/animes/original/55690.jpg?1710725385",
    "plot": "Ещё недавно интроверт [character=185229]Кётаро Итикава[/character] воображал, как избавляется от надоедливых одноклассников, а сейчас он дружит с первой красавицей школы [character=182379]Анной Ямадой[/character]. За спиной у ребят остались зимние каникулы, полные приключений и неловких встреч. За прошедшее время изменились не только отношения между ребятами, изменились и они сами. [character=185229]Кётаро[/character] начал постигать себя в эмоциональном плане, а  [character=182379]Ямада[/character] стала браться  за более сложные фотосессии. Им предстоит пережить много новых событий и провести вместе больше времени, как в школе, так и вне её. Их дружба всё укрепляется, они становятся ближе друг другу, и скоро им придётся решать, хотят они остаться друзьями или всё же стать парой.",
    "screenshots": [],
    "episodes": 13,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 56,
    "title": "Первый слэм-данк",
    "rating": 8.71,
    "rank": 56,
    "type": "Фильмы",
    "shikimori_id": "45649",
    "img": "https://shikimori.one/system/animes/original/45649.jpg?1711977255",
    "plot": "Говорят, что плохие парни привлекают девушек, однако хулиган [character=310]Ханамичи Сакураги[/character] явно к таковым не относится. Повстречав [character=8485]Харуко[/character], первую девушку, которая проявила к нему хотя бы минимальный интерес, он соврал о том, что любит баскетбол. А когда попытался доказать свои умения — сел в лужу. Тем не менее, пораженная невероятной атлетичностью парня, [character=8485]Харуко[/character] пригласила его вступить в школьную баскетбольную команду.",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 57,
    "title": "Блич: Тысячелетняя кровавая война — Прощание",
    "rating": 8.7,
    "rank": 57,
    "type": "Сериалы",
    "shikimori_id": "53998",
    "img": "https://shikimori.one/system/animes/original/53998.jpg?1710729258",
    "plot": "Пока Сообщество душ, понесшее колоссальные потери и разрушения в битве с «Ванденрейхом», пытается держаться на плаву, [character=68537]Яхве[/character] избирает преемника, чем вызывает недовольство некоторых штернриттеров. В это же время [character=5]Ичиго Куросаки[/character], который узнал о своём истинном происхождении и отправился во владения Короля душ, восстанавливает силы и старается стать сильнее для борьбы с неприятелем. \n\nВпереди назревает очередная битва, которая сулит новые потери, но сумеет ли [character=5]Ичиго[/character] набраться сил, чтобы противостоять врагу?",
    "screenshots": [],
    "episodes": 13,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 58,
    "title": "Магическая битва 2",
    "rating": 8.7,
    "rank": 58,
    "type": "Сериалы",
    "shikimori_id": "51009",
    "img": "https://shikimori.one/system/animes/original/51009.jpg?1711334733",
    "plot": "Тридцать первое октября 2018 года, район Сибуя. Множество простых людей заключены под магической завесой и взяты в заложники союзом проклятых духов под началом [character=164481]Махито[/character] и [character=175542]Гэто[/character]. Всех гражданских обещают выпустить невредимыми только с одним условием: сильнейший маг современности [character=164471]Сатору Годзё[/character] должен явиться в Сибую и принять бой.\nУченики и преподаватели Магического техникума разбиваются на группы, чтобы быстрее эвакуировать мирных жителей перед началом масштабной битвы. Вместе с тем, сам Сатору Годзё прибывает на место действия и отправляется прямиком к станции. События развиваются согласно плану Сугуру Гэто.",
    "screenshots": [],
    "episodes": 23,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 59,
    "title": "Агент времени",
    "rating": 8.7,
    "rank": 59,
    "type": "ONA",
    "shikimori_id": "44074",
    "img": "https://shikimori.one/system/animes/original/44074.jpg?1711973126",
    "plot": "«Во-первых, у тебя лишь двенадцать часов. Во-вторых, делай, как я говорю, и не вздумай ничего менять. В-третьих, что бы ни было в прошлом, будущее тебя не касается», — именно эти слова [character=196253]Лу Гуан[/character] всегда говорит [character=196252]Чэн Сяоши[/character] перед очередной миссией, порученной небольшой фотостудии Time Photo Studio‎. Эта студия, помимо обычной работы с фотографиями, может предоставить особую услугу: с помощью фотографии [character=196252]Чэн Сяоши[/character] может вернуться в тот момент, когда снимок был сделан, и пробыть там до двенадцати часов. Однако существует одно железное правило: «Ни в коем случае нельзя менять исход событий», за выполнением которого тщательно следит [character=196253]Лу Гуан[/character].",
    "screenshots": [],
    "episodes": 11,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 60,
    "title": "Бродяга Кэнсин: Воспоминания",
    "rating": 8.69,
    "rank": 60,
    "type": "ONA",
    "shikimori_id": "44",
    "img": "https://shikimori.one/system/animes/original/44.jpg?1711971309",
    "plot": "Незадолго до [[Реставрации Мэйдзи]] Сэйдзюро Хико [比古 清十郎], отшельник и мастер клинка, встречает бандитов, вырезающих караван работорговцев. В надежде спасти хоть кого-то, Хико убивает бандитов, однако не успевает вовремя и застаёт в живых лишь одного маленького мальчика. Хико уходит, оставив ребёнка с напутствием отправляться в ближайшую деревню и там просить крестьян о приюте.\nСпустя несколько дней Хико возвращается назад удостовериться, что мальчик поступил так, как ему было сказано. Однако, к своему удивлению, находит ребёнка неподалеку, где тот хоронит убитых: бывших рабов, бандитов и даже работорговцев. Видя потенциал в этом дитя, Хико усыновляет его, дав мальчику имя Кэнсин [緋村 剣心], что означает «сердце меча».\nОтныне Кэнсин — ученик Сэйдзюро Хико, последнего человека в Японии, владеющего стилем боя Хитэн Мицуруги.",
    "screenshots": [],
    "episodes": 4,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 61,
    "title": "Мастер муси: Следующая глава",
    "rating": 8.69,
    "rank": 61,
    "type": "Сериалы",
    "shikimori_id": "21939",
    "img": "https://shikimori.one/system/animes/original/21939.jpg?1711965079",
    "plot": "Давным-давно на земле были только [i]они[/i]. Возможно, [i]они[/i] существовали ещё до зарождения самой жизни, хотя [i]они[/i] — ни на что не похожие — и есть жизнь. Испокон веков люди почитали и боялись [i]их[/i] и называли не иначе как «муси». Они могут влиять на жизнь, а могут просто оставаться в стороне. Чтобы избежать их пагубного воздействия, появились люди, называемые «мусиси», — мастера муси.\nЭта история об одном из таких мастеров по имени [character=425]Гинко[/character], который, однако, сильно отличается от остальных. Спокойный и малоэмоциональный, он следует своим собственным воззрениям и старается не воздействовать на мир муси. Странствуя, он пытается найти ответы на вопросы, гложущие его с детства. Но удастся ли ему это?",
    "screenshots": [],
    "episodes": 10,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 62,
    "title": "Клинок, рассекающий демонов: Квартал красных фонарей",
    "rating": 8.69,
    "rank": 62,
    "type": "Сериалы",
    "shikimori_id": "47778",
    "img": "https://shikimori.one/system/animes/original/47778.jpg?1708747320",
    "plot": "Продолжение приключений [character=146156 тандзиро-камадо]Тандзиро[/character] и его неизменных спутников: сестры-демона [character=146157 нэдзуко-камадо]Нэдзуко[/character], вечно ноющего [character=146158 дзэнъицу-агацума]Дзэнъицу[/character] и сорвиголовы [character=146159 иносукэ-хасибира]Иносукэ[/character]. На этот раз «столп звука» [character=151144 тэнгэн-удзуй] берёт их с собой на задание в Квартал красных фонарей, где в последнее время стали пропадать люди. Причиной этого скорее всего служат демоны. Так кто же стоит за всеми исчезновениями, и смогут ли наши герои с ним справиться?",
    "screenshots": [],
    "episodes": 11,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 63,
    "title": "Девушки-пони: Серая Золушка. Часть 2",
    "rating": 8.69,
    "rank": 63,
    "type": "Сериалы",
    "shikimori_id": "61930",
    "img": "https://shikimori.one/assets/globals/missing_original.jpg",
    "plot": "Продолжение истории девушек‑пони, в которой Серая Золушка сталкивается с миром большого спорта.\n[character=162150 огури-кэп] — провинциальная выскочка, чья невероятная манера бега уже перевернула японскую скаковую сцену и привлекла внимание сильнейших девушек-пони старшего поколения. Теперь на её пути появятся зарубежные звёзды ипподрома, прибывшие в Японию, чтобы завоевать Japan Cup на ключевых осенне‑зимних стартах. Для [character=162150]Огури[/character] каждое новое дерби превращается в испытание не только скорости и выносливости, но и характера: ей важно научиться принимать поражения, менять тактику, не потеряв ту самую дерзкую страсть к бегу, которая когда‑то вывела Серую Золушку с тихих провинциальных дорожек на вершину национальной сцены.\nСумеет ли [character=162150 огури-кэп] не сломаться под грузом славы, выдержать натиск [character=161405 тамамо-кросс] и новых международных звёзд, снова превратив стартовые ворота в шаг на пути к становлению легендой?",
    "screenshots": [],
    "episodes": 10,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 64,
    "title": "Крутой учитель Онидзука",
    "rating": 8.68,
    "rank": 64,
    "type": "Сериалы",
    "shikimori_id": "245",
    "img": "https://shikimori.one/system/animes/original/245.jpg?1711951814",
    "plot": "Бывший член нагоняющей на горожан ужас банды «Онибаку», байкер Эйкити Онидзука [鬼塚 英吉], ставит перед собой цель стать самым крутым школьным учителем. Почему учителем? Да просто в школах полно сексуальных старшеклассниц! Ну... почти бывший член банды...\nОднако тирания школьной администрации и целый класс малолетних правонарушителей стоят между Онидзукой и его целью. И любыми средствами — неважно, законными или нет, — они хотят избавиться от нового учителя. Впрочем, самого Онидзуку это не сильно беспокоит — его способы воспитания учеников вы не найдёте ни в одном учебном пособии, законность и дозволенность методов его заботит ровно настолько же, насколько его заботит разница в возрасте между ним и вожделенными старшеклассницами.",
    "screenshots": [],
    "episodes": 43,
    "voiceovers": [
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 65,
    "title": "Вайолет Эвергарден",
    "rating": 8.69,
    "rank": 65,
    "type": "Сериалы",
    "shikimori_id": "33352",
    "img": "https://shikimori.one/system/animes/original/33352.jpg?1711979744",
    "plot": "Вайолет Эвергарден, молодая девушка, чья жизнь — не что иное, как война, послушно служит под командованием майора Гилберта Бугенвиллеи [ギルベルト・ブーゲンビリア] из армии Ляйденшафтлиха.\nПосле серьёзных увечий, оставивших её без рук и разделивших с Гилбертом, она покинула поле боя и была взята под опеку бывшим командующим армии Клаудией Ходжинсом [クラウディア・ホッジンズ], который после окончания войны основал почтовую службу «C-H» в крупном портовом городе Ляйден. Эта компания осуществляет регулярные почтовые пересылки и предоставляет услуги «автозапоминающих кукол» — талантливых девушек, в чьи обязанности входит написание писем и корректировка текста для большей части неграмотного населения города.\nВ конечном итоге, тронутая работой автозапоминающих кукол, Вайолет решает присоединиться к команде, чтобы узнать судьбу майора Гилберта и смысл последних слов, сказанных им: «Я люблю тебя».",
    "screenshots": [],
    "episodes": 13,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 66,
    "title": "Быть героем Икс",
    "rating": 8.68,
    "rank": 66,
    "type": "ONA",
    "shikimori_id": "53447",
    "img": "https://shikimori.one/system/animes/original/53447.jpg?1713562770",
    "plot": "Героями не рождаются, героями становятся! Эти слова вдвойне справедливы для альтернативного мира, в котором героем может стать каждый, а, точнее, любой человек, заслуживший достаточное количество людского доверия. Как узнать, что ты способен на подвиги и заработал достаточное количество уважения? Очень просто. Разнообразные данные, касающиеся общественного мнения, рейтинги популярности и прочие важные сведения по конкретному индивидууму автоматически собираются, анализируются и отображаются на специальном девайсе, который можно носить на запястье.\nСтоит только набрать нужное количество баллов доверия, и самый обычный человек может обрести суперспособности и перевоплотиться в супергероя, который спасёт мир!",
    "screenshots": [],
    "episodes": 24,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 67,
    "title": "Первый шаг: Новый вызов",
    "rating": 8.67,
    "rank": 67,
    "type": "Сериалы",
    "shikimori_id": "5258",
    "img": "https://shikimori.one/system/animes/original/5258.jpg?1711952414",
    "plot": "Иппо Макуноучи [幕之内 一歩] продолжает заниматься боксом, надеясь ещё раз сразиться со своим кумиром Ичиро Миятой [宮田 一郎].\nВместе с Иппо совершенствуются профессиональные боксёры Такамура [鷹村 守], Аоки [青木 勝] и Кимура [木村 達也], каждый из которых стремится к исполнению своей собственной мечты.",
    "screenshots": [],
    "episodes": 26,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 68,
    "title": "Блич: Тысячелетняя кровавая война — Конфликт",
    "rating": 8.67,
    "rank": 68,
    "type": "Сериалы",
    "shikimori_id": "56784",
    "img": "https://shikimori.one/system/animes/original/56784.jpg?1711828335",
    "plot": "Борьба с «Ванденрейхом» не прекращается ни на минуту, Сообщество душ всеми силами пытается остановить врага, но [character=68537]Яхве[/character] всё же удаётся заполучить неимоверную силу, пробравшись во владения Короля душ. Теперь [character=68537]Яхве[/character] стал намного сильнее, а шансы на победу синигами приблизились к нулю. \nКаким бы сильным ни был противник, Сообщество душ не намерено отчаиваться, оставшиеся в живых синигами, в их числе и [character=5]Ичиго Куросаки[/character], готовы пойти до конца и отдать жизни ради мира в противостоянии со штернриттерами и Яхве, но сумеют ли они одержать верх в этой неравной борьбе?",
    "screenshots": [],
    "episodes": 14,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 69,
    "title": "Принцесса Мононоке",
    "rating": 8.67,
    "rank": 69,
    "type": "Фильмы",
    "shikimori_id": "164",
    "img": "https://shikimori.one/system/animes/original/164.jpg?1711964491",
    "plot": "Деревня народа [url=http://ru.wikipedia.org/wiki/Эмиси]эмиси[/url] затеряна где-то в горах средневековой Японии. Однажды на эту деревню нападает Наго, гигантский вепрь, одержимый ненавистью, превратившей его в демона.\nРади спасения деревни сыну вождя Аситаке приходится убить проклятое животное, но самого его в руку ранит зверь, и вместе с раной ему передаётся проклятие. И теперь, согласно традициям племени, он должен быть изгнан, дабы в изгнании найти путь к исцелению либо погибнуть.\nПутешествуя во внешнем мире, Аситака становится свидетелем и невольным участником противостояния людей Железного Города под предводительством Госпожи Эбоси [エボシ御前] и зверей Древнего [[Леса]], ведомых Духом Леса [シシ神] с богами Моро и Оккотононуси [乙事主]. Сторону леса также занимает и приёмная дочь Моро, человеческая девушка по имени Сан.\nОбитатели леса разгневаны пове��ением людей и не собираются больше сносить надругательств над их домом.\nАситака же обнаруживает, что вместе с проклятием он получил нечеловеческие физическую силу и выносливость. И теперь перед ним встаёт нелёгкий выбор: на чью сторону стать? Людей? [[Леса]]? Или, может быть, ему удастся разрешить этот конфликт мирным путём без кровопролития?",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 70,
    "title": "Клинок, рассекающий демонов: Бесконечный замок — Возвращение Акадзы",
    "rating": 8.67,
    "rank": 70,
    "type": "Фильмы",
    "shikimori_id": "59192",
    "img": "https://shikimori.one/assets/globals/missing_original.jpg",
    "plot": "Тысячу лет японцев терзают демоны, которые убивают людей ради насыщения или просто ради удовольствия. Веками люди гибли от их рук, будучи не в состоянии сопротивляться их силе. И только одна организация, некогда вставшая на путь борьбы с демонами, защищает людей, истребляет монстров и пытается уничтожить их прародителя, смерть которого положит конец существованию всех демонов разом.\nРодоначальник демонов [character=151156]Кибуцудзи Мудзан[/character] настолько силён и хитёр, что всё это время успешно ускользал от охотников, с каждым годом становясь всё сильней и неуязв��мей. Несмотря на это, глава клана охотников [character=151150]Кагая Убуясики[/character] верит, что именно его поколение столпов сможет убить Мудзана. Ради этого столпы постоянно улучшают свои боевые навыки, ради этого они устроили рядовым членами организации адские тренировки. \nОднако передышка, когда демоны затаились, оказалась недолгой. Тренировки со столпами завершились. Пришла пора доказать, что изнуряющие занятия не прошли даром, и на деле продемонстрировать мощь охотников, годами мечтающих о том, чтобы извести зло на корню.",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 71,
    "title": "Легенда о Сяохэе Ло 2",
    "rating": 8.66,
    "rank": 71,
    "type": "Фильмы",
    "shikimori_id": "61952",
    "img": "https://shikimori.one/assets/globals/missing_original.jpg",
    "plot": "После долгой тишины между мирами людей и духов вновь раздаётся тревога: внезапная атака рушит хрупкое равновесие. Молодой дух-оборотень [character=158647] вместе с бывшей ученицей своего мастера [character=278128] отправляются в опасное путешествие, чтобы раскрыть заговор, стоящий за атакой, и предотвратить войну между двумя мирами. Теперь им предстоит не только защитить тех, кого они любят, но и сохранить, равновесие между природой и человечеством.",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 72,
    "title": "Мастер муси",
    "rating": 8.65,
    "rank": 72,
    "type": "Сериалы",
    "shikimori_id": "457",
    "img": "https://shikimori.one/system/animes/original/457.jpg?1711965114",
    "plot": "Муси — простейшая форма жизни в мире. Муси существуют повсюду и безо всякой цели. Они вне человеческих понятий о добре и зле. Муси существуют в бесчисленных формах: могут принимать облик живых существ, растений или даже таких явлений, как радуга.\nВсё это лишь туманная попытка описать этих существ, обитающих в нашем мире, ведь даже назвать их «формой жизни» было бы слишком просто. Информации о муси чрезвычайно мало, а большинство людей о них даже не подозревают.\nЧто же такое муси? И для чего они существуют? Этими вопросами мусиси Гинко [ギンコ] задаётся постоянно. Мусиси — это люди, занимающиеся изучением муси, пытающиеся понять их суть и предназначение.\nВ надежде найти ответы на свои вопросы Гинко следует за любыми слухами о событиях, которые могли бы быть вызваны муси. Ведь кто знает, возможно, это приведёт к ответу на вопрос: «А что такое жизнь вообще?».",
    "screenshots": [],
    "episodes": 26,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 73,
    "title": "Цикл историй: Межсезонье и сезон монстров",
    "rating": 8.65,
    "rank": 73,
    "type": "ONA",
    "shikimori_id": "57864",
    "img": "https://shikimori.one/system/animes/original/57864.jpg?1713468867",
    "plot": "«[i]Это прекрасно — время от времени спасать девушек, которые не имеют к тебе никакого отношения[/i]».\nСтранности всегда были частью людского бытия. Некоторые рассказы о них датируются шестисотлетней давностью. Истории о вампирах, обезьяньей лапе, фамильярах, странниках в горном тумане, кровожадных кошках, волках, русалках и, что самое страшное, о людях, собраны так называемыми «специалистами по странностям». Задача специалистов — бороться, регулировать и, самое главное, разгадывать множество тайн, к которым приводят обстоятельства, созданные этими самыми странностями.\n[character=22036]Коёми Арараги[/character], который уже стал студентом университета, предстоит столкнуться с очередной странностью и обнаружить её источник, используя накопленный опыт. Ученицы старшей школы «Наоэцу» стали неожиданно исчезать одна за другой, а похититель не оставляет за собой никаких улик. Когда выясняется, что тела всех пропавших девушек мумифицируют, Коёми решает, что не может оставаться в стороне и отправляется на поиски преступника!",
    "screenshots": [],
    "episodes": 14,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 74,
    "title": "Девушки-пони: Славное дерби — Начало новой эры",
    "rating": 8.65,
    "rank": 74,
    "type": "Фильмы",
    "shikimori_id": "57647",
    "img": "https://shikimori.one/system/animes/original/57647.jpg?1711740918",
    "plot": "Новая страница во вселенной девушек-пони, рассказывающая о дружбе, соперничестве и стремлении к вершинам среди скакунов нового поколения.\nИстория сосредоточена на героине по имени [character=239395 джангл-покет] — яркой и задорной ученице, мечтающей стать самой быстрой девушкой-пони своего поколения. Вдохновлённая триумфом своего кумира, легендарной [character=150735 фудзи-кисэки], [character=239395 джангл-покет] пробуждает в себе жгучее желание бросить вызов собственным пределам. Именно это стремление приводит её в мир профессиональных скачек, где её ждут суровые испытания, новые друзья и опасные соперники.\nОднако главным вызовом на её пути становится загадочная и гениальная девушка-пони — [character=199011 агнес-такион]Агнес Тахион[/character], одновременно являющаяся источником вдохновения и серьёзным препятствием на пути к мечте. Для [character=239395 джангл-покет] важно не только бороться за победу, но и понять, что на самом деле означает быть сильной, научиться справляться со страхами и сомнениями и не потерять себя в вихре соперничества. Сможет ли [character=239395 джангл-покет] стать чемпионкой и найти своё место в мире скачек? Сумеют ли соперницы превратить жёсткое противостояние в источник взаимного роста? И кто в итоге станет настоящей звездой нового поколения?",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 75,
    "title": "Твоя апрельская ложь",
    "rating": 8.64,
    "rank": 75,
    "type": "Сериалы",
    "shikimori_id": "23273",
    "img": "https://shikimori.one/system/animes/original/23273.jpg?1711973143",
    "plot": "Косэй Арима — мальчик, профессионально играющий на фортепиано, — выигрывал все детские конкурсы, его имя было известно всем начинающим музыкантам. Мать Косэя была его учителем. После того, как она неожиданно скончалась, у Косэя случился нервный срыв во время выступления, в результате чего он больше не мог слышать своей музыки, несмотря на прекрасный слух и большой талант.\nСпустя несколько лет Косэй всё ещё не притрагивался к пианино; мир кажется ему серым и монотонным. Он рад, что у него ещё остались хорошие друзья такие, как Цубаки Савабэ и Рёта Ватари.\nВ один прекрасный день он встречает девушку по имени Каори [宮園 かをり], талантливую и свободную духом скрипачку, чей стиль игры отражает её личность и душу. Каори хочет помочь Косэю [有馬 公生] вернуться  в музыкальный мир и снова услышать музыку...",
    "screenshots": [],
    "episodes": 22,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 76,
    "title": "Атака титанов 3",
    "rating": 8.64,
    "rank": 76,
    "type": "Сериалы",
    "shikimori_id": "35760",
    "img": "https://shikimori.one/system/animes/original/35760.jpg?1711973466",
    "plot": "Несколько сотен лет назад человечество было почти уничтожено титанами — огромными человекоподобными существами, которые не обладают интеллектом, но пожирают людей и, что хуже всего, делают это ради удовольствия, а не от чувства голода. Небольшой процент человечества выжил, возведя три высокие стены, окружившие мир людей, через которые не пройдут даже ужасные гиганты. Прошло два сезона, а титанам всё нет конца. В третьем же сезоне будет экранизирована арка «Восстание» оригинальной манги за авторством [person=11705]Хадзимэ Исаямы[/person].\nНаши герои возвращаются после важной миссии по возвращению [character=40882]Эрена[/character]. Но приехав в город, они сталкиваются с новой угрозой — высшим правительством. После убийства пастора [character=71453]Ника[/character] ситуация внутри стен заметно накаляется. Зная, что действия монархии сильно угрожают человечеству, [character=46496]Эрвин Смит[/character] начинает подготовку к свержению старого правительства, а после — назначению [character=62481]Кристы[/character] новой королевой.",
    "screenshots": [],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 77,
    "title": "Судьба/Ночь схватки: Прикосновение небес 3",
    "rating": 8.63,
    "rank": 77,
    "type": "Фильмы",
    "shikimori_id": "33050",
    "img": "https://shikimori.one/system/animes/original/33050.jpg?1711949281",
    "plot": "Завершающий третий фильм аниме-адаптации «[manga=88110]Судьба/Ночь схватки: Прикосновение небес[/manga]».",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 78,
    "title": "Тетрадь дружбы Нацумэ 4",
    "rating": 8.63,
    "rank": 78,
    "type": "Сериалы",
    "shikimori_id": "11665",
    "img": "https://shikimori.one/system/animes/original/11665.jpg?1711965714",
    "plot": "В четвёртом сезоне Нацумэ (Takashi Natsume) продолжает возвращать имена ёкаям, которые записаны в «Тетради дружбы», а ленивый Нянко-сэнсэй (Madara) всё так же ворчит и балуется сакэ. И, хотя проблем у парня не убавляется, друзей становится всё больше. Многие духи теперь частенько выручают Нацумэ, памятуя о его добросердечности.\nИ это ставит перед Такаши (Takashi Natsume) неизбежный вопрос: чью сторону он примет? Ведь ёкаи и люди никогда не смогут ужиться. Или так только кажется?",
    "screenshots": [],
    "episodes": 13,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 79,
    "title": "Киберпанк: Бегущие по краю",
    "rating": 8.62,
    "rank": 79,
    "type": "ONA",
    "shikimori_id": "42310",
    "img": "https://shikimori.one/system/animes/original/42310.jpg?1711946940",
    "plot": "Найт-Сити — город будущего, оснащённый всевозможными новейшими технологиями. Город, где модификация тела не просто мечты безумных учёных, а реальность сродни обычной покупке. Именно там живёт наш юный герой, для которого этот город не является чем-то невообразимым, он знает всю его настоящую суть, где выживание не просто слово, а истинное лицо этого мира. В один миг потеряв всё, что имел, парень не опускает рук и в борьбе за выживание становится киберпанком — городским наёмником вне закона.",
    "screenshots": [],
    "episodes": 10,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 80,
    "title": "Пинг-понг",
    "rating": 8.63,
    "rank": 80,
    "type": "Сериалы",
    "shikimori_id": "22135",
    "img": "https://shikimori.one/system/animes/original/22135.jpg?1711968823",
    "plot": "Замкнутый и тихий старшеклассник Макото Цукимото, по прозвищу [[Смайл]], с самого детства дружит с шумным и неугомонным Ютакой Хошино [星野 裕], по прозвищу [[Пэко]]. Оба они состоят в местном клубе настольного тенниса, и у обоих к нему прирождённый талант, но малопритязательный нрав Смайла [月本 誠] не позволяет ему выигрывать у Пэко [星野 裕]. Школьный тренер, однако, замечает несомненный дар Макото и решает помочь ему обрести волю к победе.",
    "screenshots": [],
    "episodes": 11,
    "voiceovers": [
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 81,
    "title": "Тетрадь смерти",
    "rating": 8.62,
    "rank": 81,
    "type": "Сериалы",
    "shikimori_id": "1535",
    "img": "https://shikimori.one/assets/globals/missing_original.jpg?1711947446",
    "plot": "Изнывающий от скуки [[Синигами]] Рюк [リューク] бросает одну из своих Тетрадей смерти в мир людей. Просто так, потехи ради, посмотреть, что из этого выйдет.\nМежду тем, в Японии на школьной лужайке эту самую тетрадь находит Лайт Ягами [夜神月] — лучший ученик школы, сын полицейского. Заинтригованный инструкцией на обложке, он забирает тетрадь домой и пробует её в деле, вписав туда имя преступника. А вдруг сработает?\nВскоре весь мир замечает странные массовые смерти преступников, а в сети загадочного убийцу окрещают [[Кирой]].\nДля поимки Киры [夜神月] Интерпол привлекает легендарного детектива [character=71]L[/character], в одиночку раскрывавшего наиболее сложные и запутанные преступления. Кто такой [character=71]L[/character] на самом деле — не знает никто.\nОтныне в противостоянии Киры и [character=71]L[/character] предстоит победить тому, кто первым раскроет истинную личность противника и раньше оппонента нанесёт удар.",
    "screenshots": [],
    "episodes": 37,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 82,
    "title": "Великий из бродячих псов 5",
    "rating": 8.61,
    "rank": 82,
    "type": "Сериалы",
    "shikimori_id": "54898",
    "img": "https://shikimori.one/system/animes/original/54898.jpg?1710727183",
    "plot": "После воплощения коварного плана Достоевского [フョードル・ドストエフスキー] «Вооружённое детективное агентство» было признанно террористической организацией и вынуждено вести дела из тени. Чтобы избавиться от преследования «Ищеек», доказать невиновность организации и спасти мир от хаоса, детектив Рампо Эдогава [江戸川 乱歩] разработал план по захвату Камуи — лидера террористической организации «Смерть небожителей». Но, чтобы найти его, Рампо и его коллегам необходимо убедить Оти Фукути [福地 桜痴], знаменитого капитана «Ищеек», предоставить им амнистию. Детективы считают, что их связи с бывшим президентом агентства, Юкити Фукудзавой [福沢 諭吉], могут стать ключом к обретению его доверия. Но что если Фукути  не такой благородный, каким он себя выставляет?",
    "screenshots": [],
    "episodes": 11,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 83,
    "title": "Волейбол!! 2",
    "rating": 8.62,
    "rank": 83,
    "type": "Сериалы",
    "shikimori_id": "28891",
    "img": "https://shikimori.one/system/animes/original/28891.jpg?1711952317",
    "plot": "Высоко подлетевший мяч с оглушительным грохотом коснулся пола волейбольной площадки. Этот звук ознаменовал горькое поражение. Где-то там, далеко за высокой сеткой, старшая школа Аоба Дзёсай ликовала. Кому теперь интересно, что всего два очка отделяли команду Карасуно от желанной победы?\nПосле проигрыша Хината [Shouyou Hinata] и Кагэяма [Tobio Kageyama] совсем расклеились. Однако вместе с тем полностью посвятили себя упорным тренировкам. Но как бы ни старались ребята стать сильнее, драгоценный опыт, в первую очередь необходимый для этого, можно приобрести лишь одним способом — играя против других команд. \nИ вот, как внезапно в дверях спортивного зала старшей школы Карасуно появляется неуклюжий куратор волейбольного клуба, так же внезапно у его участников появляется шанс сыграть на площадке большой столицы. Ведь знаменитая академия Фукуродани приглашает принять участие в своих тренировочных матчах! Но что еще лучше — в перспективе предвидятся новые грозные соперники, которые ни за какие коврижки не позволят расслабиться.\nКарасуно просто не может упустить такой шанс!",
    "screenshots": [],
    "episodes": 25,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 84,
    "title": "Магическая битва: Смертельная миграция",
    "rating": 8.62,
    "rank": 84,
    "type": "Сериалы",
    "shikimori_id": "57658",
    "img": "https://shikimori.one/system/animes/original/57658.jpg?1711654571",
    "plot": "После событий в Сибуе, погрузивших город в хаос, казалось, что трагедия останется локальной. Однако теперь тёмный вихрь этой беды накрывает весь мир. Таинственный маг [character=196089 кэндзяку], ранее скрывавшийся под личностью [character=175542 сугуру-гэто]Сугуру Гето[/character], объявляет магам Королевскую битву под названием «Смертельная миграция», в которую будут втянуты не только маги, но и проклятия, и ни в чём не повинные люди.\n[character=163847 юдзи-итадори] и его товарищи вступают в ожесточённую борьбу, осознавая, что каждый шаг может стоить жизни, а любые моральные принципы будут сметены бесчеловечными правилами игры. Все жертвы, все идеалы, все мечты о спасении обратились в прах. Остаётся лишь одно важное правило: убей или умри.\nКак марионетки, подвешенные на нитях, мы тащим свои судьбы, не понимая, кто на самом деле дергает за эти нити.",
    "screenshots": [],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 85,
    "title": "Волейбол!! Решающая игра на свалке",
    "rating": 8.61,
    "rank": 85,
    "type": "Фильмы",
    "shikimori_id": "52742",
    "img": "https://shikimori.one/system/animes/original/52742.jpg?1716641856",
    "plot": "Связующий волейбольной команды «Нэкома» [character=71267 кэмма-кодзумэ] — человек, не испытывающий особой страсти к спорту, но обладающий выдающимся аналитическим умом. Его холодная расчётливость и способность просчитывать игру на несколько шагов вперёд становятся ключевым оружием команды, пробившейся на национальный турнир, где их ждёт судьбоносная встреча с давними соперниками — «Карасуно».\nПеред [character=71267 кэмма-кодзумэ]Кэммой[/character] встаёт сложная тактическая задача: разработать стратегию против сильной и непредсказуемой команды, а также выйти на площадку против своего друга — невероятно энергичного доигровщика [character=64769 сёё-хината]Сёё Хинаты[/character]. Несмотря на то что «Карасуно» ранее не удавалось одолеть «Нэкому» в товарищеских матчах, предстоящая официальная игра с высокими ставками пробуждает в обычно флегматичном связующем незнакомое ему чувство азарта. Для «Карасуно» этот матч становится шансом пробиться в полуфинал и сделать шаг к возвращению былой славы. Чтобы одержать победу, им предстоит найти способ преодолеть безупречную игровую логику [character=71267 кэмма-кодзумэ]Кэммы[/character] и превзойти одного из самых опасных соперников турнира.",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 86,
    "title": "Созданный в Бездне",
    "rating": 8.62,
    "rank": 86,
    "type": "Сериалы",
    "shikimori_id": "34599",
    "img": "https://shikimori.one/system/animes/original/34599.jpg?1711962078",
    "plot": "Человечество всегда тяготело к изучению неизведанного. Даже если неизведанное хранило в себе безграничную опасность... Много сотен лет назад посреди южного моря был обнаружен остров, в основании которого зияло громадное отверстие. Вопрос, что же находится там, глубоко внизу, мгновенно отравил умы желающих заполучить предполагаемые богатства. Бесчисленные искатели приключений мало-помалу прибывали на этот клочок земли, спускались вниз, и вскоре выяснилось, что поживиться там и правда есть чем. Однако вместе с тем люди, отправлявшиеся всё ниже и ниже и возвращавшиеся обратно, рассказывали о необычайных и кровожадных существах, погубивших их товарищей, а также выдвигали теории, что у дыры на самом деле нет дна. И где-то глубоко внизу родилось название — Бездна.\nСо временем вокруг отверстия образовался город Орф, построенный потомками первых исследователей Бездны на костях своих отважных предков. Двенадцатилетняя [character=137239]Рико[/character], как и многие дети в городе, сирота, чьи родители сгинули в недрах прожорливой дыры. Дети с её судьбой вынуждены жить в приютах при гильдиях исследователей Бездны и работать на них, добывая Реликвии. Однако, храня воспоминания о своей легендарной матери, [character=137239]Рико[/character] не унывает и, наоборот, хочет как можно скорее набраться опыта и получить Белый Свисток, олицетворяющий высший ранг среди исследователей.\nНо пока она только ученик, вынужденный довольствоваться Красным Свистком новичка и безопасными вылазками на глубину не больше ста метров от поверхности. Где уж тут станешь великим?.. Однажды, отдавая всю себя работе, [character=137239]Рико[/character] чуть было не попадает в пасть грозному монстру, от которого её спасает странный мальчик — не то робот, не то человек, — прибывший, как считает девочка, с самого низа Бездны. Это событие рождает новую догадку: неужели, каждый день смотря в Бездну, Бездна в ответ пристально глядит на тебя?",
    "screenshots": [],
    "episodes": 13,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 87,
    "title": "Магистр дьявольского культа 3",
    "rating": 8.62,
    "rank": 87,
    "type": "ONA",
    "shikimori_id": "40434",
    "img": "https://shikimori.one/system/animes/original/40434.jpg?1711964185",
    "plot": "Жизнь заклинателя наполнена чистыми помыслами, постоянными тренировками и неустанным самосовершенствованием. Однако однажды появился заклинатель, избравший не изнуряющий светлый путь, предполагающий постепенное накапливание силы, а кривую тёмную дорожку управления злыми духами, и основал дьявольский культ. Взгляды [character=163083]Вэй Усяня[/character] не нашли поддержку у общества, и он был убит. Многие годы кланы заклинателей страшились возрождения [character=163083]Вэй Усяня[/character], настолько тот был силён, и приложили массу сил, чтобы предотвратить это событие. Только настоящее зло скрывалось в ином месте. \n\nСпустя тринадцать лет после собственной смерти [character=163083]Вэй Усянь[/character] всё же возродился и встретил своего знакомого из прошлой жизни — [character=163084]Лань Ванцзи[/character]. Теперь [character=163083]Вэй Усянь[/character] в компании [character=163084]Лань Ванцзи[/character] ступают на опасный и тернистый путь, ведь им нужно отыскать ответы на многие вопросы. Они подбираются всё ближе к раскрытию страшных тайн прошлого и не намерены сдаваться!",
    "screenshots": [],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 88,
    "title": "Повелитель тайн: Клоун",
    "rating": 8.61,
    "rank": 88,
    "type": "ONA",
    "shikimori_id": "49818",
    "img": "https://shikimori.one/system/animes/original/49818.jpg?1716302836",
    "plot": "Мир вступил в новую эру: дымящиеся трубы, ревущие машины, броненосцы и дирижабли прокладывают путь прогрессу. Но за завесой пара и железа прячется нечто иное — потустороннее, древнее, шепчущее в тени о тайнах, которые человечество предпочло бы забыть.\n\nЧжоу Минжуй просыпается не в своём теле и не в своём времени. Его новое имя — [character=233866]Клейн Моретти[/character], и он живёт в мире, напоминающем викторианскую эпоху, где магия и наука идут рука об руку. Здесь пророчества пишутся кровью, судьбы вершатся при помощи ритуалов, а зелья потусторонних даруют силу и открывают двери, которые лучше бы остались закрыты. По мере того как [character=233866]Клейн[/character] погружается в этот мир, он оказывается между двумя силами: ортодоксальными церквями и таинственными культами, теперь каждый шаг — это сделка с неизвестным. [character=233866]Клейн[/character] сделал выбор — не бежать, не прятаться, а взглянуть в самую суть мира, распутать клубок предзнаменований и теней. Он стал Провидцем — тем, кто ищет истину сквозь иллюзии, кто читает мир, словно книгу, и в каждом знаке видит больше, чем просто совпадение. Тайны множатся, свет меркнет, но его путь лишь начинается.",
    "screenshots": [],
    "episodes": 13,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 89,
    "title": "Берсерк",
    "rating": 8.61,
    "rank": 89,
    "type": "Сериалы",
    "shikimori_id": "33",
    "img": "https://shikimori.one/system/animes/original/33.jpg?1711958056",
    "plot": "Отважный молодой воин Гатс [ガッツ] испытывает судьбу в качестве наёмника на пер��довой. Роковая встреча сводит Гатса с харизматичным и беспощадным юношей по имени Гриффит [グリフィス]. Возглавляя непобедимый отряд, известный как «Банда Ястреба», Гриффит владеет грозной силой, несравнимой ни с чем. Движимые стремлением к статусу, «ястребы» проявляют невиданную доселе доблесть в военных делах и выдержку в делах политических. Армии Мидланда содрогнутся в страхе, когда Гриффит и Гатс вступят на путь, на котором им суждено поставить мир на колени.",
    "screenshots": [],
    "episodes": 25,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 90,
    "title": "Первый шаг: Восхождение",
    "rating": 8.61,
    "rank": 90,
    "type": "Сериалы",
    "shikimori_id": "19647",
    "img": "https://shikimori.one/system/animes/original/19647.jpg?1711952383",
    "plot": "[character=15]Иппо[/character] продолжает безустанно заниматься боксом, делая всё новые успехи. Противники становятся всё сильнее и сильнее, но юный боксёр не сдается. [character=15]Иппо[/character] ждут суровые испытания: приемом Дэмпси уже никого не удивишь, и это становится очевидным. Молодой герой зала Камогава выходит на ринг и дерется используя все, что у него есть: силу, выносливость и решительность. Останется ли он чемпионом, или найдется более достойный, покажет время.\nТакамура [Mamoru Takamura] наконец переходит в первый средний,стремясь стать чемпионом мира. Нынешним соперником становится, как водится, американец: Дэвид Игл[David Eagle]. Сумеет ли Такамура[Mamoru Takamura] получить второй пояс?\nАоки[Masaru Aoki] и Кимура [Tatsuya Kimura] тоже не сидят сложа руки и продолжают бороться за пояс, а Итагаки [Manabu Itagaki] участвует в своем первом турнире.\nСмогут ли добиться поставленных целей наши герои?",
    "screenshots": [],
    "episodes": 25,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 91,
    "title": "Госпожа Кагуя: в любви как на войне 2",
    "rating": 8.61,
    "rank": 91,
    "type": "Сериалы",
    "shikimori_id": "40591",
    "img": "https://shikimori.one/system/animes/original/40591.jpg?1711957576",
    "plot": "[[Трудолюбивый]] Миюки Сироганэ [白銀 御行] и первая красавица Кагуя Синомия [四宮 かぐや] — два общепризнанных гения престижной академии Сютин, возглавляющие её студсовет. Они по-прежнему ведут свою любовную войну, отрицая чувства к друг другу, ведь признание в их романтическом поединке означает поражение!\n\nОднако для текущего студсовета год подходит к концу. Пути товарищей разойдутся по разным классам, почти не оставив точек для пересечения. К тому же на горизонте возникает новый соперник на должность президента студсовета. Что будут делать ребята? И кто же наконец выйдет победителем в этой любовной войне?",
    "screenshots": [],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 92,
    "title": "Тетрадь дружбы Нацумэ 6",
    "rating": 8.61,
    "rank": 92,
    "type": "Сериалы",
    "shikimori_id": "34591",
    "img": "https://shikimori.one/system/animes/original/34591.jpg?1711965695",
    "plot": "Шестой сезон «Тетради дружбы [[Нацумэ]]». Такаши Нацумэ, с детства обладающий способностью видеть призраков, всё так же продолжает хранить тайну «Тетради дружбы», защищая своих близких от многочисленных опасностей мира духов, и вместе со своим ленивым телохранителем Мадарой [斑] всё так же продолжает помогать заблудшим ёкаям, желающим вернуть давно потерянные в битве с его бабушкой Рэйко [夏目 レイコ] имена.",
    "screenshots": [],
    "episodes": 11,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 93,
    "title": "Агент времени 2",
    "rating": 8.61,
    "rank": 93,
    "type": "ONA",
    "shikimori_id": "49413",
    "img": "https://shikimori.one/system/animes/original/49413.jpg?1711973139",
    "plot": "Продолжение аниме-сериала «[anime=44074]Агент времени[/anime]», рассказывающее о жизни [character=196253]Лу Гуана[/character], [character=196252]Чэн Сяоши[/character] и [character=196254]Цяо Лин[/character] – трёх друзей, работающих в фотостудии Time Photo Studio.\nПутешествия во времени становятся всё более опасными и запутанными, а ценой одной-единственной ошибки легко может стать чья-то жизнь.\nПомогут ли внимательность и находчивость ребят, а также особые способности двух парней разгадать все тайны, скрывающиеся за происходящими убийствами, и исправить собственные ошибки настоящего, не изменив прошлого? Ведь на сей раз придётся столкнуться с тем, кто тщательно продумывает свои действия и, возможно, обладает ещё более опасными сверхъестественными силами.",
    "screenshots": [],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 94,
    "title": "Созданный в Бездне: Солнце, вспыхнувшее в Золотом городе",
    "rating": 8.6,
    "rank": 94,
    "type": "Сериалы",
    "shikimori_id": "41084",
    "img": "https://shikimori.one/system/animes/original/41084.jpg?1711962117",
    "plot": "В компании [character=140060]Нанати[/character], [character=137239]Рико[/character] и [character=140046]Рэг[/character] продолжают свой спуск в Бездну. Теперь, когда [character=137239]Рико[/character] стала обладательницей Белого свистка, они решают спуститься на шестой уровень Бездны — Столицу Невернувшихся. Этот уровень таит в себе множество угроз, а опасности здесь поджидают на каждом шагу, но они не пугают [character=137239]Рико[/character], [character=140046]Рэга[/character] и [character=140060]Нанати[/character], и ребята продолжают путешествие.\n \nПо стечению обстоятельств они набредают на странную деревню под названием Илблу, которую населяют необычные существа — «пустышки». Познавая язык и обычаи этих существ, ребята узнают историю деревни и её жителей, а также получают возможность выяснить правду о группе авантюристов, много лет назад прибывших на остров в поисках Золотого города.",
    "screenshots": [],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 95,
    "title": "Подземелье вкусностей",
    "rating": 8.59,
    "rank": 95,
    "type": "Сериалы",
    "shikimori_id": "52701",
    "img": "https://shikimori.one/system/animes/original/52701.jpg?1717859891",
    "plot": "«Голод не тётка — пирожка не поднесёт» — эту истину не понаслышке знает любой авантюрист, бывающий в подземелье и вынужденный таскать с собой огромный запас провианта. Это довольно серьёзная проблема, ведь количество еды полностью диктует длительность путешествия. Мало того, в подземелье на каждом шагу встречаются опасности и кровожадные монстры, готовые слопать зазевавшегося искателя приключений вместе с потрохами, снаряжением и товарищами. В таких условиях чаще приходится беспокоиться не о еде, а о том, чтобы не стать ею.\n\nИменно эта напасть случилась с сестрой [character=134262]Лая Тордена[/character], [character=134266]Фалин[/character], угодившей в пасть дракона. К счастью, маги-воскресители работают исправно, так что [character=134266]Фалин[/character] вполне можно спасти, но действовать необходимо в большой спешке. Понимая, что нужно торопиться, [character=134262]Лай[/character], едва выведя свой отряд наружу, отправился назад, приняв решение не тратить время на закупку продовольствия.\n\nВполне логично, вот только сестроядный дракон обитает аж на третьем этаже подземелья. Путь туда неблизкий, а оздоровительное голодание в условиях постоянных сражений не вариант. Что же делать? Ответ прост: пора осознать, что необязательно любить монстров, главное — уметь их правильно готовить!",
    "screenshots": [],
    "episodes": 24,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 96,
    "title": "Созданный в Бездне: Рассвет глубокой души",
    "rating": 8.6,
    "rank": 96,
    "type": "Фильмы",
    "shikimori_id": "36862",
    "img": "https://shikimori.one/system/animes/original/36862.jpg?1711962127",
    "plot": "Продолжение эпического приключения [character=137239]Рико[/character] и [character=140046]Рэга[/character], к которым присоединяется их новый друг [character=140060]Нанати[/character]. Вместе они спускаются на пятый уровень Бездны, именуемый Морем Трупов, и сталкиваются с таинственным [character=151195]Бондрюдом[/character], легендарным Белым Свистком, который оставил тёмный след в тяжёлом прошлом [character=140060]Нанати[/character]. [character=151195]Бондрюд[/character] заискивающе гостеприимен, но храбрые искатели приключений знают, что в загадочной Бездне вещи не всегда являются тем, чем кажутся...",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 97,
    "title": "Мастер муси: Следующая глава — Капли колокольчиков",
    "rating": 8.59,
    "rank": 97,
    "type": "Фильмы",
    "shikimori_id": "28957",
    "img": "https://shikimori.one/system/animes/original/28957.jpg?1711965084",
    "plot": "В местах, богатых урожаем, где пролегает Жила Света, необходимо присутствие хранителя горы — существа, которое поддерживает баланс. Хранителями обычно становятся животные, но бывают редкие случаи, когда хранителем выбирают человека. Жизнь таких людей коротка, и со временем они теряют разум, полностью поддаваясь зову муси.\nВ одном из путешествий Гинко [Ginko] сталкивается с этим необычным явлением. Он встречает хранителя-человека, девочку четырнадцати лет, жизнь которой уже подходит к концу. И её брата, который уже давно ищет свою сестру. Гинко придётся решить: спасёт ли он человека, нарушив естественный ход событий и подвергнет опасности гору и всех существ там обитающих, или же оставит всё как есть.",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 98,
    "title": "Тетрадь дружбы Нацумэ 7",
    "rating": 8.58,
    "rank": 98,
    "type": "Сериалы",
    "shikimori_id": "55823",
    "img": "https://shikimori.one/system/animes/original/55823.jpg?1712086175",
    "plot": "[character=13783]Такаши Нацумэ[/character] продолжает возвращать имена ёкаев, записанные в «Тетрадь дружбы» его бабушки [character=13886]Рэйко[/character]. На этот раз ему предстоит раскрыть тайну старинной маски, обитающей в заброшенном святилище, помочь духу, потерявшему воспоминания, и разобраться в чувствах ёкая, долгое время следившего за человеком. Через встречи и прощания он всё больше узнаёт о [character=13886]Рэйко[/character], её прошлом и боли, которую она скрывала. При этом [character=13783]Нацумэ[/character] сильнее сближается с окружающими — друзьями, семьёй Фудзивара и даже встречает других людей, способных видеть духов.",
    "screenshots": [],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 99,
    "title": "Исчезновение Харухи Судзумии",
    "rating": 8.59,
    "rank": 99,
    "type": "Фильмы",
    "shikimori_id": "7311",
    "img": "https://shikimori.one/system/animes/original/7311.jpg?1711975816",
    "plot": "Наступает середина декабря, и глава бригады [[SOS]] Судзумия Харухи [涼宮 ハルヒ] объявляет о том, что Рождество они проведут в комнате клуба за рождественским ужином. Все члены SOS начинают приготовления. \nСпустя пару дней по дороге в школу Кён начинает замечать странности: не вяжется разговор с Танигути, тот внезапно заболел и не помнит вчерашнего разговора. В классе нет Харухи, а Рёко Асакура ожила и сидит на её месте, разговаривая с Кёном как ни в чём не бывало. Микуру Асахина не узнает Кёна, а Нагато [長門 有希] – обычная девушка и единственный член литературного клуба.\nНи бригады SOS, ни Харухи в этой школе никогда не существовало...",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 100,
    "title": "Этот глупый свин не понимает мечту девочки-мечтательницы",
    "rating": 8.59,
    "rank": 100,
    "type": "Фильмы",
    "shikimori_id": "38329",
    "img": "https://shikimori.one/system/animes/original/38329.jpg?1711972295",
    "plot": "Фудзисава, яркое небо, блестящее на солнце море... Чего ещё может желать второкурсник старшей школы Сакута Адзусагава, проводящий блаженные дни в компании своей подруги Маи Сакурадзимы [桜島 麻衣]? Наверное, всё что угодно, но точно не встречи с Сёко Макинохарой [牧之原 翔子], своей первой любовью. Кроме того, странные обстоятельства сталкивают парня с двумя Сёко: школьницей и взрослой женщиной.\nПоскольку в жизни Сакута оказывается беспомощным с Сёко-школьницей, взрослая её версия начинает водить его за нос, тем самым внося разлад в его отношения с Маи.\nПосреди этих событий он обнаруживает, что Сёко в старшей школе страдает от тяжёлой болезни, и его рана вновь начинает кровоточить...",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 101,
    "title": "Невероятное приключение ДжоДжо: Золотой ветер",
    "rating": 8.58,
    "rank": 101,
    "type": "Сериалы",
    "shikimori_id": "37991",
    "img": "https://shikimori.one/system/animes/original/37991.jpg?1711956291",
    "plot": "События новой части «Невероятных приключений ДжоДжо» развернутся в Италии 2001 года.\nДжорно Джованна — молодой амбициозный парень, живущий в школе-интернате и промышляющий мелким мошенничеством. Юноша, будучи сыном [character=4004]Дио Брандо[/character], вобрал в себя как хладнокровие отца, так и пылкое, переполненное решимостью сердце Джостаров.\nДжорно решает вступить в мафиозную семью «Пассионе», как только встречает её члена — Бруно Буччеллати, чтобы пробиться в ней к вершине власти. В составе команды Буччеллати новоиспечённому гангстеру предстоит найти выход из самых неординарных ситуаций, выполняя крайне ответственное поручение лично от босса семьи.\nМножество опасных обладателей стендов станут препятствием на пути команды к успеху и героя к исполнению его «золотой» мечты — возглавить мафиозную группировку и ограничить её преступную деятельность.",
    "screenshots": [],
    "episodes": 39,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 102,
    "title": "Евангелион 3.0+1.01: Как-то раз",
    "rating": 8.58,
    "rank": 102,
    "type": "Фильмы",
    "shikimori_id": "3786",
    "img": "https://shikimori.one/system/animes/original/3786.jpg?1711973338",
    "plot": "Оставшись после Четвёртого удара без своих Евангелионов, [character=89]Синдзи[/character], [character=94]Аска[/character] и [character=162259]Рей[/character] находят убежище в одном из редких очагов человечества, которые всё ещё существуют на полуразрушенной Земле. Там каждый из них живёт своей жизнью, совсем не похожей на ту, которая была у них, когда они были пилотами Евы. Однако опасность для мира не миновала. На горизонте маячит новый Удар — тот, который окажется истинным концом Евангелиона. Наконец, запущен проект совершенствования человечества, и теперь Wille предстоит финальный изнурительный бой, чтобы предотвратить Последний удар.",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 103,
    "title": "Девушки-пони: Серая Золушка",
    "rating": 8.58,
    "rank": 103,
    "type": "Сериалы",
    "shikimori_id": "59636",
    "img": "https://shikimori.one/assets/globals/missing_original.jpg",
    "plot": "Не все легенды рождаются под овации многотысячных стадионов и светом софитов. Иногда самые громкие истории начинаются в оглушительной тишине, там, где не слышно шума столицы и не видно блеска наград, вдали от славы Центральной Академии Трейсен. Здесь, в провинциальном городке Касамацу, жизнь течёт размеренно и предсказуемо. Утром — работа, вечером — разговоры в местных забегаловках, а по выходным всё население собирается на ипподроме, где вместо сверкающих изумрудных газонов — вытоптанная земля, а вместо амбициозных тренеров в дорогих костюмах — старые ветераны, знающие каждую девушку-пони по имени.\nВсё меняется, когда молодой и амбициозный тренер [character=199041 дзё-китахара], замечает среди новеньких учениц одну, имеющую потенциал, способный потрясти весь мир скачек — [character=162150 огури-кэп]. Она — настоящий монстр на беговом круге, неогранённый алмаз с невероятным талантом и таким же невероятным аппетитом. Со временем, всё чаще побеждая в забегах и завоёвывая авторитет, для местных жителей она становится живой легендой, однако за пределами Касамацу о ней до сих пор никто и не слышал.\nСможет ли [character=162150 огури-кэп], «серая лошадка» без элитной подготовки, прославиться за пределами Касамацу, бросить вызов лучшим из лучших и вписать своё имя в историю? Какой ценой даётся путь от никому неизвестной провинциалки до легенды скачек? И что на самом деле определяет чемпиона: врождённый талант или отточенная система тренировок?",
    "screenshots": [],
    "episodes": 13,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 104,
    "title": "Евангелион нового поколения: Конец Евангелиона",
    "rating": 8.57,
    "rank": 104,
    "type": "Фильмы",
    "shikimori_id": "32",
    "img": "https://shikimori.one/system/animes/original/32.jpg?1711973640",
    "plot": "После победы над последним Ангелом, у Nerv остался единственный враг — люди под командованием Seele. Впавшему в депрессию нерешительному [character=89]Синдзи Икари[/character] предстоит сделать важный выбор: полностью принять существование человечества или отказаться от человеческой индивидуальности. Параллельно, командующий Nerv [character=1257]Гэндо Икари[/character] готовится инициировать проект совершенствования человечества, используя [character=86]Рей Аянами[/character] и Лилит для реализации своей заветной мечты. Судьба мира висит на волоске, приближается решающая финальная битва.\n[i]«Евангелион нового поколения: Конец Евангелиона» служит альтернативным финалом противоречивых последних эпизодов «[anime=30]Евангелион нового поколения[/anime]».[/i]",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 105,
    "title": "Нана",
    "rating": 8.57,
    "rank": 105,
    "type": "Сериалы",
    "shikimori_id": "877",
    "img": "https://shikimori.one/system/animes/original/877.jpg?1711965470",
    "plot": "Нана Комацу [小松 奈々], милая и наивная девушка, переезжает вслед за своим парнем Сёдзи [遠藤章司] в Токио, где надеется зажить с ним счастливой жизнью, о которой она всегда мечтала. В поезде на пути в Токио она знакомится с Наной Осаки [大崎ナナ], сильной и волевой девушкой, вокалисткой рок-группы, также переезжающей в Токио ради мечты стать профессиональным музыкантом. Они полные противоположности друг друга, но, будучи тёзками, легко находят общий язык.\nПовторно судьба сводит их уже в Токио: на осмотре квартиры, которую каждая из них хотела бы снять. Девушки сильно стеснены в средствах, но найденный вариант просто отличный... Друг с другом они вроде бы ладят, так почему бы не попробовать снять квартиру на двоих?",
    "screenshots": [],
    "episodes": 47,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 106,
    "title": "Атака титанов",
    "rating": 8.57,
    "rank": 106,
    "type": "Сериалы",
    "shikimori_id": "16498",
    "img": "https://shikimori.one/system/animes/original/16498.jpg?1711973439",
    "plot": "С давних времён человечество ведёт свою борьбу с титанами. Титаны — это огромные существа, ростом с многоэтажный дом, которые не обладают большим интеллектом, но сила их просто ужасна. Они едят людей и получают от этого удовольствие. После продолжительной борьбы остатки человечества создали стену, окружившую мир людей, через которую не пройдут даже титаны.\nС тех пор прошло сто лет. Человечество мирно живёт под защитой стены. Но в один день мальчик Эрен [エレン・イェーガー] и его приёмная сестра Микаса [ミカサ・アッカーマン] становятся свидетелями страшного события: участок стены был разрушен супертитаном, появившимся прямо из воздуха. Титаны атакуют город, и двое детей в ужасе видят, как один из монстров заживо съедает их мать.\nБрат и сестра выживают, и Эрен клянётся, что убьёт всех титанов и отомстит за всё челов��чество!",
    "screenshots": [],
    "episodes": 25,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 107,
    "title": "Волейбол!! К вершине 2",
    "rating": 8.56,
    "rank": 107,
    "type": "Сериалы",
    "shikimori_id": "40776",
    "img": "https://shikimori.one/system/animes/original/40776.jpg?1711952310",
    "plot": "Яростная борьба за «вершину» среди волейбольных команд на чемпионате Японии продолжается. [character=64769]Хинате[/character], [character=64771]Кагэяме[/character] и другим участникам волейбольного клуба Карасуно, которые продолжают из всех сил рваться к победе, придётся столкнуться с мощными противниками, по полной прочувствовать вкус соперничества, открыть в себе новые стороны и возможности и, конечно же, вновь насладиться настоящей игрой в волейбол!",
    "screenshots": [],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 108,
    "title": "Истории ран. Часть 2: Горячая кровь",
    "rating": 8.56,
    "rank": 108,
    "type": "Фильмы",
    "shikimori_id": "31757",
    "img": "https://shikimori.one/system/animes/original/31757.jpg?1711959007",
    "plot": "Вторая часть из серии полнометражных фильмов «Истории ран».\nПосле договора, заключенного с Мэмэ Осино, Арараги [阿良々木 暦] необходимо победить трех специалистов ([Драматург], [Эпизод], [character=42364 палач]), с каждым из которых он должен сразиться один на один, чтобы вернуть прежнюю силу Киссшот Ацеролаорион Хартандерблэйд и снова стать человеком. Но Арараги терзают сомнения: выполнит ли Киссшот свою часть сделки? И как разобраться с надоедливой Ханэкавой [羽川 翼], которая так и норовит встретиться с вампирами и лезет не в свои дела?\nФильм продолжает раскрывать некоторые подробности из прошлого героев: Киссшот до становления тенью себя самой и то, как познакомились Арараги и Ханэкава.",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 109,
    "title": "Волчьи дети Амэ и Юки",
    "rating": 8.56,
    "rank": 109,
    "type": "Фильмы",
    "shikimori_id": "12355",
    "img": "https://shikimori.one/system/animes/original/12355.jpg?1711967725",
    "plot": "История рассказывает о любви между родителями и их детьми. Повествование охватывает тринадцать лет жизни [character=60279]Ханы[/character] начиная со студенческой поры. Выйдя замуж за оборотня, Хана родила от [character=60285]Оками[/character] двух малышей — [character=60283]Амэ[/character] и [character=60281]Юки[/character]. Сказка неожиданно подошла к концу, когда отец семейства умер. Чтобы скрыть существование «детей волка», [character=60279]Хана[/character] решила переехать в сельский городок подальше от суетливого мегаполиса.",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 110,
    "title": "Тетрадь дружбы Нацумэ 5",
    "rating": 8.56,
    "rank": 110,
    "type": "Сериалы",
    "shikimori_id": "32983",
    "img": "https://shikimori.one/system/animes/original/32983.jpg?1711965765",
    "plot": "Продолжение истории Такаши Нацумэ, с раннего детства имеющего способность видеть духов. Нацумэ вместе со своим верным и пушистым телохранителем Нянко [斑] продолжает возвращать имена из «Тетради дружбы» своей бабушки Рэйко [夏目 レイコ], узнавая с каждым разом всё больше и больше о её необычной жизни, и вместе с этим всё глубже и сильнее погружаясь в таинственный и загадочный мир ёкаев, незаметно существующий для остальных людей и временами, как часто выясняется, с ними тесно пересекающийся.",
    "screenshots": [],
    "episodes": 11,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 111,
    "title": "Тетрадь дружбы Нацумэ 3",
    "rating": 8.56,
    "rank": 111,
    "type": "Сериалы",
    "shikimori_id": "10379",
    "img": "https://shikimori.one/system/animes/original/10379.jpg?1711965738",
    "plot": "Такаши Нацумэ [夏目貴志] всё так же видит духов и как раньше вместе со своим телохранителем Мадарой [斑] старается освободить их, возвращая имена и тем самым освобождая от сил «Тетради дружбы». И, конечно же, без неприятностей в этом деле не обходится.",
    "screenshots": [],
    "episodes": 13,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 112,
    "title": "Я хочу съесть твою поджелудочную",
    "rating": 8.55,
    "rank": 112,
    "type": "Фильмы",
    "shikimori_id": "36098",
    "img": "https://shikimori.one/system/animes/original/36098.jpg?1711958622",
    "plot": "Одним прекрасным днём ученик старшей школы находит чей-то личный дневник, подписанный как «Дневник болезни». Вскоре выясняется, что дневник этот принадлежит Сакуре Ямаути [山内 桜良], однокласснице главного героя. Прочтя его, Харуки Сига узнаёт, что девушка страдает смертельной болезнью — её поджелудочная железа перестала работать. Чтобы поддержать её в этой нелёгкой ситуации, юноша решает подружиться с Сакурой, несмотря на их совершенно разные характеры.",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 113,
    "title": "Поднятие уровня в одиночку 2: Восстаньте из тени",
    "rating": 8.55,
    "rank": 113,
    "type": "Сериалы",
    "shikimori_id": "58567",
    "img": "https://shikimori.one/system/animes/original/58567.jpg?1711833968",
    "plot": "Благодаря новообретённой профессии — Монарх Теней, дающей власть над теневой армией, [character=174185]Сон Джину[/character] становится достаточно сильным, чтобы наконец отправиться в Дьявольский Замок. Его цель — найти три предмета, необходимые для создания Эликсира Жизни, единственного средства, способного излечить болезнь его матери [character=173977 кёнхе-пак]Кёнхе[/character].\nТем временем гигантские муравьи, населяющие печально известный остров Чеджу, начинают отращивать крылья. Это означает, что вскоре они смогут представлять серьёзную угрозу и за пределами острова. «Время пришло. Больше ждать нельзя». Ассоциация Охотников Кореи при поддержке S-ранговых охотников из Японии планирует четвёртый — решающий рейд на остров Чеджу, чтобы покончить с угрозой раз и навсегда.\nДостигнет ли [character=174185]Сон Джину[/character] своей цели? И останется ли он в стороне, если даже сильнейшим охотникам остров может оказаться не по зубам?",
    "screenshots": [],
    "episodes": 13,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 114,
    "title": "Сёва-Гэнроку: Двойное самоубийство по ракуго",
    "rating": 8.55,
    "rank": 114,
    "type": "Сериалы",
    "shikimori_id": "28735",
    "img": "https://shikimori.one/system/animes/original/28735.jpg?1711974112",
    "plot": "Как должен жить человек, только что вышедший из тюрьмы? Что он собирается делать дальше, намеренно или случайно оступившись в прошлом? Какое будущее ему предначертано?\nКогда Ётаро отбывал свой срок в тюрьме, ему посчастливилось увидеть выступление одного знаменитого ракугоки, Якумо [八代目 有楽亭 八雲]. Тогда этот рассказчик исполнил историю под названием «Синигами», которая глубоко вонзилась в сердце Ётаро. В тот момент парень по-настоящему осознал, что с этого момента ракуго — смысл его жизни, потому после освобождения сразу же отправился к Якумо, чтобы стать его учеником. Правда, этот рассказчик никогда ранее не брал никого в ученики, но, к всеобщему удивлению, он принял бывшего заключённого и дал ему место, где тот бы мог жить и учиться у своего новоиспечённого учителя. Так, полный сил и надежд, Ётаро начинает новую жизнь.\nВ жилище Якумо парень знакомится с подопечной Юракутэя [八代目 有楽亭 八雲], Конацу, истина гибели отца которой должна пролить свет на мотивы и помыслы великого ракугоки относительно Ётаро.",
    "screenshots": [],
    "episodes": 13,
    "voiceovers": [
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 115,
    "title": "Сказ о четырёх с половиной татами",
    "rating": 8.55,
    "rank": 115,
    "type": "Сериалы",
    "shikimori_id": "7785",
    "img": "https://shikimori.one/system/animes/original/7785.jpg?1711982614",
    "plot": "Второкурсник Киотского университета обнаруживает, что жизнь его безнадёжно испорчена. Клуб, куда он вступил, безнадёжен, лучший друг оказывается негодяем и подлецом, а других друзей у него нет. Вдобавок, единственную девушку, с которой он хотел сблизиться, увёл его так называемый друг.\n\nВпрочем, как известно, большинство богов живут в Киото, и наш герой получает второй шанс, столкнувшись поздно ночью в рамэнной с кем-то, называющим себя богом.",
    "screenshots": [],
    "episodes": 11,
    "voiceovers": [
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 116,
    "title": "Врата Штейна 0",
    "rating": 8.55,
    "rank": 116,
    "type": "Сериалы",
    "shikimori_id": "30484",
    "img": "https://shikimori.one/system/animes/original/30484.jpg?1711975203",
    "plot": "Действие берёт начало в декабре 2010 года и разворачивается в поле аттрактора β.\nВпавший в отчаяние Ринтаро Окабэ изо всех сил пытается оправиться от последней неудачной попытки изменить будущее. Стремясь забыть всё то, что он пережил в прошлом, и избавиться от терзающих его сознание болезненных воспоминаний, он решает забросить своё второе «я» в лице безумного учёного и начать жить как подобает обычному студенту. Как только, казалось бы, жизнь начинает налаживаться, он внезапно встречает  Махо Хиядзё, знакомую Курису Макисэ из американского университета. Махо рассказывает Ринтаро, что в их лаборатории уже начали тестирование нового изобретения, которое предоставляет возможность хранить память человека и способно воссоздать его личностные качества со всеми особенностями характера внутри себя. Приобретение возможности симулировать с помощью этого устройства память Курису приносит в жизнь Окабэ новый переполох, как будто бы возвращая его в пугающее прошлое. Он даже подумать не мог, что это принесёт столько мучений и новых неожиданных последствий в предстоящие времена.",
    "screenshots": [],
    "episodes": 23,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 117,
    "title": "Судьба/Начало 2",
    "rating": 8.54,
    "rank": 117,
    "type": "Сериалы",
    "shikimori_id": "11741",
    "img": "https://shikimori.one/system/animes/original/11741.jpg?1711949317",
    "plot": "Четвёртая война за Святой Грааль вступает в решающую фазу. Участников становится всё меньше, накал борьбы зашкаливает. Битвы уже невозможно скрыть от посторонних, и маленький городок Фуюки становится ареной для кровавой борьбы. Маги осознают, что Грааль почти в их руках, и не гнушаются никакими средствами ради победы.\nНачало истории известно, ее конец близок. Остается только наблюдать, чем все завершится.",
    "screenshots": [],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 118,
    "title": "Путешествие к бессмертию 4",
    "rating": 8.54,
    "rank": 118,
    "type": "ONA",
    "shikimori_id": "60557",
    "img": "https://shikimori.one/assets/globals/missing_original.jpg",
    "plot": "Путешествие к бессмертию 4",
    "screenshots": [],
    "episodes": 52,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 119,
    "title": "Клинок, рассекающий демонов: Бесконечный поезд. Фильм",
    "rating": 8.54,
    "rank": 119,
    "type": "Фильмы",
    "shikimori_id": "40456",
    "img": "https://shikimori.one/system/animes/original/40456.jpg?1711958541",
    "plot": "Не успели герои восстановиться, как вновь получают задание. В этот раз под предводительством «столпа пламени» [character=151143]Кёдзюро Рэнгоку[/character] они попадают в поезд, в котором за короткий промежуток времени пропало более сорока человек и было убито несколько отправленных на разведку мечников. Какую тайну скрывает этот поезд и с чем придётся столкнуться новому отряду?",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 120,
    "title": "Госпожа Кагуя: в любви как на войне — Лестница во взрослую жизнь",
    "rating": 8.54,
    "rank": 120,
    "type": "ONA",
    "shikimori_id": "61903",
    "img": "https://shikimori.one/assets/globals/missing_original.jpg",
    "plot": "Время неумолимо бежит, и вот уже несколько лет отделяют [character=136685]Миюки Сироганэ[/character] и [character=136359]Кагую Синомию[/character] от выпускного в старшей школе. Однажды, разбирая старые вещи, [character=136359]Кагуя[/character] случайно наткнулась на сокровище — фотоальбом, хранящий в себе застывшие мгновения школьных лет. При виде знакомых лиц и мест, её охватила тёплая волна ностальгии, и она, не раздумывая, погрузилась в просмотр, чтобы вновь пережить дорогие сердцу моменты юности. В этом альбоме хранятся воспоминания не только Кагуи, но и других членов школьного совета и их друзей.",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 121,
    "title": "Атака титанов 2",
    "rating": 8.54,
    "rank": 121,
    "type": "Сериалы",
    "shikimori_id": "25777",
    "img": "https://shikimori.one/system/animes/original/25777.jpg?1711973455",
    "plot": "Люди и титаны. Кто из них охотник, а кто жертва? Для того, чтобы понять это, был создан разведкорпус, который в данный момент находится под командованием Эрвина Смита [エルヴィン・スミス]. Но последние загадочные события, во многих из которых были замешаны кадеты 104-го корпуса, поставили командира разведкорпуса в трудное положение. \nКто же такие эти титаны? Откуда они явились? Есть ли ещё люди, которые могут превращаться в титанов? Кто создал эти стены, в которых прячутся люди? И что спрятано в подвале дома Эрена [エレン・イェーガー]?\nВсе эти вопросы так и остались без ответов. Но у Эрена [エレン・イェーガー] и его друзей всё те же цели — уничтожить всех титанов, найти ответы и при этом ещё и выжить. А значит — ему ещё не раз придется использовать силу титанов, чтобы узнать «Истину этого мира».",
    "screenshots": [],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 122,
    "title": "Девичья опера: Свет ревю. Фильм",
    "rating": 8.54,
    "rank": 122,
    "type": "Фильмы",
    "shikimori_id": "40664",
    "img": "https://shikimori.one/system/animes/original/40664.jpg?1711973976",
    "plot": "Две девушки пообещали друг другу, что однажды окажутся на сцене. Спустя много лет они встретились на прослушивании, которое может претворить их мечту в жизнь, однако пройти его и стать звездой сможет лишь одна из них. На одной чаше весов невероятная карьера и исполнение давней мечты, на другой — человеческие отношения. Что победит в итоге: желание реализоваться и достичь цели или стремление сохранить дружбу? А, быть может, есть вариант получить всё и сразу?",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 123,
    "title": "Корзинка фруктов 2",
    "rating": 8.53,
    "rank": 123,
    "type": "Сериалы",
    "shikimori_id": "40417",
    "img": "https://shikimori.one/system/animes/original/40417.jpg?1711949624",
    "plot": "Прошёл год с того момента, как Тору Хонда [本田 透] поселилась в доме семьи Сома. За это время она укрепила отношения с живущими в нём Сигурэ [草摩 紫呉], Кё [草摩 夾] и Юки [草摩 由希]. Кроме того, она сблизилась с другими членами семьи и, помогая им с множеством личных проблем, узнала об их родовой тайне. Однако чем больше узнаёт Тору, тем лучше понимает, что этот секрет скрывает правду намного темнее, чем она предполагала сначала.\n\nПриближается лето, и Хонду приглашают провести его вместе с Сома, по большей части с Кё и Юки. Тору надеется на спокойные каникулы, однако её близкие отношения с двумя парнями и остальными членами их семьи могут оказаться причиной неприятностей. По мере того, как они становятся ближе, их совместному беззаботному времяпровождению препятствуют старые трудности и чувства из прошлого, начинающие всплывать на поверхность.\n\nТрадиционный Банкет не за горами, и все члены «зодиака» должны выполнять свои обязанности бок о бок с нервным главой семьи, Акито [草摩 慊人]. С приближением Банкета и избытком чувств, в которых нужно разобраться, останется ли жизнь Тору с семьёй Сома такой же мирной, или же она окажется в ситуации, из которой выхода нет?",
    "screenshots": [],
    "episodes": 25,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 124,
    "title": "Благоухающий цветок расцветает с достоинством",
    "rating": 8.53,
    "rank": 124,
    "type": "Сериалы",
    "shikimori_id": "59845",
    "img": "https://shikimori.one/assets/globals/missing_original.jpg",
    "plot": "В тихом городке, где государственная школа Тидори и закрытая академия Кикё соседствуют, их ученики живут словно в разных мирах. Тидори — это школа «грубой силы»: вечные драки на переменах и хулиганы с устрашающими лицами. [character=211617 ринтаро-цумуги], шестнадцатилетний ученик Тидори, вполне привык к репутации «страшного парня» и беззаботно проводит дни в компании верных друзей, помогая по вечерам в семейной кондитерской.\nОднажды в лавку [character=211617 ринтаро-цумуги]Цумуги[/character] заходит таинственная покупательница, но, смущённая, уходит прежде, чем он успевает обратиться к ней. Наутро он обнаруживает записку, в которой девушка — [character=211945 каоруко-вагури], ученица престижной девичьей академии Кикё — признаётся, что вовсе не испугалась его внешности, а напротив, нашла его добрым и искренним. Для [character=211617 ринтаро-цумуги]Ринтаро[/character] это кажется невероятным: как может ученица элитной школы оценить ученика из «гнезда хулиганов»?\nПервая встреча переворачивает мир обоих подростков: под масками социального статуса и предрассудков начинают пробиваться тёплые чувства и желание понять друг друга. Несмотря на враждебность, царящую между Тидори и Кикё, и недоверие ровесников, [character=211617 ринтаро-цумуги]Ринтаро[/character] и [character=211945 каоруко-вагури]Каоруко[/character] решают преодолеть барьеры: от школьных коридоров до собственных страхов. Их история — это нежная, проникновенная драма о том, как искренность и взаимное уважение способны расцветать, подобно самому благородному цветку, даже в самых неприветливых условиях.",
    "screenshots": [],
    "episodes": 13,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 125,
    "title": "Мастер муси: Тень, поглотившая Солнце",
    "rating": 8.53,
    "rank": 125,
    "type": "ONA",
    "shikimori_id": "21329",
    "img": "https://shikimori.one/system/animes/original/21329.jpg?1711965165",
    "plot": "Рассказ об очередном необычном случае из жизни Гинко. На сей раз ему предстоит увидеть редкое явление — затмение солнца — и решить проблемы, вызванные не менее редким муси.",
    "screenshots": [],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 126,
    "title": "Тетрадь дружбы Нацумэ 2",
    "rating": 8.53,
    "rank": 126,
    "type": "Сериалы",
    "shikimori_id": "5300",
    "img": "https://shikimori.one/system/animes/original/5300.jpg?1711983954",
    "plot": "Второй сезон истории повествует о продолжении приключений Такаши Нацумэ (夏目貴志) — юноши, с детства имеющего способность видеть духов — и его телохранителя Мадары (斑), названного Нянко-сэнсэем. Такаши продолжает возвращать духам их имена, освобождая их от «Тетради дружбы», унаследованной от бабушки [character=13886]Рэйко[/character]. Он сталкивается с духами, демонами, помогает им и часто попадает в ситуации, опасные как для него, так и для окружающих.",
    "screenshots": [],
    "episodes": 13,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 127,
    "title": "Бакуман 3",
    "rating": 8.52,
    "rank": 127,
    "type": "Сериалы",
    "shikimori_id": "12365",
    "img": "https://shikimori.one/system/animes/original/12365.jpg?1711943385",
    "plot": "После всех испытаний, выпавших нашим молодым мангакам, они вновь добиваются своего — уже третьего по счёту сериала. И первый выпу��к получает первое место на голосовании читателей! Но это только начало пути успеха для Муто Асироги, ведь цель Такаги [高木秋人] и Масиро [真城最高] — добиться аниме по своей манге, в котором Михо [亜豆美保] смогла бы озвучить одну из женских ролей, и тогда они, наконец, смогут исполнить свои мечты! Вот только будет это нелегко, ведь их соперники уже впереди и не собираются уступать.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/31433d664974004aa669f65ecb4436aa689c5426.png?1523204175",
      "https://shikimori.one/system/screenshots/original/bb988ddd777cd77724f547c3c71103da4aade25d.png?1523204185",
      "https://shikimori.one/system/screenshots/original/79cddbee51aa6d66f4013228ca65fb2e74ac226a.png?1523204234",
      "https://shikimori.one/system/screenshots/original/fab378e1323611ebf5847b8b63f3123e1beca6c5.png?1523204245"
    ],
    "episodes": 25,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 128,
    "title": "Самурай Чамплу",
    "rating": 8.52,
    "rank": 128,
    "type": "Сериалы",
    "shikimori_id": "205",
    "img": "https://shikimori.one/system/animes/original/205.jpg?1711971815",
    "plot": "Мугэн — бывший пират. Агрессивный, безрассудный, он готов в любой момент насилием ответить на чей угодно вызов. Он носит за спиной меч, не традиционную катану, и использует уникальный боевой стиль, напоминающий брейк-данс и капоэйру.\nДзин — ронин, ведёт себя в традиционной стоической манере самурая эры Токугава. Он носит катану с вакидзаси и великолепно владеет клинком в традиционном японском стиле.\nТрудно найти двух более непохожих друг на друга людей, они сразу не понравились друг другу. Итогом их первой встречи стала сгоревшая таверна и смерть сына местного префекта, а самих их, надышавшихся угарным газом, бросают в тюрьму.\nОт смерти их спасает девушка Фу [フウ], работавшая в сгоревшей таверне. За спасение она просит помочь ей найти «самурая, пахнущего подсолнухами»...",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/905fbe8fd91608ec51281adeb336411bb7cac9f0.jpg?1679004535",
      "https://shikimori.one/system/screenshots/original/081bd3b0aa221e4e9b8142c9e7d1f00278dd4218.jpg?1679004535",
      "https://shikimori.one/system/screenshots/original/f91a92566aed337884a85c225189d0930219b76f.jpg?1679004536",
      "https://shikimori.one/system/screenshots/original/4d8c1230a957fa3399ba6624944a68b00ff469e0.jpg?1679004536"
    ],
    "episodes": 26,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 129,
    "title": "Гинтама: Сказание о Бэнидзакуре",
    "rating": 8.52,
    "rank": 129,
    "type": "Фильмы",
    "shikimori_id": "7472",
    "img": "https://shikimori.one/system/animes/original/7472.jpg?1711951382",
    "plot": "Официальный сайт гласит, что премьерный показ полнометражного фильма «Гинтама: Новый пересказ», адаптации альтернативно-исторической гэг-манги [person=1904]Хидэаки Сорати[/person], состоится в Японии во время «[url=http://ru.wikipedia.org/wiki/Золотая_неделя]Золотой недели[/url]» — череды праздников, что тянутся с конца апреля и до первой недели мая. Как и подразумевает название, действия тесно соприкасаются с сюжетом TV-сериала.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/f0e78d757bb0a6650ccb58863037e45cf9cc7f55.jpg?1423541836",
      "https://shikimori.one/system/screenshots/original/2224c294a7c99904bd7fbabad2b78fc48f06c4b5.jpg?1423541836",
      "https://shikimori.one/system/screenshots/original/4eb1fefdff85d90703f4f77dac712fad885be58e.jpg?1423541837",
      "https://shikimori.one/system/screenshots/original/1e84a8f0346c37cff6872284878a8f7d132f8054.jpg?1423541837"
    ],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 130,
    "title": "Доктор Стоун: Научное будущее. Часть 2",
    "rating": 8.52,
    "rank": 130,
    "type": "Сериалы",
    "shikimori_id": "61322",
    "img": "https://shikimori.one/assets/globals/missing_original.jpg",
    "plot": "После тщательно продуманного стратегического манёвра команде [character=148984 сэнку-исигами] удаётся остановить силы доктора [character=190289 ксено-хьюстон-уингфилд]Ксено[/character], обладающие значительно более развитой наукой. Заключённое между двумя фракциями перемирие позволяет заложить в Северной Америке новый оплот прогресса — Город Кукурузы, ставший символом надежды на возрождение человечества.\nОднако долгожданный покой оказывается недолгим. [character=148984 сэнку-исигами]Сэнку[/character] и его соратники отправляются в Южную Америку, к самому эпицентру загадочной вспышки окаменения — в непроходимые джунгли Амазонки. Именно здесь им предстоит основать Город Суперсплава — ключевой этап на пути к созданию космического корабля. Путь к цели будет полон опасностей: враги продолжают идти по их следу, а дикая природа скрывает бесчисленные угрозы и тайны. Но с каждым новым союзником и очередным научным прорывом [character=148984 сэнку-исигами]Сэнку[/character] приближается к разгадке природы окаменения и к финальной стадии своего великого проекта — полёту к звёздам.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/9b1f12e196441bbdb7cae0379036a7bb1138d5be.jpg?1752157682",
      "https://shikimori.one/system/screenshots/original/c3aff60521487c01e384745685a9c8ffd6037b45.jpg?1752157683",
      "https://shikimori.one/system/screenshots/original/dd0d2dd165e2c73019c4b520103a7436b1ff3399.jpg?1752157683",
      "https://shikimori.one/system/screenshots/original/b6d81386073e794355d1d3fa71b3797a3cd48dca.jpg?1752157684"
    ],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 131,
    "title": "Гинтама 6",
    "rating": 8.51,
    "rank": 131,
    "type": "Сериалы",
    "shikimori_id": "35843",
    "img": "https://shikimori.one/system/animes/original/35843.jpg?1711951375",
    "plot": "Очередной сезон представляет собой экранизацию нескольких пропущенных комедийных арок в манге. Сериал поведает о приключениях Ёродзуи вместе с остальными жителями Эдо, происходящих во время начала четвёртого сезона.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/c9d2f9a0798d7cd0845b8f8ede79fca786799888.png?1509737528",
      "https://shikimori.one/system/screenshots/original/aef3d3aa85759b5c0c18a0654dbd88e4d05f7601.png?1509737532",
      "https://shikimori.one/system/screenshots/original/2e2c90d3141093a81bb48a8c2d07f3def11621c8.png?1509737537",
      "https://shikimori.one/system/screenshots/original/4eda275cdc677e7fa35d3cbfff1849faeec28901.png?1509737542"
    ],
    "episodes": 13,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 132,
    "title": "Невероятное приключение ДжоДжо: Каменный океан. Часть 3",
    "rating": 8.51,
    "rank": 132,
    "type": "ONA",
    "shikimori_id": "53273",
    "img": "https://shikimori.one/system/animes/original/53273.jpg?1709665727",
    "plot": "Несмотря на то, что двадцать пять лет назад [character=4003]Джотаро Куджо[/character] победил [character=4004]Дио[/character] в Египте, священник [character=17676]Пуччи[/character] продолжил наследие вампира. Не имея возможности рассчитывать на помощь своего отца [character=4003]Джотаро[/character], [character=11222]Джолин[/character] и её союзники пытаются помешать [character=17676]Пуччи[/character] добраться до Космического центра Кеннеди к новолунию, где он надеется осуществить свою конечную цель — «помочь человечеству достичь небес». Он стремится исполнить волю кровного врага Джостаров — [character=4004]Дио Брандо[/character] и, лишив человечество свободы воли и сделав их рабами судьбы, создать мир, где все люди будут счастливы. Теперь [character=11222]Джолин[/character] должна использовать всё, чему она научилась в тюрьме, чтобы противостоять [character=17676]Пуччи[/character] в кульминационной битве, пока сам мир висит на волоске.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/2f8f1b9fd9596c173e94edb5c5721b0048f93bf0.jpg?1669903848",
      "https://shikimori.one/system/screenshots/original/6e398fea84ae6fb3a1650025aef1ce06afe635de.jpg?1669903849",
      "https://shikimori.one/system/screenshots/original/bc28b954e460241d2f03180ed29bcd5e83026658.jpg?1669903849",
      "https://shikimori.one/system/screenshots/original/ed6914eb5fb86b9bcf8ce8234ac17a473a40917e.jpg?1669903849"
    ],
    "episodes": 14,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 133,
    "title": "Граница пустоты 5: Спираль парадокса",
    "rating": 8.51,
    "rank": 133,
    "type": "Фильмы",
    "shikimori_id": "4282",
    "img": "https://shikimori.one/system/animes/original/4282.jpg?1711957609",
    "plot": "Сики Рёги встречает юношу по имени Томоэ Эндзё, который заявляет, что сбежал из дома после убийства собственной матери. Сики позволяет Томоэ укрыться у неё в квартире, и с этого дня начинается их странное сожительство.\nНо наступает день, когда Томоэ встречает свою мать, которую он считал ранее убитой. После этой встречи Томоэ вместе с Сики отправляются в его старую квартиру в Огава-Комплексе, чтобы узреть истинное положение дел. Тут Сики встречает могущественного мага по имени Сорэн Арая [荒耶宗蓮], соперника Токо Аодзаки. Именно он стоит за всеми прошлыми событиями, произошедшими с Сики...",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/1a62a07ecc93c6f7695c16776b2fa73c357bc5e4.jpg?1423546569",
      "https://shikimori.one/system/screenshots/original/cdd42803060810bfe883e19a5c0337228a2bd0bf.jpg?1423546569",
      "https://shikimori.one/system/screenshots/original/b0d5d796392739bbb0ad2474bf070a460c41c68c.jpg?1423546569",
      "https://shikimori.one/system/screenshots/original/5ee8800cfca970f29b05f186a86b68d940dcc0b4.jpg?1423546570"
    ],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 134,
    "title": "Призрак в доспехах: Синдром одиночки 2",
    "rating": 8.51,
    "rank": 134,
    "type": "Сериалы",
    "shikimori_id": "801",
    "img": "https://shikimori.one/system/animes/original/801.jpg?1711961232",
    "plot": "В мире будущего, где интернет и кибернетика стирают границы между обществами; члены Девятого отдела общественной безопасности восстановлены в должностях для решения проблемы многочисленных киберпреступлений. Волна подобных преступлений, совершаемых отдельными группами самоубийц, известными как The Individual Eleven, становится основной целью для Девятого отдела, поскольку приближается война из-за беженцев, наводнивших страну.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/55e35ed239b4a783e322923d97b99b427296ce6b.jpg?1423555718",
      "https://shikimori.one/system/screenshots/original/2a2c75e56e61fb43be59bbb53db4a2984a4effa6.jpg?1423555719",
      "https://shikimori.one/system/screenshots/original/d8d0fe38bde56c76a2c03970102af30643debc42.jpg?1423555719",
      "https://shikimori.one/system/screenshots/original/8babf230ca2acd0adf52f0a019524c65a9ed287c.jpg?1423555719"
    ],
    "episodes": 26,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 135,
    "title": "Невероятное приключение ДжоДжо: Несокрушимый алмаз",
    "rating": 8.5,
    "rank": 135,
    "type": "Сериалы",
    "shikimori_id": "31933",
    "img": "https://shikimori.one/system/animes/original/31933.jpg?1711956267",
    "plot": "Прибрежный городок Морио до поры до времени был тихим и ничем не примечательным, пока однажды там не появился древний артефакт «Лук и стрела», способный пробуждать в людях скрытые способности, также называемые «стендами». Это породило волну необычных и необычайных событий, среди которых особо выделяются исчезновения молодых девушек.\nОднако никто не поднимает шум, и убийце живётся весьма вольготно, пока однажды в Морио не прибывает молодой океанолог Джотаро Куджо. И теперь загадочному маньяку предстоит противостоять ему, а также [character=13085]Джоскэ Хигашикате[/character], несокрушимому, как алмаз.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/953c42ab873a83884b74713290047bfd972f4a8c.jpg?1652604088",
      "https://shikimori.one/system/screenshots/original/ba9a85b035ff0410087c3245644536fdd1df8bba.jpg?1652604088",
      "https://shikimori.one/system/screenshots/original/7ae709728aea468f76980be94c3873d369cb9570.jpg?1652604088",
      "https://shikimori.one/system/screenshots/original/707fd80ca74854883592362798f2011a9c63ec16.jpg?1652604089"
    ],
    "episodes": 39,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 136,
    "title": "Необъятный океан 2",
    "rating": 8.5,
    "rank": 136,
    "type": "Сериалы",
    "shikimori_id": "59986",
    "img": "https://shikimori.one/assets/globals/missing_original.jpg",
    "plot": "Жизнь [character=144581]Иори Китахары[/character] продолжает играть всеми красками юности на фоне манящего Тихого океана. После переезда в Идзу к своему дяде, владеющему магазином для дайверов, герой вновь с головой погружается в беззаботную студенческую суету — морепродукты, шумные вечеринки, новые друзья и, конечно, приключения в подводном мире. Между смехом, романтикой и попытками преодолеть собственные страхи [character=144581]Иори[/character] открывает для себя, что под слоем весёлой неразберихи скрывается куда более глубокий — и порой пугающе прекрасный — океан взросления и самопознания.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/3c33cb4a119993cbcb2b9a4f88117099b8c9ad23.jpg?1751911179",
      "https://shikimori.one/system/screenshots/original/d28509f0f3c5bc19f1325773804735f9366398b5.jpg?1751911183",
      "https://shikimori.one/system/screenshots/original/6ddf72b53c24f309334569f0f076ee4d32504368.jpg?1751911188",
      "https://shikimori.one/system/screenshots/original/528972b5dc5f8b4dd7d78a9be34d7ff210bdf31d.jpg?1751911192"
    ],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 137,
    "title": "Магическая битва",
    "rating": 8.5,
    "rank": 137,
    "type": "Сериалы",
    "shikimori_id": "40748",
    "img": "https://shikimori.one/system/animes/original/40748.jpg?1711956606",
    "plot": "Действие аниме происходит в мире, где люди оказались вовсе не последним звеном в пищевой цепи, и любой ничего не подозревающий обыватель при должной доле невезения может оказаться съеденным демонами, которые воплощают собой негативные человеческие эмоции. Таких созданий называют проклятиями. Пускай люди в большинстве своём не догадываются о существовании проклятий, те имеют уже давнюю историю, одним из эпизодов которой являются деяния легендарного демона [character=175198]Сукуны Рёмэна[/character], которого с большим трудом удалось одолеть. Его тело было поделено на двадцать частей, которые оказались разбросаны по миру. Если найдётся некто, кто поглотит все фрагменты его плоти, то он обретёт мощь, способную уничтожить современную цивилизацию.\nВот такая сложилась ситуация в мире, где в полном неведении о нависшей над человечеством угрозе проживает старшеклассник Юдзи Итадори. У Юдзи совершенно иные заботы: он каждый день навещает дедушку в больнице и отбрыкивается от спортивных кружков, которые мечтают заполучить его из-за выдающейся физической силы и выносливости. Юдзи предпочёл вступить в клуб оккультных наук, с которого и начались все неприятности, когда в руки членов клуба попал таинственный предмет, на который наложено проклятье. Не долго думая, школьники разбили запечатывающее заклинание и выпустили на свет ужасные силы.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/1ee4860e989de906fc2e18b7d5101400eab40613.jpg?1664386613",
      "https://shikimori.one/system/screenshots/original/d434f780798ee01dae8c36bb5e0167621fb87d54.jpg?1664386614",
      "https://shikimori.one/system/screenshots/original/16cc8748f903a139b3e03d1a23dd3f65a4ef37d0.jpg?1664386614",
      "https://shikimori.one/system/screenshots/original/c611845c68f044fc3f02f21d154e1b589705d8f1.jpg?1664386615"
    ],
    "episodes": 24,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 138,
    "title": "Девочка-волшебница Мадока★Волшебный фильм 3: История восстания",
    "rating": 8.5,
    "rank": 138,
    "type": "Фильмы",
    "shikimori_id": "11981",
    "img": "https://shikimori.one/system/animes/original/11981.jpg?1711962325",
    "plot": "Третий фильм тетралогии. В отличие от первых двух фильмов, не является пересказом событий сериала.\nПосле того, как Мадока [鹿目 まどか] перестроила Вселенную, Хомура [暁美 ほむら] живёт в мире, где ведьмы больше не рождаются. Но отчаяние людей всё ещё проявляется в существах, известных как призраки, с которыми и сражаются девочки-волшебницы. Хомура продолжает бороться со своим одиночеством после расставания с Мадокой. В фильме также появляется новая волшебница по имени Нагиса Момоэ.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/bc9bac938b0eaedd1e6f3f81c94c09df37f76901.jpg?1423536382",
      "https://shikimori.one/system/screenshots/original/1f3d26de5e9714394642359e90a24dfa69af829a.jpg?1423536383",
      "https://shikimori.one/system/screenshots/original/3e2d0c9fc61cf3d8f9fea284f25abe3cf6822be2.jpg?1423536383",
      "https://shikimori.one/system/screenshots/original/87754fb4144991f429b164d27d0f9e3d2ddfc091.jpg?1423536383"
    ],
    "episodes": 1,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 139,
    "title": "Противостояние святого",
    "rating": 8.5,
    "rank": 139,
    "type": "ONA",
    "shikimori_id": "55809",
    "img": "https://shikimori.one/system/animes/original/55809.jpg?1718844656",
    "plot": "Противостояние святого",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/5850333fb3901a9f8ed12110bcd267d0b036133f.jpg?1704710817",
      "https://shikimori.one/system/screenshots/original/0881f2e8d567842f6be167f86430c9476dfb2f4d.jpg?1704710819",
      "https://shikimori.one/system/screenshots/original/c08f46c44889e61288042110abb854d6082aa934.jpg?1704710820",
      "https://shikimori.one/system/screenshots/original/82aabfe28b13f573bc51df287f00a4acf226c8f9.jpg?1704710822"
    ],
    "episodes": 180,
    "voiceovers": [
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 140,
    "title": "Моб Психо 100",
    "rating": 8.49,
    "rank": 140,
    "type": "Сериалы",
    "shikimori_id": "32182",
    "img": "https://shikimori.one/system/animes/original/32182.jpg?1711964270",
    "plot": "Бросив первый поверхностный взгляд, мы узрим банальнейший сюжет, коих перевидали сотни: школа, кружки по интересам, ученики, пытающиеся выстроить свою личность и отношения в коллективе, разумеется, первая любовь, комплексы и тому подобные подростковые проблемы.\nОднако эта история не будет ординарной. Эта история будет экстраординарной. И таковой ее сделает выдающийся главный герой. Шигэо Кагэяма вроде бы обычный японский школьник — стеснительный, старающийся не привлекать внимания, не блещущий умом, красотой или чувством юмора. И самое большое его желание — привлечь внимание любимой девушки. Но! У этого восьмиклассника есть экстрасенсорные способности. С детства он взглядом гнет ложки и передвигает предметы. И пусть общественность пока этого не оценила, зато выгоду в этом очень скоро нашел его «ментальный наставник», эксплуатирующий способности Кагэямы себе на поживу.\nКак будет искать свой путь в этом привычно жестоком мире юный экстрасенс — нам и предстоит увидеть.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/1f669dfbf3e71c40cd1a30223f02de4b91664851.jpg?1468419439",
      "https://shikimori.one/system/screenshots/original/f011eaffdbf812a25aa20601d6b3a63f39095cd9.jpg?1468419439",
      "https://shikimori.one/system/screenshots/original/16316d224d3af147fa62f438fe221992236c5a7b.jpg?1468419440",
      "https://shikimori.one/system/screenshots/original/b27f41391a4601c1b7fd2bcab1aaaaab8f20b3be.jpg?1468419443"
    ],
    "episodes": 12,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 141,
    "title": "Ария: Происхождение",
    "rating": 8.48,
    "rank": 141,
    "type": "Сериалы",
    "shikimori_id": "3297",
    "img": "https://shikimori.one/system/animes/original/3297.jpg?1711942150",
    "plot": "Акари Мидзунаси (水無 灯里), Айка С. Гранчеста (藍華·S·グランチェスタ) и Алиса Кэррол (アリス·キャロル) продолжают усердно трудиться в Новой Венеции ради того дня, когда они смогут стать полноправными ундинами-примами — профессиональными гондольерами-гидами. [[С]] момента начала обучения прошло уже достаточно времени, и девушки многому научились, а теперь ищут собственный неповторимый стиль в качестве ундин.\nНа этом нелёгком пути они полагаются на советы старших наставниц: терпеливой и понимающей Алисии Флоренс (アリシア·フローレンス) из компании «Ария», строгой и правильной Акиры Э. Феррари (晃·E·フェラーリ) из «Химэи» и неуклюжей, но заботливой Атэны Глори (アテナ·グローリィ) из «Оранжевой Планеты».\nНо хватит ли им помощи наставниц и собственных знаний о Новой Венеции для того, чтобы стать ундинами-примами?\nИ вновь добро пожаловать в Новую Венецию — город, олицетворяющий теплоту и спокойствие.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/5e48edaa9d0c36daff1213be06bd2f27e3afd2a1.jpg?1677409597",
      "https://shikimori.one/system/screenshots/original/8bb68e7d075d853c140f8dc010cfafd81ca78887.jpg?1677409600",
      "https://shikimori.one/system/screenshots/original/c3cd3ee32a8f8976dd242793864dfc4b1c83c950.jpg?1677409602",
      "https://shikimori.one/system/screenshots/original/c62a75f2dee2bf12db675a9548526e921e90fc77.jpg?1677409605"
    ],
    "episodes": 13,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 142,
    "title": "Троецарствие Японии",
    "rating": 8.49,
    "rank": 142,
    "type": "Сериалы",
    "shikimori_id": "63375",
    "img": "https://shikimori.one/assets/globals/missing_original.jpg",
    "plot": "Троецарствие Японии",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/16ef951528acbc42bfbd521f95e17aa0db1d6b82.jpg?1775405825",
      "https://shikimori.one/system/screenshots/original/7554d4586d86c0c811aa3b5c367359b2fcafb274.jpg?1775405826",
      "https://shikimori.one/system/screenshots/original/2f3de25f8cf76b7b2dbe75f8c23198ba6a2fe8dc.jpg?1775405827",
      "https://shikimori.one/system/screenshots/original/18b763c83df90f85a1cc860a1b2a1446aae51f61.jpg?1775405827"
    ],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 143,
    "title": "Плутон",
    "rating": 8.44,
    "rank": 143,
    "type": "ONA",
    "shikimori_id": "35737",
    "img": "https://shikimori.one/system/animes/original/35737.jpg?1708758293",
    "plot": "В будущем человечество достигло небывалых технологических высот. Люди и роботы живут рука об руку, мирно сосуществуя. [character=9791]Гезихт[/character] — робот, ветеран прошлой войны, который ныне работает детективом. Ему было поручено раскрыть серию загадочных убийств людей и роботов, которые могли быть совершены роботами. В ходе расследования он обнаружил улики существования некой сущности, именуемой Плутoн, информация о которой тщательно скрывается правительством. Пытаясь отыскать правду и сохранить хрупкий мир между человеком и машиной, робот-детектив вступает в жестокую схватку с миром, полным ненависти и лжи.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/c1079bece2df1b84fa0c22dd9ad1ba01ca386fc4.jpg?1698341712",
      "https://shikimori.one/system/screenshots/original/ac83d9c2754ebfc3fa99a82be1fb5192d5eeef99.jpg?1698341713",
      "https://shikimori.one/system/screenshots/original/58dbcf171bfbb4acc0b816a116e1e705b2939bf1.jpg?1698341714",
      "https://shikimori.one/system/screenshots/original/5231c8bf57be852c34169159a50287ceca5de51d.jpg?1698341714"
    ],
    "episodes": 8,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 144,
    "title": "Магистр дьявольского культа",
    "rating": 8.44,
    "rank": 144,
    "type": "ONA",
    "shikimori_id": "37208",
    "img": "https://shikimori.one/system/animes/original/37208.jpg?1711964214",
    "plot": "Будучи основателем дьявольского культа, [character=163083]Вэй Усянь[/character] странствовал по свету, сея хаос и наполняя страхом сердца людей. Яростно ненавидимый всеми, он кончил тем, что собственный собрат-заклинатель предал его, отдав на расправу нескольким сильнейшим кланам, объединившимся, чтобы одолеть его.\nПроходит несколько десятков лет после тех страшных событий, и один отчаявшийся заклинатель, отвергнутый кланом, призывает [character=163083]Вэй Усяня[/character] из мира мёртвых, дабы тот воплотился в его теле и выполнил его последнее желание. К сожалению, всё идёт не по плану. То есть с воплощением всё сработало, а вот с остальным... [character=163083]Вэй Усяня[/character] забирает из клана и увозит с собой заклятый враг — [character=163084]Лань Ванцзи[/character].\nЭто, собственно, предыстория, а сама история пойдёт о совместных передрягах двух заклятых врагов — [character=163083]Вэй Усяня[/character] и [character=163084]Лань Ванцзи[/character], которым предстоит на пару отбиваться от монстров, разгадывать тайны и воспитывать детей. А совместный труд, он, как давно известно, объединяет.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/b49503c025d6bdb53537b9249f18be364bb1e173.jpg?1620388920",
      "https://shikimori.one/system/screenshots/original/a952560ef7afdd410d49641691ff681868eb74bb.jpg?1620388921",
      "https://shikimori.one/system/screenshots/original/15a1fb8c568c0d8f08bf7672727b657adfc60b47.jpg?1620388921",
      "https://shikimori.one/system/screenshots/original/f954f72e3409fcd443748f33de291e0f8f480139.jpg?1620388921"
    ],
    "episodes": 15,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 145,
    "title": "Золотое божество 3",
    "rating": 8.44,
    "rank": 145,
    "type": "Сериалы",
    "shikimori_id": "40059",
    "img": "https://shikimori.one/system/animes/original/40059.jpg?1711951647",
    "plot": "После судьбоносных событий прошлого сезона [character=138553]Сугимото Саити[/character] волей судьбы разделился со своей напарницей [character=138552]Асирпой[/character] и другом [character=138554]Сираиси Ёситаке[/character], а также потерял все добытые карты к золоту. Он вынужден отправиться в долгое путешествие на Карафуто на их поиски. В этом непростом путешествии ему поможет хороший знакомый [character=152461]Танигаки Гэндзиро[/character], а также сержант [character=158253]Цукисима Хадзимэ[/character] и лейтенант [character=158233]Който Отоносин[/character], которых ему представил [character=152372]Цуруми[/character]. Сможет ли он найти друзей на ранее неизведанной и опасной территории и не потерять человечность по пути?",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/93d6bdeae7072a259c9f9670abf4fcef62e33b10.jpg?1667684577",
      "https://shikimori.one/system/screenshots/original/7b43e3a2fb7cda57fca79df70b1c7d59fdcc23db.jpg?1667684577",
      "https://shikimori.one/system/screenshots/original/c304ad474509d33f2f3de63404873f61f0292852.jpg?1667684578",
      "https://shikimori.one/system/screenshots/original/2e60fcb2de870586f1f70b504f698bf0d1ac3eaf.jpg?1667684578"
    ],
    "episodes": 12,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 146,
    "title": "Невероятное приключение ДжоДжо: Рыцари звёздной пыли 2",
    "rating": 8.44,
    "rank": 146,
    "type": "Сериалы",
    "shikimori_id": "26055",
    "img": "https://shikimori.one/system/animes/original/26055.jpg?1711956303",
    "plot": "Преодолев уже бо́льшую часть пути, Джотаро Куджо [空条承太郎] и его спутники — ряд которых теперь пополнил и присланный фондом Спидвагона на подмогу пёс Игги [イギー] — не без трудностей продвигаются через весь Египет в Каир. До решающей схватки с Дио [ディオ・ブランドー] им придётся столкнуться с девятью обладателями стендов египетских богов. Новые враги не уступают в своей силе уже побеждённым владельцам стендов старших арканов Таро и так же преданно не разглашают тайну хозяина о способностях его «The World».",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/4fca2ec5f9aefcd2da5dd08af1c8783582692fcb.jpg?1626867061",
      "https://shikimori.one/system/screenshots/original/782a5b7529ec28804f3049ef3ec4b97242cd080a.jpg?1626867061",
      "https://shikimori.one/system/screenshots/original/388dda85f5a508fed77c3465715933be48793d66.jpg?1626867062",
      "https://shikimori.one/system/screenshots/original/c300b9f2d9f96b16ef00dcdd87de9550a990c480.jpg?1626867062"
    ],
    "episodes": 24,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 147,
    "title": "Человек-бензопила",
    "rating": 8.43,
    "rank": 147,
    "type": "Сериалы",
    "shikimori_id": "44511",
    "img": "https://shikimori.one/system/animes/original/44511.jpg?1711945574",
    "plot": "У Дэндзи [デンジ] есть мечта — жить мирной и счастливой жизнью, проводя время с любимой девушкой. Однако суровая реальность в лице некоего якудзы заставляет парня вернуться с небес на землю, ведь он вынужден убивать демонов, чтобы расплатиться с необъятными долгами покойного отца. Вместе со своим дьявольским питомцем [character=174750]Почитой[/character], которого использует в качестве оружия, Дэндзи готов сделать что угодно, даже за небольшую плату.\n\nВскоре парень изжил свою полезность и был убит демоном, заключившим контракт с якудзой. Но верный [character=174750]Почита[/character] спасает своего хозяина, заключив с ним контракт. Почита стал одним целым с умирающим Дэндзи, заменив ему сердце, и подарил ему силы человека-бензопилы. Теперь переродившийся Дэндзи, получив умение превращать части своего тела в бензопилы, использует новообретённые способности, чтобы быстро и жестоко расправляться с врагами. Попав под внимание Бюро общественной безопасности, парень получает работу охотника на демонов. Отныне, не страшась даже самых жестоких противников, Дэндзи не остановится ни перед чем, чтобы воплотить в жизнь свои мечты.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/671b95a264f37f6f0d3e34d32966f013d2e4b4fa.jpg?1665505144",
      "https://shikimori.one/system/screenshots/original/c816df0ea5f7b1e463265569c1832872c7a0f3a0.jpg?1665505145",
      "https://shikimori.one/system/screenshots/original/1c7ccd92d03eb4c5dba07bddf4b97db06f39dc4a.jpg?1665505145",
      "https://shikimori.one/system/screenshots/original/95b72c58640ccc2866a02dfdbd30790ab5d5342f.jpg?1665505145"
    ],
    "episodes": 12,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 148,
    "title": "Охотник х Охотник",
    "rating": 8.43,
    "rank": 148,
    "type": "Сериалы",
    "shikimori_id": "136",
    "img": "https://shikimori.one/system/animes/original/136.jpg?1711954420",
    "plot": "Охотниками в этом мире зовут людей, которые работают на правительство и путешествуют по миру, выполняя всевозможные опасные задачи, начиная с поимки преступников и заканчивая поиском сокровищ в неизведанных землях. Звание охотника налагает на владельца значительное число обязанностей и ограничений, однако даёт и множество привилегий. Многие стремятся стать охотниками из корыстных побуждений, но лишь немногие добиваются этого: испытание на получение звания длительное, суровое и смертельно опасное.\n\nПускай даже попасть на экзамен крайне непросто, Гон [ゴン＝フリークス] не готов отступиться. Он выяснил, что его отец — знаменитый охотник, пропавший без вести несколько лет назад. Гон намерен, как и отец, стать охотником и отыскать его во что бы то ни стало!",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/f3e7c97554d02915c4f512d04125ce7ddfa2fe08.jpg?1686148362",
      "https://shikimori.one/system/screenshots/original/932fbc7e20bae5f015c62a960f8e850b97230b27.jpg?1686148362",
      "https://shikimori.one/system/screenshots/original/f2b52b4f8725ce124bb02129325540e7e86d4b9f.jpg?1686148363",
      "https://shikimori.one/system/screenshots/original/f0647c131d9c44dfe353fa6e8369d238eb9c3c75.jpg?1686148363"
    ],
    "episodes": 62,
    "voiceovers": [
      "AniLibria",
      "AnimeVost"
    ],
    "videoSrc": ""
  },
  {
    "id": 149,
    "title": "Достучаться до тебя 3",
    "rating": 8.43,
    "rank": 149,
    "type": "ONA",
    "shikimori_id": "56538",
    "img": "https://shikimori.one/system/animes/original/56538.jpg?1717467344",
    "plot": "Достучаться до тебя 3",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/264b483a13e9040264603738c0d6ec285e8bc4b4.jpg?1722626207",
      "https://shikimori.one/system/screenshots/original/b887efae1d7d6ef9ac54221700854e114f0a0463.jpg?1722626208",
      "https://shikimori.one/system/screenshots/original/47ce7dc17dc2a2851c566ab9b6cd68dcddbb516d.jpg?1722626209",
      "https://shikimori.one/system/screenshots/original/b5d0dd4656c5de47b2e4c33178435db4665841b9.jpg?1722626210"
    ],
    "episodes": 5,
    "voiceovers": [
      "AniLibria"
    ],
    "videoSrc": ""
  },
  {
    "id": 150,
    "title": "Страна самоцветов",
    "rating": 8.39,
    "rank": 150,
    "type": "Сериалы",
    "shikimori_id": "35557",
    "img": "https://shikimori.one/system/animes/original/35557.jpg?1711954240",
    "plot": "Далёкое будущее. Самоцветы — новая форма жизни, населяющая Землю. У них нет гендерных различий, но они наделены бессмертием. Однако жизнь их, как и у людей, непростая: лунные обитатели постоянно терроризируют новых землян, дабы похитить и превратить в обычные украшения. Поэтому 28 самоцветов должны противостоять захватчикам.\nКаждому камню предназначена своя роль, например, воин или врач. Будучи всего 300-летним, [character=110355]Фосфофиллит[/character] (младший из всей расы), ещё не имеющий своего предназначения, хочет помочь в борьбе против лунных оккупантов, хотя он слишком слаб и хрупок для боя. Но вот, однажды, мастер Самоцветов — [character=123147]Адамант[/character] — поручает ему создать энциклопедию истории самородков.",
    "screenshots": [
      "https://shikimori.one/system/screenshots/original/054502d4d0d8794c6327691a1cd38db8228933ae.jpg?1629022361",
      "https://shikimori.one/system/screenshots/original/b731bfec9c7c5265014e37316ffefd9516e8b982.jpg?1629022362",
      "https://shikimori.one/system/screenshots/original/2dfa7fbe59f9bb71f459bbb7097d0d02339c4ca6.jpg?1629022362",
      "https://shikimori.one/system/screenshots/original/6ddfa8b7ba6555734104e63b56fd0e5643cf9c3d.jpg?1629022363"
    ],
    "episodes": 12,
    "voiceovers": [
      "AnimeVost"
    ],
    "videoSrc": ""
  }
];
