const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

const hcaptchaSecret = 'ES_85cb154a32ee4e528a336fe675ed2ea1'; // Use your actual secret key

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { name, email, phone, message, 'h-captcha-response': token } = req.body;

    // Verify hCaptcha token
    const verificationUrl = `https://hcaptcha.com/siteverify`;

    try {
        const response = await axios.post(verificationUrl, null, {
            params: {
                secret: hcaptchaSecret,
                response: token,
            },
        });

        if (!response.data.success) {
            return res.status(400).json({ success: false, message: 'hCaptcha verification failed' });
        }

        // Return a success message
        res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.js-scroll-trigger');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});

