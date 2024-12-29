import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        trim: true,
        default: 'https://www.iseu.bsu.by/en/wp-content/plugins/elementor/assets/images/placeholder.png'
    }
})

export default mongoose.model('Category', categorySchema);