import mongoose from "mongoose";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const uri =
      "mongodb+srv://ecommerce:ecommerce123@cluster0.wr2m4yp.mongodb.net/?retryWrites=true&w=majority";
    return mongoose.connect(uri);
  }
}
