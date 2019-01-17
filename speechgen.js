'use strict'

//Project to extend speeches in Amazon Sumerian

//Martin Huang - mhuangcode@gmail.com
//https://github.com/MHuangCode/ExtendedSpeeches-AmazonSumerian

//Speeches can be marked with gesture marks in Sumerian to trigger gestures/emotes for host.
//The editor has a function for marks to be auto-generated with a click of a button!
//But there is no function that does this during play/real-time.

//This project is an attempt to address this and extend upon the same function by including several
//other languages.

//english word map from create.js
const mappingEnglish = [{
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
    gesture: 'agreement',
    words: 'agree, agrees, agreed, join, joined, joins, joining, partner, partnered, partners, partnering, relationship, share, shared, sharing, shares, together, togetherness, linked, links, link, linking'

}, {
    gesture: 'negative',
    words: 'disgust, disgusted, gross, vile, ugly, eew, slimey, creepy, done, nasty, enough, without, never, nevermore, wont, wouldnt, shouldnt, dont, no, nope, none, never, nothing, nada'
}];

const mappingFrench = [{
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
    gesture: 'agreement',
    words: "d'accord, de rejoindre, rejoint, rejoindre, partenaire, partenaire, partenaires, partenariat, relation, partager, partagé, partage, part, ensemble, togetherness, lié, liens, link, linking"

}, {
    gesture: 'negative',
    words: 'dégoût, dégoûté, grossier, vil, laid, eew, slimey, creepy, fait, méchant, assez, sans, jamais, nevermore, ne veut pas, ne pas, non, aucun, jamais, rien, nada'
}];
//////////////
const mappingSpanish = [{
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
    gesture: 'negative',
    words: 'asco, disgustado, bruto, vil, fea, eew, viscosa, espeluznante, hecho, desagradable, suficiente, sin, nunca, nunca más, costumbre, wouldnt, shouldnt, no haga, pues no, no, nada'
}];

const mappingRussian = [{

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
    gesture: 'agreement',
    words: 'согласен, соглашается, согласился присоединиться, присоединились, присоединяется, присоединение, партнера, партнеров, отношения, общие, обмен, акция, вместе, единение, связаны между, ссылки'

}, {
    gesture: 'negative',
    words: 'отвращение, валовые, мерзкий, некрасивый, ЭВП, жуткое, сделано, неприятный, достаточно, не, никогда больше, привычка, должны, не нет, Нету, ни, никогда, ничего, нада'
}];
/////////////////
const mappingJapanese = [{
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
    gesture: 'agreement',
    words: '同意する, 同意し, 参加, 結合, 接合, パートナー, 関係, 共有, 一緒に, 一緒, リンクされ, リンク'
}, {
    gesture: 'negative',
    words: '嫌悪感, 総, 下劣な, 醜い, EEW, slimey, 不気味な, 行って, 厄介な, 十分に, なし, 決して, ネヴァーモア, 文句を言わない, はずの, いけない, いや, どれも, 何も, 灘'
}];
///////////////
const mappingKorean = [{
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
    gesture: 'agreement',
    words: '동의, 가입, 결합, 파트너, 파트너 관계, 관계, 공유, 함께, 공생, 링크'
}, {
    gesture: 'negative',
    words: '혐오, 총, 비열한, 추한, eew, 저런, 소 름, 수행, 불쾌한, 충분하지 않고, 결코, 그 뿐이었다, 습관, 야해, 그나마, 아니, 전혀, 아무것도, 아무것도 모르는'
}];

