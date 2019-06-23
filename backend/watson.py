from ibm_watson import SpeechToTextV1
import time
import json

speech_to_text = SpeechToTextV1(
    iam_apikey='9NbY4ir1sfqHcWYtVgfWDkRcZs4Wst4hajaZtkcRZRCJ',
    url='https://stream.watsonplatform.net/speech-to-text/api'
)

seconds = time.time()
with open('0.mp3', 'rb') as audio_file:
    speech_recognition_results = speech_to_text.recognize(
        audio=audio_file,
        content_type='audio/mp3',
        keywords=['colorado', 'tornado', 'tornadoes'],
        keywords_threshold=0.01,
        inactivity_timeout=60
    ).get_result()

print(time.time() - seconds)
print(json.dumps(speech_recognition_results, indent=2))