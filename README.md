# Dynamic Gesture Marks for Amazon Sumerian Host Speeches

Amazon Sumerian's host features speeches that uses ssml tags/marks to trigger gestures at stated positions within the speech text body. A feature exists in the editor to allow gestures to be auto generated within the editor, but this feature cannot be called while in play. This is a scenario I encountered and so this is my attempt to create a method to create speech marks dynamically.

For my script I needed gestured speeches generated in real-time and I wanted to extend the function to not only support English but several of other languages, including Asian languages.

To further extend speeches, there is a custom function to keep track of if a speech has finish speaking. 

> #### Features:
>  - Dynamic gesture mark generation during play.
>  - Support for multiple languages (English, Spanish, French, Russian, Japanese, & Korean).
>  - Automatic Amazon Polly voice selection based on language.
>   - Function to check if speech has finished playing.
> 
> #### Prerequisites:
>  - Amazon Sumerian
>  - Amazon Cognito
>  - Amazon Polly

 

## Getting Started
In your Amazon Sumerian project add `speechgen.gs`.

To create a gestured speech construct a new object, `sumerian.gesturedSpeech()`.

| Type | Variable | Description |
|--|--|--|
| object | speech | Sumerian speech object.
| string | speechBody | Original speech text.
| string | gesturedBody | Speech text with generated gesture marks.
| int | wordIndex | Last checked word index.
| function | configureSpeech | Configure and generate speech.
| function | play | Play generated speech.
| function | stop | Stops generated speech `will rewind speech to start`.
| function | pause | Pauses generated speech `will NOT rewind speech to start`.
| function | isSpeechFinished | Returns true if speech has finished playing.

Then configure the speech by calling,

    configureSpeech(speechText, language, host, bautoGesture, voiceObject)
    
| Type | Parameter | Description |
|--|--|--|
| string | speechText | Your speech body. |
| string | language | Language code for input language `('en', 'fr', 'es', 'ru', 'jp', 'kr')` |
| entity | host | Your host entity that is going to play the speech. |
| boolean | bautoGesture | If true, auto generate gestures for speech.
| object | voiceObject | `(optional)` - voice.gender = Gender of voice. `default = 'female'` 
|||`(optional)` - voice.pollyName = Voice to use, *will override voiceObject.gender if given*.

#### Default Polly Voices:
| | Language | Voice Name | Gender | 
|--|--|--|--|--|--|--|--|
|en| English| Salli | female
|en| English| Justin | male
|fr| French| Celine | female
|fr| French| Mathieu | male
|es| Spanish| Penelope | female
|es| Spanish| Miguel | male
|ru| Russian| Tatyana | female
|ru| Russian| Maxim | male
|jp| Japanese| Mizuki | female
|jp| Japanese| Takumi | male
|kr| Korean| Seoyeon | female


## Examples:

This is an example of speech that would be played on begin play in a host entity. 

    function setup(args, ctx) {
    
    	var speechText = 'Hello world!';
    	var host = ctx.entity;
    	var language = 'en' //English
    	
    	var newGesturedSpeech = new sumerian.gesturedSpeech();
    	
    	newGesturedSpeech.configureSpeech(speechText, 'en',  host, true);
    	newGesturedSpeech.play();
    }
    

>    Expected speech body output:       `<speak><mark name="gesture:wave"/>Hello <mark name="gesture:many"/>World!</speak>`


An example with voice parameter.  -> *Note: Not all languages have both a male and female voice.*

    function setup(args, ctx) {
    	var speechText = 'Bonjour le monde!';
    	var host = ctx.entity;
    	var language = 'fr' //French
    	
    	var voiceData = new Object;
    	voiceData.gender = 'male';
		
		var newGesturedSpeech = new sumerian.gesturedSpeech();
		newGesturedSpeech.configureSpeech(speechText, 'en', host, true, voiceData);
		newGesturedSpeech.play();

> Expected Polly voice for speech: `'Mathieu'`

There are more than 1 voice for some languages in the Amazon Polly API. You can select a custom voice by declaring it in voiceObject.pollyName as a string.  [Click here for list of voices available.](https://docs.aws.amazon.com/polly/latest/dg/voicelist.html)

> **Tips:**
>  
> 
>  - Language parameter does not need to match voice language, but is recommended.
>  - Language parameter does not need to match text body's language either, but will only generate generic gestures if so.



## Additional Notes

Credits the Amazon Sumerian team, the method was borrowed from their own function for auto generation of marks in the editor. This method worked for western languages since they were using white spaces in between words as a marker of where words are in a string.

This method did not work for Asian languages like in this example (Korean & Japanese). Asian languages do not require spaces in between words so there is no easy way to differentiate what is one word or another. What I ended up doing was searching the string for the same combination of characters to search for the word. 

[Read more about Amazon Polly's ssml tags/marks here.](https://docs.aws.amazon.com/polly/latest/dg/supported-ssml.html)
[Amazon Sumerian Homepage](https://aws.amazon.com/sumerian/)

## Contact
https://www.github.com/MHuangCode