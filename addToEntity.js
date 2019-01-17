'use strict';

const parameters = [{
        name: 'Auto play',
        key: 'autoplay',
        type: 'boolean',
        default: false,
        description: 'Creates gestured speech and plays speech in setup function if true.'
    },
    {
        name: 'Auto gesture',
        key: 'autoGesture',
        type: 'boolean',
        default: false,
        description: 'Auto generate gestures on before speech is played if true.'
    },
    {
        name: 'Voice\'s gender',
        key: 'gender',
        type: 'string',
        control: 'select',
        options: [
            'female',
            'male'
        ],
        description: 'Voice\'s gender to be used by Polly. Note: Not all languages have both male & female voices.',
        default: 'female'
    },
    {
        name: 'Language',
        key: 'language',
        type: 'string',
        control: 'select',
        options: [
            'English',
            'French',
            'Spanish',
            'Russian',
            'Japanese',
            'Korean',
            'Chinese'
        ],
        description: 'Language for the voice. Selecting a specific voice can override this option.',
        default: 'English'
    },
    {
        name: 'Voice',
        key: 'voice',
        type: 'string',
        control: 'select',
        options: [
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
        ],
        description: 'Voice to be used by Polly. *Note: Selecting an option here will override both language and gender options',
        default: null
    }
];

function setup(args, ctx) {

    const speechBody = 'Hello world!'; // You can add your speech text here

    const langCodes = {
        'English': 'en',
        'French': 'fr',
        'Spanish': 'ru',
        'Russian': 'jp',
        'Japanese': 'jp',
        'Korean': 'kr',
        'Chinese': 'zh'
    };

    if (args.autoplay) {

        ctx.entityData.gesturedSpeech = new sumerian.GesturedSpeech({
            speechBody: speechBody,
            language: langCodes[args.language],
            host: ctx.entity,
            autoGesture: args.autoGesture,
            gender: args.gender,
            voiceName: args.voiceName
        });

        ctx.entityData.gesturedSpeech.play();
    }

    // do something cool
}