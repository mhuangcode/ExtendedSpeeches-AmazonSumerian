'use strict'

//Project to extend speeches in Amazon Sumerian

//Martin Huang 
//https://github.com/MHuangCode/ExtendedSpeeches-AmazonSumerian

//Speeches can be marked with gesture marks in Sumerian to trigger gestures/emotes for host.
//The editor has a function for marks to be auto-generated with a click of a button! 
//But there is no function that does this during play/real-time.

//This project is an attempt to address this and extend upon the same function by including several
//other languages.

//english word map from create.js
var mappingEnglish = [{
    gesture: 'big',
    words: 'add, above, authority, big, cover, full, fly, grow, growth, high, huge, increase, major, majority, large, leader, lot, raise, rise, tall'

}, {
    gesture: 'heart',
    words: 'accept, admit, believe, care, feeling, feel, friend, grateful, happy, heart, human, pain, save, safe, kind, love'

}, {
    gesture: 'in',
    words: 'include, including, inside, into, now, near, nearest, closest, therein, within'

}, {
    gesture: 'many',
    words: 'all, always, any, anyone, among, area, any, around, beautiful, entire, environment, environments, environmental, everybody, everyone, everything, audience, total, group, groups, million, millions, others, billion, billions, hundred, hundreds, many, thousand, thousands, world, worlds, outside, reveal'

}, {
    gesture: 'movement',
    words: 'away, across, ahead, along, far, fast, follow, go, leave, move, movement, through, throughout, toward, travel, turned, passed'

}, {
    gesture: 'one',
    words: 'single, one, once, first, firstly, only, solo, warned, truly, up, alone'

}, {
    gesture: 'aggressive',
    words: 'power, powers, powerful, assert, assertive, strong, stronger, strongest, strength, flex, dang, damn, damnit, darn, shucks, doh, drat, angry, angrier, angriest, aggressive, annoyed, annoying, attack, attacking, offense, offensive, battle'

}, {
    gesture: 'you',
    words: "you, yall, y'all, your, yours, thou, thy"

}, {
    gesture: 'defense',
    words: 'defense, fear, repulsed, scared, scary, scarier, scariest, fearful, afraid, cower, cowers, cowering, hideous, doomed, terrified, terrify, terrifying terrifies, spooky, spookier, spookiest'

}, {
    gesture: 'wave',
    words: 'hello, hi, hiya, howdy, welcome, aloha, heya, hey, goodbye, bye, goodbye, hola, adios, chao'

}, {
    gesture: 'self',
    words: "my, i, myself, self, i've, Ive, me, mine"

}, {
    gesture: 'small',
    words: 'tiny, less, little, itty, least, small, almost, few, smidge, tad, miniscule, micro, miniature, eensy, wee, short, nearly, dab, speck'

}, {
    gesture: 'before',
    words: 'ago, already, before, begin, first, forget, former, from, history, past'

}, {
    gesture: 'after',
    words: 'after, finally, finish, future, forward, become, goal, direction, late, later, last, then'

}, {
    gesture: 'impact',
    words: 'against, apply, applying, applied, argue, firm, force, forced, forcing, forces, hard, hit, hits, hitting, impact, impacts, impacted, impacting, physical, threat, war, fight, fights, fighting, fought'

}, {
    gesture: 'agreement',
    words: 'agree, agrees, agreed, join, joined, joins, joining, partner, partnered, partners, partnering, relationship, share, shared, sharing, shares, together, togetherness, linked, links, link, linking'

}, {
    gesture: 'face',
    words: 'eye, eyes, hair, head, imagine, imagines, imagined, imagining, knowledge, mouth, remember, remembed, remembering, remembers, see, seeing, think, thinking, thinks, thought'

}, {
    gesture: 'negative',
    words: 'disgust, disgusted, gross, vile, ugly, eew, slimey, creepy, done, nasty, enough, without, never, nevermore, wont, wouldnt, shouldnt, dont, no, nope, none, never, nothing, nada'
}];

