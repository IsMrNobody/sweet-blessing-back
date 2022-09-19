const Local = require("../models/merchant")

const createMerchant = async (data) => {
    try {
        console.log(data);
        const merchant = new Local(data)
        await merchant.save()
        return merchant
    } catch (error) {
        console.log(error.message);
    }
}

const getMerchants = () => {
    const merchants = Local.find()
    return merchants
}

const getMerchantById = (id) => {
    const product = Local.findById(id)
    return product
}

const editMerchant = async (id, data) => {
    try {
        await Local.findByIdAndUpdate(id, data)
        const merchantAct = Local.findById(id)
        return merchantAct
    } catch (error) {
        console.log('no encontrado');
    }
}

const deleteMerchant = async (id) => {
    try {
        const merchant = await Local.findByIdAndDelete(id)
        if (!merchant) throw new Error('no existe')
        return merchant
    } catch (error) {
        return error.message
    }
}

module.exports = {
    createMerchant,
    getMerchants,
    getMerchantById,
    editMerchant,
    deleteMerchant,
  }