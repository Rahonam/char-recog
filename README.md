# Optical Character Recognition (OCR) System

### Clone
`git clone https://github.com/Rahonam/char-recog.git`

### Folder structure
#### server
- Backend APIs in DRF - Django Rest Framework

#### client
- Frontend web interface in Angular


### Local Dev
#### API Server
- `cd server`
##### setup environment
- `python3 -m venv .env`
- `source .env/bin/activate`
- `pip install -r requirements.txt`
##### apply schemas
- `python manage.py makemigrations`
- `python manage.py migrate`
##### run dev server
- `python manage.py runserver`

#### Web Client
- `cd client`
- `npm install`
- `ng serve`