var mappingFrench = [{
    gesture: 'big',
    words: 'ajouter, ci-dessus, autorité, grand, couverture, plein, mouche, grandir, croissance, haute, énorme, augmentation, majeur, majorité, grand, chef de file, beaucoup, élever, monter, grand'
}, {
    gesture: 'heart',
    words: "accepter, admettre, croire, prendre soin, se sentir, se sentir, ami, reconnaissant, heureux, coeur, humain, douleur, sauver, sûr, gentil, aimer"

}, {
    gesture: 'in',
    words: "inclure, y compris, à l'intérieur, dans, maintenant, près, le plus proche, le plus proche, dedans"

}, {
    gesture: 'many',
    words: "tous, toujours, n'importe qui, parmi, zone, tout autour, beau, ensemble, environnement, environnements, environnement, tout le monde, tout le monde, tout, public, total, groupes, millions, millions, autres, milliards, cent, centaines, beaucoup, mille, milliers, monde, monde, dehors, révélez"

}, {
    gesture: 'movement',
    words: 'loin, à travers, en avant, le long, loin, vite, suivre, aller, partir, déplacer, mouvement, à travers, tout au long, vers, voyager, tourné, passé'

}, {
    gesture: 'one',
    words: 'single, one, one, first, firstly, only, seul, averti, vraiment, haut, seul'

}, {
    gesture: 'aggressive',
    words: 'pouvoir, pouvoirs, puissant, affirmer, assertif, fort, plus fort, plus fort, force, flex, dang, putain, damnit, darn, shucks, doh, drat, en colère, plus en colère, angriest, agressif, agacé, ennuyeux, attaque, attaquer offensive, offensive, bataille'

}, {
    gesture: 'you',
    words: "toi, yall, y'all"

}, {
    gesture: 'defense',
    words: 'défense, peur, repoussé, effrayé, effrayant, effrayant, effrayant, peureux, effrayé, recroquevillé, recroquevillé, recroquevillé, hideux, condamné, terrifié, terrifiant, terrifiant terrifie, effrayant, spookier, spookiest'

}, {
    gesture: 'wave',
    words: 'bonjour, salut, hiya, howdy, bienvenue, aloha, heya, hé, au revoir, au revoir, bye, hola, adios, chao'

}, {
    gesture: 'self',
    words: "mon, moi, moi-même, j'ai, le mien"

}, {
    gesture: 'small',
    words: 'minuscule, moins, petit, Itty, moins, petit, presque, peu, smidge, tad, minuscule, micro, miniature, eensy, wee, court, presque, dab, speck'

}, {
    gesture: 'before',
    words: "il y a déjà, avant, commence, d'abord, oublie, ancien, de, l'histoire, le passé"

}, {
    gesture: 'after',
    words: 'après, enfin, finir, avenir, avancer, devenir, objectif, direction, fin, plus tard, dernier, alors'

}, {
    gesture: 'impact',
    words: 'contre, appliquer, appliquer, appliqué, argumenter, entreprise, force, forcé, forcer, forces, dur, frapper, coups, frapper, impact, impacts, impacté, impactant, physique, menace, guerre, combat, combats, combat, combattu'

}, {
    gesture: 'agreement',
    words: "d'accord, de rejoindre, rejoint, rejoindre, partenaire, partenaire, partenaires, partenariat, relation, partager, partagé, partage, part, ensemble, togetherness, lié, liens, link, linking"

}, {
    gesture: 'face',
    words: 'oeil, yeux, cheveux, tête, imaginer, imagine, imaginé, imaginant, savoir, bouche, se souvenir, se souvenir, se souvenir, se souvient, voir, voir, penser, pense, pensé'

}, {
    gesture: 'negative',
    words: 'dégoût, dégoûté, grossier, vil, laid, eew, slimey, creepy, fait, méchant, assez, sans, jamais, nevermore, ne veut pas, ne pas, non, aucun, jamais, rien, nada'
}];
//////////////
var mappingSpanish = [{
    gesture: 'big',
    words: 'añadir, por encima, la autoridad, grande, cubierta, llena, volar, crecer, crecimiento, enorme, aumento, mayor, líder, mucho, subir, subida, alto '
}, {
    gesture: 'heart',
    words: 'aceptar, admitir, creer, la atención, la sensación, sentir, amigo, agradecido, feliz, corazón, humano, dolor, salvar, seguro, amable,amor'
}, {
    gesture: 'in',
    words: 'incluirá, entre ellos, en el interior, en, ahora, cerca, más cerca, en la misma, dentrode'

}, {
    gesture: 'many',
    words: 'todos, siempre, cualquier, cualquier persona, entre, área, cualesquiera, alrededor de, hermoso, enteras, ambiente, ambientes, del medio ambiente, todo el mundo, cada uno, todo, audiencia, en total, grupo, grupos, otros, mil, millones, mil millones cientos, cientos, muchos, miles, mundo, mundos, exterior,revelan'

}, {
    gesture: 'movement',
    words: 'de distancia, al otro lado, por delante, a lo largo, lejos, rápido, seguir, salir, movimiento, a través de, hacia, viajes, se volvió, pasó'

}, {
    gesture: 'one',
    words: 'individual, una, vez, en primer lugar, solamente, solo, advirtió, en verdad,sola'

}, {
    gesture: 'aggressive',
    words: 'poder, poderes, potente, afirman, firme, fuerte, fuerza, flexibilidad, Dang, maldita sea, maldita, caramba, DOH, drat, enojado, más enojado, agresivo, molestado, molestia, ataque, atacando ofensiva, ofensivo, batalla'

}, {
    gesture: 'you',
    words: "usted, yall, todos ustedes, su, el suyo, tú, tu"

}, {
    gesture: 'defense',
    words: 'defensa, repulsión, miedo, más miedo, más temible, temeroso, con miedo, se encogen, se encoge, encogido, horrible, condenado, aterrado, aterrorizar, aterrador aterroriza, fantasmagórico, fantasmagóricos, spookiest'

}, {
    gesture: 'wave',
    words: 'hola, hiya, ¡Hola, bienvenido, hawaiana, heya, bueno, adiós, chao'

}, {
    gesture: 'self',
    words: "i, yo, sí, tengo, he, mi, mío "

}, {
    gesture: 'small',
    words: 'pequena, menos, itty, por lo menos, pequeña, pocos, pizca, poco, minúsculo, micro, miniatura, eensy, wee, corta, casi, dab, mota'

}, {
    gesture: 'before',
    words: 'Hace ya, antes, empezar, en primer lugar, olvidar, antiguo, de, historia, más allá'

}, {
    gesture: 'after',
    words: 'después, por último, el acabado, el futuro, hacia adelante, se convierten, meta, dirección, tarde, pasada, luego'

}, {
    gesture: 'impact',
    words: 'contra, aplicar, aplicando, aplicado, argumentar, firme, forzado, forzando, fuerzas, fuerza, golpe, golpes, impacto, impactos, impactados, afectando, físicas, amenazas, guerra, lucha, peleas, disputada'

}, {
    gesture: 'agreement',
    words: 'de acuerdo, unir, uniones, unión, socio, socios, socios, asociación, relación, acción, compartida, el intercambio, las acciones, junto, unidad, unido, links, enlaces, que une'

}, {
    gesture: 'face',
    words: 'ojo, pelo, cabeza, imagina, imaginado, imaginando, el conocimiento, la boca, remembed, recordando, recuerda, ver, pensar, pensamiento, piensa, pensado'

}, {
    gesture: 'negative',
    words: 'asco, disgustado, bruto, vil, fea, eew, viscosa, espeluznante, hecho, desagradable, suficiente, sin, nunca, nunca más, costumbre, wouldnt, shouldnt, no haga, pues no, no, nada'
}];

