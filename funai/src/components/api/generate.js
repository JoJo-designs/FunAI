const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function getData(req, res) {
    const complete = await openai.createCompletion("text-curie-001", {
        // eslint-disable-next-line no-undef
        prompt: generatePrompt(req.body.prompt),
        temperature: 0.6,
    })
    res.status(200).json({result: complete.data.choices[0].text });
}