const mappingChinese = [{
    gesture: 'big',
    words: '添加, 以上, 权威, 大, 封面, 充分, 飞, 成长, 增长, 高, 巨大, 增加, 主要, 多数, 领导者, 很多, 提高, 上升'
}, {
    gesture: 'heart',
    words: '接受, 承认, 相信, 关心, 感觉, 朋友, 感恩, 快乐, 心, 人类, 痛苦, 保存, 安全, 善良, 爱'
}, {
    gesture: 'in',
    words: '包括, 里面, 进入, 现在, 靠近, 最近, 在其中, 在内'
}, {
    gesture: 'many',
    words: '所有, 永远, 任何人, 其中, 区域, 任何, 周围, 美丽, 整体, 环境, 每个人, 一切, 观众, 总计, 群体, 百万, 数百万, 其他, 十亿, 数十亿, 百, 数百, 许多, 千, 世界, 外面, 揭示'
}, {
    gesture: 'movement',
    words: '跨越, 向前, 沿着, 远, 快, 跟随, 去, 离开, 移动, 运动, 通过, 整个, 朝向, 旅行, 转身'
}, {
    gesture: 'one',
    words:
    '单, 一, 第一, 唯一, 独奏, 警告, 真实, 向上, 独自'
}, {
    gesture: 'aggressive',
    words: '权力, 强大, 断言, 自信, 更强, 最强, 力量, flex, 党, 该死, 该死的, darn, shucks, doh, drat, 生气, 愤怒, 最痛苦, 好斗, 讨厌, 攻击, 进攻, 战斗'
}, {
    gesture: 'you',
    words: '你, 你们, 你的'
}, {
    gesture: 'defense',
    words: '防御, 恐惧, 击退, 最可怕, 畏缩, 懦夫, 可怕, 注定, 害怕, 恐怖可怕, 恐怖, 怪异, 幽灵般的最恐怖'
}, {
    gesture: 'wave',
    words: '你好, 嗨, hiya, 欢迎, aloha, heya, 嘿, 再见, hola, adios, chao'
}, {
    gesture: 'self',
    words: '我, 我自己, 我的'
}, {
    gesture: 'agreement',
    words: '同意, 加入, 合作伙伴, 合作伙伴关系, 共享, 团结, 链接'
}, {
    gesture: 'negative',
    words: '厌恶, 粗暴, 卑鄙, 丑陋, eew, slimey, 令人毛骨悚然, 完成, 足够, 没有, 不会 不应该, 不, 从不, nada'
}];

const genericGestures = ['generic_a', 'generic_b', 'generic_c'];

const languageMap = {
    "en": mappingEnglish,
    "fr": mappingFrench,
    "es": mappingSpanish,
    "ru": mappingRussian,
    "jp": mappingJapanese,
    "kr": mappingKorean,
    "zh": mappingChinese
};

const languageNames = {
    "en": 'English',
    "fr": 'French',
    "es": 'Spanish',
    "ru": 'Russian',
    "jp": 'Japanese',
    "kr": 'Korean',
    "zh": 'Chinese'
};

const asianLanguage = ["jp", "kr", "zh"];

const femaleVoices = {
    "en": "Salli",
    "fr": "Celine",
    "es": "Penelope",
    "ru": "Tatyana",
    "jp": "Mizuki",
    "kr": "Seoyeon",
    'zh': 'Zhiyu'
};

const maleVoices = {
    "en": "Justin",
    "fr": "Mathieu",
    "es": "Miguel",
    "ru": "Maxim",
    "jp": "Takumi"
}

const genders = {
    'male': maleVoices,
    'female': femaleVoices
};

const voices = [
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
    'Vitoria',
    'Zhiyu'
];

const whitespaceRegex = /\s+/g;
const punctuationRegex = /[\.。，,、\\\/\#\?？¡!!$%^&*;:{}\=\-\_`~()\[\]"']+/g;
const sentenceEndRegex = /[.。!!?？]$/;
const sentenceEndRegexAsian = /[.。!!?？]/g;
const markRegex = /<[^>]*>/g;

const spliceString = (str, start, newSubString) => str.slice(0, start) + newSubString + str.slice(start);

const replaceWordAt = (str, word, index) => {
    const endIndex = index + word.length;
    const replaceWith = "-".repeat(word.length);
    return str.slice(0, index) + str.slice(index, endIndex).replace(word, replaceWith) + str.slice(endIndex);
};

const replaceCharAt = (str, character, index) => str.slice(0, index) + character + str.slice(index + 1);

const removeElement = (array, from, to) => {
    const rest = array.slice((to || from) + 1 || array.length);
    array.length = from < 0 ? array.length + from : from;
    return array.push.apply(array, rest);
};

const getRandomGenericGesture = () => genericGestures[Math.floor(Math.random() * genericGestures.length)];

//main function
const genSpeechGestures = (speech, language) => {
    const map = languageMap[language];

    if (asianLanguage.indexOf(language) > -1) {
        speech = genSpeechGesturesAsian(speech, map);
    } else {
        speech = genSpeechGesturesWestern(speech, map);
    }

    return speech;
};

const getAsianSentences = (speech) => {
    let sentenceStart = 0;
    let sentenceEnd = speech.search(sentenceEndRegexAsian, 0);
    const sentences = [];

    while (sentenceEnd > -1) {
        sentences.push({
            start: sentenceStart,
            end: sentenceEnd
        });
        sentenceStart = sentenceEnd + 1;
        speech = replaceCharAt(speech, "-", sentenceEnd);
        sentenceEnd = speech.search(sentenceEndRegexAsian, 0);
    }

    if (sentenceEnd != speech.length) {
        sentences.push({
            start: sentenceStart,
            end: speech.length
        });
    }

    return sentences;
};

//since asian words do not have whitespace in between each other
//we will use index of to get a good guess of where and if there
//is a valid word
const genSpeechGesturesAsian = (speech, map) => {

    const gesturesToAdd = new Map();
    const indicies = [];

    let speechText = speech.replace(markRegex, '');
    let dirtyText = speechText;

    let sentences = getAsianSentences(speech);


    for (let i = 0; i < map.length; i++) {
        const gesture = map[i].gesture;
        const words = map[i].words.split(', ');

        for (let ii = 0; ii < words.length; ii++) {
            const trimmedWord = words[ii].trim();
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
                        sentences = removeElement(sentences, iii, iii + 1);
                        break;
                    }
                }

                dirtyText = replaceWordAt(dirtyText, trimmedWord, index);
                index = dirtyText.indexOf(trimmedWord);
            }
        }
    }

    //Check if each sentence has a gesture, if not find a random one
    for (let i = 0; i < sentences.length; i++) {
        const index = sentences[i].start;
        const randomGesture = getRandomGenericGesture();
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
        const index = indicies[i];
        const gestureMark = '<mark name="gesture:' + gesturesToAdd.get(index) + '"/>';

        speechText = spliceString(speechText, index, gestureMark);
    }

    return '<speak>' + '<mark name="speechstart"/>' + speechText + '<mark name="speechend"/>' + '</speak>';
};