var mappingRussian = [{

    gesture: 'big',
    words: 'добавить, выше, власть, большое, покрытие, полный, летать, рост, высокое, огромное, увеличение, майор, большинство, большой, лидер, много, поднять, расти, высокий'

}, {
    gesture: 'heart',
    words: 'принять, признать, поверьте, уход, чувство, чувствовать друг, благодарный, счастливый, сердце, человека, боль, сохранить, сейф, вид, любовь'

}, {
    gesture: 'in',
    words: 'включаютсебя,том числе, внутри, в, теперь, рядом, ближайший, ближе,ней,пределах'

}, {
    gesture: 'many',
    words: 'все, всегда, любой, кто, среди, области, любые, вокруг, красивая, вся, окружающая среда, экологические, зрители, всего, группы, миллионы, другие, миллиард, миллиарды сто, сотни, много, тысячи, мир, миры,улице, показывают'

}, {
    gesture: 'movement',
    words: 'далеко, поперек, вперед, быстро следовать, идти, уходить, движение, через,всему, к, путешествия, повернулся, прошел'

}, {
    gesture: 'one',
    words: 'сингл, один, однажды,первых, вопервых, только соло, предупреждала, действительно, вверх,одиночку'

}, {
    gesture: 'aggressive',
    words: 'власть, полномочие, мощное, утверждает, напористым, сильным, сильное, сила, сгибать, Данг, черт, черт побери, штопка, лузга, DOH, убирайтесь, сердится, злее, angriest, агрессивное, раздраженное, раздражающее, нападение, атакуя преступление, наступление, бой'

}, {
    gesture: 'you',
    words: "вы, Yall, y'all, ваш, ваша, ты, твой"

}, {
    gesture: 'defense',
    words: 'оборона, страх, отбиты, страшно, страшней, страшный, боясь, приседать, съеживается, съежившись, отвратительный, обречено, ужас, ужасает, ужасает ужас, похожийпривидение'

}, {
    gesture: 'wave',
    words: 'здравствуйте, Привет, привет, хия, здор`ово, добро пожаловать, Алоха, Хэя, эй, до свидания, Голя, прощай, чао'

}, {
    gesture: 'self',
    words: "боже, я, Ive, мне, мое"

}, {
    gesture: 'small',
    words: 'крошечный, меньше, мало, малюсенЬКий,минимум, маленький, почти мало, smidge, тад, мизерный, микро-, миниатюрная, eensy, дите, короткий, почти, мазок, пятнышко'

}, {
    gesture: 'before',
    words: 'назад, уже, раньше, начать сначала, забыть, бывший, из, история, прошлое'

}, {
    gesture: 'after',
    words: 'после, наконец, отделка, будущее, вперед, стать, цель, направление, поздно, последний, затем'

}, {
    gesture: 'impact',
    words: 'против, применение, применяются, утверждают, фирма, сила, принудительная, принуждая, силы, gestureкий, хит, хиты, удары, воздействие, воздействий, повлиявших, воздействуя, физические угрозы, войны, драки, борьба, дрались'

}, {
    gesture: 'agreement',
    words: 'согласен, соглашается, согласился присоединиться, присоединились, присоединяется, присоединение, партнера, партнеров, отношения, общие, обмен, акция, вместе, единение, связаны между, ссылки'

}, {
    gesture: 'face',
    words: 'глаза, глаз, волосы, голова, представьте, воображает, представлял себе, воображая, знание, рот, помните, remembed, вспоминая, вспоминает, видят, видит, думать, думает, подумали'

}, {
    gesture: 'negative',
    words: 'отвращение, валовые, мерзкий, некрасивый, ЭВП, жуткое, сделано, неприятный, достаточно, не, никогда больше, привычка, должны, не нет, Нету, ни, никогда, ничего, нада'
}];
/////////////////
var mappingJapanese = [{
    gesture: 'big',
    words: '上記の, 権限を追加し, フル大きい, カバー, 飛ぶ, 成長, 高, 巨大な,  主要な, 大多数, 大, リーダー, たくさん, 上げ, 上昇, 背の高いです'
}, {
    gesture: 'heart',
    words: '受け入れを認める, と信じて, ケア, 感情, 感じ, 友人, 感謝し, 幸せ, 心, 人間, 痛み, 保存, 安全, 親切, 愛'
}, {
    gesture: 'in',
    words: '内部を含めに, 今, 近く, 最も近い, その中に, 内部に含まれます'
}, {
    gesture: 'many',
    words: 'すべて, 常に, 任意の, だれでも, エリア, のうち, いずれかの周りに, 美しく, 全体の, 環境, 誰も, 誰もが, すべてのもの, 観客, 合計, グループ, 百万, 何百万人, 他の人, 十億, 数十億, 百, 数百, 数千, 数千人, 世界, 世界は, 外で明らかにし'
}, {
    gesture: 'movement',
    words: '残し, 行く, 続く, 離れて, 間, 先に, に沿って, 遠く, 速い, 動き, 運動を通して, 全体に, 旅行に向かって, 渡され, 投入'
}, {
    gesture: 'one',
    words: '一度, 第一, まず, 唯一, ソロ, 単独で, 真に, アップ, 警告, 一つの単一'
}, {
    gesture: 'aggressive',
    words: 'パワー, 強力, 主張, 自己主張, 強い, 最強, 強さ, フレックス, 一顧, いまいましい, くそ, 怒り, 積極的な, イライラ, 迷惑な, 攻撃, 戦闘'
}, {
    gesture: 'you',
    words: "ヤオール, y'allの, あなた, あなたの"
}, {
    gesture: 'defense',
    words: '防衛, 撃退, 怖い, 恐れ, 萎縮, cowers, 戦慄, 恐ろしい, 運命, 恐怖, 恐怖に陥れるに恐ろしい, 幽霊, すごい、恐るべき'
}, {
    gesture: 'wave',
    words: 'adios, オラ, さようなら, ちょっと, へや, アロハ, 歓迎, こんにちは, hiya, HI, ハロー, チャオ'
}, {
    gesture: 'self',
    words: "自己, 私は, アイブ, 私, 鉱山をしました"
}, {
    gesture: 'small',
    words: 'より少ない, 少し, itty, 少なくとも, 小さな, ほとんど, 少数, 非常に小さい, マイクロ, 小型, 短い, ほぼ, スペック'
}, {
    gesture: 'before',
    words: ' すでに, 前に, 忘れて, 始め, かつて, 歴史, から, 過去'
}, {
    gesture: 'after',
    words: '後で後半の後, 最終的には, 前方に仕上げ, 将来, なる, 目標, 方向, 最後の, そして'
}, {
    gesture: 'impact',
    words: ', 適用に対する適用, 適用される, と主張, 事務所, 強制的に, 力を強制的に, ハード, ヒット, ヒットし, インパクト, 影響, 影響を受け, 衝撃, 物理的, 脅威, 戦争, 戦い, 戦闘戦いました'
}, {
    gesture: 'agreement',
    words: '同意する, 同意し, 参加, 結合, 接合, パートナー, 関係, 共有, 一緒に, 一緒, リンクされ, リンク'
}, {
    gesture: 'face',
    words: '目, 髪, 頭, 想像, 想像し, 知識, 口, 覚えて, 見る, 見て, 考える, 思考, 考えては, と思いました'
}, {
    gesture: 'negative',
    words: '嫌悪感, 総, 下劣な, 醜い, EEW, slimey, 不気味な, 行って, 厄介な, 十分に, なし, 決して, ネヴァーモア, 文句を言わない, はずの, いけない, いや, どれも, 何も, 灘'
}];
///////////////
var mappingKorean = [{
    gesture: 'big',
    words: '비행, 전체, 위의, 성장, 높은, 거대한, 증가, 주요, 대부분의 큰 지도자, 많이, 인상, 상승, 키를 권한, 큰, 커버를 추가'
}, {
    gesture: 'heart',
    words: '저장, 기분, 느낌,주의, 인정 믿고, 친구, 감사, 행복, 심장, 인간의 고통을 받아 안전하고, 친절하고, 사랑'
}, {
    gesture: 'in',
    words: '내 안에, 가장 가까운, 근처, 지금으로, 내부, 포함'
}, {
    gesture: 'many',
    words: '모든, 항상, 어떤, 사람, 지역, 중, 어떤 약, 아름다운, 전체, 환경, 모든 사람, 모든 관객, 총, 그룹, 만, 수백만, 다른 사람, 억, 백, 몇 천, 천, 세계, 세계는, 외부, 공개'
}, {
    gesture: 'movement',
    words: '멀리,에서, 앞서, 함께, 빠르고, 여행, 대한 전역을 통해 이동, 운동, 이동에 따라 떠날 켜져 통과'
}, {
    gesture: 'one',
    words: '하나의, 한 번, 첫째, 단지, 솔로, 경고, 진정, 위, 혼자'
}, {
    gesture: 'aggressive',
    words: '힘은 강력하고, 강하고, 강한, 힘, 플렉스, DOH 문제 발생, 망할, 젠장, drat, 화나게, 제일 많이, 공격적, 화가, 성가신 공격을 주장 강력한 주장 공격 공격, 공격, 전투'
}, {
    gesture: 'you',
    words: "yall를, 모두들, 당신의, 당신, 그대, 네"
}, {
    gesture: 'defense',
    words: '방어, 두려움, 격퇴, 무서워, 무서운는 두려움, 걱정, 겁쟁이, 위축, 무시 무시한, 운명, 겁에 질린, 무섭게, 유령을, 초라한, 무서운, 겁'
}, {
    gesture: 'wave',
    words: '여보세요, heya, 알로하, 안녕, 차오'
}, {
    gesture: 'self',
    words: "내, 내가, 나 자신, 자기, 난, 필자 나, 내했습니다"
}, {
    gesture: 'small',
    words: '이티, 적어도, 작은, 약간, 소문자, 마이크로, 소형, 꼬마, 짧은, 거의, 반점'
}, {
    gesture: 'before',
    words: '전에, 이미 이전에, 먼저, 역사,에서, 전 잊지 과거의 시작'
}, {
    gesture: 'after',
    words: '후, 마지막으로 마무리, 미래, 앞으로,가, 목표, 방향, 말, 나중에, 지난, 다음'
}, {
    gesture: 'impact',
    words: '에 적용, 주장, 회사, 힘, 강요, 강제, 하드, 명중, 전투, 충격, 충격을 가하는 물리적, 위협, 전쟁, 싸움, 타격, 싸웠고'
}, {
    gesture: 'agreement',
    words: '동의, 가입, 결합, 파트너, 파트너 관계, 관계, 공유, 함께, 공생, 링크'
}, {
    gesture: 'face',
    words: '눈, 머리, 상상, 지식, 입, 는, 기억, 생각, 보고, 생각을 참조 기억한다 상상 상상'
}, {
    gesture: 'negative',
    words: '혐오, 총, 비열한, 추한, EEW, 저런, 소 름, 수행, 불쾌한, 충분하지 않고, 결코, 그 뿐이었다, 습관, 야해, 그나마, 아니, 전혀, 아무것도, 아무것도 모르는'
}];

