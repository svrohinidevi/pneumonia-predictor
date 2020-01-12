from flask import Flask, render_template, request
from fastai.vision import *
learn = load_learner('','trained_model_2.pkl')
app = Flask(__name__)

@app.route('/')
def begin():
   return render_template('phome.html')

@app.route('/result',methods = ['POST', 'GET'])

def result():
   dictt={}
   if request.method == 'POST':
         result = request.form
         if result:
            for i,j in result.items():
               s=learn.predict(open_image(j))
               a=str(s[0])
               if(a.find('NORMAL')!=-1):
                  dictt[i]='Congratulations! You do not have pneumonia!'
               else:
                  dictt[i]='Sorry, you have pneumonia! Wish you a speedy recovery!'
               return render_template("phome.html",result = dictt,scroll='result')
         else:
            return render_template("phome.html",result=None,scroll='result')


if __name__ == '__main__':
   app.run(port =8836,debug = True)