//Since western languages have whitespaces we can use that as a marker
//for each word.
//Similar logic from create.js in sumerian when clicking on auto-generate
//speech gestures for speeches in the editior. Only difference is the searching method.
//Credits to the AWS Sumerian team.
const genSpeechGesturesWestern = (speech, map) => {

    //remove any gesture & ssml marks from speech
    const speechText = speech.replace(markRegex, '');

    const gesturedSentences = [];
    let bIsMarkedSentence = false;
    const currentSentence = [];

    //make an array of white space in text, will be added back when reassembling text
    const whitespace = speech.match(whitespaceRegex);

    //Prevent whitespace array from being defined as null when only a single word is entered.
    if (whitespace == null) {
        whitespace.length = 0;
    }

    let whitespaceIndex = 0;

    const speechWords = speechText.split(whitespaceRegex);

    const newGestures = getGestureForWords(speechWords, map);

    for (let i = 0; i < speechWords.length; i++) {
        const word = speechWords[i];
        if (newGestures[i] != "null") {
            currentSentence.push('<mark name="gesture:' + newGestures[i] + '"/>' + word);
            bIsMarkedSentence = true;
        } else {
            currentSentence.push(word);
        }

        if (whitespaceIndex < whitespace.length) {
            currentSentence.push(whitespace[whitespaceIndex++]);
        }

        if (sentenceEndRegex.test(word)) {
            const fullSentence = addSentence(gesturedSentences, currentSentence, bIsMarkedSentence);
            gesturedSentences.push(fullSentence);

            currentSentence.length = 0;
            bIsMarkedSentence = false;
        }
    }

    //if final sentence does not have an ending punctuation
    if (currentSentence.length > 0) {

        //will check if sentence has any marks, if not add random generic one
        const fullSentence = addSentence(gesturedSentences, currentSentence, bIsMarkedSentence);
        gesturedSentences.push(fullSentence);
    }

    //add speak marks and join all sentences
    return '<speak>' + '<mark name="speechstart"/>' + gesturedSentences.join('') + '<mark name="speechend"/>' + '</speak>';
};


//Faster searching for gestures
const getGestureForWords = (words, map) => {

    const cleanedWords = [];
    const gesturesToAdd = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const unPunctuationWord = word.replace(punctuationRegex, '');
        const lowercaseWord = unPunctuationWord.toLowerCase();
        const trimmedWord = lowercaseWord.trim();

        cleanedWords.push(trimmedWord);

        gesturesToAdd.push('null');
    }

    for (let i = 0; i < map.length; i++) {
        const gesture = map[i].gesture;
        const compareArray = map[i].words.split(', ');

        for (let ii = 0; ii < compareArray.length; ii++) {
            let compare = compareArray[ii];
            compare = compare.trim();
            const index = cleanedWords.indexOf(compare);

            if (index > -1) {
                gesturesToAdd[index] = gesture;
                break;
            }
        }
    }

    return gesturesToAdd;
};

