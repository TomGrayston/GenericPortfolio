## Nodemailer
For receiving mail via the contact form, we're using Nodemailer, which sends emails first to a dummy account (not your personal acc) to keep personal email accounts secure.

NB: Google is phasing out less secure app access. To use the dummy account, you must generate an app password (see [here](https://support.google.com/mail/answer/185833?hl=en-GB)) and add it to your .env file

## ENV Variables

For local development, ENV variables should be stored in a .env.local file in the root of the project and should contain the following values. The file is ignored by git.

| key | value |
| --- | --- |
| DUMMY_EMAIL_USER | email address of a burner acc the email is initially sent to |
| DUMMY_EMAIL_PASSWD | an 'app password' for the burner email acc |
| SMTP_HOST | your chosen smtp host (e.g. smtp.gmail.com) |
| SMTP_PORT | 465 unless you have a reason for changing it |
| MY_EMAIL | email address of your personal account where emails should finally be sent to |