var genericGestures = ['generic_a', 'generic_b', 'generic_c'];

var languageMap = {
    "en": mappingEnglish,
    "fr": mappingFrench,
    "es": mappingSpanish,
    "ru": mappingRussian,
    "jp": mappingJapanese,
    "kr": mappingKorean
};

var languageNames = {
    "en": 'English',
    "fr": 'French',
    "es": 'Spanish',
    "ru": 'Russian',
    "jp": 'Japanese',
    "kr": 'Korean'
}

var asianLanguage = ["jp", "kr"];

var femaleVoices = {
    "en": "Salli",
    "fr": "Celine",
    "es": "Penelope",
    "ru": "Tatyana",
    "jp": "Mizuki",
    "kr": "Seoyeon"
};

var maleVoices = {
    "en": "Justin",
    "fr": "Mathieu",
    "es": "Miguel",
    "ru": "Maxim",
    "jp": "Takumi"
}

var genders = {
    'male': maleVoices,
    'female': femaleVoices
};

var voices = [
    'Aditi',
    'Amy',
    'Astrid',
    'Brian',
    'Carla',
    'Carmen',
    'Celine',
    'Chantal',
    'Conchita',
    'Cristiano',
    'Dora',
    'Emma',
    'Enrique',
    'Ewa',
    'Filiz',
    'Geraint',
    'Giorgio',
    'Gwyneth',
    'Hans',
    'Ines',
    'Ivy',
    'Jacek',
    'Jan',
    'Joanna',
    'Joey',
    'Justin',
    'Karl',
    'Kendra',
    'Kimberly',
    'Liv',
    'Lotte',
    'Mads',
    'Maja',
    'Marlene',
    'Mathieu',
    'Matthew',
    'Maxim',
    'Miguel',
    'Mizuki',
    'Naja',
    'Nicole',
    'Penelope',
    'Raveena',
    'Ricardo',
    'Ruben',
    'Russell',
    'Salli',
    'Seoyeon',
    'Takumi',
    'Tatyana',
    'Vicki',
    'Vitoria'
];

