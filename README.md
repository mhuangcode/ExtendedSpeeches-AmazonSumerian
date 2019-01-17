### Warning this is not an official sumerian script, I am not responsible for any issues that may occur when using this script. Use at your own risk.



## Changelog



#####  01.17.2019 - Update to hackathon version

>  - object renamed to GesturedSpeech
>  - Added speech finished event
>  - Added speech started event
>  - Added callbacks to events for speech on play, stop, sentence, and word
>  - Changed parameters to a single object
>  - Added Chinese language support
>  - Added script with parameters for editing in editor
>  - Removed restart function until further testing
>  - Added delay if speech is still playing when trying to trigger play again
>  - Event will be emitted when object is ready
>  - Added event listeners for triggering play, stop, and pause
>  - Added ability to set callbacks for events
>  - Play function can take new speech body as a parameter
>  - Updated readme




# Extending Speeches for Amazon Sumerian's Host Speeches



Amazon Sumerian features host entities which has a speech component, which calls Amazon Polly to generate audio from text that is spoken by the host. The speech body may contain simply text, or text in combination with SSML and gesture marks/tags. SSML marks/tags are used by Polly to create a more customized audio output, while gestures triggers animations for hosts to be played at the stated position in the speech. The focus for this script is gesture marks and it's generation in live environments.



Currently speeches can be created while in play/real-time, but the only method of automatically generating dynamic gesture marks is within the Sumerian Editor (out of play). This is great for static speeches that are predefined by the author, but there is no easy way to add marks/tags for speeches dynamically while in play.



This script is an attempt to extend speeches by adding the ability to procedurally generate gesture marks in dynamic environments.



To further extend speeches, there is a custom function to keep track of if a speech has finish speaking.



>  #### Features:

>  - Dynamic gesture mark generation during play.

>  - Support for multiple languages (English, Spanish, French, Russian, Japanese, Korean & Chinese).

>  - Automatic Amazon Polly voice selection based on language.

>  - Function to check if speech has finished playing.

>  #### Prerequisites:

>  - Amazon Sumerian

>  - Amazon Cognito

>  - Amazon Polly


## Getting Started

### Quick start
In your Amazon Sumerian project add `speechgen.js`.
In your host entity add `addToEntity.js`.
Edit the options to your use case and speech spoken can be edited in `addToEntity.js`'s setup function. By default it is set to 'Hello World!'.

### Through custom scripting

To create a gestured speech construct a new object,

    sumerian.GesturedSpeech({
		speechBody:  'Hello world!',
		language:  'en',
		host:  sumerian.Entity,
		autoGesture:  true,
		gender:  'female',
		voiceName:  'Salli',
		endSpeechCallback:  null,
		startSpeechCallback:  null,
		ssmlCallback:  null,
		sentenceCallback:  null,
		onStopCallback:  null,
		onPlayCallBack:  null,
		wordCallback:  null
	}

#### Default Polly Voices:

| - | Language | Voice Name | Gender |

|--|--|--|--|

|en| English| Salli | female |

|en| English| Justin | male |

|fr| French| Celine | female |

|fr| French| Mathieu | male |

|es| Spanish| Penelope | female |

|es| Spanish| Miguel | male |

|ru| Russian| Tatyana | female |

|ru| Russian| Maxim | male |

|jp| Japanese| Mizuki | female |

|jp| Japanese| Takumi | male |

|kr| Korean| Seoyeon | female |




## Examples:



This is an example of speech that would be played on begin play in a host entity.



    function setup(args, ctx) {
	    const speechText = 'Hello world!';
	    const gesturedSpeech = new sumerian.GesturedSpeech({
		    speechBody: speechText,
		    host: ctx.entity,
		    autoGesture: true,
		    voiceName: 'Salli'
	    });

	    gesturedSpeech.play();
    }



> Expected speech body output: `<speak><mark name="gesture:wave"/>Hello <mark name="gesture:many"/>World!</speak>`




An example with voice parameter. -> *Note: Not all languages have both a male and female voice.*



    function setup(args, ctx) {
	    const speechText = 'Bonjour le monde!';
	    const gesturedSpeech = new sumerian.GesturedSpeech({
			speechBody: speechText,
			language: 'fr',
			gender: 'male',
			host: ctx.entity,
			autoGesture: true
		});

	    gesturedSpeech.play();
    }



> Expected Polly voice for speech: `'Mathieu'`



*There are more than 1 voice for some languages in the Amazon Polly API. You can select a custom voice by declaring it in voiceObject.pollyName as a string.*



[Click here](https://docs.aws.amazon.com/polly/latest/dg/voicelist.html) for list of Polly voices.



>  **Tips:**

>

>

>  - Language parameter does not need to match voice language, but is recommended.

>  - Language parameter does not need to match text body's language either, but will only add generic gestures if so.





## Additional Notes



Credits the Amazon Sumerian team, the method was borrowed from their own function for auto generation of marks in the editor. This method worked for western languages since they were using white spaces in between words as a marker of where words are in a string.



But this method did not work for Asian languages, for example (Korean & Japanese). Asian languages do not require spaces in between words, so there is no easy way to differentiate what is one word or another. The method I ended finding the most effective was searching the speech for the same combination of characters which make up the word.



I also did some adjustments to increase the mark for generation. This may be important when there is a long speeches to prevent stuttering.



[Read more about Amazon Polly's ssml tags/marks here.](https://docs.aws.amazon.com/polly/latest/dg/supported-ssml.html)



[Amazon Sumerian Homepage](https://aws.amazon.com/sumerian/)



## Contact

https://www.github.com/MHuangCode
mhuangcode@gmail.com
@mhuang on Sumerian slack channel