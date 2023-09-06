import Details from "../model/Details.js";

export const getData = async (req, res) => {
    try {
        const data = await Details.find({});
        res.send(data);
    } catch (e) {
        res.status(500).send(e.message);
    }
}

export const registerData =  async (req, res) => {
    try {
        const detail = { name: req.body.name, address: req.body.address };
        const newUser = new Details(detail);
        await newUser.save();
        return res.status(200).json({ msg: 'Details saved successfully' });
    } catch (e) {
        return res.status(500).json({ e: e.message });
    }
}