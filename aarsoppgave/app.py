from flask import Flask, render_template, request, redirect, url_for, session
import mysql.connector
import mysql.connector.cursor
    
app = Flask(__name__)
app.secret_key = '20/AJ'
 
# Database configuration
host = "10.2.1.163"
user = "tony"
password = "admin"
database = "weatherapp"
 
# Connect to the database
db = mysql.connector.connect(
    host=host,
    user=user,
    password=password,
    database=database,
)
 
if db.is_connected():
    print("Database is connected")
else:
    print("No connection")
 
@app.route('/')
def home():
    return render_template('login.html')
 
@app.route('/login')
def login():
    return render_template('login.html')
 
@app.route('/signup')
def signUp():
    return render_template('signup.html')
 
@app.route('/app')
def app_function():
    username = session.get('username')
    return render_template('app.html', username=username)

@app.route('/admin')
def admin_function():
    username = session.get('username')
    return render_template('admin.html', username=username)

@app.route('/FAQ')
def FAQ_function():
    username = session.get('username')
    return render_template('FAQ.html', username=username)

@app.route('/about')
def about_function():
    username = session.get('username')
    return render_template('about.html', username=username)

@app.route('/terms')
def terms_function():
    username = session.get('username')
    return render_template('terms.html', username=username)
 
@app.route('/logout', methods=['POST'])
def logout():
    session.clear()  # Clear the entire session
    return redirect(url_for('login'))
 
@app.route('/signup', methods=['POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
 
        try:
            cursor = db.cursor()
 
            # Insert user data into the database using placeholders
            insert_query = "INSERT INTO users (Username, Password) VALUES (%s, %s)"
            user_data = (username, password)
            cursor.execute(insert_query, user_data)
 
            db.commit()
            cursor.close()
 
            # Redirect to the login page after successful registration
            return redirect(url_for('login'))
 
        except mysql.connector.Error as err:
            print("Something went wrong: {}".format(err))
            return render_template('signUp.html', msg='Registration failed')
 
@app.route('/login', methods=['POST'])
def log_in():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
 
        try:
            cursor = db.cursor(buffered=True)
 
            # Select user data from the database using placeholders
            select_query = "SELECT * FROM users WHERE Username = %s AND Password = %s"
            user_data = (username, password)
            cursor.execute(select_query, user_data)
           
            user = cursor.fetchone()  # Fetch the first row of the result
            cursor.close()
 
            if user:
                session['username'] = username  # Store username in session
                # Redirect to the application page after successful login
                return redirect(url_for('app_function'))
            else:
                return render_template('login.html', msg='Login failed')
 
        except mysql.connector.Error as err:
            print("Something went wrong: {}".format(err))
            return render_template('login.html', msg='Login failed')
 
if __name__ == '__main__':
    app.run(debug=True)






