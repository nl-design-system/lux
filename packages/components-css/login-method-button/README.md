# Login Method Button

De Login Method Button is een knop die specifiek bedoeld is voor de Inlogstraat.

## Hernoemen

Aline maakt de terechte opmerking dat "method" niet passend is voor dit component. We hebben het hier over een _middel_ (Digid, e-Herkenning, Google Accounts, Microsoft, etc.) en geen _manier/methode_ (gebruikersnaam/wachtwoord, One Time Password, login link, etc.). Hier wat suggesties voor betere naamgeving:

- `auth-agent` ("Auth" applies to both "authentication" and "authorization")
- `auth-button`/`button-auth`
- `login-button`/`button-login`

Persoonlijk ben ik (Remy Parzinski) voor de `button-*` vorm, daar het een button betreft en deze vorm overeen komt met de API naming convention. Ik wil er ook voor pleiten om het `variant` attribuut te hernoemen naar `agent`.
