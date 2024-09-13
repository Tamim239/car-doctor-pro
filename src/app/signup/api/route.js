import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const newUser = await request.json();

  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const exits =await userCollection.findOne({ email: newUser.email });
    if (exits) {
      return Response.json({ message: "user exits" }, { status: 304 });
    }
    const resp = await userCollection.insertOne(newUser);
    return Response.json({ message: "user created" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "something went wrong", error },
      { status: 500 }
    );
  }
};