var whitespaceRegex = /\s+/g;
var punctuationRegex = /[\.。,、\\\/\#\?？¡!!$%^&*;:{}\=\-\_`~()\[\]"']+/g;
var sentenceEndRegex = /[.。!!?？]$/;
var sentenceEndRegexAsian = /[.。!!?？]/g;
var markRegex = /<[^>]*>/g;

String.prototype.splice = function (start, newSubString) {
    return this.slice(0, start) + newSubString + this.slice(start);
};

String.prototype.replaceWordAt = function (word, index) {
    var endIndex = index + word.length;
    var replaceWith = "-".repeat(word.length);
    return this.slice(0, index) + this.slice(index, endIndex).replace(word, replaceWith) + this.slice(endIndex);
};

String.prototype.replaceCharAt = function (character, index) {
    var endIndex = index + 1;
    return this.slice(0, index) + character + this.slice(endIndex);
};

Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

function getRandomGenericGesture() {
    var i = Math.floor(Math.random() * genericGestures.length);
    return genericGestures[i];
}


//main function
function genSpeechGestures(speech, language) {
    var map = languageMap[language];

    if (asianLanguage.indexOf(language) > -1) {
        speech = genSpeechGesturesAsian(speech, map);
    } else {
        speech = genSpeechGesturesWestern(speech, map);
    }

    return speech;
}

function getAsianSentences(speech) {
    var sentenceStart = 0;
    var sentenceEnd = speech.search(sentenceEndRegexAsian, 0);
    var sentences = [];

    while (sentenceEnd > -1) {
        sentences.push({
            start: sentenceStart,
            end: sentenceEnd
        });
        sentenceStart = sentenceEnd + 1;
        speech = speech.replaceCharAt("-", sentenceEnd);
        sentenceEnd = speech.search(sentenceEndRegexAsian, 0);
    }

    if (sentenceEnd != speech.length) {
        sentences.push({
            start: sentenceStart,
            end: speech.length
        });
    }

    return sentences;
}

//since asian words do not have whitespace in between each other
//we will use index of to get a good guess of where and if there
//is a valid word
function genSpeechGesturesAsian(speech, map) {

    var gesturesToAdd = new Map();
    var indicies = [];

    var speechText = speech.replace(markRegex, '');
    var dirtyText = speechText;

    var sentences = getAsianSentences(speech);


    for (let i = 0; i < map.length; i++) {
        let gesture = map[i].gesture;
        let words = map[i].words.split(',');

        for (let ii = 0; ii < words.length; ii++) {
            let trimmedWord = words[ii].trim();
            let index = dirtyText.indexOf(trimmedWord);

            //need to keep check that there are not more than 1 gesture per word
            while (index > -1 && indicies.indexOf(index) == -1) {
                indicies.push(index);
                gesturesToAdd.set(index, gesture);

                for (let iii = 0; iii < sentences.length; iii++) {
                    let start = sentences[iii].start;
                    let end = sentences[iii].end;

                    //Set sentence marked if it isn't already.
                    if (index >= start && index <= end) {
                        sentences.remove(iii, iii + 1);
                        break;
                    }
                }

                dirtyText = dirtyText.replaceWordAt(trimmedWord, index);
                index = dirtyText.indexOf(trimmedWord);
            }
        }
    }

    //Check if each sentence has a gesture, if not find a random one
    for (let i = 0; i < sentences.length; i++) {
        let index = sentences[i].start;
        let randomGesture = getRandomGenericGesture();
        indicies.push(index);
        gesturesToAdd.set(index, randomGesture);

    }

    //Sort from right to left of the positions where gesture marks should be inserted
    //We do this because if it is not sorted this way gesture marks may be inserted within
    //gesture marks
    indicies.sort(function (a, b) {
        return b - a;
    });

    for (let i = 0; i < indicies.length; i++) {
        let index = indicies[i];
        let gesture = gesturesToAdd.get(index);

        let gestureMark = '<mark name="gesture:' + gesture + '"/>';

        speechText = speechText.splice(index, gestureMark);
    }

    speech = '<speak>' + speechText + '</speak>';

    return speech;
}

//Since western languages have whitespaces we can use that as a marker
//for each word.
//Similar logic from create.js in sumerian when clicking on auto-generate
//speech gestures for speeches in the editior. Only difference is the searching method.
//Credits to the AWS Sumerian team.
function genSpeechGesturesWestern(speech, map) {

    //remove any gesture & ssml marks from speech
    var speechText = speech.replace(markRegex, '');

    var gesturedSentences = [];
    var bIsMarkedSentence = false;
    var currentSentence = [];

    //make an array of white space in text, will be added back when reassembling text
    var whitespace = speech.match(whitespaceRegex);

    //Prevent whitespace array from being defined as null when only a single word is entered.
    if (whitespace == null) {
        whitespace = [];
    }

    var whitespaceIndex = 0;

    let speechWords = speechText.split(whitespaceRegex);

    var newGestures = getGestureForWords(speechWords, map);

    for (let i = 0; i < speechWords.length; i++) {
        var word = speechWords[i];
        if (newGestures[i] != "null") {
            var gesture = newGestures[i];
            currentSentence.push('<mark name="gesture:' + gesture + '"/>' + word);
            bIsMarkedSentence = true;
        } else {
            currentSentence.push(word);
        }

        if (whitespaceIndex < whitespace.length) {
            currentSentence.push(whitespace[whitespaceIndex++]);
        }

        if (sentenceEndRegex.test(word)) {
            let fullSentence = addSentence(gesturedSentences, currentSentence, bIsMarkedSentence);
            gesturedSentences.push(fullSentence);

            currentSentence.length = 0;
            bIsMarkedSentence = false;
        }
    }

    //if final sentence does not have an ending punctuation
    if (currentSentence.length > 0) {

        //will check if sentence has any marks, if not add random generic one
        let fullSentence = addSentence(gesturedSentences, currentSentence, bIsMarkedSentence);
        gesturedSentences.push(fullSentence);
    }

    //add speak marks and join all sentences
    speech = '<speak>' + gesturedSentences.join('') + '</speak>';
    return speech;
}


//Faster searching for gestures
function getGestureForWords(words, map) {

    var cleanedWords = [];
    var gesturesToAdd = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let unPunctuationWord = word.replace(punctuationRegex, '');
        let lowercaseWord = unPunctuationWord.toLowerCase();
        let trimmedWord = lowercaseWord.trim();

        cleanedWords.push(trimmedWord);

        gesturesToAdd.push('null');
    }

    for (let i = 0; i < map.length; i++) {
        var gesture = map[i].gesture;
        var compareArray = map[i].words.split(',');

        for (let ii = 0; ii < compareArray.length; ii++) {
            var compare = compareArray[ii];
            compare = compare.trim();
            var index = cleanedWords.indexOf(compare);

            if (index > -1) {
                gesturesToAdd[index] = gesture;
                break;
            }
        }
    }

    return gesturesToAdd;
}


