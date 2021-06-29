from flask import Flask

app = Flask(__name__)
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0
app.jinja_env.lstrip_blocks = True
app.jinja_env.trim_blocks = True

# Circular imports.
from app import routes
