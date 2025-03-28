import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Remove the unique index on senderId in the messages collection if it exists
    const collections = await mongoose.connection.db.collections();
    const messagesCollection = collections.find(collection => collection.collectionName === 'messages');
    
    if (messagesCollection) {
      try {
        await messagesCollection.dropIndex('senderId_1');
        console.log('Successfully dropped the unique index on senderId');
      } catch (error) {
        // If the index doesn't exist or there's another error, just log it
        console.log('Note about index:', error.message);
      }
    }
    
  } catch (error) {
    console.log("Error: ", error.message);
    process.exit(1);
  }
};