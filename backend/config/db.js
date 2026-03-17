import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb://food-del:802313@ac-dmxzsso-shard-00-00.vs1lnbw.mongodb.net:27017,ac-dmxzsso-shard-00-01.vs1lnbw.mongodb.net:27017,ac-dmxzsso-shard-00-02.vs1lnbw.mongodb.net:27017/food_del?ssl=true&replicaSet=atlas-123obz-shard-0&authSource=admin&appName=Cluster0').then(()=>console.log("DB connected"));
}

// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb://food-del:802313@ac-dmxzsso-shard-00-00.vs1lnbw.mongodb.net:27017,ac-dmxzsso-shard-00-01.vs1lnbw.mongodb.net:27017,ac-dmxzsso-shard-00-02.vs1lnbw.mongodb.net:27017/food_del?ssl=true&replicaSet=atlas-123obz-shard-0&authSource=admin&appName=Cluster0"
//     );
//     console.log("DB Connected");
//   } catch (error) {
//     console.log(error);
//   }
// };