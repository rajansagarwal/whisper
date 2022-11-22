from flask import Flask, render_template, request
import whisper
import spacy

# import nltk
# from gensim.summarization import summarize
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', name="Upload Files to Transcribe")


@app.route('/analyze/', methods=['POST', 'GET'])
def my_link():
    if request.method == 'GET':
        return 'Hey'
    if request.method == 'POST':
        form_data = str(request.form).split("'")[3]
        file = request.form['Upload']
        model = whisper.load_model('medium')
        out = model.transcribe(file, language=request.form['lang'])
        print(request.form['Upload'])

        print(request.form)

        NER = spacy.load("en_core_web_sm")
        text1 = NER(out['text'])
        final = text1.ents

        array = []

        for i in range(len(text1.ents)):
            array.append(
                {'text': text1.ents[i].label_,
                 'label': text1.ents[i].text
                 })

        # nltk.download('punkt')
        # nltk.download('stopwords')

        # summary = summarize(out, ratio=0.2, split=False)

        return render_template('index.html', out=out['text'], final=str(final)[1:-1], name=file, array=array,
                               data=form_data)


if __name__ == '__main__':
    app.run(debug=True)
