## Nodemailer
For receiving mail via the contact form, we're using Nodemailer, which sends emails first to a dummy account (not your personal acc) to keep personal email accounts secure.

NB: In the dummy account, you must enable access from less-secure apps in the settings. From 30th May, this feature is being disabled 'if it is not being used'. I'm not sure what exactly that will mean for the contact form setup as it is.

## ENV Variables

For local development, ENV variables should be stored in a .env file in the root of the project and should contain the following values. The file is ignored by git.

| key | value |
| --- | --- |
| DUMMY_EMAIL_USER | email address of a burner acc the email is initially sent to |
| DUMMY_EMAIL_PASSWD | password for the burner email acc |
| MY_EMAIL | email address of your personal account where emails should finally be sent to |