//Credit to the AWS Sumerian team
//returns joined sentence of gestured marks, words, and whitespaces
//if a speech is not marked then add a generic mark so host does not
//stand there like a robot the whole time.
const addSentence = (speech, sentence, marked) => {

    if (!marked) {
        const gesture = getRandomGenericGesture();
        speech.push('<mark name="gesture:' + gesture + '"/>');
    }

    speech.push(sentence.join(''));

    return speech;
};

const getValidGender = (gender = 'female') => {
    if (genders.hasOwnProperty(gender)) {
        return gender;
    } else {
        console.error('invalid voice gender: ' + gender);
    }
};

const getValidLanguage = (gender, language) => {

    const voiceByGender = genders[gender];
    if (voiceByGender && voiceByGender.hasOwnProperty(language)) {
        return language;
    } else {
        console.error('No valid voice for this language and gender combination: ' + language + ", " + this.gender);
    }
};


const getValidVoice = (gender, language, voice) => {

    if (voice) {
        try {
            if (voices.hasOwnProperty(voice)) {
                return voice;
            } else {
                throw Error(voice + ' is not a valid voice.');
            }
        } catch (e) {
            console.error(e);
            return;
        }
    }

    const genderVoices = genders[gender];
    return genderVoices[language];
};


const getValidText = (text, language, autoGesture) => {
    if (autoGesture) {
        return genSpeechGestures(text, language);
    } else {
        return text;
    }
};

const updateSpeech = (speech, host, speechBody, voice) => {
    speech.updateConfig({
        entity: host,
        body: speechBody,
        voice: voice
    });
};

const speeches = [];

