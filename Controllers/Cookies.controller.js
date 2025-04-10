import Cookies from '../Model/Cookies.model.js';

const getCookies = async (req, res) => {
    try {
        const allCookies = await Cookies.find();
        res.status(200).json(allCookies);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'No Cookies Found' })
    }
}

const createCookies = async (req, res) => {
    const { name, price, quantity } = req.body;

    if (!name || !price || !quantity) {
        return res.status(400).json({ message: 'All the Datas are required' })
    }

    try {
        const newCookie = new Cookies({
            name,
            price,
            quantity
        });

        await newCookie.save();

        res.status(201).json(newCookie);
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const getCookieByID = async (req, res) => {
    const { customId } = req.params;

    try {
        const cookie = await Cookies.findOne({ customId });

        res.status(200).json(cookie);

        if (!cookie) {
            return res.status(400).json({ error: 'Cookie Not Found' })
        }

    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const updateCookie = async (req, res) => {
    const { customId } = req.params;
    const { name, price, quantity } = req.body;

    try {
        const cookie = await Cookies.findOneAndUpdate(
            { customId },
            { name, price, quantity },
            { new: true }
        );

        res.status(200).json(cookie)

        if (!cookie) {
            return res.status(400).json({ error: 'Cookie Not Found' })
        }

    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const deleteCookie = async (req, res) => {
    const { customId } = req.params;

    try {
        const cookie = await Cookies.findOneAndDelete({ customId });

        res.status(200).json(cookie)

        if (!cookie) {
            return res.status(400).json({ error: 'Cookie Not Found' })
        }

    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const deleteMany = async (req, res) => {
    try {
        await Cookies.deleteMany({});
        console.log('All datas cleared')
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export { getCookies, createCookies, getCookieByID, updateCookie, deleteCookie, deleteMany };