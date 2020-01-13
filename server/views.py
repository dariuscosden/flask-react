from flask import current_app as app
from flask import render_template, url_for, send_from_directory, Response, request, redirect
import smtplib
from email.mime.text import MIMEText
from .error import RequestError


# main route
@app.route('/')
@app.route('/<path>')
def index(path=None):

    return render_template('index.html')


# contact
@app.route('/api/v1/contact', methods=['POST'])
def contact():

    # validates empty
    if request.form['email'] == '':
        raise RequestError('Please fill out the email field', 401)
    if request.form['message'] == '':
        raise RequestError('Please fill out the message field', 401)

    # validates email
    if len(request.form['email'].split('@')) != 2:
        raise RequestError('Please enter a valid email address', 401)

    msg = MIMEText(request.form['message'])
    msg['Subject'] = "I'd like to get in touch"
    msg['From'] = "contact@cosden.io"
    msg['To'] = "me@cosden.io"
    msg['Reply-To'] = request.form['email']

    s = smtplib.SMTP('smtp.eu.mailgun.org', 587)

    s.login('postmaster@cosden.io',
            'c33fbb4335b64a8ecb0f789764454b76-0a4b0c40-953dcbdc')
    s.sendmail(msg['From'], msg['To'], msg.as_string())
    s.quit()

    return Response(status=200)