sumerian.GesturedSpeech = function (config = {
    speechBody: '', //optional
    language: 'en', //optional if voice is selected, default to english
    host: null, //manditory, your entity/host must have a speech component
    autoGesture: true, //optional
    gender: 'female', //optional if voice is selected, defaults to female
    voiceName: '', //optional, will override language and gender if given
    endSpeechCallback: null, // optional
    startSpeechCallback: null,// optional
    ssmlCallback: null,// optional
    sentenceCallback: null,// optional
    onStopCallback: null,// optional
    onPlayCallBack: null,// optional
    wordCallback: null// optional
}) {
    this.speech = new sumerian.Speech();
    this.host = config.host;

    this.host.getComponent('SpeechComponent').addSpeech(this.speech);

    this.autoGesture = config.autoGesture || true;
    this.gender = config.gender ? getValidGender(config.gender) : getValidGender();
    this.language = getValidLanguage(this.gender, config.language);
    this.voice = config.voiceName ? getValidVoice(this.gender, this.language, config.voiceName) : getValidVoice(this.gender, this.language);
    this.speechBody = getValidText(config.speechBody, this.language, this.autoGesture);

    this.endSpeechCallback = config.endSpeechCallback; //emitted when speech is finished
    this.startSpeechCallback = config.startSpeechCallback; //emitted when speech first begins
    this.ssmlCallback = config.ssmlCallback; //emitted when an ssml is handled
    this.sentenceCallback = config.sentenceCallback; //emitted on new sentence begins
    this.onStopCallback = config.onStopCallBack; //emitted when speech stops playing
    this.onPlayCallBack = config.onPlayCallBack; //emitted when speech start playing
    this.wordCallback = config.wordCallback; //emitted on new word

    this.isSpeechPlaying = false;
    this.isSpeechFinished = true;

    this.currentSentence = '';
    this.currentWord = '';

    this.setCallback = (type, callback) => {
        switch (type.toLowerCase()) {
            case 'endspeech':
                this.endSpeechCallback = callback;
                break;
            case 'startspeech':
                this.startSpeechCallback = callback;
                break;
            case 'ssml':
                this.ssmlCallback = callback;
                break;
            case 'sentence':
                this.sentenceCallback = callback;
                break;
            case 'stop':
                this.onStopCallBack = callback;
                break;
            case 'start':
                this.onStartCallBack = callback;
                break;
            case 'word':
                this.wordCallback = callback;
                break;
            default:
                console.error('invalid event type: ', type);
        }
    };

    this.setText = (text) => {

        if (typeof text != 'string' || text.length == 0) {
            console.error('invalid speech body', text);
            return;
        }

        this.speechBody = getValidText(text, this.language, this.autoGesture);
        this.updateConfig();
    };

    this.setVoice = (voice) => {
        this.voice = getValidVoice(voice);
        this.updateConfig();
    };

    this.updateConfig = () => {
        updateSpeech(this.speech, this.host, this.speechBody, this.voice);
    };

    this.setLanguage = (language) => {
        this.language = getValidLanguage(this.gender, language);
        this.voice = getValidVoice(this.gender, this.language);
        this.updateConfig();
    };

    this.play = (speech = null) => {

        if (speech) {
            this.setText(speech);
        }

        //check to prevent multiple speeches from same host overlapping
        if (this.isSpeechPlaying) {
            setTimeout(() => {
                this.play();
            }, 500);

        } else {
            this.speech.play();
        }
    };

    this.stop = () => {
        this.speech.stop();
    };

    this.pause = () => {
        this.speech.pause();
    };

    this.onSsmlEvent = (message) => {
        if (message === 'speechend') {
            this.isSpeechFinished = true;

            if (this.endSpeechCallback) {
                this.endSpeechCallback(this);
            }
        } else if (message === 'speechstart') {
            this.isSpeechFinished = false;

            if (this.startSpeechCallback) {
                this.startSpeechCallback(this);
            }
        } else if (this.ssmlCallback) {
            this.ssmlCallback(this, message);
        }

    };

    this.onSentenceEvent = (sentence) => {
        this.currentSentence = sentence;
        if (this.sentenceCallback) {
            this.sentenceCallback(this, sentence);
        }
    };

    this.onStopEvent = () => {
        this.isSpeechPlaying = false;
        sumerian.SystemBus.emit(this.host.id + '.endSpeechEvent');
        if (this.onStopCallBack) {
            this.onStopCallBack(this);
        }
    };

    this.onPlayEvent = () => {
        this.isSpeechPlaying = true;
        if (this.onPlayCallBack) {
            this.onPlayCallBack(this);
        }
    };

    this.onWordEvent = (word) => {
        this.currentWord = word;
        if (this.wordCallback) {
            this.wordCallback(this, word);
        }
    };

    this.configureListeners = () => {
        sumerian.SystemBus.addListener(`${this.host.id + '.ssmlEvent'}`, this.onSsmlEvent);
        sumerian.SystemBus.addListener(`${this.host.id + '.sentenceEvent'}`, this.onSentenceEvent);
        sumerian.SystemBus.addListener(`${this.host.id + '.startSpeechEvent'}`, this.onPlayEvent);
        sumerian.SystemBus.addListener(`${this.host.id + '.stopSpeechEvent'}`, this.onStopEvent);
        sumerian.SystemBus.addListener(`${this.host.id + '.wordEvent'}`, this.onWordEvent);

        sumerian.SystemBus.addListener(`${this.host.id + '.playGesturedSpeech'}`, this.play());
        sumerian.SystemBus.addListener(`${this.host.id + '.stopGesturedSpeech'}`, this.stop());
        sumerian.SystemBus.addListener(`${this.host.id + '.pauseGesturedSpeech'}`, this.pause());
    };

    this.cleanup = () => {
        sumerian.SystemBus.removeListener(`${this.host.id + '.ssmlEvent'}`, this.onSsmlEvent);
        sumerian.SystemBus.removeListener(`${this.host.id + '.sentenceEvent'}`, this.onSentenceEvent);
        sumerian.SystemBus.removeListener(`${this.host.id + '.startSpeechEvent'}`, this.onPlayEvent);
        sumerian.SystemBus.removeListener(`${this.host.id + '.stopSpeechEvent'}`, this.onStopEvent);
        sumerian.SystemBus.removeListener(`${this.host.id + '.wordEvent'}`, this.onWordEvent);

        sumerian.SystemBus.removeListener(`${this.host.id + '.playGesturedSpeech'}`, this.play());
        sumerian.SystemBus.removeListener(`${this.host.id + '.stopGesturedSpeech'}`, this.stop());
        sumerian.SystemBus.removeListener(`${this.host.id + '.pauseGesturedSpeech'}`, this.pause());

        this.host.getComponent('SpeechComponent').removeSpeech(this.speech);
    };

    // configure speech, part of the constructor
    updateSpeech(this.speech, this.host, this.speechBody, this.voice);
    speeches.push(this);
    this.configureListeners();

    // use during setup function in other scripts to make sure speech is ready
    sumerian.SystemBus.emit(this.host.id + '.GesturedSpeechReady');
};

function cleanup(args, ctx) {
    speeches.forEach(value => {
        value.cleanup();
    });

    speeches.length = 0;
}