# Dynamic Gesture Marks for Amazon Sumerian Host Speeches

Amazon Sumerian's host features a speech component that uses ssml marks to trigger gestures at stated positions within the speech text body. A feature exists in the editor to allow gestures to be auto generated within the editor, but this feature cannot be called while in play. This is a scenario I encountered so this is my attempt to create a method to create speech marks dynamically while in play.

For my script I needed gestured speeches generated in real-time and I wanted to extend the function to not only support English but a variety of other languages, including Asian languages. 

### Features:

 - Dynamic gesture mark generation during play.
 - Support for multiple languages (English, Spanish, French, Russian, Japanese, & Korean).
 - Automatic Amazon Polly voice selection based on language.

### Prerequisites:

 - Amazon Sumerian
 - Amazon Cognito
 - Amazon Polly
 

## Getting Started
In your Amazon Sumerian project add `speechgen.gs`.

To create a gestured speech construct a new object, `sumerian.gesturedSpeech()`.

| Type | Variable | Description |
|--|--|--|
| object | speech | Sumerian speech object
| string | speechBody | Original speech text
| string | gesturedBody | Speech text with generated gesture marks
| function | configureSpeech | Configure and generate speech

Then configure the speech by calling,

    configureSpeech(speechText, language, host, bautoGesture, voice)
    
| Type | Parameter | Description |
|--|--|--|
| string | speechText | Your speech body |
| string | language | Language code for input language `('en', 'fr', 'es', 'ru', 'jp', 'kr')` |
| entity | host | Your host entity that is going to play the speech |
| boolean | bautoGesture | true = generate gestures for speech
| string | voice | (optional) Voice to be used for speech

### Example:

This is an example of speech that would be played on begin play in a host entity. 

    function setup(args, ctx) {
    
    	var speechText = 'Hello world!';
    	var host = ctx.entity;
    	
    	var newSpeech = new sumerian.gesturedSpeech();
    	
    	newSpeech.configureSpeech(speechText, 'en',  host, true);
    	newSpeech.speech.play();
    }
    

>    Expected speech body output:   

    <speak><mark name="gesture:wave"/>Hello <mark name="gesture:many"/>World!</speak>

## Additional Notes

Credits the Amazon Sumerian team, the method was borrowed from their own function for auto generation of marks in the editor. This method worked for western languages since they were using white spaces in between words as a marker of where words are in a string.

This method did not work for Asian languages like in this example (Korean & Japanese). Asian languages do not require spaces in between words so there is no easy way to differentiate what is one word or another. What I ended up doing was searching the string for the same combination of characters. 

## Contact
https://www.github.com/MHuangCode
