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

const proxyImg = (url: string) => url; // wsrv.nl is blocked in some regions, MAL works with no-referrer

const allowedVoiceovers = ['AniLibria', 'AnimeVost', 'Дубляж', 'Студийная Банда'];

const allAnimeData: Anime[] = [
  {
    id: 1, title: 'Атака титанов', rating: 9.1, rank: 1, type: 'Сериалы',
    shikimori_id: '16498',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/10/47347.jpg'),
    plot: 'Сотни лет назад человечество было почти истреблено гигантскими титанами. Выжившие спрятались за тремя огромными стенами. Главный герой, Эрен Йегер, клянется уничтожить каждого титана после того, как один из них разрушает его родной город. Вместе со своими друзьями он вступает в Разведотряд, чтобы дать отпор врагу.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/6bd6bcd45831dec851e029486d8b08bea5bd5615.jpg?1656089341"),
      proxyImg("https://shikimori.one/system/screenshots/original/3d5d710f743d74634ba03a79c0ee0f03d41475ac.jpg?1656089344"),
      proxyImg("https://shikimori.one/system/screenshots/original/fb63e2b49e78a980fa9fb8896cf3ed42965e8b23.jpg?1656089347"),
      proxyImg("https://shikimori.one/system/screenshots/original/1133e286d94b5fe2c9187311f893c56ae85fc58f.jpg?1656089349")
    ],
    episodes: 25, voiceovers: ['AniLibria', 'Студийная Банда', 'Субтитры'], videoSrc: ''
  },
  {
    id: 2, title: 'Тетрадь смерти', rating: 8.9, rank: 2, type: 'Сериалы',
    shikimori_id: '1535',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/9/9453.jpg'),
    plot: 'Старшеклассник Лайт Ягами находит загадочную тетрадь бога смерти. Человек, чьё имя будет записано в эту тетрадь, умрёт. Лайт решает использовать её, чтобы очистить мир от преступников. Однако его действия привлекают внимание гениального детектива L. Начинается великая битва умов.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/50f24d6cdd6cbaaccbb89cca9a7d73bbd6693f96.jpg?1511673367"),
      proxyImg("https://shikimori.one/system/screenshots/original/df7f907868c71e47bb86c9101f6d1a54714ad74f.jpg?1511673367"),
      proxyImg("https://shikimori.one/system/screenshots/original/6389be1ec35376b8344ae0c2bbf614b41f9cfb4d.jpg?1511673368"),
      proxyImg("https://shikimori.one/system/screenshots/original/74582494ad6727fb2f35801a4ce411eac7019fc3.jpg?1511673368")
    ],
    episodes: 37, voiceovers: ['2x2', 'Любительская', 'Субтитры', 'AnimeVost'], videoSrc: ''
  },
  {
    id: 3, title: 'Стальной алхимик: Братство', rating: 9.1, rank: 3, type: 'Сериалы',
    shikimori_id: '5114',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/1223/96541.jpg'),
    plot: 'Братья Эдвард и Альфонс Элрики нарушают главное табу алхимии: пытаются воскресить умершую мать. В результате Эд теряет руку и ногу, а душа Ала оказывается привязанной к доспехам. Чтобы вернуть свои тела, они отправляются на поиски легендарного Философского камня.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/109e67ae974e1950b16ea58abacfa79c78ae39b2.jpg?1578674893"),
      proxyImg("https://shikimori.one/system/screenshots/original/bab2700a71b2b2d1b24a20d3b409d3f18aedd08e.jpg?1578674894"),
      proxyImg("https://shikimori.one/system/screenshots/original/70a7a1ebb749494b36ce9f5279fa82d8fa897e3e.jpg?1578674895"),
      proxyImg("https://shikimori.one/system/screenshots/original/44f1247bdaae6691b255d4f9f45914ea04713458.jpg?1578674896")
    ],
    episodes: 64, voiceovers: ['AniDub', 'AniLibria', 'Субтитры'], videoSrc: ''
  },
  {
    id: 4, title: 'Унесённые призраками', rating: 8.6, rank: 4, type: 'Фильмы',
    shikimori_id: '199',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/6/79597.jpg'),
    plot: 'Переезжая в новый дом, десятилетняя Тихиро вместе с родителями попадает в странный пустующий город. С наступлением темноты её родители превращаются в свиней. Чтобы расколдовать их, девочка устраивается на работу в купальни для духов, которыми правит злая ведьма Юбаба.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/9037d4886b92dc572c020c0fd1ca2d6f3481adc3.jpg?1578674338"),
      proxyImg("https://shikimori.one/system/screenshots/original/df5ae1684d419b2a1eaa06ce5259621c1529d5c3.jpg?1578674339"),
      proxyImg("https://shikimori.one/system/screenshots/original/51e680f65f5e19bb47b7f5f9c55a8f0a8270a7d5.jpg?1578674340"),
      proxyImg("https://shikimori.one/system/screenshots/original/1032b87d3db8e0bb62339134c5ff5c937726396b.jpg?1578674341")
    ],
    episodes: 1, voiceovers: ['Дубляж', 'Субтитры'], videoSrc: ''
  },
  {
    id: 5, title: 'Твоё имя', rating: 8.4, rank: 5, type: 'Фильмы',
    shikimori_id: '32281',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/5/87048.jpg'),
    plot: 'Мицуха — девушка из японской провинции, Таки — старшеклассник из Токио. Однажды они начинают периодически меняться телами во сне и проживать жизни друг друга, оставляя записки. Пытаясь разобраться в происходящем, они выясняют шокирующую правду об их связи во времени.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/f247a65b1cbe13700e17aaad8a759f51e23c4a3c.jpg?1501185246"),
      proxyImg("https://shikimori.one/system/screenshots/original/6adb4f1f174d7bf3efe3f1bf50053f61e2c988b8.jpg?1501185251"),
      proxyImg("https://shikimori.one/system/screenshots/original/4230584158643221bfed36bd9fa973b7022e5f66.jpg?1501185257"),
      proxyImg("https://shikimori.one/system/screenshots/original/684a287cac79d246c1ed6194f5335267cfe1870b.jpg?1501185262")
    ],
    episodes: 1, voiceovers: ['Дубляж', 'Субтитры'], videoSrc: ''
  },
  {
    id: 6, title: 'Киберпанк: Бегущие по краю', rating: 8.3, rank: 6, type: 'ONA',
    shikimori_id: '42310',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/1818/126435.jpg'),
    plot: 'В антиутопическом Найт-Сити талантливый, но бедный парень Дэвид Мартинес теряет всё. Чтобы выжить, он устанавливает себе мощный военный кибер-имплант и присоединяется к команде наёмников. Он становится «эджраннером» — преступником, живущим на самом краю.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/337a6be03fa9db54f3805e6ade659e303d89d822.jpg?1663078902"),
      proxyImg("https://shikimori.one/system/screenshots/original/c696084e685842b0525c74ace4675c3858041dd9.jpg?1663078902"),
      proxyImg("https://shikimori.one/system/screenshots/original/98884d947a5fd3a8d29557b081705de2be3a537b.jpg?1663078903"),
      proxyImg("https://shikimori.one/system/screenshots/original/8a08dd439653be29c71647050e1e2ab92d338973.jpg?1663078903")
    ],
    episodes: 10, voiceovers: ['Red Head Sound', 'Субтитры', 'AniLibria'], videoSrc: ''
  },
  {
    id: 7, title: 'Ванпанчмен', rating: 8.7, rank: 7, type: 'Сериалы',
    shikimori_id: '30276',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/12/76049.jpg'),
    plot: 'Сайтама — обычный парень, решивший стать героем ради забавы. После трёх лет интенсивных тренировок он обрёл невероятную силу и теперь одним ударом может сокрушить любого монстра. Однако отсутствие достойных противников делает его жизнь невероятно скучной и лишенной эмоций.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/2a56c044c32aed9373605334d28ada9969b0b378.jpg?1702600661"),
      proxyImg("https://shikimori.one/system/screenshots/original/eb0ee094623eb0cbc97e5b9b5f26e98b5da8b86a.jpg?1702600662"),
      proxyImg("https://shikimori.one/system/screenshots/original/9f56aaadff7259c818533157e304707604e6b228.jpg?1702600663"),
      proxyImg("https://shikimori.one/system/screenshots/original/d488159959364f59e8704521ca4e2d49b25c5783.jpg?1702600663")
    ],
    episodes: 12, voiceovers: ['JAM', 'AniLibria', 'Субтитры'], videoSrc: ''
  },
  {
    id: 8, title: 'Евангелион', rating: 8.5, rank: 8, type: 'Сериалы',
    shikimori_id: '30',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/1314/108941.jpg'),
    plot: 'В 2015 году пережившее глобальную катастрофу человечество подвергается атакам гигантских существ — Ангелов. Единственная надежда — человекоподобные боевые машины «Евангелионы». Однако управлять ими могут только 14-летние подростки, на плечи которых ложится судьба мира.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/0034caf27eee763a929f73dba6cf16a3c06bbfd1.jpg?1519709733"),
      proxyImg("https://shikimori.one/system/screenshots/original/1cf75599b3017ae78ce507af6f492385116c0182.jpg?1519709736"),
      proxyImg("https://shikimori.one/system/screenshots/original/fd8ac9ac2a82297bcdf3dded0397cabe16603251.jpg?1519709740"),
      proxyImg("https://shikimori.one/system/screenshots/original/8cfac5750567f1c89d90b831ca6a3f012fcff521.jpg?1519709747")
    ],
    episodes: 26, voiceovers: ['Дубляж', 'Субтитры', 'AnimeVost'], videoSrc: ''
  },
  {
    id: 9, title: 'Врата Штейна', rating: 8.8, rank: 9, type: 'Сериалы',
    shikimori_id: '9253',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/5/73199.jpg'),
    plot: 'Эксцентричный студент Ринтаро Окабэ и его друзья случайно изобретают способ отправлять сообщения в прошлое с помощью модифицированной микроволновки. Игры со временем быстро выходят из-под контроля, когда ими начинает интересоваться секретная организация SERN.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/98e4f835e3f2ae3d32f94322b02220001bb4f5e9.jpg?1656764254"),
      proxyImg("https://shikimori.one/system/screenshots/original/d7a06183cbd282a74d0a4b35bf9b3600416b99f1.jpg?1656764254"),
      proxyImg("https://shikimori.one/system/screenshots/original/85a22fa7048ea5d61e298dd6d029d83322d503b5.jpg?1656764255"),
      proxyImg("https://shikimori.one/system/screenshots/original/b8624ab8ea57a18cff1affb6aba932798fbbbf92.jpg?1656764255")
    ],
    episodes: 24, voiceovers: ['AniDub', 'AniLibria', 'Субтитры'], videoSrc: ''
  },
  {
    id: 10, title: 'Ходячий замок', rating: 8.2, rank: 10, type: 'Фильмы',
    shikimori_id: '431',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/5/75810.jpg'),
    plot: 'Злая Ведьма превращает 18-летнюю мастерицу шляп Софи в древнюю старуху. Девушка покидает город и встречает удивительный шагающий замок волшебника Хаула. Устроившись к нему уборщицей, она надеется снять проклятие, но оказывается втянута в масштабную войну колдунов.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/45c46bc987af41c3eab412adf7e131c0c95100b2.jpg?1578730246"),
      proxyImg("https://shikimori.one/system/screenshots/original/a83d13615daa91e62575610164ddd01cc4a56e90.jpg?1578730247"),
      proxyImg("https://shikimori.one/system/screenshots/original/fa00e64ebe379528788441766d009face2d4da03.jpg?1578730248"),
      proxyImg("https://shikimori.one/system/screenshots/original/1b92be052b5efe73625cd1a93ba823a8a1a080e4.jpg?1578730248")
    ],
    episodes: 1, voiceovers: ['Дубляж', 'Субтитры', 'AnimeVost'], videoSrc: ''
  },
  {
    id: 11, title: 'Человек-бензопила', rating: 8.4, rank: 11, type: 'Сериалы',
    shikimori_id: '44511',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/1806/126216.jpg'),
    plot: 'Дэндзи — молодой парень, отрабатывающий огромный долг покойного отца перед якудза. Он работает охотником на демонов со своим ручным демоном Почитой. Погибнув из-за предательства, Дэндзи возрождается благодаря тому, что Почита заменяет ему сердце. Так рождается Человек-бензопила.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/671b95a264f37f6f0d3e34d32966f013d2e4b4fa.jpg?1665505144"),
      proxyImg("https://shikimori.one/system/screenshots/original/c816df0ea5f7b1e463265569c1832872c7a0f3a0.jpg?1665505145"),
      proxyImg("https://shikimori.one/system/screenshots/original/1c7ccd92d03eb4c5dba07bddf4b97db06f39dc4a.jpg?1665505145"),
      proxyImg("https://shikimori.one/system/screenshots/original/95b72c58640ccc2866a02dfdbd30790ab5d5342f.jpg?1665505145")
    ],
    episodes: 12, voiceovers: ['AniLibria', 'Студийная Банда', 'Субтитры'], videoSrc: ''
  },
  {
    id: 12, title: 'Магическая битва', rating: 8.6, rank: 12, type: 'Сериалы',
    shikimori_id: '40748',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/1171/109222.jpg'),
    plot: 'Старшеклассник Юдзи Итадори отличается феноменальной силой. Когда его друзья из оккультного клуба навлекают на себя смертельную опасность, он проглатывает проклятый артефакт (палец древнего демона) и становится сосудом для воплощения абсолютного зла — короля проклятий Рёмэна Сукуны.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/1ee4860e989de906fc2e18b7d5101400eab40613.jpg?1664386613"),
      proxyImg("https://shikimori.one/system/screenshots/original/d434f780798ee01dae8c36bb5e0167621fb87d54.jpg?1664386614"),
      proxyImg("https://shikimori.one/system/screenshots/original/16cc8748f903a139b3e03d1a23dd3f65a4ef37d0.jpg?1664386614"),
      proxyImg("https://shikimori.one/system/screenshots/original/c611845c68f044fc3f02f21d154e1b589705d8f1.jpg?1664386615")
    ],
    episodes: 24, voiceovers: ['AniLibria', 'Crunchyroll', 'Субтитры'], videoSrc: ''
  },
  {
    id: 13, title: 'Клинок, рассекающий демонов', rating: 8.7, rank: 13, type: 'Сериалы',
    shikimori_id: '38000',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/1286/99889.jpg'),
    plot: 'Тандзиро Камадо обнаруживает, что вся его семья убита безжалостным демоном. Выжила лишь младшая сестра Нэдзуко, которая сама обратилась в демона. Чтобы найти лекарство для сестры и отомстить за смерть родных, Тандзиро становится членом корпуса истребителей демонов.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/1670da24dad3715737aad0a57f5e8d1c9921a3a1.JPG?1682858917"),
      proxyImg("https://shikimori.one/system/screenshots/original/1fe35ef5f186e0697534a141386097053a0725ba.JPG?1682858918"),
      proxyImg("https://shikimori.one/system/screenshots/original/416e098206d81d9d3e36b1cd08ee0b3ae4afed08.JPG?1682858919"),
      proxyImg("https://shikimori.one/system/screenshots/original/a172a718ed7427d411083c64a216b52875cd2fd0.JPG?1682858919")
    ],
    episodes: 26, voiceovers: ['AniDub', 'AniLibria', 'Субтитры'], videoSrc: ''
  },
  {
    id: 14, title: 'Волейбол!!', rating: 8.8, rank: 14, type: 'Сериалы',
    shikimori_id: '20583',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/7/76014.jpg'),
    plot: 'Невысокий Сёё Хината мечтает стать великим волейболистом. Поступив в старшую школу Карасуно, он обнаруживает, что его недавний соперник — гениальный связующий Тобио Кагэяма — теперь оказался его товарищем по команде. Вместе им предстоит вернуть былую славу своему волейбольному клубу.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/d19960ccadd64d6afd9c048ab6f73d97368a0ac3.jpg?1423528122"),
      proxyImg("https://shikimori.one/system/screenshots/original/dab1c38f9290778eeb6458587ce6e5915cd57157.jpg?1423528122"),
      proxyImg("https://shikimori.one/system/screenshots/original/b00e8b3d219e437cbb6bd64eb6f4d32745551e97.jpg?1423528123"),
      proxyImg("https://shikimori.one/system/screenshots/original/44a2c6504db32f7b9f0366787dc93c31c2e5b43a.jpg?1423528123")
    ],
    episodes: 25, voiceovers: ['AniLibria', 'Субтитры', 'AnimeVost'], videoSrc: ''
  },
  {
    id: 15, title: 'Моя геройская академия', rating: 8.0, rank: 15, type: 'Сериалы',
    shikimori_id: '31964',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/10/78745.jpg'),
    plot: 'В мире, где 80% людей рождаются с суперспособностями (причудами), Изуку Мидория появился на свет обычным человеком. Несмотря на издевательства, он отказывается предавать свою мечту стать настоящим героем. И однажды его отвагу замечает знаменитый Всемогущий — величайший герой Японии.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/667765735eb0807be365a01fc9a871b96c3a9f12.jpg?1656088145"),
      proxyImg("https://shikimori.one/system/screenshots/original/e89f29419c07739ae01f0217d12e45d72efc402f.jpg?1656088145"),
      proxyImg("https://shikimori.one/system/screenshots/original/9b2d0b15b09e9ac190610b2034d0d6f1446785f2.jpg?1656088146"),
      proxyImg("https://shikimori.one/system/screenshots/original/6b3c71c5169eb7877e25e97237e0b5e73d31dfe2.jpg?1656088147")
    ],
    episodes: 13, voiceovers: ['AniDub', 'AniLibria', 'Субтитры'], videoSrc: ''
  },
  {
    id: 16, title: 'Ван-Пис', rating: 9.0, rank: 16, type: 'Сериалы',
    shikimori_id: '21',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/6/73245.jpg'),
    plot: 'Перед казнью Король Пиратов объявил, что спрятал величайшее сокровище — Ван-Пис. Монки Д. Луффи, парень, съевший дьявольский плод и ставший резиновым человеком, собирает преданную команду «Пиратов Соломенной шляпы» и отправляется в грандиозное плавание на поиски сокровища.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/625f8903677439e2a2a34878b8f619d57f537f0e.jpg?1620559070"),
      proxyImg("https://shikimori.one/system/screenshots/original/67af2e8f99488836ac0f0fb51ec15c30f52f229c.jpg?1620559070"),
      proxyImg("https://shikimori.one/system/screenshots/original/777f7cb5e81dba4301853fa718c97cb51b1e69fc.jpg?1620559071"),
      proxyImg("https://shikimori.one/system/screenshots/original/4758713f9c69d904235d5755608219c17923d0a4.jpg?1620559071")
    ],
    episodes: 100, voiceovers: ['2x2', 'AniLibria', 'Субтитры', 'AnimeVost'], videoSrc: ''
  },
  {
    id: 17, title: 'Наруто', rating: 8.4, rank: 17, type: 'Сериалы',
    shikimori_id: '20',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/13/17405.jpg'),
    plot: 'За 12 лет до начала сюжета в деревне Скрытого Листа был запечатан ужасающий Девятихвостый Лис-демон. Сосудом для него стал новорождённый мальчик Наруто. Роковой секрет заставляет местных жителей обходить его стороной, но Наруто упорно тренируется, чтобы стать лучшим ниндзя и получить титул Хокаге.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/bdf5492d8e02b06a85b5c53a1b37b75fbdc1d960.jpg?1701215427"),
      proxyImg("https://shikimori.one/system/screenshots/original/98f3fa89e9a47b9671d94bcdfbe76725f7335551.jpg?1701215428"),
      proxyImg("https://shikimori.one/system/screenshots/original/0994cde9279e8002a446d65b2eda6d813b1a5946.jpg?1701215429"),
      proxyImg("https://shikimori.one/system/screenshots/original/2b5bcde2bbbe20bb38d9a2b5c467b2b16b637463.jpg?1701215430")
    ],
    episodes: 100, voiceovers: ['Дубляж', 'AniDub', 'Субтитры', 'AnimeVost'], videoSrc: ''
  },
  {
    id: 18, title: 'Блич', rating: 8.2, rank: 18, type: 'Сериалы',
    shikimori_id: '269',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/3/40451.jpg'),
    plot: 'Школьник Ичиго Куросаки с детства способен видеть призраков. Однажды в его дом вторгается злобный дух («пустой»). Чтобы спасти сестёр, Ичиго забирает силу у раненой Рукии и становится синигами — божественным проводником душ. Теперь он должен выполнять опасную работу по защите мира живых.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/226d9990c5300e964883cdbfb28ea663950a8397.jpg?1677933236"),
      proxyImg("https://shikimori.one/system/screenshots/original/05c642ffc8578b481556939798726b47768f1a93.jpg?1677933236"),
      proxyImg("https://shikimori.one/system/screenshots/original/46a1ad719e07013934bf1403d4de1bab87d44dde.jpg?1677933237"),
      proxyImg("https://shikimori.one/system/screenshots/original/4263fd92e90636adfa2ce0b280a599bd8b683e09.jpg?1677933237")
    ],
    episodes: 100, voiceovers: ['AniDub', 'Субтитры', 'AnimeVost'], videoSrc: ''
  },
  {
    id: 19, title: 'Моб Психо 100', rating: 8.6, rank: 19, type: 'Сериалы',
    shikimori_id: '32182',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/8/80356.jpg'),
    plot: 'Школьник Сигэо Кагэяма по прозвищу «Моб» обладает разрушительными экстрасенсорными способностями. Понимая опасность своей силы, он подавляет эмоции и старается быть неприметным. Он подрабатывает на шарлатана Рэйгэна Аратаку, изгоняя духов и пытаясь найти свой собственный жизненный путь.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/1f669dfbf3e71c40cd1a30223f02de4b91664851.jpg?1468419439"),
      proxyImg("https://shikimori.one/system/screenshots/original/f011eaffdbf812a25aa20601d6b3a63f39095cd9.jpg?1468419439"),
      proxyImg("https://shikimori.one/system/screenshots/original/16316d224d3af147fa62f438fe221992236c5a7b.jpg?1468419440"),
      proxyImg("https://shikimori.one/system/screenshots/original/b27f41391a4601c1b7fd2bcab1aaaaab8f20b3be.jpg?1468419443")
    ],
    episodes: 12, voiceovers: ['AniLibria', 'Субтитры', 'AnimeVost'], videoSrc: ''
  },
  {
    id: 20, title: 'Монстр', rating: 8.7, rank: 20, type: 'Сериалы',
    shikimori_id: '19',
    img: proxyImg('https://shikimori.one/system/animes/original/19.jpg'),
    plot: 'Германия. Гениальный хирург Кэндзо Тэнма вопреки указаниям начальства спасает жизнь мальчика с огнестрельным ранением головы. Много лет спустя Тэнма узнаёт чудовищную правду: спасённый им ребёнок вырос в гениального социопата и серийного убийцу, повергающего Европу в хаос.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/a559c5e89bc0aa0ab4955aa9b70079ea9bda4cfb.jpg?1709190732"),
      proxyImg("https://shikimori.one/system/screenshots/original/fd57972f18b1059765d7c9eeb947b13e7f6f9ad9.jpg?1709190733"),
      proxyImg("https://shikimori.one/system/screenshots/original/7aea0350dee4f6950aef086835bd78f6fcdbf476.jpg?1709190734"),
      proxyImg("https://shikimori.one/system/screenshots/original/cbc592c344dfeb2c58bfdc7fdb4b645fbcaead15.jpg?1709190734")
    ],
    episodes: 74, voiceovers: ['Субтитры', 'Любительская', 'AnimeVost'], videoSrc: ''
  },
  {
    id: 21, title: 'Сад изящных слов', rating: 7.8, rank: 21, type: 'Фильмы',
    shikimori_id: '19755',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/1595/107426.jpg'),
    plot: 'Старшеклассник Такао прогуливает утренние уроки в дождливые дни, находя тишину в японском саду. Там он раз за разом встречает загадочную женщину, старше его, которая пьет пиво с шоколадом. Их молчаливое общение перерастает во взаимную привязанность по мере того, как сезон дождей подходит к концу.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/aa6bc47f764e6d85681ecd4d98965358c1dac8fb.jpg?1694249505"),
      proxyImg("https://shikimori.one/system/screenshots/original/4428289e9450854abebcba5a92351f3c4432018c.jpg?1694249506"),
      proxyImg("https://shikimori.one/system/screenshots/original/9823978bced72d75e181ca0df83b6048c84f67f4.jpg?1694249506"),
      proxyImg("https://shikimori.one/system/screenshots/original/5b87f15145110d85a095823cc3dc2855d9236d1d.jpg?1694249507")
    ],
    episodes: 1, voiceovers: ['Дубляж', 'Субтитры', 'AnimeVost'], videoSrc: ''
  },
  {
    id: 22, title: 'Вайолет Эвергарден', rating: 8.6, rank: 22, type: 'Сериалы',
    shikimori_id: '33352',
    img: proxyImg('https://cdn.myanimelist.net/images/anime/1795/95088.jpg'),
    plot: 'После окончания войны девушка Вайолет, знающая только сражения и убийства, пытается адаптироваться к мирной жизни. Она нанимается на работу «автозапоминающей куклой» — пишет письма на заказ. Через истории и чувства чужих людей она учится понимать значение слова «люблю», сказанного её погибшим командиром.',
    screenshots: [
      proxyImg("https://shikimori.one/system/screenshots/original/9a6b9eb01358a84226ff89623b4ab6347a8ab9d4.jpg?1633466854"),
      proxyImg("https://shikimori.one/system/screenshots/original/0cac34d42b355eb8f55866ca9bac746c4f531abb.jpg?1633466854"),
      proxyImg("https://shikimori.one/system/screenshots/original/ab7f8bd4a066287b67236c00d2de21481b580a1d.jpg?1633466854"),
      proxyImg("https://shikimori.one/system/screenshots/original/669e99c959f211c6669db5821605b4a2a9973ee1.jpg?1633466854")
    ],
    episodes: 13, voiceovers: ['AniLibria', 'Netflix', 'Субтитры'], videoSrc: ''
  }
];

export const animeData: Anime[] = allAnimeData
  .map(anime => ({
    ...anime,
    voiceovers: anime.voiceovers.filter(voice => allowedVoiceovers.includes(voice) || voice === 'Субтитры' || voice === 'Netflix' || voice === 'JAM'),
  }))
  .filter(anime => anime.voiceovers.length > 0)
  .map((anime, index) => ({
    ...anime,
    rank: index + 1,
  }));
