import mongoose from 'mongoose';

const Connection = async () => {

    const URL = 'mongodb+srv://flipkart:flipkart@cluster0.un5ygxa.mongodb.net/mydata?retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;