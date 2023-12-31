const axios = require('axios');

function getOpenAiApiKey() {
    try {
        const apiKey = process.env.OPENAI_API_KEY;
        console.log("ai.js getOpenAiApiKey() apiKey_________", apiKey)
        return apiKey
    } catch (err) {
        return err
    }
}

async function callOpenAiApi(prompt, temperature=0.4) {
    const url = 'https://api.openai.com/v1/chat/completions';
    const data = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: temperature,
        max_tokens: 2000,
    };

    var openAiApiKey = getOpenAiApiKey()

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openAiApiKey}`,
            },
        });
        const promptResponse = response.data.choices[0].message.content;
        console.log("callOpenAiApi()____________", promptResponse)
        return promptResponse;
    } 
    catch (error) {
        console.error('Error:', error);
    }
}

module.exports = {
    getOpenAiApiKey,
    callOpenAiApi
}