//Credit to the AWS Sumerian team
//returns joined sentence of gestured marks, words, and whitespaces
//if a speech is not marked then add a generic mark so host does not
//stand there like a robot the whole time.
function addSentence(speech, sentence, marked) {

    if (!marked) {
        var gesture = getRandomGenericGesture();
        var newSentence = '<mark name="gesture:' + gesture + '"/>';
        speech.push(newSentence);
    }

    speech.push(sentence.join(''));

    return speech;
}

//custom object to create gestured speeches
sumerian.gesturedSpeech = function () {
    this.speech = new sumerian.Speech();
    this.speechBody = "";
    this.gesturedBody = "";
    this.configured = false;
    this.wordIndex = -2;
    this.configureSpeech = function (speechText, language, host, autoGesture, voice) {

        host.getComponent('SpeechComponent').addSpeech(this.speech);

        var outputSpeech = speechText;
        var gender = 'female';

        if (voice && voice.gender) {
            gender = voice.gender;
        }

        try {
            if (!genders.hasOwnProperty(gender)) {
                throw Error('Invalid voice gender: ' + gender);
            }
        } catch (e) {
            console.error(e);
            return;
        }

        var voiceArray = genders[gender];

        try {
            if (!voiceArray.hasOwnProperty(language)) {
                throw Error('No valid voice for this language and gender combination: ' + languageNames[language] + ", " + gender);
            }
        } catch (e) {
            console.error(e);
            return;
        }

        var pollyVoice = voiceArray[language];

        if (voice && voice.pollyName) {
            pollyVoice = voice.pollyName;
        }

        try {
            if (!languageMap.hasOwnProperty(language)) {
                throw Error('Invalid language: ' + language);
            }

            if (voices.indexOf(pollyVoice) == -1) {
                throw Error('Invalid voice ID: ' + pollyVoice);
            }

            if (outputSpeech.length < 1) {
                throw Error('Length of speech text body < 1');
            }

        } catch (e) {
            console.error(e);
            return;
        }

        if (autoGesture) {
            outputSpeech = genSpeechGestures(speechText, language);
        }

        this.speech.updateConfig({
            entity: host,
            body: outputSpeech,
            voice: pollyVoice
        });

        this.speechBody = speechText;
        this.gesturedBody = outputSpeech;
        this.configured = true;
        this.wordIndex = -2;
    };

    this.play = function () {
        try {
            if (!this.configured) {
                throw Error('Unconfigured speech, please configure before play attempt');
            }

            this.speech.play();
        } catch (e) {
            console.error(e);
            return;
        }
    };

    this.stop = function () {
        try {
            if (!this.configured) {
                throw Error('Unconfigured speech, please configure before stop attempt');
            }

            this.speech.stop(true);
        } catch (e) {
            console.error(e);
            return;
        }
    };

    this.pause = function () {
        try {
            if (!this.configured) {
                throw Error('Unconfigured speech, please configure before pause attempt');
            }

            this.speech.stop(false);
        } catch (e) {
            console.error(e);
            return;
        }
    };

    //No official way to check when speech has finished, but method has worked from tests.
    this.isSpeechFinished = function () {
        if (this.speech._currentWord != "") {
            if (this.wordIndex < this.speech._currentWordMarkIndex) {
                this.wordIndex = this.speech._currentWordMarkIndex;
            }
            return false;
        } else if (this.wordIndex > this.speech._currentWordMarkIndex && this.speech._currentWordMarkIndex == 0) {
            this.wordIndex = -1;
            return true;
        }

        if (this.wordIndex == -1) {
            return true;
        }

        return false;
    };
};